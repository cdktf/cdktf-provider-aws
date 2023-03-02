# `instance` Submodule <a name="`instance` Submodule" id="@cdktf/provider-aws.instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Instance <a name="Instance" id="@cdktf/provider-aws.instance.Instance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance aws_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.Instance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.Instance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ami: str = None,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  capacity_reservation_specification: InstanceCapacityReservationSpecification = None,
  cpu_core_count: typing.Union[int, float] = None,
  cpu_threads_per_core: typing.Union[int, float] = None,
  credit_specification: InstanceCreditSpecification = None,
  disable_api_stop: typing.Union[bool, IResolvable] = None,
  disable_api_termination: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[InstanceEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  enclave_options: InstanceEnclaveOptions = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[InstanceEphemeralBlockDevice]] = None,
  fetch_password_data: typing.Union[bool, IResolvable] = None,
  hibernation: typing.Union[bool, IResolvable] = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  iam_instance_profile: str = None,
  id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  key_name: str = None,
  launch_template: InstanceLaunchTemplate = None,
  maintenance_options: InstanceMaintenanceOptions = None,
  metadata_options: InstanceMetadataOptions = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  network_interface: typing.Union[IResolvable, typing.List[InstanceNetworkInterface]] = None,
  placement_group: str = None,
  placement_partition_number: typing.Union[int, float] = None,
  private_dns_name_options: InstancePrivateDnsNameOptions = None,
  private_ip: str = None,
  root_block_device: InstanceRootBlockDevice = None,
  secondary_private_ips: typing.List[str] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tenancy: str = None,
  timeouts: InstanceTimeouts = None,
  user_data: str = None,
  user_data_base64: str = None,
  user_data_replace_on_change: typing.Union[bool, IResolvable] = None,
  volume_tags: typing.Mapping[str] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ami">ami</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuThreadsPerCore">cpu_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.fetchPasswordData">fetch_password_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.hibernation">hibernation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementGroup">placement_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementPartitionNumber">placement_partition_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.secondaryPrivateIps">secondary_private_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataReplaceOnChange">user_data_replace_on_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.volumeTags">volume_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ami"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}.

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.capacityReservationSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `cpu_threads_per_core`<sup>Optional</sup> <a name="cpu_threads_per_core" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuThreadsPerCore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#credit_specification Instance#credit_specification}

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiStop"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}.

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_block_device Instance#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enclave_options Instance#enclave_options}

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `fetch_password_data`<sup>Optional</sup> <a name="fetch_password_data" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.fetchPasswordData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.hibernation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}.

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}.

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6Addresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#launch_template Instance#launch_template}

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.maintenanceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#maintenance_options Instance#maintenance_options}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#metadata_options Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.monitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface Instance#network_interface}

---

##### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}.

---

##### `placement_partition_number`<sup>Optional</sup> <a name="placement_partition_number" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementPartitionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_dns_name_options Instance#private_dns_name_options}

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.rootBlockDevice"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#root_block_device Instance#root_block_device}

---

##### `secondary_private_ips`<sup>Optional</sup> <a name="secondary_private_ips" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.secondaryPrivateIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}.

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.sourceDestCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#timeouts Instance#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}.

---

##### `user_data_replace_on_change`<sup>Optional</sup> <a name="user_data_replace_on_change" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataReplaceOnChange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}.

---

##### `volume_tags`<sup>Optional</sup> <a name="volume_tags" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.volumeTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification">put_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putCreditSpecification">put_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEbsBlockDevice">put_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEnclaveOptions">put_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice">put_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putMaintenanceOptions">put_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions">put_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putRootBlockDevice">put_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAmi">reset_ami</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification">reset_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore">reset_cpu_threads_per_core</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCreditSpecification">reset_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetDisableApiStop">reset_disable_api_stop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetDisableApiTermination">reset_disable_api_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice">reset_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEnclaveOptions">reset_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice">reset_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetFetchPasswordData">reset_fetch_password_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHibernation">reset_hibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn">reset_host_resource_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior">reset_instance_initiated_shutdown_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetLaunchTemplate">reset_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions">reset_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPlacementGroup">reset_placement_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber">reset_placement_partition_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions">reset_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetRootBlockDevice">reset_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps">reset_secondary_private_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSourceDestCheck">reset_source_dest_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserDataBase64">reset_user_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange">reset_user_data_replace_on_change</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetVolumeTags">reset_volume_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.Instance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.instance.Instance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.instance.Instance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.instance.Instance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_capacity_reservation_specification` <a name="put_capacity_reservation_specification" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification"></a>

