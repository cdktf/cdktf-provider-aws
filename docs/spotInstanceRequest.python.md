# `spotInstanceRequest` Submodule <a name="`spotInstanceRequest` Submodule" id="@cdktf/provider-aws.spotInstanceRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotInstanceRequest <a name="SpotInstanceRequest" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request aws_spot_instance_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequest(
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
  block_duration_minutes: typing.Union[int, float] = None,
  capacity_reservation_specification: SpotInstanceRequestCapacityReservationSpecification = None,
  cpu_core_count: typing.Union[int, float] = None,
  cpu_threads_per_core: typing.Union[int, float] = None,
  credit_specification: SpotInstanceRequestCreditSpecification = None,
  disable_api_stop: typing.Union[bool, IResolvable] = None,
  disable_api_termination: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[SpotInstanceRequestEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  enclave_options: SpotInstanceRequestEnclaveOptions = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[SpotInstanceRequestEphemeralBlockDevice]] = None,
  fetch_password_data: typing.Union[bool, IResolvable] = None,
  hibernation: typing.Union[bool, IResolvable] = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  iam_instance_profile: str = None,
  id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_interruption_behavior: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  key_name: str = None,
  launch_group: str = None,
  launch_template: SpotInstanceRequestLaunchTemplate = None,
  maintenance_options: SpotInstanceRequestMaintenanceOptions = None,
  metadata_options: SpotInstanceRequestMetadataOptions = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  network_interface: typing.Union[IResolvable, typing.List[SpotInstanceRequestNetworkInterface]] = None,
  placement_group: str = None,
  placement_partition_number: typing.Union[int, float] = None,
  private_dns_name_options: SpotInstanceRequestPrivateDnsNameOptions = None,
  private_ip: str = None,
  root_block_device: SpotInstanceRequestRootBlockDevice = None,
  secondary_private_ips: typing.List[str] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: typing.Union[bool, IResolvable] = None,
  spot_price: str = None,
  spot_type: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tenancy: str = None,
  timeouts: SpotInstanceRequestTimeouts = None,
  user_data: str = None,
  user_data_base64: str = None,
  user_data_replace_on_change: typing.Union[bool, IResolvable] = None,
  valid_from: str = None,
  valid_until: str = None,
  volume_tags: typing.Mapping[str] = None,
  vpc_security_group_ids: typing.List[str] = None,
  wait_for_fulfillment: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ami">ami</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuThreadsPerCore">cpu_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.fetchPasswordData">fetch_password_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hibernation">hibernation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchGroup">launch_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementGroup">placement_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementPartitionNumber">placement_partition_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.secondaryPrivateIps">secondary_private_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotType">spot_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataReplaceOnChange">user_data_replace_on_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validFrom">valid_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validUntil">valid_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.volumeTags">volume_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.waitForFulfillment">wait_for_fulfillment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ami"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}.

---

##### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.blockDurationMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.capacityReservationSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}.

---

##### `cpu_threads_per_core`<sup>Optional</sup> <a name="cpu_threads_per_core" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuThreadsPerCore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiStop"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}.

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}.

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}

---

##### `fetch_password_data`<sup>Optional</sup> <a name="fetch_password_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.fetchPasswordData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hibernation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}.

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}.

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.

---

##### `instance_interruption_behavior`<sup>Optional</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInterruptionBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6Addresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}.

---

##### `launch_group`<sup>Optional</sup> <a name="launch_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_template SpotInstanceRequest#launch_template}

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.maintenanceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.monitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface SpotInstanceRequest#network_interface}

---

##### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}.

---

##### `placement_partition_number`<sup>Optional</sup> <a name="placement_partition_number" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementPartitionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}.

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.rootBlockDevice"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}

---

##### `secondary_private_ips`<sup>Optional</sup> <a name="secondary_private_ips" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.secondaryPrivateIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}.

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.sourceDestCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}.

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}.

---

##### `spot_type`<sup>Optional</sup> <a name="spot_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#timeouts SpotInstanceRequest#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}.

---

##### `user_data_replace_on_change`<sup>Optional</sup> <a name="user_data_replace_on_change" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataReplaceOnChange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}.

---

##### `valid_from`<sup>Optional</sup> <a name="valid_from" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}.

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validUntil"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}.

---

