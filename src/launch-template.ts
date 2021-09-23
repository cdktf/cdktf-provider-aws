// https://www.terraform.io/docs/providers/aws/r/launch_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#default_version LaunchTemplate#default_version}
  */
  readonly defaultVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#disable_api_termination LaunchTemplate#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs_optimized LaunchTemplate#ebs_optimized}
  */
  readonly ebsOptimized?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#image_id LaunchTemplate#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}
  */
  readonly instanceInitiatedShutdownBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_type LaunchTemplate#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kernel_id LaunchTemplate#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#key_name LaunchTemplate#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name_prefix LaunchTemplate#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ram_disk_id LaunchTemplate#ram_disk_id}
  */
  readonly ramDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_group_names LaunchTemplate#security_group_names}
  */
  readonly securityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags_all LaunchTemplate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#update_default_version LaunchTemplate#update_default_version}
  */
  readonly updateDefaultVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#user_data LaunchTemplate#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * block_device_mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_device_mappings LaunchTemplate#block_device_mappings}
  */
  readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
  /**
  * capacity_reservation_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification[];
  /**
  * cpu_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_options LaunchTemplate#cpu_options}
  */
  readonly cpuOptions?: LaunchTemplateCpuOptions[];
  /**
  * credit_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#credit_specification LaunchTemplate#credit_specification}
  */
  readonly creditSpecification?: LaunchTemplateCreditSpecification[];
  /**
  * elastic_gpu_specifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}
  */
  readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
  /**
  * elastic_inference_accelerator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}
  */
  readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator[];
  /**
  * enclave_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enclave_options LaunchTemplate#enclave_options}
  */
  readonly enclaveOptions?: LaunchTemplateEnclaveOptions[];
  /**
  * hibernation_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#hibernation_options LaunchTemplate#hibernation_options}
  */
  readonly hibernationOptions?: LaunchTemplateHibernationOptions[];
  /**
  * iam_instance_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iam_instance_profile LaunchTemplate#iam_instance_profile}
  */
  readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile[];
  /**
  * instance_market_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_market_options LaunchTemplate#instance_market_options}
  */
  readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions[];
  /**
  * license_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_specification LaunchTemplate#license_specification}
  */
  readonly licenseSpecification?: LaunchTemplateLicenseSpecification[];
  /**
  * metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#metadata_options LaunchTemplate#metadata_options}
  */
  readonly metadataOptions?: LaunchTemplateMetadataOptions[];
  /**
  * monitoring block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#monitoring LaunchTemplate#monitoring}
  */
  readonly monitoring?: LaunchTemplateMonitoring[];
  /**
  * network_interfaces block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interfaces LaunchTemplate#network_interfaces}
  */
  readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[];
  /**
  * placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#placement LaunchTemplate#placement}
  */
  readonly placement?: LaunchTemplatePlacement[];
  /**
  * tag_specifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tag_specifications LaunchTemplate#tag_specifications}
  */
  readonly tagSpecifications?: LaunchTemplateTagSpecifications[];
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}
  */
  readonly deleteOnTermination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#encrypted LaunchTemplate#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iops LaunchTemplate#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kms_key_id LaunchTemplate#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#snapshot_id LaunchTemplate#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#throughput LaunchTemplate#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_size LaunchTemplate#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_type LaunchTemplate#volume_type}
  */
  readonly volumeType?: string;
}

function launchTemplateBlockDeviceMappingsEbsToTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface LaunchTemplateBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_name LaunchTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#no_device LaunchTemplate#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#virtual_name LaunchTemplate#virtual_name}
  */
  readonly virtualName?: string;
  /**
  * ebs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs LaunchTemplate#ebs}
  */
  readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs[];
}

function launchTemplateBlockDeviceMappingsToTerraform(struct?: LaunchTemplateBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    ebs: cdktf.listMapper(launchTemplateBlockDeviceMappingsEbsToTerraform)(struct!.ebs),
  }
}

export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_id LaunchTemplate#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
}

function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
  }
}

export interface LaunchTemplateCapacityReservationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * capacity_reservation_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_target LaunchTemplate#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget[];
}