```python
def put_capacity_reservation_specification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: InstanceCapacityReservationSpecificationCapacityReservationTarget = None
) -> None
```

###### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification.parameter.capacityReservationPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}.

---

###### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification.parameter.capacityReservationTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_target Instance#capacity_reservation_target}

---

##### `put_credit_specification` <a name="put_credit_specification" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification"></a>

```python
def put_credit_specification(
  cpu_credits: str = None
) -> None
```

###### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification.parameter.cpuCredits"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}.

---

##### `put_ebs_block_device` <a name="put_ebs_block_device" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice"></a>

```python
def put_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[InstanceEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]

---

##### `put_enclave_options` <a name="put_enclave_options" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions"></a>

```python
def put_enclave_options(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}.

---

##### `put_ephemeral_block_device` <a name="put_ephemeral_block_device" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice"></a>

```python
def put_ephemeral_block_device(
  value: typing.Union[IResolvable, typing.List[InstanceEphemeralBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]

---

##### `put_launch_template` <a name="put_launch_template" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate"></a>

```python
def put_launch_template(
  id: str = None,
  name: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}.

---

##### `put_maintenance_options` <a name="put_maintenance_options" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions"></a>

```python
def put_maintenance_options(
  auto_recovery: str = None
) -> None
```

###### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions.parameter.autoRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}.

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}.

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}.

---

###### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.instanceMetadataTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}.

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[InstanceNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]

---

##### `put_private_dns_name_options` <a name="put_private_dns_name_options" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions"></a>

```python
def put_private_dns_name_options(
  enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record: typing.Union[bool, IResolvable] = None,
  hostname_type: str = None
) -> None
```

###### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions.parameter.enableResourceNameDnsAaaaRecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}.

---

###### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions.parameter.enableResourceNameDnsARecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}.

---

###### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions.parameter.hostnameType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}.

---

##### `put_root_block_device` <a name="put_root_block_device" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice"></a>

```python
def put_root_block_device(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.deleteOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.instance.Instance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.instance.Instance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.instance.Instance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.instance.Instance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}.

---

##### `reset_ami` <a name="reset_ami" id="@cdktf/provider-aws.instance.Instance.resetAmi"></a>

```python
def reset_ami() -> None
```

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.instance.Instance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_capacity_reservation_specification` <a name="reset_capacity_reservation_specification" id="@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification"></a>

```python
def reset_capacity_reservation_specification() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="@cdktf/provider-aws.instance.Instance.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_cpu_threads_per_core` <a name="reset_cpu_threads_per_core" id="@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore"></a>

```python
def reset_cpu_threads_per_core() -> None
```

##### `reset_credit_specification` <a name="reset_credit_specification" id="@cdktf/provider-aws.instance.Instance.resetCreditSpecification"></a>

```python
def reset_credit_specification() -> None
```

##### `reset_disable_api_stop` <a name="reset_disable_api_stop" id="@cdktf/provider-aws.instance.Instance.resetDisableApiStop"></a>

```python
def reset_disable_api_stop() -> None
```

##### `reset_disable_api_termination` <a name="reset_disable_api_termination" id="@cdktf/provider-aws.instance.Instance.resetDisableApiTermination"></a>

```python
def reset_disable_api_termination() -> None
```

##### `reset_ebs_block_device` <a name="reset_ebs_block_device" id="@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice"></a>

```python
def reset_ebs_block_device() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-aws.instance.Instance.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_enclave_options` <a name="reset_enclave_options" id="@cdktf/provider-aws.instance.Instance.resetEnclaveOptions"></a>

```python
def reset_enclave_options() -> None
```