##### `volume_tags`<sup>Optional</sup> <a name="volume_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.volumeTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.

---

##### `wait_for_fulfillment`<sup>Optional</sup> <a name="wait_for_fulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.waitForFulfillment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification">put_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification">put_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice">put_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions">put_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice">put_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions">put_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions">put_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice">put_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi">reset_ami</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes">reset_block_duration_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification">reset_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore">reset_cpu_threads_per_core</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification">reset_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop">reset_disable_api_stop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination">reset_disable_api_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice">reset_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions">reset_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice">reset_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData">reset_fetch_password_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation">reset_hibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn">reset_host_resource_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior">reset_instance_initiated_shutdown_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior">reset_instance_interruption_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup">reset_launch_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate">reset_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions">reset_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup">reset_placement_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber">reset_placement_partition_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions">reset_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice">reset_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps">reset_secondary_private_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck">reset_source_dest_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice">reset_spot_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType">reset_spot_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64">reset_user_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange">reset_user_data_replace_on_change</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom">reset_valid_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil">reset_valid_until</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags">reset_volume_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment">reset_wait_for_fulfillment</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_capacity_reservation_specification` <a name="put_capacity_reservation_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification"></a>

```python
def put_capacity_reservation_specification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget = None
) -> None
```

###### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification.parameter.capacityReservationPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}.

---

###### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification.parameter.capacityReservationTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}

---

##### `put_credit_specification` <a name="put_credit_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification"></a>

```python
def put_credit_specification(
  cpu_credits: str = None
) -> None
```

###### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification.parameter.cpuCredits"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}.

---

##### `put_ebs_block_device` <a name="put_ebs_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice"></a>

```python
def put_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[SpotInstanceRequestEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]

---

##### `put_enclave_options` <a name="put_enclave_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions"></a>

```python
def put_enclave_options(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}.

---

##### `put_ephemeral_block_device` <a name="put_ephemeral_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice"></a>

```python
def put_ephemeral_block_device(
  value: typing.Union[IResolvable, typing.List[SpotInstanceRequestEphemeralBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]

---

##### `put_launch_template` <a name="put_launch_template" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate"></a>

```python
def put_launch_template(
  id: str = None,
  name: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}.

---

##### `put_maintenance_options` <a name="put_maintenance_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions"></a>

```python
def put_maintenance_options(
  auto_recovery: str = None
) -> None
```

###### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions.parameter.autoRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}.

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}.

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}.

---

###### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.instanceMetadataTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}.

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[SpotInstanceRequestNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]

---

##### `put_private_dns_name_options` <a name="put_private_dns_name_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions"></a>

```python
def put_private_dns_name_options(
  enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record: typing.Union[bool, IResolvable] = None,
  hostname_type: str = None
) -> None
```

###### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions.parameter.enableResourceNameDnsAaaaRecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}.

---

###### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions.parameter.enableResourceNameDnsARecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}.

---

###### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions.parameter.hostnameType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}.

---

##### `put_root_block_device` <a name="put_root_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice"></a>

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

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.deleteOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}.

---

##### `reset_ami` <a name="reset_ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi"></a>