function launchTemplateCapacityReservationSpecificationToTerraform(struct?: LaunchTemplateCapacityReservationSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: cdktf.listMapper(launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct!.capacityReservationTarget),
  }
}

export interface LaunchTemplateCpuOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#core_count LaunchTemplate#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#threads_per_core LaunchTemplate#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

function launchTemplateCpuOptionsToTerraform(struct?: LaunchTemplateCpuOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}

export interface LaunchTemplateCreditSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_credits LaunchTemplate#cpu_credits}
  */
  readonly cpuCredits?: string;
}

function launchTemplateCreditSpecificationToTerraform(struct?: LaunchTemplateCreditSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
  }
}

export interface LaunchTemplateElasticGpuSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}
  */
  readonly type: string;
}

function launchTemplateElasticGpuSpecificationsToTerraform(struct?: LaunchTemplateElasticGpuSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LaunchTemplateElasticInferenceAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}
  */
  readonly type: string;
}

function launchTemplateElasticInferenceAcceleratorToTerraform(struct?: LaunchTemplateElasticInferenceAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LaunchTemplateEnclaveOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function launchTemplateEnclaveOptionsToTerraform(struct?: LaunchTemplateEnclaveOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LaunchTemplateHibernationOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#configured LaunchTemplate#configured}
  */
  readonly configured: boolean | cdktf.IResolvable;
}

function launchTemplateHibernationOptionsToTerraform(struct?: LaunchTemplateHibernationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configured: cdktf.booleanToTerraform(struct!.configured),
  }
}

export interface LaunchTemplateIamInstanceProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#arn LaunchTemplate#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}
  */
  readonly name?: string;
}

function launchTemplateIamInstanceProfileToTerraform(struct?: LaunchTemplateIamInstanceProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_duration_minutes LaunchTemplate#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#max_price LaunchTemplate#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_instance_type LaunchTemplate#spot_instance_type}
  */
  readonly spotInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#valid_until LaunchTemplate#valid_until}
  */
  readonly validUntil?: string;
}

function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
    valid_until: cdktf.stringToTerraform(struct!.validUntil),
  }
}

export interface LaunchTemplateInstanceMarketOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#market_type LaunchTemplate#market_type}
  */
  readonly marketType?: string;
  /**
  * spot_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_options LaunchTemplate#spot_options}
  */
  readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions[];
}

function launchTemplateInstanceMarketOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    market_type: cdktf.stringToTerraform(struct!.marketType),
    spot_options: cdktf.listMapper(launchTemplateInstanceMarketOptionsSpotOptionsToTerraform)(struct!.spotOptions),
  }
}

export interface LaunchTemplateLicenseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_configuration_arn LaunchTemplate#license_configuration_arn}
  */
  readonly licenseConfigurationArn: string;
}

function launchTemplateLicenseSpecificationToTerraform(struct?: LaunchTemplateLicenseSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    license_configuration_arn: cdktf.stringToTerraform(struct!.licenseConfigurationArn),
  }
}

export interface LaunchTemplateMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_endpoint LaunchTemplate#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}
  */
  readonly httpProtocolIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_tokens LaunchTemplate#http_tokens}
  */
  readonly httpTokens?: string;
}

function launchTemplateMetadataOptionsToTerraform(struct?: LaunchTemplateMetadataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_protocol_ipv6: cdktf.stringToTerraform(struct!.httpProtocolIpv6),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export interface LaunchTemplateMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function launchTemplateMonitoringToTerraform(struct?: LaunchTemplateMonitoring): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LaunchTemplateNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}
  */
  readonly associateCarrierIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_public_ip_address LaunchTemplate#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}
  */
  readonly deleteOnTermination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_index LaunchTemplate#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#interface_type LaunchTemplate#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_address_count LaunchTemplate#ipv4_address_count}
  */
  readonly ipv4AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_addresses LaunchTemplate#ipv4_addresses}
  */
  readonly ipv4Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_address_count LaunchTemplate#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_addresses LaunchTemplate#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interface_id LaunchTemplate#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#private_ip_address LaunchTemplate#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_groups LaunchTemplate#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#subnet_id LaunchTemplate#subnet_id}
  */
  readonly subnetId?: string;
}