##### `reset_ephemeral_block_device` <a name="reset_ephemeral_block_device" id="@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice"></a>

```python
def reset_ephemeral_block_device() -> None
```

##### `reset_fetch_password_data` <a name="reset_fetch_password_data" id="@cdktf/provider-aws.instance.Instance.resetFetchPasswordData"></a>

```python
def reset_fetch_password_data() -> None
```

##### `reset_hibernation` <a name="reset_hibernation" id="@cdktf/provider-aws.instance.Instance.resetHibernation"></a>

```python
def reset_hibernation() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="@cdktf/provider-aws.instance.Instance.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_host_resource_group_arn` <a name="reset_host_resource_group_arn" id="@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn"></a>

```python
def reset_host_resource_group_arn() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.instance.Instance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_initiated_shutdown_behavior` <a name="reset_instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior"></a>

```python
def reset_instance_initiated_shutdown_behavior() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.instance.Instance.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktf/provider-aws.instance.Instance.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-aws.instance.Instance.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_launch_template` <a name="reset_launch_template" id="@cdktf/provider-aws.instance.Instance.resetLaunchTemplate"></a>

```python
def reset_launch_template() -> None
```

##### `reset_maintenance_options` <a name="reset_maintenance_options" id="@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions"></a>

```python
def reset_maintenance_options() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktf/provider-aws.instance.Instance.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-aws.instance.Instance.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-aws.instance.Instance.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_placement_group` <a name="reset_placement_group" id="@cdktf/provider-aws.instance.Instance.resetPlacementGroup"></a>

```python
def reset_placement_group() -> None
```

##### `reset_placement_partition_number` <a name="reset_placement_partition_number" id="@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber"></a>

```python
def reset_placement_partition_number() -> None
```

##### `reset_private_dns_name_options` <a name="reset_private_dns_name_options" id="@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions"></a>

```python
def reset_private_dns_name_options() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-aws.instance.Instance.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_root_block_device` <a name="reset_root_block_device" id="@cdktf/provider-aws.instance.Instance.resetRootBlockDevice"></a>

```python
def reset_root_block_device() -> None
```

##### `reset_secondary_private_ips` <a name="reset_secondary_private_ips" id="@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps"></a>

```python
def reset_secondary_private_ips() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.instance.Instance.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_source_dest_check` <a name="reset_source_dest_check" id="@cdktf/provider-aws.instance.Instance.resetSourceDestCheck"></a>

```python
def reset_source_dest_check() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.instance.Instance.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.instance.Instance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.instance.Instance.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktf/provider-aws.instance.Instance.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.instance.Instance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-aws.instance.Instance.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_user_data_base64` <a name="reset_user_data_base64" id="@cdktf/provider-aws.instance.Instance.resetUserDataBase64"></a>

```python
def reset_user_data_base64() -> None
```

##### `reset_user_data_replace_on_change` <a name="reset_user_data_replace_on_change" id="@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange"></a>

```python
def reset_user_data_replace_on_change() -> None
```

##### `reset_volume_tags` <a name="reset_volume_tags" id="@cdktf/provider-aws.instance.Instance.resetVolumeTags"></a>

```python
def reset_volume_tags() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.instance.Instance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.Instance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.instance.Instance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.Instance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.instance.Instance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.Instance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice">ebs_block_device</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceState">instance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.passwordData">password_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId">primary_network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDns">private_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicDns">public_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.amiInput">ami_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput">capacity_reservation_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput">cpu_threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput">credit_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStopInput">disable_api_stop_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput">disable_api_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput">ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput">enclave_options_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput">ephemeral_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput">fetch_password_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernationInput">hibernation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput">host_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput">instance_initiated_shutdown_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplateInput">launch_template_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput">maintenance_options_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput">metadata_options_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoringInput">monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroupInput">placement_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput">placement_partition_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput">private_dns_name_options_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput">root_block_device_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput">secondary_private_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput">source_dest_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64Input">user_data_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput">user_data_replace_on_change_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTagsInput">volume_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ami">ami</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore">cpu_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordData">fetch_password_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernation">hibernation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroup">placement_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber">placement_partition_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps">secondary_private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange">user_data_replace_on_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTags">volume_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.instance.Instance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.instance.Instance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.Instance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.instance.Instance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.instance.Instance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.instance.Instance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.instance.Instance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.instance.Instance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.instance.Instance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.instance.Instance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.instance.Instance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.instance.Instance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_reservation_specification`<sup>Required</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: InstanceCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktf/provider-aws.instance.Instance.property.creditSpecification"></a>

