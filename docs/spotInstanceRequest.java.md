# `spotInstanceRequest` Submodule <a name="`spotInstanceRequest` Submodule" id="@cdktf/provider-aws.spotInstanceRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotInstanceRequest <a name="SpotInstanceRequest" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request aws_spot_instance_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequest;

SpotInstanceRequest.Builder.create(Construct scope, java.lang.String id)
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
//  .blockDurationMinutes(java.lang.Number)
//  .capacityReservationSpecification(SpotInstanceRequestCapacityReservationSpecification)
//  .cpuCoreCount(java.lang.Number)
//  .cpuThreadsPerCore(java.lang.Number)
//  .creditSpecification(SpotInstanceRequestCreditSpecification)
//  .disableApiStop(java.lang.Boolean)
//  .disableApiStop(IResolvable)
//  .disableApiTermination(java.lang.Boolean)
//  .disableApiTermination(IResolvable)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<SpotInstanceRequestEbsBlockDevice>)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .enclaveOptions(SpotInstanceRequestEnclaveOptions)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<SpotInstanceRequestEphemeralBlockDevice>)
//  .fetchPasswordData(java.lang.Boolean)
//  .fetchPasswordData(IResolvable)
//  .hibernation(java.lang.Boolean)
//  .hibernation(IResolvable)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .instanceInitiatedShutdownBehavior(java.lang.String)
//  .instanceInterruptionBehavior(java.lang.String)
//  .instanceType(java.lang.String)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(java.util.List<java.lang.String>)
//  .keyName(java.lang.String)
//  .launchGroup(java.lang.String)
//  .launchTemplate(SpotInstanceRequestLaunchTemplate)
//  .maintenanceOptions(SpotInstanceRequestMaintenanceOptions)
//  .metadataOptions(SpotInstanceRequestMetadataOptions)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<SpotInstanceRequestNetworkInterface>)
//  .placementGroup(java.lang.String)
//  .placementPartitionNumber(java.lang.Number)
//  .privateDnsNameOptions(SpotInstanceRequestPrivateDnsNameOptions)
//  .privateIp(java.lang.String)
//  .rootBlockDevice(SpotInstanceRequestRootBlockDevice)
//  .secondaryPrivateIps(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean)
//  .sourceDestCheck(IResolvable)
//  .spotPrice(java.lang.String)
//  .spotType(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tenancy(java.lang.String)
//  .timeouts(SpotInstanceRequestTimeouts)
//  .userData(java.lang.String)
//  .userDataBase64(java.lang.String)
//  .userDataReplaceOnChange(java.lang.Boolean)
//  .userDataReplaceOnChange(IResolvable)
//  .validFrom(java.lang.String)
//  .validUntil(java.lang.String)
//  .volumeTags(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .waitForFulfillment(java.lang.Boolean)
//  .waitForFulfillment(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ami">ami</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiStop">disableApiStop</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.fetchPasswordData">fetchPasswordData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hibernation">hibernation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostId">hostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchGroup">launchGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementPartitionNumber">placementPartitionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotType">spotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validFrom">validFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validUntil">validUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.volumeTags">volumeTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.waitForFulfillment">waitForFulfillment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ami"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.blockDurationMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.capacityReservationSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}.

---

##### `cpuThreadsPerCore`<sup>Optional</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.cpuThreadsPerCore"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}

---

##### `disableApiStop`<sup>Optional</sup> <a name="disableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiStop"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.disableApiTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ebsOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}

---

##### `fetchPasswordData`<sup>Optional</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.fetchPasswordData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hibernation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.hostResourceGroupArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.

---

##### `instanceInterruptionBehavior`<sup>Optional</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceInterruptionBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.ipv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}.

---

##### `launchGroup`<sup>Optional</sup> <a name="launchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_template SpotInstanceRequest#launch_template}

---

##### `maintenanceOptions`<sup>Optional</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.maintenanceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.monitoring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface SpotInstanceRequest#network_interface}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}.

---

##### `placementPartitionNumber`<sup>Optional</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.placementPartitionNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}.

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.rootBlockDevice"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}

---

##### `secondaryPrivateIps`<sup>Optional</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.secondaryPrivateIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.sourceDestCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}.

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotPrice"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}.

---

##### `spotType`<sup>Optional</sup> <a name="spotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.spotType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.tenancy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#timeouts SpotInstanceRequest#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataBase64"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}.

