# `instance` Submodule <a name="`instance` Submodule" id="@cdktf/provider-aws.instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Instance <a name="Instance" id="@cdktf/provider-aws.instance.Instance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance aws_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.Instance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.Instance;

Instance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .ami(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean)
//  .associatePublicIpAddress(IResolvable)
//  .availabilityZone(java.lang.String)
//  .capacityReservationSpecification(InstanceCapacityReservationSpecification)
//  .cpuCoreCount(java.lang.Number)
//  .cpuThreadsPerCore(java.lang.Number)
//  .creditSpecification(InstanceCreditSpecification)
//  .disableApiStop(java.lang.Boolean)
//  .disableApiStop(IResolvable)
//  .disableApiTermination(java.lang.Boolean)
//  .disableApiTermination(IResolvable)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<InstanceEbsBlockDevice>)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .enclaveOptions(InstanceEnclaveOptions)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<InstanceEphemeralBlockDevice>)
//  .fetchPasswordData(java.lang.Boolean)
//  .fetchPasswordData(IResolvable)
//  .hibernation(java.lang.Boolean)
//  .hibernation(IResolvable)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .instanceInitiatedShutdownBehavior(java.lang.String)
//  .instanceType(java.lang.String)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(java.util.List<java.lang.String>)
//  .keyName(java.lang.String)
//  .launchTemplate(InstanceLaunchTemplate)
//  .maintenanceOptions(InstanceMaintenanceOptions)
//  .metadataOptions(InstanceMetadataOptions)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<InstanceNetworkInterface>)
//  .placementGroup(java.lang.String)
//  .placementPartitionNumber(java.lang.Number)
//  .privateDnsNameOptions(InstancePrivateDnsNameOptions)
//  .privateIp(java.lang.String)
//  .rootBlockDevice(InstanceRootBlockDevice)
//  .secondaryPrivateIps(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean)
//  .sourceDestCheck(IResolvable)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tenancy(java.lang.String)
//  .timeouts(InstanceTimeouts)
//  .userData(java.lang.String)
//  .userDataBase64(java.lang.String)
//  .userDataReplaceOnChange(java.lang.Boolean)
//  .userDataReplaceOnChange(IResolvable)
//  .volumeTags(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ami">ami</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiStop">disableApiStop</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.fetchPasswordData">fetchPasswordData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.hibernation">hibernation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostId">hostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementPartitionNumber">placementPartitionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.volumeTags">volumeTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ami"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.capacityReservationSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `cpuThreadsPerCore`<sup>Optional</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.cpuThreadsPerCore"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#credit_specification Instance#credit_specification}

---

##### `disableApiStop`<sup>Optional</sup> <a name="disableApiStop" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiStop"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.disableApiTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_block_device Instance#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ebsOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enclave_options Instance#enclave_options}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `fetchPasswordData`<sup>Optional</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.fetchPasswordData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.hibernation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.hostResourceGroupArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.ipv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#launch_template Instance#launch_template}

---

##### `maintenanceOptions`<sup>Optional</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.maintenanceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#maintenance_options Instance#maintenance_options}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#metadata_options Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.monitoring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface Instance#network_interface}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}.

---

##### `placementPartitionNumber`<sup>Optional</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.placementPartitionNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_dns_name_options Instance#private_dns_name_options}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.rootBlockDevice"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#root_block_device Instance#root_block_device}

---

##### `secondaryPrivateIps`<sup>Optional</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.secondaryPrivateIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.sourceDestCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.tenancy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#timeouts Instance#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataBase64"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}.

---

##### `userDataReplaceOnChange`<sup>Optional</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.userDataReplaceOnChange"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}.

---

##### `volumeTags`<sup>Optional</sup> <a name="volumeTags" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.volumeTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification">putCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putMaintenanceOptions">putMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions">putPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAmi">resetAmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification">resetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore">resetCpuThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetDisableApiStop">resetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetFetchPasswordData">resetFetchPasswordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHibernation">resetHibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions">resetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber">resetPlacementPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions">resetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps">resetSecondaryPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserDataBase64">resetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange">resetUserDataReplaceOnChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetVolumeTags">resetVolumeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.Instance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.instance.Instance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.instance.Instance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.instance.Instance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacityReservationSpecification` <a name="putCapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification"></a>