```python
def reset_ami() -> None
```

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_block_duration_minutes` <a name="reset_block_duration_minutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes"></a>

```python
def reset_block_duration_minutes() -> None
```

##### `reset_capacity_reservation_specification` <a name="reset_capacity_reservation_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification"></a>

```python
def reset_capacity_reservation_specification() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_cpu_threads_per_core` <a name="reset_cpu_threads_per_core" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore"></a>

```python
def reset_cpu_threads_per_core() -> None
```

##### `reset_credit_specification` <a name="reset_credit_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification"></a>

```python
def reset_credit_specification() -> None
```

##### `reset_disable_api_stop` <a name="reset_disable_api_stop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop"></a>

```python
def reset_disable_api_stop() -> None
```

##### `reset_disable_api_termination` <a name="reset_disable_api_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination"></a>

```python
def reset_disable_api_termination() -> None
```

##### `reset_ebs_block_device` <a name="reset_ebs_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice"></a>

```python
def reset_ebs_block_device() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_enclave_options` <a name="reset_enclave_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions"></a>

```python
def reset_enclave_options() -> None
```

##### `reset_ephemeral_block_device` <a name="reset_ephemeral_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice"></a>

```python
def reset_ephemeral_block_device() -> None
```

##### `reset_fetch_password_data` <a name="reset_fetch_password_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData"></a>

```python
def reset_fetch_password_data() -> None
```

##### `reset_hibernation` <a name="reset_hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation"></a>

```python
def reset_hibernation() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_host_resource_group_arn` <a name="reset_host_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn"></a>

```python
def reset_host_resource_group_arn() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_initiated_shutdown_behavior` <a name="reset_instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior"></a>

```python
def reset_instance_initiated_shutdown_behavior() -> None
```

##### `reset_instance_interruption_behavior` <a name="reset_instance_interruption_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior"></a>

```python
def reset_instance_interruption_behavior() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_launch_group` <a name="reset_launch_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup"></a>

```python
def reset_launch_group() -> None
```

##### `reset_launch_template` <a name="reset_launch_template" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate"></a>

```python
def reset_launch_template() -> None
```

##### `reset_maintenance_options` <a name="reset_maintenance_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions"></a>

```python
def reset_maintenance_options() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_placement_group` <a name="reset_placement_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup"></a>

```python
def reset_placement_group() -> None
```

##### `reset_placement_partition_number` <a name="reset_placement_partition_number" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber"></a>

```python
def reset_placement_partition_number() -> None
```

##### `reset_private_dns_name_options` <a name="reset_private_dns_name_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions"></a>

```python
def reset_private_dns_name_options() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_root_block_device` <a name="reset_root_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice"></a>

```python
def reset_root_block_device() -> None
```

##### `reset_secondary_private_ips` <a name="reset_secondary_private_ips" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps"></a>

```python
def reset_secondary_private_ips() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_source_dest_check` <a name="reset_source_dest_check" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck"></a>

```python
def reset_source_dest_check() -> None
```

##### `reset_spot_price` <a name="reset_spot_price" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice"></a>

```python
def reset_spot_price() -> None
```

##### `reset_spot_type` <a name="reset_spot_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType"></a>

```python
def reset_spot_type() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_user_data_base64` <a name="reset_user_data_base64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64"></a>

```python
def reset_user_data_base64() -> None
```

##### `reset_user_data_replace_on_change` <a name="reset_user_data_replace_on_change" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange"></a>

```python
def reset_user_data_replace_on_change() -> None
```

##### `reset_valid_from` <a name="reset_valid_from" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom"></a>

```python
def reset_valid_from() -> None
```

##### `reset_valid_until` <a name="reset_valid_until" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil"></a>

```python
def reset_valid_until() -> None
```

##### `reset_volume_tags` <a name="reset_volume_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags"></a>

```python
def reset_volume_tags() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

##### `reset_wait_for_fulfillment` <a name="reset_wait_for_fulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment"></a>

```python
def reset_wait_for_fulfillment() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice">ebs_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState">instance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData">password_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId">primary_network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns">private_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns">public_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus">spot_bid_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId">spot_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState">spot_request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput">ami_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput">block_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput">capacity_reservation_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput">cpu_threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput">credit_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput">disable_api_stop_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput">disable_api_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput">ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput">enclave_options_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput">ephemeral_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput">fetch_password_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput">hibernation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput">host_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput">instance_initiated_shutdown_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput">instance_interruption_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput">launch_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput">launch_template_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput">maintenance_options_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput">metadata_options_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput">monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput">placement_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput">placement_partition_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput">private_dns_name_options_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput">root_block_device_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput">secondary_private_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput">source_dest_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput">spot_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput">spot_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input">user_data_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput">user_data_replace_on_change_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput">valid_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput">valid_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput">volume_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput">wait_for_fulfillment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami">ami</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore">cpu_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData">fetch_password_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation">hibernation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup">launch_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup">placement_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber">placement_partition_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps">secondary_private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice">spot_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType">spot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange">user_data_replace_on_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom">valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil">valid_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags">volume_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment">wait_for_fulfillment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_reservation_specification`<sup>Required</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: SpotInstanceRequestCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification"></a>