---

##### `userDataReplaceOnChange`<sup>Optional</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.userDataReplaceOnChange"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}.

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validFrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.validUntil"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}.

---

##### `volumeTags`<sup>Optional</sup> <a name="volumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.volumeTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.

---

##### `waitForFulfillment`<sup>Optional</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.waitForFulfillment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification">putCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions">putMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions">putPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi">resetAmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification">resetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore">resetCpuThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop">resetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData">resetFetchPasswordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation">resetHibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior">resetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup">resetLaunchGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions">resetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber">resetPlacementPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions">resetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps">resetSecondaryPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType">resetSpotType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64">resetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange">resetUserDataReplaceOnChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom">resetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil">resetValidUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags">resetVolumeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment">resetWaitForFulfillment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacityReservationSpecification` <a name="putCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification"></a>

```java
public void putCapacityReservationSpecification(SpotInstanceRequestCapacityReservationSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification"></a>

```java
public void putCreditSpecification(SpotInstanceRequestCreditSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice"></a>

```java
public void putEbsBlockDevice(IResolvable OR java.util.List<SpotInstanceRequestEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>>

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions"></a>

```java
public void putEnclaveOptions(SpotInstanceRequestEnclaveOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice"></a>

```java
public void putEphemeralBlockDevice(IResolvable OR java.util.List<SpotInstanceRequestEphemeralBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(SpotInstanceRequestLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `putMaintenanceOptions` <a name="putMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions"></a>

```java
public void putMaintenanceOptions(SpotInstanceRequestMaintenanceOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions"></a>

```java
public void putMetadataOptions(SpotInstanceRequestMetadataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<SpotInstanceRequestNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>>

---

##### `putPrivateDnsNameOptions` <a name="putPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions"></a>

```java
public void putPrivateDnsNameOptions(SpotInstanceRequestPrivateDnsNameOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice"></a>

```java
public void putRootBlockDevice(SpotInstanceRequestRootBlockDevice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts"></a>

```java
public void putTimeouts(SpotInstanceRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

---

##### `resetAmi` <a name="resetAmi" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi"></a>

```java
public void resetAmi()
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes"></a>

```java
public void resetBlockDurationMinutes()
```

##### `resetCapacityReservationSpecification` <a name="resetCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification"></a>

```java
public void resetCapacityReservationSpecification()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetCpuThreadsPerCore` <a name="resetCpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore"></a>

```java
public void resetCpuThreadsPerCore()
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification"></a>

```java
public void resetCreditSpecification()
```

##### `resetDisableApiStop` <a name="resetDisableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop"></a>

```java
public void resetDisableApiStop()
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination"></a>

```java
public void resetDisableApiTermination()
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice"></a>

```java
public void resetEbsBlockDevice()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions"></a>

```java
public void resetEnclaveOptions()
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice"></a>

```java
public void resetEphemeralBlockDevice()
```

##### `resetFetchPasswordData` <a name="resetFetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData"></a>

```java
public void resetFetchPasswordData()
```

##### `resetHibernation` <a name="resetHibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation"></a>

```java
public void resetHibernation()
```

##### `resetHostId` <a name="resetHostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId"></a>

```java
public void resetHostId()
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn"></a>

```java
public void resetHostResourceGroupArn()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior"></a>

```java
public void resetInstanceInitiatedShutdownBehavior()
```

##### `resetInstanceInterruptionBehavior` <a name="resetInstanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior"></a>

```java
public void resetInstanceInterruptionBehavior()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount"></a>

```java
public void resetIpv6AddressCount()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetLaunchGroup` <a name="resetLaunchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup"></a>

```java
public void resetLaunchGroup()
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate"></a>

```java
public void resetLaunchTemplate()
```

##### `resetMaintenanceOptions` <a name="resetMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions"></a>

```java
public void resetMaintenanceOptions()
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions"></a>

```java
public void resetMetadataOptions()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup"></a>

```java
public void resetPlacementGroup()
```

##### `resetPlacementPartitionNumber` <a name="resetPlacementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber"></a>

```java
public void resetPlacementPartitionNumber()
```

##### `resetPrivateDnsNameOptions` <a name="resetPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions"></a>

```java
public void resetPrivateDnsNameOptions()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice"></a>

```java
public void resetRootBlockDevice()
```

##### `resetSecondaryPrivateIps` <a name="resetSecondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps"></a>

```java
public void resetSecondaryPrivateIps()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck"></a>

```java
public void resetSourceDestCheck()
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice"></a>

```java
public void resetSpotPrice()
```

##### `resetSpotType` <a name="resetSpotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType"></a>

```java
public void resetSpotType()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy"></a>

```java
public void resetTenancy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetUserDataBase64` <a name="resetUserDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64"></a>

```java
public void resetUserDataBase64()
```

##### `resetUserDataReplaceOnChange` <a name="resetUserDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange"></a>

```java
public void resetUserDataReplaceOnChange()
```

##### `resetValidFrom` <a name="resetValidFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom"></a>

```java
public void resetValidFrom()
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil"></a>

```java
public void resetValidUntil()
```

##### `resetVolumeTags` <a name="resetVolumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags"></a>

```java
public void resetVolumeTags()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

##### `resetWaitForFulfillment` <a name="resetWaitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment"></a>

```java
public void resetWaitForFulfillment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequest;

SpotInstanceRequest.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequest;

SpotInstanceRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequest;

SpotInstanceRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState">instanceState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData">passwordData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns">privateDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns">publicDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus">spotBidStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId">spotInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState">spotRequestState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput">amiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput">capacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput">cpuThreadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput">disableApiStopInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput">fetchPasswordDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput">hibernationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput">hostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput">instanceInterruptionBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput">launchGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput">maintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput">monitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput">placementGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput">placementPartitionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput">privateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput">secondaryPrivateIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput">spotPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput">spotTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput">tenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input">userDataBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput">userDataReplaceOnChangeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput">validFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput">validUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput">volumeTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput">waitForFulfillmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami">ami</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop">disableApiStop</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData">fetchPasswordData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation">hibernation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup">launchGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType">spotType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags">volumeTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment">waitForFulfillment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification"></a>

```java
public SpotInstanceRequestCapacityReservationSpecificationOutputReference getCapacityReservationSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification"></a>

```java
public SpotInstanceRequestCreditSpecificationOutputReference getCreditSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a>

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice"></a>

```java
public SpotInstanceRequestEbsBlockDeviceList getEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions"></a>

```java
public SpotInstanceRequestEnclaveOptionsOutputReference getEnclaveOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice"></a>

```java
public SpotInstanceRequestEphemeralBlockDeviceList getEphemeralBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a>

---

##### `instanceState`<sup>Required</sup> <a name="instanceState" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState"></a>

```java
public java.lang.String getInstanceState();
```

- *Type:* java.lang.String

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate"></a>

```java
public SpotInstanceRequestLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions"></a>

```java
public SpotInstanceRequestMaintenanceOptionsOutputReference getMaintenanceOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions"></a>

```java
public SpotInstanceRequestMetadataOptionsOutputReference getMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface"></a>

```java
public SpotInstanceRequestNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `passwordData`<sup>Required</sup> <a name="passwordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData"></a>

```java
public java.lang.String getPasswordData();
```

- *Type:* java.lang.String

---

##### `primaryNetworkInterfaceId`<sup>Required</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId"></a>

```java
public java.lang.String getPrimaryNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateDns`<sup>Required</sup> <a name="privateDns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns"></a>

```java
public java.lang.String getPrivateDns();
```

- *Type:* java.lang.String

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions"></a>

```java
public SpotInstanceRequestPrivateDnsNameOptionsOutputReference getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a>

---

##### `publicDns`<sup>Required</sup> <a name="publicDns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns"></a>

```java
public java.lang.String getPublicDns();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice"></a>

```java
public SpotInstanceRequestRootBlockDeviceOutputReference getRootBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a>

---

##### `spotBidStatus`<sup>Required</sup> <a name="spotBidStatus" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus"></a>

```java
public java.lang.String getSpotBidStatus();
```

- *Type:* java.lang.String

---

##### `spotInstanceId`<sup>Required</sup> <a name="spotInstanceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId"></a>

```java
public java.lang.String getSpotInstanceId();
```

- *Type:* java.lang.String

---

##### `spotRequestState`<sup>Required</sup> <a name="spotRequestState" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState"></a>

```java
public java.lang.String getSpotRequestState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts"></a>

```java
public SpotInstanceRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a>

---

##### `amiInput`<sup>Optional</sup> <a name="amiInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput"></a>

```java
public java.lang.String getAmiInput();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Object getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput"></a>

```java
public java.lang.Number getBlockDurationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `capacityReservationSpecificationInput`<sup>Optional</sup> <a name="capacityReservationSpecificationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput"></a>

```java
public SpotInstanceRequestCapacityReservationSpecification getCapacityReservationSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuThreadsPerCoreInput`<sup>Optional</sup> <a name="cpuThreadsPerCoreInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput"></a>

```java
public java.lang.Number getCpuThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput"></a>

```java
public SpotInstanceRequestCreditSpecification getCreditSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `disableApiStopInput`<sup>Optional</sup> <a name="disableApiStopInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput"></a>

```java
public java.lang.Object getDisableApiStopInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput"></a>

```java
public java.lang.Object getDisableApiTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput"></a>

```java
public java.lang.Object getEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>>

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput"></a>

```java
public java.lang.Object getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput"></a>

```java
public SpotInstanceRequestEnclaveOptions getEnclaveOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput"></a>

```java
public java.lang.Object getEphemeralBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>>

---

##### `fetchPasswordDataInput`<sup>Optional</sup> <a name="fetchPasswordDataInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput"></a>

```java
public java.lang.Object getFetchPasswordDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hibernationInput`<sup>Optional</sup> <a name="hibernationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput"></a>

```java
public java.lang.Object getHibernationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput"></a>

```java
public java.lang.String getHostIdInput();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput"></a>

```java
public java.lang.String getHostResourceGroupArnInput();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehaviorInput();
```

- *Type:* java.lang.String

---

##### `instanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="instanceInterruptionBehaviorInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput"></a>

```java
public java.lang.String getInstanceInterruptionBehaviorInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput"></a>

```java
public java.lang.Number getIpv6AddressCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `launchGroupInput`<sup>Optional</sup> <a name="launchGroupInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput"></a>

```java
public java.lang.String getLaunchGroupInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput"></a>

```java
public SpotInstanceRequestLaunchTemplate getLaunchTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `maintenanceOptionsInput`<sup>Optional</sup> <a name="maintenanceOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput"></a>

```java
public SpotInstanceRequestMaintenanceOptions getMaintenanceOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput"></a>

```java
public SpotInstanceRequestMetadataOptions getMetadataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput"></a>

```java
public java.lang.Object getMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>>

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput"></a>

```java
public java.lang.String getPlacementGroupInput();
```

- *Type:* java.lang.String

---

##### `placementPartitionNumberInput`<sup>Optional</sup> <a name="placementPartitionNumberInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput"></a>

```java
public java.lang.Number getPlacementPartitionNumberInput();
```

- *Type:* java.lang.Number

---

##### `privateDnsNameOptionsInput`<sup>Optional</sup> <a name="privateDnsNameOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput"></a>

```java
public SpotInstanceRequestPrivateDnsNameOptions getPrivateDnsNameOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput"></a>

```java
public SpotInstanceRequestRootBlockDevice getRootBlockDeviceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `secondaryPrivateIpsInput`<sup>Optional</sup> <a name="secondaryPrivateIpsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput"></a>

```java
public java.lang.Object getSourceDestCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput"></a>

```java
public java.lang.String getSpotPriceInput();
```

- *Type:* java.lang.String

---

##### `spotTypeInput`<sup>Optional</sup> <a name="spotTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput"></a>

```java
public java.lang.String getSpotTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput"></a>

```java
public java.lang.String getTenancyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userDataBase64Input`<sup>Optional</sup> <a name="userDataBase64Input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input"></a>

```java
public java.lang.String getUserDataBase64Input();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `userDataReplaceOnChangeInput`<sup>Optional</sup> <a name="userDataReplaceOnChangeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput"></a>

```java
public java.lang.Object getUserDataReplaceOnChangeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validFromInput`<sup>Optional</sup> <a name="validFromInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput"></a>

```java
public java.lang.String getValidFromInput();
```

- *Type:* java.lang.String

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput"></a>

```java
public java.lang.String getValidUntilInput();
```

- *Type:* java.lang.String

---

##### `volumeTagsInput`<sup>Optional</sup> <a name="volumeTagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitForFulfillmentInput`<sup>Optional</sup> <a name="waitForFulfillmentInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput"></a>

```java
public java.lang.Object getWaitForFulfillmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami"></a>

```java
public java.lang.String getAmi();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `cpuThreadsPerCore`<sup>Required</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore"></a>

```java
public java.lang.Number getCpuThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop"></a>

```java
public java.lang.Object getDisableApiStop();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination"></a>

```java
public java.lang.Object getDisableApiTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchPasswordData`<sup>Required</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData"></a>

```java
public java.lang.Object getFetchPasswordData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hibernation`<sup>Required</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation"></a>

```java
public java.lang.Object getHibernation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior"></a>

```java
public java.lang.String getInstanceInterruptionBehavior();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `launchGroup`<sup>Required</sup> <a name="launchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup"></a>

```java
public java.lang.String getLaunchGroup();
```

- *Type:* java.lang.String

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

---

##### `placementPartitionNumber`<sup>Required</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber"></a>

```java
public java.lang.Number getPlacementPartitionNumber();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `secondaryPrivateIps`<sup>Required</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck"></a>

```java
public java.lang.Object getSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

---

##### `spotType`<sup>Required</sup> <a name="spotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType"></a>

```java
public java.lang.String getSpotType();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `userDataBase64`<sup>Required</sup> <a name="userDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64"></a>

```java
public java.lang.String getUserDataBase64();
```

- *Type:* java.lang.String

---

##### `userDataReplaceOnChange`<sup>Required</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange"></a>

```java
public java.lang.Object getUserDataReplaceOnChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

---

##### `volumeTags`<sup>Required</sup> <a name="volumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitForFulfillment`<sup>Required</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment"></a>

```java
public java.lang.Object getWaitForFulfillment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpotInstanceRequestCapacityReservationSpecification <a name="SpotInstanceRequestCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestCapacityReservationSpecification;

SpotInstanceRequestCapacityReservationSpecification.builder()
//  .capacityReservationPreference(java.lang.String)
//  .capacityReservationTarget(SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacityReservationPreference`<sup>Optional</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference"></a>

```java
public java.lang.String getCapacityReservationPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}.

---

##### `capacityReservationTarget`<sup>Optional</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget"></a>

```java
public SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget getCapacityReservationTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}

---

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;

SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.builder()
//  .capacityReservationId(java.lang.String)
//  .capacityReservationResourceGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}. |

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}.

---

##### `capacityReservationResourceGroupArn`<sup>Optional</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}.

---

### SpotInstanceRequestConfig <a name="SpotInstanceRequestConfig" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestConfig;

SpotInstanceRequestConfig.builder()
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
//  .blockDurationMinutes(java.lang.Number)
//  .capacityReservationSpecification(SpotInstanceRequestCapacityReservationSpecification)
//  .cpuCoreCount(java.lang.Number)
//  .cpuThreadsPerCore(java.lang.Number)
//  .creditSpecification(SpotInstanceRequestCreditSpecification)
//  .disableApiStop(java.lang.Boolean)
//  .disableApiStop(IResolvable)
//  .disableApiTermination(java.lang.Boolean)
//  .disableApiTermination(IResolvable)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<SpotInstanceRequestEbsBlockDevice>)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .enclaveOptions(SpotInstanceRequestEnclaveOptions)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<SpotInstanceRequestEphemeralBlockDevice>)
//  .fetchPasswordData(java.lang.Boolean)
//  .fetchPasswordData(IResolvable)
//  .hibernation(java.lang.Boolean)
//  .hibernation(IResolvable)
//  .hostId(java.lang.String)
//  .hostResourceGroupArn(java.lang.String)
//  .iamInstanceProfile(java.lang.String)
//  .id(java.lang.String)
//  .instanceInitiatedShutdownBehavior(java.lang.String)
//  .instanceInterruptionBehavior(java.lang.String)
//  .instanceType(java.lang.String)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(java.util.List<java.lang.String>)
//  .keyName(java.lang.String)
//  .launchGroup(java.lang.String)
//  .launchTemplate(SpotInstanceRequestLaunchTemplate)
//  .maintenanceOptions(SpotInstanceRequestMaintenanceOptions)
//  .metadataOptions(SpotInstanceRequestMetadataOptions)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<SpotInstanceRequestNetworkInterface>)
//  .placementGroup(java.lang.String)
//  .placementPartitionNumber(java.lang.Number)
//  .privateDnsNameOptions(SpotInstanceRequestPrivateDnsNameOptions)
//  .privateIp(java.lang.String)
//  .rootBlockDevice(SpotInstanceRequestRootBlockDevice)
//  .secondaryPrivateIps(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean)
//  .sourceDestCheck(IResolvable)
//  .spotPrice(java.lang.String)
//  .spotType(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tenancy(java.lang.String)
//  .timeouts(SpotInstanceRequestTimeouts)
//  .userData(java.lang.String)
//  .userDataBase64(java.lang.String)
//  .userDataReplaceOnChange(java.lang.Boolean)
//  .userDataReplaceOnChange(IResolvable)
//  .validFrom(java.lang.String)
//  .validUntil(java.lang.String)
//  .volumeTags(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .waitForFulfillment(java.lang.Boolean)
//  .waitForFulfillment(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami">ami</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop">disableApiStop</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData">fetchPasswordData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation">hibernation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId">hostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup">launchGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType">spotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64">userDataBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags">volumeTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment">waitForFulfillment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami"></a>

```java
public java.lang.String getAmi();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification"></a>

```java
public SpotInstanceRequestCapacityReservationSpecification getCapacityReservationSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}.

---

##### `cpuThreadsPerCore`<sup>Optional</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore"></a>

```java
public java.lang.Number getCpuThreadsPerCore();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification"></a>

```java
public SpotInstanceRequestCreditSpecification getCreditSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}

---

##### `disableApiStop`<sup>Optional</sup> <a name="disableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop"></a>

```java
public java.lang.Object getDisableApiStop();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination"></a>

```java
public java.lang.Object getDisableApiTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice"></a>

```java
public java.lang.Object getEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions"></a>

```java
public SpotInstanceRequestEnclaveOptions getEnclaveOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice"></a>

```java
public java.lang.Object getEphemeralBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}

---

##### `fetchPasswordData`<sup>Optional</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData"></a>

```java
public java.lang.Object getFetchPasswordData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation"></a>

```java
public java.lang.Object getHibernation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.

---

##### `instanceInterruptionBehavior`<sup>Optional</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior"></a>

```java
public java.lang.String getInstanceInterruptionBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}.