```java
public void putCapacityReservationSpecification(InstanceCapacityReservationSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification"></a>

```java
public void putCreditSpecification(InstanceCreditSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice"></a>

```java
public void putEbsBlockDevice(IResolvable OR java.util.List<InstanceEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>>

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions"></a>

```java
public void putEnclaveOptions(InstanceEnclaveOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice"></a>

```java
public void putEphemeralBlockDevice(IResolvable OR java.util.List<InstanceEphemeralBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(InstanceLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `putMaintenanceOptions` <a name="putMaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions"></a>

```java
public void putMaintenanceOptions(InstanceMaintenanceOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions"></a>

```java
public void putMetadataOptions(InstanceMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<InstanceNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>>

---

##### `putPrivateDnsNameOptions` <a name="putPrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions"></a>

```java
public void putPrivateDnsNameOptions(InstancePrivateDnsNameOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice"></a>

```java
public void putRootBlockDevice(InstanceRootBlockDevice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.instance.Instance.putTimeouts"></a>

```java
public void putTimeouts(InstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

---

##### `resetAmi` <a name="resetAmi" id="@cdktf/provider-aws.instance.Instance.resetAmi"></a>

```java
public void resetAmi()
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.instance.Instance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetCapacityReservationSpecification` <a name="resetCapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification"></a>

```java
public void resetCapacityReservationSpecification()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktf/provider-aws.instance.Instance.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetCpuThreadsPerCore` <a name="resetCpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore"></a>

```java
public void resetCpuThreadsPerCore()
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktf/provider-aws.instance.Instance.resetCreditSpecification"></a>

```java
public void resetCreditSpecification()
```

##### `resetDisableApiStop` <a name="resetDisableApiStop" id="@cdktf/provider-aws.instance.Instance.resetDisableApiStop"></a>

```java
public void resetDisableApiStop()
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktf/provider-aws.instance.Instance.resetDisableApiTermination"></a>

```java
public void resetDisableApiTermination()
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice"></a>

```java
public void resetEbsBlockDevice()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-aws.instance.Instance.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktf/provider-aws.instance.Instance.resetEnclaveOptions"></a>

```java
public void resetEnclaveOptions()
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice"></a>

```java
public void resetEphemeralBlockDevice()
```

##### `resetFetchPasswordData` <a name="resetFetchPasswordData" id="@cdktf/provider-aws.instance.Instance.resetFetchPasswordData"></a>

```java
public void resetFetchPasswordData()
```

##### `resetHibernation` <a name="resetHibernation" id="@cdktf/provider-aws.instance.Instance.resetHibernation"></a>

```java
public void resetHibernation()
```

##### `resetHostId` <a name="resetHostId" id="@cdktf/provider-aws.instance.Instance.resetHostId"></a>

```java
public void resetHostId()
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn"></a>

```java
public void resetHostResourceGroupArn()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.instance.Instance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior"></a>

```java
public void resetInstanceInitiatedShutdownBehavior()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.instance.Instance.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount"></a>

```java
public void resetIpv6AddressCount()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/provider-aws.instance.Instance.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.instance.Instance.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/provider-aws.instance.Instance.resetLaunchTemplate"></a>

```java
public void resetLaunchTemplate()
```

##### `resetMaintenanceOptions` <a name="resetMaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions"></a>

```java
public void resetMaintenanceOptions()
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/provider-aws.instance.Instance.resetMetadataOptions"></a>

```java
public void resetMetadataOptions()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-aws.instance.Instance.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-aws.instance.Instance.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/provider-aws.instance.Instance.resetPlacementGroup"></a>

```java
public void resetPlacementGroup()
```

##### `resetPlacementPartitionNumber` <a name="resetPlacementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber"></a>

```java
public void resetPlacementPartitionNumber()
```

##### `resetPrivateDnsNameOptions` <a name="resetPrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions"></a>

```java
public void resetPrivateDnsNameOptions()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-aws.instance.Instance.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetRootBlockDevice"></a>

```java
public void resetRootBlockDevice()
```

##### `resetSecondaryPrivateIps` <a name="resetSecondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps"></a>

```java
public void resetSecondaryPrivateIps()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.instance.Instance.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktf/provider-aws.instance.Instance.resetSourceDestCheck"></a>

```java
public void resetSourceDestCheck()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.instance.Instance.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.instance.Instance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.instance.Instance.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/provider-aws.instance.Instance.resetTenancy"></a>

```java
public void resetTenancy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.instance.Instance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-aws.instance.Instance.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetUserDataBase64` <a name="resetUserDataBase64" id="@cdktf/provider-aws.instance.Instance.resetUserDataBase64"></a>

```java
public void resetUserDataBase64()
```

##### `resetUserDataReplaceOnChange` <a name="resetUserDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange"></a>

```java
public void resetUserDataReplaceOnChange()
```

##### `resetVolumeTags` <a name="resetVolumeTags" id="@cdktf/provider-aws.instance.Instance.resetVolumeTags"></a>

```java
public void resetVolumeTags()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.instance.Instance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.Instance;

Instance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.instance.Instance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.Instance;

Instance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.instance.Instance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.Instance;

Instance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceState">instanceState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.passwordData">passwordData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDns">privateDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicDns">publicDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.amiInput">amiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput">capacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput">cpuThreadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStopInput">disableApiStopInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput">fetchPasswordDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernationInput">hibernationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostIdInput">hostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput">maintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoringInput">monitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroupInput">placementGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput">placementPartitionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput">privateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput">secondaryPrivateIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancyInput">tenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64Input">userDataBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput">userDataReplaceOnChangeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTagsInput">volumeTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ami">ami</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStop">disableApiStop</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordData">fetchPasswordData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernation">hibernation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTags">volumeTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.instance.Instance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.instance.Instance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.Instance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.instance.Instance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.instance.Instance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.instance.Instance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.instance.Instance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.instance.Instance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.instance.Instance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.instance.Instance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.instance.Instance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.instance.Instance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification"></a>

```java
public InstanceCapacityReservationSpecificationOutputReference getCapacityReservationSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktf/provider-aws.instance.Instance.property.creditSpecification"></a>

```java
public InstanceCreditSpecificationOutputReference getCreditSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a>

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice"></a>

```java
public InstanceEbsBlockDeviceList getEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptions"></a>

```java
public InstanceEnclaveOptionsOutputReference getEnclaveOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice"></a>

```java
public InstanceEphemeralBlockDeviceList getEphemeralBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a>

---

##### `instanceState`<sup>Required</sup> <a name="instanceState" id="@cdktf/provider-aws.instance.Instance.property.instanceState"></a>

```java
public java.lang.String getInstanceState();
```

- *Type:* java.lang.String

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.instance.Instance.property.launchTemplate"></a>

```java
public InstanceLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptions"></a>

```java
public InstanceMaintenanceOptionsOutputReference getMaintenanceOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-aws.instance.Instance.property.metadataOptions"></a>

```java
public InstanceMetadataOptionsOutputReference getMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-aws.instance.Instance.property.networkInterface"></a>

```java
public InstanceNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.instance.Instance.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `passwordData`<sup>Required</sup> <a name="passwordData" id="@cdktf/provider-aws.instance.Instance.property.passwordData"></a>

```java
public java.lang.String getPasswordData();
```

- *Type:* java.lang.String

---

##### `primaryNetworkInterfaceId`<sup>Required</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId"></a>

```java
public java.lang.String getPrimaryNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateDns`<sup>Required</sup> <a name="privateDns" id="@cdktf/provider-aws.instance.Instance.property.privateDns"></a>

```java
public java.lang.String getPrivateDns();
```

- *Type:* java.lang.String

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions"></a>

```java
public InstancePrivateDnsNameOptionsOutputReference getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `publicDns`<sup>Required</sup> <a name="publicDns" id="@cdktf/provider-aws.instance.Instance.property.publicDns"></a>

```java
public java.lang.String getPublicDns();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-aws.instance.Instance.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDevice"></a>

```java
public InstanceRootBlockDeviceOutputReference getRootBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.instance.Instance.property.timeouts"></a>

```java
public InstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a>

---

##### `amiInput`<sup>Optional</sup> <a name="amiInput" id="@cdktf/provider-aws.instance.Instance.property.amiInput"></a>

```java
public java.lang.String getAmiInput();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Object getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationSpecificationInput`<sup>Optional</sup> <a name="capacityReservationSpecificationInput" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput"></a>

```java
public InstanceCapacityReservationSpecification getCapacityReservationSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuThreadsPerCoreInput`<sup>Optional</sup> <a name="cpuThreadsPerCoreInput" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput"></a>

```java
public java.lang.Number getCpuThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput"></a>

```java
public InstanceCreditSpecification getCreditSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `disableApiStopInput`<sup>Optional</sup> <a name="disableApiStopInput" id="@cdktf/provider-aws.instance.Instance.property.disableApiStopInput"></a>

```java
public java.lang.Object getDisableApiStopInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput"></a>

```java
public java.lang.Object getDisableApiTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput"></a>

```java
public java.lang.Object getEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>>

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput"></a>

```java
public java.lang.Object getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput"></a>

```java
public InstanceEnclaveOptions getEnclaveOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput"></a>

```java
public java.lang.Object getEphemeralBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>>

---

##### `fetchPasswordDataInput`<sup>Optional</sup> <a name="fetchPasswordDataInput" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput"></a>

```java
public java.lang.Object getFetchPasswordDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hibernationInput`<sup>Optional</sup> <a name="hibernationInput" id="@cdktf/provider-aws.instance.Instance.property.hibernationInput"></a>

```java
public java.lang.Object getHibernationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-aws.instance.Instance.property.hostIdInput"></a>

```java
public java.lang.String getHostIdInput();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput"></a>

```java
public java.lang.String getHostResourceGroupArnInput();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.instance.Instance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehaviorInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.instance.Instance.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput"></a>

```java
public java.lang.Number getIpv6AddressCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.instance.Instance.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.instance.Instance.property.launchTemplateInput"></a>

```java
public InstanceLaunchTemplate getLaunchTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `maintenanceOptionsInput`<sup>Optional</sup> <a name="maintenanceOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput"></a>

```java
public InstanceMaintenanceOptions getMaintenanceOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput"></a>

```java
public InstanceMetadataOptions getMetadataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-aws.instance.Instance.property.monitoringInput"></a>

```java
public java.lang.Object getMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>>

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/provider-aws.instance.Instance.property.placementGroupInput"></a>

```java
public java.lang.String getPlacementGroupInput();
```

- *Type:* java.lang.String

---

##### `placementPartitionNumberInput`<sup>Optional</sup> <a name="placementPartitionNumberInput" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput"></a>

```java
public java.lang.Number getPlacementPartitionNumberInput();
```

- *Type:* java.lang.Number

---

##### `privateDnsNameOptionsInput`<sup>Optional</sup> <a name="privateDnsNameOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput"></a>

```java
public InstancePrivateDnsNameOptions getPrivateDnsNameOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-aws.instance.Instance.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput"></a>

```java
public InstanceRootBlockDevice getRootBlockDeviceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `secondaryPrivateIpsInput`<sup>Optional</sup> <a name="secondaryPrivateIpsInput" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.instance.Instance.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput"></a>

```java
public java.lang.Object getSourceDestCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.instance.Instance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.instance.Instance.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.instance.Instance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/provider-aws.instance.Instance.property.tenancyInput"></a>

```java
public java.lang.String getTenancyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.instance.Instance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userDataBase64Input`<sup>Optional</sup> <a name="userDataBase64Input" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64Input"></a>

```java
public java.lang.String getUserDataBase64Input();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-aws.instance.Instance.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `userDataReplaceOnChangeInput`<sup>Optional</sup> <a name="userDataReplaceOnChangeInput" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput"></a>

```java
public java.lang.Object getUserDataReplaceOnChangeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeTagsInput`<sup>Optional</sup> <a name="volumeTagsInput" id="@cdktf/provider-aws.instance.Instance.property.volumeTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.instance.Instance.property.ami"></a>

```java
public java.lang.String getAmi();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.instance.Instance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `cpuThreadsPerCore`<sup>Required</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore"></a>

```java
public java.lang.Number getCpuThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktf/provider-aws.instance.Instance.property.disableApiStop"></a>

```java
public java.lang.Object getDisableApiStop();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.instance.Instance.property.disableApiTermination"></a>

```java
public java.lang.Object getDisableApiTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchPasswordData`<sup>Required</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordData"></a>

```java
public java.lang.Object getFetchPasswordData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hibernation`<sup>Required</sup> <a name="hibernation" id="@cdktf/provider-aws.instance.Instance.property.hibernation"></a>

```java
public java.lang.Object getHibernation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-aws.instance.Instance.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.instance.Instance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.instance.Instance.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.instance.Instance.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.instance.Instance.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/provider-aws.instance.Instance.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

---

##### `placementPartitionNumber`<sup>Required</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber"></a>

```java
public java.lang.Number getPlacementPartitionNumber();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-aws.instance.Instance.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `secondaryPrivateIps`<sup>Required</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.instance.Instance.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheck"></a>

```java
public java.lang.Object getSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.instance.Instance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.instance.Instance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.instance.Instance.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.instance.Instance.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-aws.instance.Instance.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `userDataBase64`<sup>Required</sup> <a name="userDataBase64" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64"></a>

```java
public java.lang.String getUserDataBase64();
```

- *Type:* java.lang.String

---

##### `userDataReplaceOnChange`<sup>Required</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange"></a>

```java
public java.lang.Object getUserDataReplaceOnChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeTags`<sup>Required</sup> <a name="volumeTags" id="@cdktf/provider-aws.instance.Instance.property.volumeTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.instance.Instance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceCapacityReservationSpecification <a name="InstanceCapacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceCapacityReservationSpecification;

InstanceCapacityReservationSpecification.builder()
//  .capacityReservationPreference(java.lang.String)
//  .capacityReservationTarget(InstanceCapacityReservationSpecificationCapacityReservationTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacityReservationPreference`<sup>Optional</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```java
public java.lang.String getCapacityReservationPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}.

---

##### `capacityReservationTarget`<sup>Optional</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```java
public InstanceCapacityReservationSpecificationCapacityReservationTarget getCapacityReservationTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_target Instance#capacity_reservation_target}

---

### InstanceCapacityReservationSpecificationCapacityReservationTarget <a name="InstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget;

InstanceCapacityReservationSpecificationCapacityReservationTarget.builder()
//  .capacityReservationId(java.lang.String)
//  .capacityReservationResourceGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}. |

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}.

---

##### `capacityReservationResourceGroupArn`<sup>Optional</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}.

---

### InstanceConfig <a name="InstanceConfig" id="@cdktf/provider-aws.instance.InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceConfig;

InstanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .ami(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean)
//  .associatePublicIpAddress(IResolvable)
//  .availabilityZone(java.lang.String)
//  .capacityReservationSpecification(InstanceCapacityReservationSpecification)
//  .cpuCoreCount(java.lang.Number)
//  .cpuThreadsPerCore(java.lang.Number)
//  .creditSpecification(InstanceCreditSpecification)
//  .disableApiStop(java.lang.Boolean)
//  .disableApiStop(IResolvable)
//  .disableApiTermination(java.lang.Boolean)
//  .disableApiTermination(IResolvable)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<InstanceEbsBlockDevice>)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .enclaveOptions(InstanceEnclaveOptions)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<InstanceEphemeralBlockDevice>)
//  .fetchPasswordData(java.lang.Boolean)
//  .fetchPasswordData(IResolvable)
//  .hibernation(java.lang.Boolean)
//  .hibernation(IResolvable)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .instanceInitiatedShutdownBehavior(java.lang.String)
//  .instanceType(java.lang.String)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(java.util.List<java.lang.String>)
//  .keyName(java.lang.String)
//  .launchTemplate(InstanceLaunchTemplate)
//  .maintenanceOptions(InstanceMaintenanceOptions)
//  .metadataOptions(InstanceMetadataOptions)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<InstanceNetworkInterface>)
//  .placementGroup(java.lang.String)
//  .placementPartitionNumber(java.lang.Number)
//  .privateDnsNameOptions(InstancePrivateDnsNameOptions)
//  .privateIp(java.lang.String)
//  .rootBlockDevice(InstanceRootBlockDevice)
//  .secondaryPrivateIps(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean)
//  .sourceDestCheck(IResolvable)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tenancy(java.lang.String)
//  .timeouts(InstanceTimeouts)
//  .userData(java.lang.String)
//  .userDataBase64(java.lang.String)
//  .userDataReplaceOnChange(java.lang.Boolean)
//  .userDataReplaceOnChange(IResolvable)
//  .volumeTags(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ami">ami</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop">disableApiStop</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData">fetchPasswordData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hibernation">hibernation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostId">hostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags">volumeTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.instance.InstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.instance.InstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.instance.InstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.instance.InstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.instance.InstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.instance.InstanceConfig.property.ami"></a>

```java
public java.lang.String getAmi();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification"></a>

```java
public InstanceCapacityReservationSpecification getCapacityReservationSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `cpuThreadsPerCore`<sup>Optional</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore"></a>

```java
public java.lang.Number getCpuThreadsPerCore();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification"></a>

```java
public InstanceCreditSpecification getCreditSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#credit_specification Instance#credit_specification}

---

##### `disableApiStop`<sup>Optional</sup> <a name="disableApiStop" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop"></a>

```java
public java.lang.Object getDisableApiStop();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination"></a>

```java
public java.lang.Object getDisableApiTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice"></a>

```java
public java.lang.Object getEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_block_device Instance#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions"></a>

```java
public InstanceEnclaveOptions getEnclaveOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enclave_options Instance#enclave_options}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice"></a>

```java
public java.lang.Object getEphemeralBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `fetchPasswordData`<sup>Optional</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData"></a>

```java
public java.lang.Object getFetchPasswordData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.instance.InstanceConfig.property.hibernation"></a>

```java
public java.lang.Object getHibernation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.InstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.instance.InstanceConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate"></a>

```java
public InstanceLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#launch_template Instance#launch_template}

---

##### `maintenanceOptions`<sup>Optional</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions"></a>

```java
public InstanceMaintenanceOptions getMaintenanceOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#maintenance_options Instance#maintenance_options}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions"></a>

```java
public InstanceMetadataOptions getMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#metadata_options Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.instance.InstanceConfig.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface Instance#network_interface}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}.

---

##### `placementPartitionNumber`<sup>Optional</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber"></a>

```java
public java.lang.Number getPlacementPartitionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions"></a>

```java
public InstancePrivateDnsNameOptions getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_dns_name_options Instance#private_dns_name_options}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice"></a>

```java
public InstanceRootBlockDevice getRootBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#root_block_device Instance#root_block_device}

---

##### `secondaryPrivateIps`<sup>Optional</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck"></a>

```java
public java.lang.Object getSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.instance.InstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.instance.InstanceConfig.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.instance.InstanceConfig.property.timeouts"></a>

```java
public InstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#timeouts Instance#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.instance.InstanceConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64"></a>

```java
public java.lang.String getUserDataBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}.

---

##### `userDataReplaceOnChange`<sup>Optional</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange"></a>

```java
public java.lang.Object getUserDataReplaceOnChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}.

---

##### `volumeTags`<sup>Optional</sup> <a name="volumeTags" id="@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

### InstanceCreditSpecification <a name="InstanceCreditSpecification" id="@cdktf/provider-aws.instance.InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceCreditSpecification;

InstanceCreditSpecification.builder()
//  .cpuCredits(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}.

---

### InstanceEbsBlockDevice <a name="InstanceEbsBlockDevice" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEbsBlockDevice;

InstanceEbsBlockDevice.builder()
    .deviceName(java.lang.String)
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .snapshotId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceEnclaveOptions <a name="InstanceEnclaveOptions" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEnclaveOptions;

InstanceEnclaveOptions.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}.

---

### InstanceEphemeralBlockDevice <a name="InstanceEphemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEphemeralBlockDevice;

InstanceEphemeralBlockDevice.builder()
    .deviceName(java.lang.String)
//  .noDevice(java.lang.Boolean)
//  .noDevice(IResolvable)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice"></a>

```java
public java.lang.Object getNoDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}.

---

### InstanceLaunchTemplate <a name="InstanceLaunchTemplate" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceLaunchTemplate;

InstanceLaunchTemplate.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}.