```python
credit_specification: InstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a>

---

##### `ebs_block_device`<sup>Required</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice"></a>

```python
ebs_block_device: InstanceEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a>

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptions"></a>

```python
enclave_options: InstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a>

---

##### `ephemeral_block_device`<sup>Required</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: InstanceEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a>

---

##### `instance_state`<sup>Required</sup> <a name="instance_state" id="@cdktf/provider-aws.instance.Instance.property.instanceState"></a>

```python
instance_state: str
```

- *Type:* str

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.instance.Instance.property.launchTemplate"></a>

```python
launch_template: InstanceLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a>

---

##### `maintenance_options`<sup>Required</sup> <a name="maintenance_options" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptions"></a>

```python
maintenance_options: InstanceMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktf/provider-aws.instance.Instance.property.metadataOptions"></a>

```python
metadata_options: InstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-aws.instance.Instance.property.networkInterface"></a>

```python
network_interface: InstanceNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a>

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.instance.Instance.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `password_data`<sup>Required</sup> <a name="password_data" id="@cdktf/provider-aws.instance.Instance.property.passwordData"></a>

```python
password_data: str
```

- *Type:* str

---

##### `primary_network_interface_id`<sup>Required</sup> <a name="primary_network_interface_id" id="@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId"></a>

```python
primary_network_interface_id: str
```

- *Type:* str

---

##### `private_dns`<sup>Required</sup> <a name="private_dns" id="@cdktf/provider-aws.instance.Instance.property.privateDns"></a>

```python
private_dns: str
```

- *Type:* str

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: InstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `public_dns`<sup>Required</sup> <a name="public_dns" id="@cdktf/provider-aws.instance.Instance.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-aws.instance.Instance.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `root_block_device`<sup>Required</sup> <a name="root_block_device" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDevice"></a>

```python
root_block_device: InstanceRootBlockDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.instance.Instance.property.timeouts"></a>

```python
timeouts: InstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a>

---

##### `ami_input`<sup>Optional</sup> <a name="ami_input" id="@cdktf/provider-aws.instance.Instance.property.amiInput"></a>

```python
ami_input: str
```

- *Type:* str

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `capacity_reservation_specification_input`<sup>Optional</sup> <a name="capacity_reservation_specification_input" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput"></a>

```python
capacity_reservation_specification_input: InstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_threads_per_core_input`<sup>Optional</sup> <a name="cpu_threads_per_core_input" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput"></a>

```python
cpu_threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credit_specification_input`<sup>Optional</sup> <a name="credit_specification_input" id="@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput"></a>

```python
credit_specification_input: InstanceCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `disable_api_stop_input`<sup>Optional</sup> <a name="disable_api_stop_input" id="@cdktf/provider-aws.instance.Instance.property.disableApiStopInput"></a>

```python
disable_api_stop_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_api_termination_input`<sup>Optional</sup> <a name="disable_api_termination_input" id="@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput"></a>

```python
disable_api_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_block_device_input`<sup>Optional</sup> <a name="ebs_block_device_input" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput"></a>

```python
ebs_block_device_input: typing.Union[IResolvable, typing.List[InstanceEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enclave_options_input`<sup>Optional</sup> <a name="enclave_options_input" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput"></a>