---

##### `launchGroup`<sup>Optional</sup> <a name="launchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup"></a>

```java
public java.lang.String getLaunchGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate"></a>

```java
public SpotInstanceRequestLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_template SpotInstanceRequest#launch_template}

---

##### `maintenanceOptions`<sup>Optional</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions"></a>

```java
public SpotInstanceRequestMaintenanceOptions getMaintenanceOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions"></a>

```java
public SpotInstanceRequestMetadataOptions getMetadataOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface SpotInstanceRequest#network_interface}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}.

---

##### `placementPartitionNumber`<sup>Optional</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber"></a>

```java
public java.lang.Number getPlacementPartitionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}.

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions"></a>

```java
public SpotInstanceRequestPrivateDnsNameOptions getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice"></a>

```java
public SpotInstanceRequestRootBlockDevice getRootBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}

---

##### `secondaryPrivateIps`<sup>Optional</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck"></a>

```java
public java.lang.Object getSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}.

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}.

---

##### `spotType`<sup>Optional</sup> <a name="spotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType"></a>

```java
public java.lang.String getSpotType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts"></a>

```java
public SpotInstanceRequestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#timeouts SpotInstanceRequest#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64"></a>

```java
public java.lang.String getUserDataBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}.

---

##### `userDataReplaceOnChange`<sup>Optional</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange"></a>

```java
public java.lang.Object getUserDataReplaceOnChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}.

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}.