---

### InstanceMaintenanceOptions <a name="InstanceMaintenanceOptions" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceMaintenanceOptions;

InstanceMaintenanceOptions.builder()
//  .autoRecovery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}. |

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery"></a>

```java
public java.lang.String getAutoRecovery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}.

---

### InstanceMetadataOptions <a name="InstanceMetadataOptions" id="@cdktf/provider-aws.instance.InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceMetadataOptions;

InstanceMetadataOptions.builder()
//  .httpEndpoint(java.lang.String)
//  .httpPutResponseHopLimit(java.lang.Number)
//  .httpTokens(java.lang.String)
//  .instanceMetadataTags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}.

---

### InstanceNetworkInterface <a name="InstanceNetworkInterface" id="@cdktf/provider-aws.instance.InstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceNetworkInterface;

InstanceNetworkInterface.builder()
    .deviceIndex(java.lang.Number)
    .networkInterfaceId(java.lang.String)
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .networkCardIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}. |

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}.

---

### InstancePrivateDnsNameOptions <a name="InstancePrivateDnsNameOptions" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstancePrivateDnsNameOptions;

InstancePrivateDnsNameOptions.builder()
//  .enableResourceNameDnsAaaaRecord(java.lang.Boolean)
//  .enableResourceNameDnsAaaaRecord(IResolvable)
//  .enableResourceNameDnsARecord(java.lang.Boolean)
//  .enableResourceNameDnsARecord(IResolvable)
//  .hostnameType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}. |

---

##### `enableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}.