```python
enclave_options_input: InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `ephemeral_block_device_input`<sup>Optional</sup> <a name="ephemeral_block_device_input" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput"></a>

```python
ephemeral_block_device_input: typing.Union[IResolvable, typing.List[InstanceEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]

---

##### `fetch_password_data_input`<sup>Optional</sup> <a name="fetch_password_data_input" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput"></a>

```python
fetch_password_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hibernation_input`<sup>Optional</sup> <a name="hibernation_input" id="@cdktf/provider-aws.instance.Instance.property.hibernationInput"></a>

```python
hibernation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktf/provider-aws.instance.Instance.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `host_resource_group_arn_input`<sup>Optional</sup> <a name="host_resource_group_arn_input" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput"></a>

```python
host_resource_group_arn_input: str
```

- *Type:* str

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.instance.Instance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior_input`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior_input" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```python
instance_initiated_shutdown_behavior_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.instance.Instance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-aws.instance.Instance.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktf/provider-aws.instance.Instance.property.launchTemplateInput"></a>

```python
launch_template_input: InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `maintenance_options_input`<sup>Optional</sup> <a name="maintenance_options_input" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput"></a>

```python
maintenance_options_input: InstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput"></a>

```python
metadata_options_input: InstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-aws.instance.Instance.property.monitoringInput"></a>

```python
monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[InstanceNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]

---

##### `placement_group_input`<sup>Optional</sup> <a name="placement_group_input" id="@cdktf/provider-aws.instance.Instance.property.placementGroupInput"></a>

```python
placement_group_input: str
```

- *Type:* str

---

##### `placement_partition_number_input`<sup>Optional</sup> <a name="placement_partition_number_input" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput"></a>

```python
placement_partition_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_dns_name_options_input`<sup>Optional</sup> <a name="private_dns_name_options_input" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput"></a>

```python
private_dns_name_options_input: InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-aws.instance.Instance.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `root_block_device_input`<sup>Optional</sup> <a name="root_block_device_input" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput"></a>

```python
root_block_device_input: InstanceRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `secondary_private_ips_input`<sup>Optional</sup> <a name="secondary_private_ips_input" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput"></a>

```python
secondary_private_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.instance.Instance.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check_input`<sup>Optional</sup> <a name="source_dest_check_input" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput"></a>

```python
source_dest_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.instance.Instance.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.instance.Instance.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.instance.Instance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktf/provider-aws.instance.Instance.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.instance.Instance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[InstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>, cdktf.IResolvable]

---

##### `user_data_base64_input`<sup>Optional</sup> <a name="user_data_base64_input" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64Input"></a>

```python
user_data_base64_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-aws.instance.Instance.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `user_data_replace_on_change_input`<sup>Optional</sup> <a name="user_data_replace_on_change_input" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput"></a>

```python
user_data_replace_on_change_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_tags_input`<sup>Optional</sup> <a name="volume_tags_input" id="@cdktf/provider-aws.instance.Instance.property.volumeTagsInput"></a>

```python
volume_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.instance.Instance.property.ami"></a>

```python
ami: str
```

- *Type:* str

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.instance.Instance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_threads_per_core`<sup>Required</sup> <a name="cpu_threads_per_core" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore"></a>

```python
cpu_threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_api_stop`<sup>Required</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.instance.Instance.property.disableApiStop"></a>

```python
disable_api_stop: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_api_termination`<sup>Required</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.instance.Instance.property.disableApiTermination"></a>

```python
disable_api_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_password_data`<sup>Required</sup> <a name="fetch_password_data" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordData"></a>

```python
fetch_password_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hibernation`<sup>Required</sup> <a name="hibernation" id="@cdktf/provider-aws.instance.Instance.property.hibernation"></a>

```python
hibernation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-aws.instance.Instance.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior`<sup>Required</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.instance.Instance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.instance.Instance.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-aws.instance.Instance.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.instance.Instance.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `placement_group`<sup>Required</sup> <a name="placement_group" id="@cdktf/provider-aws.instance.Instance.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

---

##### `placement_partition_number`<sup>Required</sup> <a name="placement_partition_number" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber"></a>

```python
placement_partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-aws.instance.Instance.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `secondary_private_ips`<sup>Required</sup> <a name="secondary_private_ips" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps"></a>

```python
secondary_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.instance.Instance.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check`<sup>Required</sup> <a name="source_dest_check" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheck"></a>

```python
source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.instance.Instance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.instance.Instance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.instance.Instance.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.instance.Instance.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-aws.instance.Instance.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `user_data_base64`<sup>Required</sup> <a name="user_data_base64" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

---

##### `user_data_replace_on_change`<sup>Required</sup> <a name="user_data_replace_on_change" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange"></a>

```python
user_data_replace_on_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_tags`<sup>Required</sup> <a name="volume_tags" id="@cdktf/provider-aws.instance.Instance.property.volumeTags"></a>

```python
volume_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.instance.Instance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceCapacityReservationSpecification <a name="InstanceCapacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceCapacityReservationSpecification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: InstanceCapacityReservationSpecificationCapacityReservationTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}.

---

##### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: InstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_target Instance#capacity_reservation_target}

---

### InstanceCapacityReservationSpecificationCapacityReservationTarget <a name="InstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceCapacityReservationSpecificationCapacityReservationTarget(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}. |

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}.

---

##### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}.

---

### InstanceConfig <a name="InstanceConfig" id="@cdktf/provider-aws.instance.InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ami: str = None,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  capacity_reservation_specification: InstanceCapacityReservationSpecification = None,
  cpu_core_count: typing.Union[int, float] = None,
  cpu_threads_per_core: typing.Union[int, float] = None,
  credit_specification: InstanceCreditSpecification = None,
  disable_api_stop: typing.Union[bool, IResolvable] = None,
  disable_api_termination: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[InstanceEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  enclave_options: InstanceEnclaveOptions = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[InstanceEphemeralBlockDevice]] = None,
  fetch_password_data: typing.Union[bool, IResolvable] = None,
  hibernation: typing.Union[bool, IResolvable] = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  iam_instance_profile: str = None,
  id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  key_name: str = None,
  launch_template: InstanceLaunchTemplate = None,
  maintenance_options: InstanceMaintenanceOptions = None,
  metadata_options: InstanceMetadataOptions = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  network_interface: typing.Union[IResolvable, typing.List[InstanceNetworkInterface]] = None,
  placement_group: str = None,
  placement_partition_number: typing.Union[int, float] = None,
  private_dns_name_options: InstancePrivateDnsNameOptions = None,
  private_ip: str = None,
  root_block_device: InstanceRootBlockDevice = None,
  secondary_private_ips: typing.List[str] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tenancy: str = None,
  timeouts: InstanceTimeouts = None,
  user_data: str = None,
  user_data_base64: str = None,
  user_data_replace_on_change: typing.Union[bool, IResolvable] = None,
  volume_tags: typing.Mapping[str] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ami">ami</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore">cpu_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData">fetch_password_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hibernation">hibernation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup">placement_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber">placement_partition_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps">secondary_private_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange">user_data_replace_on_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags">volume_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.instance.InstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.instance.InstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.instance.InstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.instance.InstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.instance.InstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.instance.InstanceConfig.property.ami"></a>

```python
ami: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}.

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: InstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `cpu_threads_per_core`<sup>Optional</sup> <a name="cpu_threads_per_core" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore"></a>