---

##### `volumeTags`<sup>Optional</sup> <a name="volumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.

---

##### `waitForFulfillment`<sup>Optional</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment"></a>

```java
public java.lang.Object getWaitForFulfillment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.

---

### SpotInstanceRequestCreditSpecification <a name="SpotInstanceRequestCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestCreditSpecification;

SpotInstanceRequestCreditSpecification.builder()
//  .cpuCredits(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}.

---

### SpotInstanceRequestEbsBlockDevice <a name="SpotInstanceRequestEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEbsBlockDevice;

SpotInstanceRequestEbsBlockDevice.builder()
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
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestEnclaveOptions <a name="SpotInstanceRequestEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEnclaveOptions;

SpotInstanceRequestEnclaveOptions.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}.

---

### SpotInstanceRequestEphemeralBlockDevice <a name="SpotInstanceRequestEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEphemeralBlockDevice;

SpotInstanceRequestEphemeralBlockDevice.builder()
    .deviceName(java.lang.String)
//  .noDevice(java.lang.Boolean)
//  .noDevice(IResolvable)
//  .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice"></a>

```java
public java.lang.Object getNoDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}.

---

### SpotInstanceRequestLaunchTemplate <a name="SpotInstanceRequestLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestLaunchTemplate;

SpotInstanceRequestLaunchTemplate.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}.