```python
credit_specification: SpotInstanceRequestCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a>

---

##### `ebs_block_device`<sup>Required</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice"></a>

```python
ebs_block_device: SpotInstanceRequestEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a>

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions"></a>

```python
enclave_options: SpotInstanceRequestEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a>

---

##### `ephemeral_block_device`<sup>Required</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: SpotInstanceRequestEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a>

---

##### `instance_state`<sup>Required</sup> <a name="instance_state" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState"></a>

```python
instance_state: str
```

- *Type:* str

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate"></a>

```python
launch_template: SpotInstanceRequestLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a>

---

##### `maintenance_options`<sup>Required</sup> <a name="maintenance_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions"></a>

```python
maintenance_options: SpotInstanceRequestMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions"></a>

```python
metadata_options: SpotInstanceRequestMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface"></a>

```python
network_interface: SpotInstanceRequestNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a>

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `password_data`<sup>Required</sup> <a name="password_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData"></a>

```python
password_data: str
```

- *Type:* str

---

##### `primary_network_interface_id`<sup>Required</sup> <a name="primary_network_interface_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId"></a>

```python
primary_network_interface_id: str
```

- *Type:* str

---

##### `private_dns`<sup>Required</sup> <a name="private_dns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns"></a>

```python
private_dns: str
```

- *Type:* str

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: SpotInstanceRequestPrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a>

---

##### `public_dns`<sup>Required</sup> <a name="public_dns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `root_block_device`<sup>Required</sup> <a name="root_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice"></a>

```python
root_block_device: SpotInstanceRequestRootBlockDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a>

---

##### `spot_bid_status`<sup>Required</sup> <a name="spot_bid_status" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus"></a>

```python
spot_bid_status: str
```

- *Type:* str

---

##### `spot_instance_id`<sup>Required</sup> <a name="spot_instance_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId"></a>

```python
spot_instance_id: str
```

- *Type:* str

---

##### `spot_request_state`<sup>Required</sup> <a name="spot_request_state" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState"></a>

```python
spot_request_state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts"></a>

```python
timeouts: SpotInstanceRequestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a>

---

##### `ami_input`<sup>Optional</sup> <a name="ami_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput"></a>

```python
ami_input: str
```

- *Type:* str

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `block_duration_minutes_input`<sup>Optional</sup> <a name="block_duration_minutes_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput"></a>

```python
block_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_reservation_specification_input`<sup>Optional</sup> <a name="capacity_reservation_specification_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput"></a>

```python
capacity_reservation_specification_input: SpotInstanceRequestCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_threads_per_core_input`<sup>Optional</sup> <a name="cpu_threads_per_core_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput"></a>

```python
cpu_threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credit_specification_input`<sup>Optional</sup> <a name="credit_specification_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput"></a>