---

##### `enableResourceNameDnsARecord`<sup>Optional</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}.

---

##### `hostnameType`<sup>Optional</sup> <a name="hostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}.

---

### InstanceRootBlockDevice <a name="InstanceRootBlockDevice" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceRootBlockDevice;

InstanceRootBlockDevice.builder()
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceTimeouts <a name="InstanceTimeouts" id="@cdktf/provider-aws.instance.InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceTimeouts;

InstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference;

new InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">resetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```java
public void resetCapacityReservationId()
```

##### `resetCapacityReservationResourceGroupArn` <a name="resetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```java
public void resetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacityReservationResourceGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```java
public java.lang.String getCapacityReservationIdInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="capacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArnInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```java
public InstanceCapacityReservationSpecificationCapacityReservationTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### InstanceCapacityReservationSpecificationOutputReference <a name="InstanceCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceCapacityReservationSpecificationOutputReference;

new InstanceCapacityReservationSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">putCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">resetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">resetCapacityReservationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservationTarget` <a name="putCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```java
public void putCapacityReservationTarget(InstanceCapacityReservationSpecificationCapacityReservationTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `resetCapacityReservationPreference` <a name="resetCapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```java
public void resetCapacityReservationPreference()
```

##### `resetCapacityReservationTarget` <a name="resetCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```java
public void resetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacityReservationPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```java
public InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference getCapacityReservationTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacityReservationPreferenceInput`<sup>Optional</sup> <a name="capacityReservationPreferenceInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```java
public java.lang.String getCapacityReservationPreferenceInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationTargetInput`<sup>Optional</sup> <a name="capacityReservationTargetInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```java
public InstanceCapacityReservationSpecificationCapacityReservationTarget getCapacityReservationTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```java
public java.lang.String getCapacityReservationPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```java
public InstanceCapacityReservationSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---