---

### SpotInstanceRequestMaintenanceOptions <a name="SpotInstanceRequestMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestMaintenanceOptions;

SpotInstanceRequestMaintenanceOptions.builder()
//  .autoRecovery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}. |

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery"></a>

```java
public java.lang.String getAutoRecovery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}.

---

### SpotInstanceRequestMetadataOptions <a name="SpotInstanceRequestMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestMetadataOptions;

SpotInstanceRequestMetadataOptions.builder()
//  .httpEndpoint(java.lang.String)
//  .httpPutResponseHopLimit(java.lang.Number)
//  .httpTokens(java.lang.String)
//  .instanceMetadataTags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}.

---

### SpotInstanceRequestNetworkInterface <a name="SpotInstanceRequestNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestNetworkInterface;

SpotInstanceRequestNetworkInterface.builder()
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
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}. |

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}.

---

### SpotInstanceRequestPrivateDnsNameOptions <a name="SpotInstanceRequestPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestPrivateDnsNameOptions;

SpotInstanceRequestPrivateDnsNameOptions.builder()
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
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}. |

---

##### `enableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}.

---

##### `enableResourceNameDnsARecord`<sup>Optional</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}.

---

##### `hostnameType`<sup>Optional</sup> <a name="hostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}.

---

### SpotInstanceRequestRootBlockDevice <a name="SpotInstanceRequestRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestRootBlockDevice;