```python
cpu_threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification"></a>

```python
credit_specification: InstanceCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#credit_specification Instance#credit_specification}

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop"></a>

```python
disable_api_stop: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}.

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination"></a>

```python
disable_api_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice"></a>

```python
ebs_block_device: typing.Union[IResolvable, typing.List[InstanceEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_block_device Instance#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions"></a>

```python
enclave_options: InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enclave_options Instance#enclave_options}

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: typing.Union[IResolvable, typing.List[InstanceEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `fetch_password_data`<sup>Optional</sup> <a name="fetch_password_data" id="@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData"></a>

```python
fetch_password_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.instance.InstanceConfig.property.hibernation"></a>

```python
hibernation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}.

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}.

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.InstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.instance.InstanceConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate"></a>

```python
launch_template: InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#launch_template Instance#launch_template}

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions"></a>

```python
maintenance_options: InstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#maintenance_options Instance#maintenance_options}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions"></a>

```python
metadata_options: InstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#metadata_options Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.instance.InstanceConfig.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[InstanceNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface Instance#network_interface}

---

##### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}.

---

##### `placement_partition_number`<sup>Optional</sup> <a name="placement_partition_number" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber"></a>

```python
placement_partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_dns_name_options Instance#private_dns_name_options}

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice"></a>