### InstanceCreditSpecificationOutputReference <a name="InstanceCreditSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceCreditSpecificationOutputReference;

new InstanceCreditSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```java
public void resetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```java
public java.lang.String getCpuCreditsInput();
```

- *Type:* java.lang.String

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```java
public InstanceCreditSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---


### InstanceEbsBlockDeviceList <a name="InstanceEbsBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEbsBlockDeviceList;

new InstanceEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get"></a>

```java
public InstanceEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>>

---


### InstanceEbsBlockDeviceOutputReference <a name="InstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEbsBlockDeviceOutputReference;

new InstanceEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### InstanceEnclaveOptionsOutputReference <a name="InstanceEnclaveOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEnclaveOptionsOutputReference;

new InstanceEnclaveOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```java
public InstanceEnclaveOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---


### InstanceEphemeralBlockDeviceList <a name="InstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEphemeralBlockDeviceList;

new InstanceEphemeralBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get"></a>

```java
public InstanceEphemeralBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>>

---


### InstanceEphemeralBlockDeviceOutputReference <a name="InstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceEphemeralBlockDeviceOutputReference;

new InstanceEphemeralBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```java
public java.lang.Object getNoDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```java
public java.lang.Object getNoDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### InstanceLaunchTemplateOutputReference <a name="InstanceLaunchTemplateOutputReference" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceLaunchTemplateOutputReference;

new InstanceLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```java
public InstanceLaunchTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---