```python
credit_specification_input: SpotInstanceRequestCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `disable_api_stop_input`<sup>Optional</sup> <a name="disable_api_stop_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput"></a>

```python
disable_api_stop_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_api_termination_input`<sup>Optional</sup> <a name="disable_api_termination_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput"></a>

```python
disable_api_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_block_device_input`<sup>Optional</sup> <a name="ebs_block_device_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput"></a>

```python
ebs_block_device_input: typing.Union[IResolvable, typing.List[SpotInstanceRequestEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enclave_options_input`<sup>Optional</sup> <a name="enclave_options_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput"></a>

```python
enclave_options_input: SpotInstanceRequestEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `ephemeral_block_device_input`<sup>Optional</sup> <a name="ephemeral_block_device_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput"></a>

```python
ephemeral_block_device_input: typing.Union[IResolvable, typing.List[SpotInstanceRequestEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]

---

##### `fetch_password_data_input`<sup>Optional</sup> <a name="fetch_password_data_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput"></a>

```python
fetch_password_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hibernation_input`<sup>Optional</sup> <a name="hibernation_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput"></a>

```python
hibernation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `host_resource_group_arn_input`<sup>Optional</sup> <a name="host_resource_group_arn_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput"></a>

```python
host_resource_group_arn_input: str
```

- *Type:* str

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior_input`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput"></a>

```python
instance_initiated_shutdown_behavior_input: str
```

- *Type:* str

---

##### `instance_interruption_behavior_input`<sup>Optional</sup> <a name="instance_interruption_behavior_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput"></a>

```python
instance_interruption_behavior_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `launch_group_input`<sup>Optional</sup> <a name="launch_group_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput"></a>

```python
launch_group_input: str
```

- *Type:* str

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput"></a>

```python
launch_template_input: SpotInstanceRequestLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `maintenance_options_input`<sup>Optional</sup> <a name="maintenance_options_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput"></a>

```python
maintenance_options_input: SpotInstanceRequestMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput"></a>

```python
metadata_options_input: SpotInstanceRequestMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput"></a>

```python
monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[SpotInstanceRequestNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]

---

##### `placement_group_input`<sup>Optional</sup> <a name="placement_group_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput"></a>

```python
placement_group_input: str
```

- *Type:* str

---

##### `placement_partition_number_input`<sup>Optional</sup> <a name="placement_partition_number_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput"></a>

```python
placement_partition_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_dns_name_options_input`<sup>Optional</sup> <a name="private_dns_name_options_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput"></a>

```python
private_dns_name_options_input: SpotInstanceRequestPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `root_block_device_input`<sup>Optional</sup> <a name="root_block_device_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput"></a>

```python
root_block_device_input: SpotInstanceRequestRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `secondary_private_ips_input`<sup>Optional</sup> <a name="secondary_private_ips_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput"></a>

```python
secondary_private_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check_input`<sup>Optional</sup> <a name="source_dest_check_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput"></a>

```python
source_dest_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_price_input`<sup>Optional</sup> <a name="spot_price_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput"></a>

```python
spot_price_input: str
```

- *Type:* str

---

##### `spot_type_input`<sup>Optional</sup> <a name="spot_type_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput"></a>

```python
spot_type_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SpotInstanceRequestTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>, cdktf.IResolvable]

---

##### `user_data_base64_input`<sup>Optional</sup> <a name="user_data_base64_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input"></a>

```python
user_data_base64_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `user_data_replace_on_change_input`<sup>Optional</sup> <a name="user_data_replace_on_change_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput"></a>

```python
user_data_replace_on_change_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_from_input`<sup>Optional</sup> <a name="valid_from_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput"></a>

```python
valid_from_input: str
```

- *Type:* str

---

##### `valid_until_input`<sup>Optional</sup> <a name="valid_until_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput"></a>

```python
valid_until_input: str
```

- *Type:* str

---

##### `volume_tags_input`<sup>Optional</sup> <a name="volume_tags_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput"></a>

```python
volume_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_for_fulfillment_input`<sup>Optional</sup> <a name="wait_for_fulfillment_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput"></a>

```python
wait_for_fulfillment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami"></a>

```python
ami: str
```

- *Type:* str

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `block_duration_minutes`<sup>Required</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_threads_per_core`<sup>Required</sup> <a name="cpu_threads_per_core" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore"></a>

```python
cpu_threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_api_stop`<sup>Required</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop"></a>

```python
disable_api_stop: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_api_termination`<sup>Required</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination"></a>

```python
disable_api_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_password_data`<sup>Required</sup> <a name="fetch_password_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData"></a>

```python
fetch_password_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hibernation`<sup>Required</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation"></a>

```python
hibernation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior`<sup>Required</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

---

##### `instance_interruption_behavior`<sup>Required</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `launch_group`<sup>Required</sup> <a name="launch_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup"></a>

```python
launch_group: str
```

- *Type:* str

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `placement_group`<sup>Required</sup> <a name="placement_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

---

##### `placement_partition_number`<sup>Required</sup> <a name="placement_partition_number" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber"></a>

```python
placement_partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `secondary_private_ips`<sup>Required</sup> <a name="secondary_private_ips" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps"></a>

```python
secondary_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check`<sup>Required</sup> <a name="source_dest_check" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck"></a>

```python
source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_price`<sup>Required</sup> <a name="spot_price" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

---

##### `spot_type`<sup>Required</sup> <a name="spot_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType"></a>

```python
spot_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `user_data_base64`<sup>Required</sup> <a name="user_data_base64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

---

##### `user_data_replace_on_change`<sup>Required</sup> <a name="user_data_replace_on_change" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange"></a>

```python
user_data_replace_on_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_from`<sup>Required</sup> <a name="valid_from" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

---

##### `valid_until`<sup>Required</sup> <a name="valid_until" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

---

##### `volume_tags`<sup>Required</sup> <a name="volume_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags"></a>

```python
volume_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_for_fulfillment`<sup>Required</sup> <a name="wait_for_fulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment"></a>

```python
wait_for_fulfillment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpotInstanceRequestCapacityReservationSpecification <a name="SpotInstanceRequestCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}.

---

##### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}

---

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}. |

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}.

---

##### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}.

---

### SpotInstanceRequestConfig <a name="SpotInstanceRequestConfig" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestConfig(
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
  block_duration_minutes: typing.Union[int, float] = None,
  capacity_reservation_specification: SpotInstanceRequestCapacityReservationSpecification = None,
  cpu_core_count: typing.Union[int, float] = None,
  cpu_threads_per_core: typing.Union[int, float] = None,
  credit_specification: SpotInstanceRequestCreditSpecification = None,
  disable_api_stop: typing.Union[bool, IResolvable] = None,
  disable_api_termination: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[SpotInstanceRequestEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  enclave_options: SpotInstanceRequestEnclaveOptions = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[SpotInstanceRequestEphemeralBlockDevice]] = None,
  fetch_password_data: typing.Union[bool, IResolvable] = None,
  hibernation: typing.Union[bool, IResolvable] = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  iam_instance_profile: str = None,
  id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_interruption_behavior: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  key_name: str = None,
  launch_group: str = None,
  launch_template: SpotInstanceRequestLaunchTemplate = None,
  maintenance_options: SpotInstanceRequestMaintenanceOptions = None,
  metadata_options: SpotInstanceRequestMetadataOptions = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  network_interface: typing.Union[IResolvable, typing.List[SpotInstanceRequestNetworkInterface]] = None,
  placement_group: str = None,
  placement_partition_number: typing.Union[int, float] = None,
  private_dns_name_options: SpotInstanceRequestPrivateDnsNameOptions = None,
  private_ip: str = None,
  root_block_device: SpotInstanceRequestRootBlockDevice = None,
  secondary_private_ips: typing.List[str] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: typing.Union[bool, IResolvable] = None,
  spot_price: str = None,
  spot_type: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tenancy: str = None,
  timeouts: SpotInstanceRequestTimeouts = None,
  user_data: str = None,
  user_data_base64: str = None,
  user_data_replace_on_change: typing.Union[bool, IResolvable] = None,
  valid_from: str = None,
  valid_until: str = None,
  volume_tags: typing.Mapping[str] = None,
  vpc_security_group_ids: typing.List[str] = None,
  wait_for_fulfillment: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami">ami</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore">cpu_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData">fetch_password_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation">hibernation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup">launch_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup">placement_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber">placement_partition_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps">secondary_private_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType">spot_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange">user_data_replace_on_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom">valid_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil">valid_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags">volume_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment">wait_for_fulfillment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami"></a>

```python
ami: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}.

---

##### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: SpotInstanceRequestCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}.

---

##### `cpu_threads_per_core`<sup>Optional</sup> <a name="cpu_threads_per_core" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore"></a>

```python
cpu_threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification"></a>

```python
credit_specification: SpotInstanceRequestCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop"></a>

```python
disable_api_stop: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}.

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination"></a>

```python
disable_api_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice"></a>

```python
ebs_block_device: typing.Union[IResolvable, typing.List[SpotInstanceRequestEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}.

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions"></a>

```python
enclave_options: SpotInstanceRequestEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: typing.Union[IResolvable, typing.List[SpotInstanceRequestEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}

---

##### `fetch_password_data`<sup>Optional</sup> <a name="fetch_password_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData"></a>

```python
fetch_password_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation"></a>

```python
hibernation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}.

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}.

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.