```python
root_block_device: InstanceRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#root_block_device Instance#root_block_device}

---

##### `secondary_private_ips`<sup>Optional</sup> <a name="secondary_private_ips" id="@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps"></a>

```python
secondary_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}.

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck"></a>

```python
source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.instance.InstanceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.instance.InstanceConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.instance.InstanceConfig.property.timeouts"></a>

```python
timeouts: InstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#timeouts Instance#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.instance.InstanceConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}.

---

##### `user_data_replace_on_change`<sup>Optional</sup> <a name="user_data_replace_on_change" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange"></a>

```python
user_data_replace_on_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}.

---

##### `volume_tags`<sup>Optional</sup> <a name="volume_tags" id="@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags"></a>

```python
volume_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

### InstanceCreditSpecification <a name="InstanceCreditSpecification" id="@cdktf/provider-aws.instance.InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceCreditSpecification(
  cpu_credits: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}. |

---

##### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}.

---

### InstanceEbsBlockDevice <a name="InstanceEbsBlockDevice" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEbsBlockDevice(
  device_name: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  tags: typing.Mapping[str] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceEnclaveOptions <a name="InstanceEnclaveOptions" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEnclaveOptions(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}.

---

### InstanceEphemeralBlockDevice <a name="InstanceEphemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEphemeralBlockDevice(
  device_name: str,
  no_device: typing.Union[bool, IResolvable] = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}.

---

### InstanceLaunchTemplate <a name="InstanceLaunchTemplate" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceLaunchTemplate(
  id: str = None,
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}.

---

### InstanceMaintenanceOptions <a name="InstanceMaintenanceOptions" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceMaintenanceOptions(
  auto_recovery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}. |

---

##### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}.

---

### InstanceMetadataOptions <a name="InstanceMetadataOptions" id="@cdktf/provider-aws.instance.InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceMetadataOptions(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}.

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}.

---

##### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}.

---

### InstanceNetworkInterface <a name="InstanceNetworkInterface" id="@cdktf/provider-aws.instance.InstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceNetworkInterface(
  device_index: typing.Union[int, float],
  network_interface_id: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  network_card_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}. |

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `network_card_index`<sup>Optional</sup> <a name="network_card_index" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}.

---

### InstancePrivateDnsNameOptions <a name="InstancePrivateDnsNameOptions" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstancePrivateDnsNameOptions(
  enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record: typing.Union[bool, IResolvable] = None,
  hostname_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType">hostname_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}. |

---

##### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}.

---

##### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}.

---

##### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}.

---

### InstanceRootBlockDevice <a name="InstanceRootBlockDevice" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceRootBlockDevice(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceTimeouts <a name="InstanceTimeouts" id="@cdktf/provider-aws.instance.InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">reset_capacity_reservation_resource_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_capacity_reservation_resource_group_arn` <a name="reset_capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```python
def reset_capacity_reservation_resource_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacity_reservation_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn_input`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn_input" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```python
capacity_reservation_resource_group_arn_input: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn`<sup>Required</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```python
internal_value: InstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### InstanceCapacityReservationSpecificationOutputReference <a name="InstanceCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceCapacityReservationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">put_capacity_reservation_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">reset_capacity_reservation_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">reset_capacity_reservation_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_reservation_target` <a name="put_capacity_reservation_target" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```python
def put_capacity_reservation_target(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
) -> None
```

###### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}.

---

###### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}.

---

##### `reset_capacity_reservation_preference` <a name="reset_capacity_reservation_preference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```python
def reset_capacity_reservation_preference() -> None
```

##### `reset_capacity_reservation_target` <a name="reset_capacity_reservation_target" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```python
def reset_capacity_reservation_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacity_reservation_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacity_reservation_target_input</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_target`<sup>Required</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacity_reservation_preference_input`<sup>Optional</sup> <a name="capacity_reservation_preference_input" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```python
capacity_reservation_preference_input: str
```