function launchTemplateNetworkInterfacesToTerraform(struct?: LaunchTemplateNetworkInterfaces): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associate_carrier_ip_address: cdktf.stringToTerraform(struct!.associateCarrierIpAddress),
    associate_public_ip_address: cdktf.stringToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    ipv4_address_count: cdktf.numberToTerraform(struct!.ipv4AddressCount),
    ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv4Addresses),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6Addresses),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface LaunchTemplatePlacement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#affinity LaunchTemplate#affinity}
  */
  readonly affinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#availability_zone LaunchTemplate#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#group_name LaunchTemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_id LaunchTemplate#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_resource_group_arn LaunchTemplate#host_resource_group_arn}
  */
  readonly hostResourceGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#partition_number LaunchTemplate#partition_number}
  */
  readonly partitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spread_domain LaunchTemplate#spread_domain}
  */
  readonly spreadDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tenancy LaunchTemplate#tenancy}
  */
  readonly tenancy?: string;
}

function launchTemplatePlacementToTerraform(struct?: LaunchTemplatePlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    host_resource_group_arn: cdktf.stringToTerraform(struct!.hostResourceGroupArn),
    partition_number: cdktf.numberToTerraform(struct!.partitionNumber),
    spread_domain: cdktf.stringToTerraform(struct!.spreadDomain),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export interface LaunchTemplateTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#resource_type LaunchTemplate#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

function launchTemplateTagSpecificationsToTerraform(struct?: LaunchTemplateTagSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}
*/
export class LaunchTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_launch_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LaunchTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_launch_template',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultVersion = config.defaultVersion;
    this._description = config.description;
    this._disableApiTermination = config.disableApiTermination;
    this._ebsOptimized = config.ebsOptimized;
    this._imageId = config.imageId;
    this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
    this._instanceType = config.instanceType;
    this._kernelId = config.kernelId;
    this._keyName = config.keyName;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._ramDiskId = config.ramDiskId;
    this._securityGroupNames = config.securityGroupNames;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._updateDefaultVersion = config.updateDefaultVersion;
    this._userData = config.userData;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._blockDeviceMappings = config.blockDeviceMappings;
    this._capacityReservationSpecification = config.capacityReservationSpecification;
    this._cpuOptions = config.cpuOptions;
    this._creditSpecification = config.creditSpecification;
    this._elasticGpuSpecifications = config.elasticGpuSpecifications;
    this._elasticInferenceAccelerator = config.elasticInferenceAccelerator;
    this._enclaveOptions = config.enclaveOptions;
    this._hibernationOptions = config.hibernationOptions;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._instanceMarketOptions = config.instanceMarketOptions;
    this._licenseSpecification = config.licenseSpecification;
    this._metadataOptions = config.metadataOptions;
    this._monitoring = config.monitoring;
    this._networkInterfaces = config.networkInterfaces;
    this._placement = config.placement;
    this._tagSpecifications = config.tagSpecifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_version - computed: true, optional: true, required: false
  private _defaultVersion?: number;
  public get defaultVersion() {
    return this.getNumberAttribute('default_version');
  }
  public set defaultVersion(value: number) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // disable_api_termination - computed: false, optional: true, required: false
  private _disableApiTermination?: boolean | cdktf.IResolvable;
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktf.IResolvable ) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: string;
  public get ebsOptimized() {
    return this.getStringAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: string ) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string;
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string ) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId
  }

  // instance_initiated_shutdown_behavior - computed: false, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string;
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }
  public set instanceInitiatedShutdownBehavior(value: string ) {
    this._instanceInitiatedShutdownBehavior = value;
  }
  public resetInstanceInitiatedShutdownBehavior() {
    this._instanceInitiatedShutdownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInitiatedShutdownBehaviorInput() {
    return this._instanceInitiatedShutdownBehavior
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string ) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string;
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string ) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string ) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // ram_disk_id - computed: false, optional: true, required: false
  private _ramDiskId?: string;
  public get ramDiskId() {
    return this.getStringAttribute('ram_disk_id');
  }
  public set ramDiskId(value: string ) {
    this._ramDiskId = value;
  }
  public resetRamDiskId() {
    this._ramDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramDiskIdInput() {
    return this._ramDiskId
  }

  // security_group_names - computed: false, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this.getListAttribute('security_group_names');
  }
  public set securityGroupNames(value: string[] ) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // update_default_version - computed: false, optional: true, required: false
  private _updateDefaultVersion?: boolean | cdktf.IResolvable;
  public get updateDefaultVersion() {
    return this.getBooleanAttribute('update_default_version');
  }
  public set updateDefaultVersion(value: boolean | cdktf.IResolvable ) {
    this._updateDefaultVersion = value;
  }
  public resetUpdateDefaultVersion() {
    this._updateDefaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDefaultVersionInput() {
    return this._updateDefaultVersion
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string ) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData
  }

  // vpc_security_group_ids - computed: false, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] ) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
  public get blockDeviceMappings() {
    return this.interpolationForAttribute('block_device_mappings') as any;
  }
  public set blockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[] ) {
    this._blockDeviceMappings = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings
  }

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification[];
  public get capacityReservationSpecification() {
    return this.interpolationForAttribute('capacity_reservation_specification') as any;
  }
  public set capacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification[] ) {
    this._capacityReservationSpecification = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification
  }

  // cpu_options - computed: false, optional: true, required: false
  private _cpuOptions?: LaunchTemplateCpuOptions[];
  public get cpuOptions() {
    return this.interpolationForAttribute('cpu_options') as any;
  }
  public set cpuOptions(value: LaunchTemplateCpuOptions[] ) {
    this._cpuOptions = value;
  }
  public resetCpuOptions() {
    this._cpuOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsInput() {
    return this._cpuOptions
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: LaunchTemplateCreditSpecification[];
  public get creditSpecification() {
    return this.interpolationForAttribute('credit_specification') as any;
  }
  public set creditSpecification(value: LaunchTemplateCreditSpecification[] ) {
    this._creditSpecification = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification
  }

  // elastic_gpu_specifications - computed: false, optional: true, required: false
  private _elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
  public get elasticGpuSpecifications() {
    return this.interpolationForAttribute('elastic_gpu_specifications') as any;
  }
  public set elasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[] ) {
    this._elasticGpuSpecifications = value;
  }
  public resetElasticGpuSpecifications() {
    this._elasticGpuSpecifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticGpuSpecificationsInput() {
    return this._elasticGpuSpecifications
  }

  // elastic_inference_accelerator - computed: false, optional: true, required: false
  private _elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator[];
  public get elasticInferenceAccelerator() {
    return this.interpolationForAttribute('elastic_inference_accelerator') as any;
  }
  public set elasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator[] ) {
    this._elasticInferenceAccelerator = value;
  }
  public resetElasticInferenceAccelerator() {
    this._elasticInferenceAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInferenceAcceleratorInput() {
    return this._elasticInferenceAccelerator
  }

  // enclave_options - computed: false, optional: true, required: false
  private _enclaveOptions?: LaunchTemplateEnclaveOptions[];
  public get enclaveOptions() {
    return this.interpolationForAttribute('enclave_options') as any;
  }
  public set enclaveOptions(value: LaunchTemplateEnclaveOptions[] ) {
    this._enclaveOptions = value;
  }
  public resetEnclaveOptions() {
    this._enclaveOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveOptionsInput() {
    return this._enclaveOptions
  }

  // hibernation_options - computed: false, optional: true, required: false
  private _hibernationOptions?: LaunchTemplateHibernationOptions[];
  public get hibernationOptions() {
    return this.interpolationForAttribute('hibernation_options') as any;
  }
  public set hibernationOptions(value: LaunchTemplateHibernationOptions[] ) {
    this._hibernationOptions = value;
  }
  public resetHibernationOptions() {
    this._hibernationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationOptionsInput() {
    return this._hibernationOptions
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: LaunchTemplateIamInstanceProfile[];
  public get iamInstanceProfile() {
    return this.interpolationForAttribute('iam_instance_profile') as any;
  }
  public set iamInstanceProfile(value: LaunchTemplateIamInstanceProfile[] ) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile
  }

  // instance_market_options - computed: false, optional: true, required: false
  private _instanceMarketOptions?: LaunchTemplateInstanceMarketOptions[];
  public get instanceMarketOptions() {
    return this.interpolationForAttribute('instance_market_options') as any;
  }
  public set instanceMarketOptions(value: LaunchTemplateInstanceMarketOptions[] ) {
    this._instanceMarketOptions = value;
  }
  public resetInstanceMarketOptions() {
    this._instanceMarketOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMarketOptionsInput() {
    return this._instanceMarketOptions
  }

  // license_specification - computed: false, optional: true, required: false
  private _licenseSpecification?: LaunchTemplateLicenseSpecification[];
  public get licenseSpecification() {
    return this.interpolationForAttribute('license_specification') as any;
  }
  public set licenseSpecification(value: LaunchTemplateLicenseSpecification[] ) {
    this._licenseSpecification = value;
  }
  public resetLicenseSpecification() {
    this._licenseSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSpecificationInput() {
    return this._licenseSpecification
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: LaunchTemplateMetadataOptions[];
  public get metadataOptions() {
    return this.interpolationForAttribute('metadata_options') as any;
  }
  public set metadataOptions(value: LaunchTemplateMetadataOptions[] ) {
    this._metadataOptions = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: LaunchTemplateMonitoring[];
  public get monitoring() {
    return this.interpolationForAttribute('monitoring') as any;
  }
  public set monitoring(value: LaunchTemplateMonitoring[] ) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces?: LaunchTemplateNetworkInterfaces[];
  public get networkInterfaces() {
    return this.interpolationForAttribute('network_interfaces') as any;
  }
  public set networkInterfaces(value: LaunchTemplateNetworkInterfaces[] ) {
    this._networkInterfaces = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: LaunchTemplatePlacement[];
  public get placement() {
    return this.interpolationForAttribute('placement') as any;
  }
  public set placement(value: LaunchTemplatePlacement[] ) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // tag_specifications - computed: false, optional: true, required: false
  private _tagSpecifications?: LaunchTemplateTagSpecifications[];
  public get tagSpecifications() {
    return this.interpolationForAttribute('tag_specifications') as any;
  }
  public set tagSpecifications(value: LaunchTemplateTagSpecifications[] ) {
    this._tagSpecifications = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_version: cdktf.numberToTerraform(this._defaultVersion),
      description: cdktf.stringToTerraform(this._description),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kernel_id: cdktf.stringToTerraform(this._kernelId),
      key_name: cdktf.stringToTerraform(this._keyName),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
      capacity_reservation_specification: cdktf.listMapper(launchTemplateCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
      cpu_options: cdktf.listMapper(launchTemplateCpuOptionsToTerraform)(this._cpuOptions),
      credit_specification: cdktf.listMapper(launchTemplateCreditSpecificationToTerraform)(this._creditSpecification),
      elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform)(this._elasticGpuSpecifications),
      elastic_inference_accelerator: cdktf.listMapper(launchTemplateElasticInferenceAcceleratorToTerraform)(this._elasticInferenceAccelerator),
      enclave_options: cdktf.listMapper(launchTemplateEnclaveOptionsToTerraform)(this._enclaveOptions),
      hibernation_options: cdktf.listMapper(launchTemplateHibernationOptionsToTerraform)(this._hibernationOptions),
      iam_instance_profile: cdktf.listMapper(launchTemplateIamInstanceProfileToTerraform)(this._iamInstanceProfile),
      instance_market_options: cdktf.listMapper(launchTemplateInstanceMarketOptionsToTerraform)(this._instanceMarketOptions),
      license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform)(this._licenseSpecification),
      metadata_options: cdktf.listMapper(launchTemplateMetadataOptionsToTerraform)(this._metadataOptions),
      monitoring: cdktf.listMapper(launchTemplateMonitoringToTerraform)(this._monitoring),
      network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform)(this._networkInterfaces),
      placement: cdktf.listMapper(launchTemplatePlacementToTerraform)(this._placement),
      tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform)(this._tagSpecifications),
    };
  }
}