---

##### `instance_interruption_behavior`<sup>Optional</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}.

---

##### `launch_group`<sup>Optional</sup> <a name="launch_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup"></a>

```python
launch_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate"></a>

```python
launch_template: SpotInstanceRequestLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_template SpotInstanceRequest#launch_template}

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions"></a>

```python
maintenance_options: SpotInstanceRequestMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions"></a>

```python
metadata_options: SpotInstanceRequestMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[SpotInstanceRequestNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface SpotInstanceRequest#network_interface}

---

##### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}.

---

##### `placement_partition_number`<sup>Optional</sup> <a name="placement_partition_number" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber"></a>

```python
placement_partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}.

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: SpotInstanceRequestPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice"></a>

```python
root_block_device: SpotInstanceRequestRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}

---

##### `secondary_private_ips`<sup>Optional</sup> <a name="secondary_private_ips" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps"></a>

```python
secondary_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}.

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck"></a>

```python
source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}.

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}.

---

##### `spot_type`<sup>Optional</sup> <a name="spot_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType"></a>

```python
spot_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts"></a>

```python
timeouts: SpotInstanceRequestTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#timeouts SpotInstanceRequest#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}.

---

##### `user_data_replace_on_change`<sup>Optional</sup> <a name="user_data_replace_on_change" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange"></a>