### InstanceMaintenanceOptionsOutputReference <a name="InstanceMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceMaintenanceOptionsOutputReference;

new InstanceMaintenanceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery">resetAutoRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRecovery` <a name="resetAutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```java
public void resetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">autoRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRecoveryInput`<sup>Optional</sup> <a name="autoRecoveryInput" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```java
public java.lang.String getAutoRecoveryInput();
```

- *Type:* java.lang.String

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```java
public java.lang.String getAutoRecovery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```java
public InstanceMaintenanceOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---


### InstanceMetadataOptionsOutputReference <a name="InstanceMetadataOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceMetadataOptionsOutputReference;

new InstanceMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```java
public void resetHttpEndpoint()
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```java
public void resetHttpTokens()
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```java
public void resetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```java
public java.lang.String getHttpEndpointInput();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```java
public java.lang.String getInstanceMetadataTagsInput();
```

- *Type:* java.lang.String

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```java
public InstanceMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---


### InstanceNetworkInterfaceList <a name="InstanceNetworkInterfaceList" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceNetworkInterfaceList;

new InstanceNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get"></a>

```java
public InstanceNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>>

---


### InstanceNetworkInterfaceOutputReference <a name="InstanceNetworkInterfaceOutputReference" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceNetworkInterfaceOutputReference;

new InstanceNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex">resetNetworkCardIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetNetworkCardIndex` <a name="resetNetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```java
public void resetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput">networkCardIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```java
public java.lang.Number getDeviceIndexInput();
```

- *Type:* java.lang.Number

---

##### `networkCardIndexInput`<sup>Optional</sup> <a name="networkCardIndexInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```java
public java.lang.Number getNetworkCardIndexInput();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface">InstanceNetworkInterface</a> OR com.hashicorp.cdktf.IResolvable

---


### InstancePrivateDnsNameOptionsOutputReference <a name="InstancePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstancePrivateDnsNameOptionsOutputReference;

new InstancePrivateDnsNameOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">resetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">resetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">resetHostnameType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResourceNameDnsAaaaRecord` <a name="resetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```java
public void resetEnableResourceNameDnsAaaaRecord()
```

##### `resetEnableResourceNameDnsARecord` <a name="resetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```java
public void resetEnableResourceNameDnsARecord()
```

##### `resetHostnameType` <a name="resetHostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```java
public void resetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enableResourceNameDnsAaaaRecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enableResourceNameDnsARecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostnameTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameTypeInput`<sup>Optional</sup> <a name="hostnameTypeInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```java
public java.lang.String getHostnameTypeInput();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```java
public InstancePrivateDnsNameOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---


### InstanceRootBlockDeviceOutputReference <a name="InstanceRootBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceRootBlockDeviceOutputReference;

new InstanceRootBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```java
public InstanceRootBlockDevice getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---


### InstanceTimeoutsOutputReference <a name="InstanceTimeoutsOutputReference" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.instance.InstanceTimeoutsOutputReference;

new InstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