- *Type:* str

---

##### `capacity_reservation_target_input`<sup>Optional</sup> <a name="capacity_reservation_target_input" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```python
capacity_reservation_target_input: InstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: InstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---


### InstanceCreditSpecificationOutputReference <a name="InstanceCreditSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits">reset_cpu_credits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_credits` <a name="reset_cpu_credits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```python
def reset_cpu_credits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpu_credits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits_input`<sup>Optional</sup> <a name="cpu_credits_input" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```python
cpu_credits_input: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: InstanceCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---


### InstanceEbsBlockDeviceList <a name="InstanceEbsBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InstanceEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InstanceEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>]]

---


### InstanceEbsBlockDeviceOutputReference <a name="InstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[InstanceEbsBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>, cdktf.IResolvable]

---


### InstanceEnclaveOptionsOutputReference <a name="InstanceEnclaveOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---


### InstanceEphemeralBlockDeviceList <a name="InstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEphemeralBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InstanceEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InstanceEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>]]

---


### InstanceEphemeralBlockDeviceOutputReference <a name="InstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceEphemeralBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```python
no_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[InstanceEphemeralBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>, cdktf.IResolvable]

---


### InstanceLaunchTemplateOutputReference <a name="InstanceLaunchTemplateOutputReference" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---


### InstanceMaintenanceOptionsOutputReference <a name="InstanceMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceMaintenanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery">reset_auto_recovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_recovery` <a name="reset_auto_recovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```python
def reset_auto_recovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">auto_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_recovery_input`<sup>Optional</sup> <a name="auto_recovery_input" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```python
auto_recovery_input: str
```

- *Type:* str

---

##### `auto_recovery`<sup>Required</sup> <a name="auto_recovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: InstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---


### InstanceMetadataOptionsOutputReference <a name="InstanceMetadataOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">reset_instance_metadata_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```

##### `reset_instance_metadata_tags` <a name="reset_instance_metadata_tags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```python
def reset_instance_metadata_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instance_metadata_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `instance_metadata_tags_input`<sup>Optional</sup> <a name="instance_metadata_tags_input" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```python
instance_metadata_tags_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: InstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---


### InstanceNetworkInterfaceList <a name="InstanceNetworkInterfaceList" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InstanceNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InstanceNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>]]

---


### InstanceNetworkInterfaceOutputReference <a name="InstanceNetworkInterfaceOutputReference" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex">reset_network_card_index</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_network_card_index` <a name="reset_network_card_index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```python
def reset_network_card_index() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput">device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput">network_card_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```python
device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_card_index_input`<sup>Optional</sup> <a name="network_card_index_input" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```python
network_card_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_card_index`<sup>Required</sup> <a name="network_card_index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[InstanceNetworkInterface, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>, cdktf.IResolvable]

---


### InstancePrivateDnsNameOptionsOutputReference <a name="InstancePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstancePrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">reset_enable_resource_name_dns_aaaa_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">reset_enable_resource_name_dns_a_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">reset_hostname_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_resource_name_dns_aaaa_record` <a name="reset_enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```python
def reset_enable_resource_name_dns_aaaa_record() -> None
```

##### `reset_enable_resource_name_dns_a_record` <a name="reset_enable_resource_name_dns_a_record" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```python
def reset_enable_resource_name_dns_a_record() -> None
```

##### `reset_hostname_type` <a name="reset_hostname_type" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```python
def reset_hostname_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enable_resource_name_dns_aaaa_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enable_resource_name_dns_a_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostname_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_input" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```python
enable_resource_name_dns_aaaa_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_input" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```python
enable_resource_name_dns_a_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_type_input`<sup>Optional</sup> <a name="hostname_type_input" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```python
hostname_type_input: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---


### InstanceRootBlockDeviceOutputReference <a name="InstanceRootBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceRootBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: InstanceRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---


### InstanceTimeoutsOutputReference <a name="InstanceTimeoutsOutputReference" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import instance

instance.InstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[InstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>, cdktf.IResolvable]

---