```python
user_data_replace_on_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}.

---

##### `valid_from`<sup>Optional</sup> <a name="valid_from" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}.

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}.

---

##### `volume_tags`<sup>Optional</sup> <a name="volume_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags"></a>

```python
volume_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.

---

##### `wait_for_fulfillment`<sup>Optional</sup> <a name="wait_for_fulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment"></a>

```python
wait_for_fulfillment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.

---

### SpotInstanceRequestCreditSpecification <a name="SpotInstanceRequestCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestCreditSpecification(
  cpu_credits: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}. |

---

##### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}.

---

### SpotInstanceRequestEbsBlockDevice <a name="SpotInstanceRequestEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEbsBlockDevice(
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
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestEnclaveOptions <a name="SpotInstanceRequestEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEnclaveOptions(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}.

---

### SpotInstanceRequestEphemeralBlockDevice <a name="SpotInstanceRequestEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice(
  device_name: str,
  no_device: typing.Union[bool, IResolvable] = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}.

---

### SpotInstanceRequestLaunchTemplate <a name="SpotInstanceRequestLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestLaunchTemplate(
  id: str = None,
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}.

---

### SpotInstanceRequestMaintenanceOptions <a name="SpotInstanceRequestMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestMaintenanceOptions(
  auto_recovery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}. |

---

##### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}.

---

### SpotInstanceRequestMetadataOptions <a name="SpotInstanceRequestMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestMetadataOptions(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}.

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}.

---

##### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}.

---

### SpotInstanceRequestNetworkInterface <a name="SpotInstanceRequestNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestNetworkInterface(
  device_index: typing.Union[int, float],
  network_interface_id: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  network_card_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}. |

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `network_card_index`<sup>Optional</sup> <a name="network_card_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}.

---

### SpotInstanceRequestPrivateDnsNameOptions <a name="SpotInstanceRequestPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions(
  enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record: typing.Union[bool, IResolvable] = None,
  hostname_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType">hostname_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}. |

---

##### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}.

---

##### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}.

---

##### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}.

---

### SpotInstanceRequestRootBlockDevice <a name="SpotInstanceRequestRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestRootBlockDevice(
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
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestTimeouts <a name="SpotInstanceRequestTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">reset_capacity_reservation_resource_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_capacity_reservation_resource_group_arn` <a name="reset_capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```python
def reset_capacity_reservation_resource_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacity_reservation_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn_input`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```python
capacity_reservation_resource_group_arn_input: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn`<sup>Required</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---


### SpotInstanceRequestCapacityReservationSpecificationOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">put_capacity_reservation_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">reset_capacity_reservation_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">reset_capacity_reservation_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_reservation_target` <a name="put_capacity_reservation_target" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```python
def put_capacity_reservation_target(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
) -> None
```

###### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}.

---

###### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}.

---

##### `reset_capacity_reservation_preference` <a name="reset_capacity_reservation_preference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```python
def reset_capacity_reservation_preference() -> None
```

##### `reset_capacity_reservation_target` <a name="reset_capacity_reservation_target" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```python
def reset_capacity_reservation_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacity_reservation_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacity_reservation_target_input</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_target`<sup>Required</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacity_reservation_preference_input`<sup>Optional</sup> <a name="capacity_reservation_preference_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```python
capacity_reservation_preference_input: str
```

- *Type:* str

---

##### `capacity_reservation_target_input`<sup>Optional</sup> <a name="capacity_reservation_target_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```python
capacity_reservation_target_input: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---