SpotInstanceRequestRootBlockDevice.builder()
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
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestTimeouts <a name="SpotInstanceRequestTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestTimeouts;

SpotInstanceRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference;

new SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">resetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```java
public void resetCapacityReservationId()
```

##### `resetCapacityReservationResourceGroupArn` <a name="resetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```java
public void resetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacityReservationResourceGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```java
public java.lang.String getCapacityReservationIdInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="capacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArnInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---


### SpotInstanceRequestCapacityReservationSpecificationOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestCapacityReservationSpecificationOutputReference;

new SpotInstanceRequestCapacityReservationSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">putCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">resetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">resetCapacityReservationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservationTarget` <a name="putCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```java
public void putCapacityReservationTarget(SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `resetCapacityReservationPreference` <a name="resetCapacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```java
public void resetCapacityReservationPreference()
```

##### `resetCapacityReservationTarget` <a name="resetCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```java
public void resetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacityReservationPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```java
public SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference getCapacityReservationTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacityReservationPreferenceInput`<sup>Optional</sup> <a name="capacityReservationPreferenceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```java
public java.lang.String getCapacityReservationPreferenceInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationTargetInput`<sup>Optional</sup> <a name="capacityReservationTargetInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```java
public SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget getCapacityReservationTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```java
public java.lang.String getCapacityReservationPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestCapacityReservationSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---


### SpotInstanceRequestCreditSpecificationOutputReference <a name="SpotInstanceRequestCreditSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestCreditSpecificationOutputReference;

new SpotInstanceRequestCreditSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits"></a>

```java
public void resetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```java
public java.lang.String getCpuCreditsInput();
```

- *Type:* java.lang.String

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestCreditSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---


### SpotInstanceRequestEbsBlockDeviceList <a name="SpotInstanceRequestEbsBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEbsBlockDeviceList;

new SpotInstanceRequestEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get"></a>

```java
public SpotInstanceRequestEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>>

---


### SpotInstanceRequestEbsBlockDeviceOutputReference <a name="SpotInstanceRequestEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEbsBlockDeviceOutputReference;

new SpotInstanceRequestEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotInstanceRequestEnclaveOptionsOutputReference <a name="SpotInstanceRequestEnclaveOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEnclaveOptionsOutputReference;

new SpotInstanceRequestEnclaveOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestEnclaveOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---


### SpotInstanceRequestEphemeralBlockDeviceList <a name="SpotInstanceRequestEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEphemeralBlockDeviceList;

new SpotInstanceRequestEphemeralBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get"></a>

```java
public SpotInstanceRequestEphemeralBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>>

---


### SpotInstanceRequestEphemeralBlockDeviceOutputReference <a name="SpotInstanceRequestEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestEphemeralBlockDeviceOutputReference;

new SpotInstanceRequestEphemeralBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```java
public void resetNoDevice()
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```java
public void resetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```java
public java.lang.Object getNoDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```java
public java.lang.Object getNoDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotInstanceRequestLaunchTemplateOutputReference <a name="SpotInstanceRequestLaunchTemplateOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestLaunchTemplateOutputReference;

new SpotInstanceRequestLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestLaunchTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---


### SpotInstanceRequestMaintenanceOptionsOutputReference <a name="SpotInstanceRequestMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestMaintenanceOptionsOutputReference;

new SpotInstanceRequestMaintenanceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery">resetAutoRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRecovery` <a name="resetAutoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```java
public void resetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput">autoRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRecoveryInput`<sup>Optional</sup> <a name="autoRecoveryInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```java
public java.lang.String getAutoRecoveryInput();
```

- *Type:* java.lang.String

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```java
public java.lang.String getAutoRecovery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestMaintenanceOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---


### SpotInstanceRequestMetadataOptionsOutputReference <a name="SpotInstanceRequestMetadataOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestMetadataOptionsOutputReference;

new SpotInstanceRequestMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```java
public void resetHttpEndpoint()
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```java
public void resetHttpPutResponseHopLimit()
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens"></a>

```java
public void resetHttpTokens()
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```java
public void resetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```java
public java.lang.String getHttpEndpointInput();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```java
public java.lang.Number getHttpPutResponseHopLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput"></a>

```java
public java.lang.String getHttpTokensInput();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```java
public java.lang.String getInstanceMetadataTagsInput();
```

- *Type:* java.lang.String

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---


### SpotInstanceRequestNetworkInterfaceList <a name="SpotInstanceRequestNetworkInterfaceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestNetworkInterfaceList;

new SpotInstanceRequestNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get"></a>

```java
public SpotInstanceRequestNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>>

---


### SpotInstanceRequestNetworkInterfaceOutputReference <a name="SpotInstanceRequestNetworkInterfaceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestNetworkInterfaceOutputReference;

new SpotInstanceRequestNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex">resetNetworkCardIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetNetworkCardIndex` <a name="resetNetworkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```java
public void resetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput">networkCardIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```java
public java.lang.Number getDeviceIndexInput();
```

- *Type:* java.lang.Number

---

##### `networkCardIndexInput`<sup>Optional</sup> <a name="networkCardIndexInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```java
public java.lang.Number getNetworkCardIndexInput();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotInstanceRequestPrivateDnsNameOptionsOutputReference <a name="SpotInstanceRequestPrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestPrivateDnsNameOptionsOutputReference;

new SpotInstanceRequestPrivateDnsNameOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">resetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">resetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType">resetHostnameType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResourceNameDnsAaaaRecord` <a name="resetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```java
public void resetEnableResourceNameDnsAaaaRecord()
```

##### `resetEnableResourceNameDnsARecord` <a name="resetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```java
public void resetEnableResourceNameDnsARecord()
```

##### `resetHostnameType` <a name="resetHostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```java
public void resetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enableResourceNameDnsAaaaRecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enableResourceNameDnsARecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostnameTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameTypeInput`<sup>Optional</sup> <a name="hostnameTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```java
public java.lang.String getHostnameTypeInput();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestPrivateDnsNameOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---


### SpotInstanceRequestRootBlockDeviceOutputReference <a name="SpotInstanceRequestRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestRootBlockDeviceOutputReference;

new SpotInstanceRequestRootBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue"></a>

```java
public SpotInstanceRequestRootBlockDevice getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---


### SpotInstanceRequestTimeoutsOutputReference <a name="SpotInstanceRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_instance_request.SpotInstanceRequestTimeoutsOutputReference;

new SpotInstanceRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