### SpotInstanceRequestCreditSpecificationOutputReference <a name="SpotInstanceRequestCreditSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits">reset_cpu_credits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_credits` <a name="reset_cpu_credits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits"></a>

```python
def reset_cpu_credits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput">cpu_credits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits_input`<sup>Optional</sup> <a name="cpu_credits_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```python
cpu_credits_input: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---


### SpotInstanceRequestEbsBlockDeviceList <a name="SpotInstanceRequestEbsBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotInstanceRequestEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotInstanceRequestEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>]]

---


### SpotInstanceRequestEbsBlockDeviceOutputReference <a name="SpotInstanceRequestEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotInstanceRequestEbsBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>, cdktf.IResolvable]

---


### SpotInstanceRequestEnclaveOptionsOutputReference <a name="SpotInstanceRequestEnclaveOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---


### SpotInstanceRequestEphemeralBlockDeviceList <a name="SpotInstanceRequestEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotInstanceRequestEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotInstanceRequestEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>]]

---


### SpotInstanceRequestEphemeralBlockDeviceOutputReference <a name="SpotInstanceRequestEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```python
no_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotInstanceRequestEphemeralBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>, cdktf.IResolvable]

---


### SpotInstanceRequestLaunchTemplateOutputReference <a name="SpotInstanceRequestLaunchTemplateOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---


### SpotInstanceRequestMaintenanceOptionsOutputReference <a name="SpotInstanceRequestMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery">reset_auto_recovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_recovery` <a name="reset_auto_recovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```python
def reset_auto_recovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput">auto_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_recovery_input`<sup>Optional</sup> <a name="auto_recovery_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```python
auto_recovery_input: str
```

- *Type:* str

---

##### `auto_recovery`<sup>Required</sup> <a name="auto_recovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---


### SpotInstanceRequestMetadataOptionsOutputReference <a name="SpotInstanceRequestMetadataOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags">reset_instance_metadata_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```

##### `reset_instance_metadata_tags` <a name="reset_instance_metadata_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```python
def reset_instance_metadata_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instance_metadata_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `instance_metadata_tags_input`<sup>Optional</sup> <a name="instance_metadata_tags_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```python
instance_metadata_tags_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---


### SpotInstanceRequestNetworkInterfaceList <a name="SpotInstanceRequestNetworkInterfaceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotInstanceRequestNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotInstanceRequestNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>]]

---


### SpotInstanceRequestNetworkInterfaceOutputReference <a name="SpotInstanceRequestNetworkInterfaceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex">reset_network_card_index</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_network_card_index` <a name="reset_network_card_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```python
def reset_network_card_index() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput">device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput">network_card_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```python
device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_card_index_input`<sup>Optional</sup> <a name="network_card_index_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```python
network_card_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_card_index`<sup>Required</sup> <a name="network_card_index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotInstanceRequestNetworkInterface, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>, cdktf.IResolvable]

---


### SpotInstanceRequestPrivateDnsNameOptionsOutputReference <a name="SpotInstanceRequestPrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">reset_enable_resource_name_dns_aaaa_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">reset_enable_resource_name_dns_a_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType">reset_hostname_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_resource_name_dns_aaaa_record` <a name="reset_enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```python
def reset_enable_resource_name_dns_aaaa_record() -> None
```

##### `reset_enable_resource_name_dns_a_record` <a name="reset_enable_resource_name_dns_a_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```python
def reset_enable_resource_name_dns_a_record() -> None
```

##### `reset_hostname_type` <a name="reset_hostname_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```python
def reset_hostname_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enable_resource_name_dns_aaaa_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enable_resource_name_dns_a_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostname_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```python
enable_resource_name_dns_aaaa_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```python
enable_resource_name_dns_a_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_type_input`<sup>Optional</sup> <a name="hostname_type_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```python
hostname_type_input: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---


### SpotInstanceRequestRootBlockDeviceOutputReference <a name="SpotInstanceRequestRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: SpotInstanceRequestRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---


### SpotInstanceRequestTimeoutsOutputReference <a name="SpotInstanceRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_instance_request

spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotInstanceRequestTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>, cdktf.IResolvable]

---



