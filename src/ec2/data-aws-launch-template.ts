// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsLaunchTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#tags DataAwsLaunchTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#filter DataAwsLaunchTemplate#filter}
  */
  readonly filter?: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable;
}
export class DataAwsLaunchTemplateBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getStringAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export class DataAwsLaunchTemplateBlockDeviceMappings extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  public get ebs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ebs');
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget extends cdktf.ComplexComputedList {

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // capacity_reservation_resource_group_arn - computed: true, optional: false, required: false
  public get capacityReservationResourceGroupArn() {
    return this.getStringAttribute('capacity_reservation_resource_group_arn');
  }
}
export class DataAwsLaunchTemplateCapacityReservationSpecification extends cdktf.ComplexComputedList {

  // capacity_reservation_preference - computed: true, optional: false, required: false
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }

  // capacity_reservation_target - computed: true, optional: false, required: false
  public get capacityReservationTarget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('capacity_reservation_target');
  }
}
export class DataAwsLaunchTemplateCpuOptions extends cdktf.ComplexComputedList {

  // core_count - computed: true, optional: false, required: false
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
}
export class DataAwsLaunchTemplateCreditSpecification extends cdktf.ComplexComputedList {

  // cpu_credits - computed: true, optional: false, required: false
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
}
export class DataAwsLaunchTemplateElasticGpuSpecifications extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsLaunchTemplateElasticInferenceAccelerator extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsLaunchTemplateEnclaveOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsLaunchTemplateHibernationOptions extends cdktf.ComplexComputedList {

  // configured - computed: true, optional: false, required: false
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
}
export class DataAwsLaunchTemplateIamInstanceProfile extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions extends cdktf.ComplexComputedList {

  // block_duration_minutes - computed: true, optional: false, required: false
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }

  // instance_interruption_behavior - computed: true, optional: false, required: false
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // max_price - computed: true, optional: false, required: false
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }

  // spot_instance_type - computed: true, optional: false, required: false
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
}
export class DataAwsLaunchTemplateInstanceMarketOptions extends cdktf.ComplexComputedList {

  // market_type - computed: true, optional: false, required: false
  public get marketType() {
    return this.getStringAttribute('market_type');
  }

  // spot_options - computed: true, optional: false, required: false
  public get spotOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spot_options');
  }
}
export class DataAwsLaunchTemplateLicenseSpecification extends cdktf.ComplexComputedList {

  // license_configuration_arn - computed: true, optional: false, required: false
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
}
export class DataAwsLaunchTemplateMetadataOptions extends cdktf.ComplexComputedList {

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // http_protocol_ipv6 - computed: true, optional: false, required: false
  public get httpProtocolIpv6() {
    return this.getStringAttribute('http_protocol_ipv6');
  }

  // http_put_response_hop_limit - computed: true, optional: false, required: false
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }

  // http_tokens - computed: true, optional: false, required: false
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }

  // instance_metadata_tags - computed: true, optional: false, required: false
  public get instanceMetadataTags() {
    return this.getStringAttribute('instance_metadata_tags');
  }
}
export class DataAwsLaunchTemplateMonitoring extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsLaunchTemplateNetworkInterfaces extends cdktf.ComplexComputedList {

  // associate_carrier_ip_address - computed: true, optional: false, required: false
  public get associateCarrierIpAddress() {
    return this.getStringAttribute('associate_carrier_ip_address');
  }

  // associate_public_ip_address - computed: true, optional: false, required: false
  public get associatePublicIpAddress() {
    return this.getStringAttribute('associate_public_ip_address');
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getStringAttribute('delete_on_termination');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv4_address_count - computed: true, optional: false, required: false
  public get ipv4AddressCount() {
    return this.getNumberAttribute('ipv4_address_count');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // ipv4_prefix_count - computed: true, optional: false, required: false
  public get ipv4PrefixCount() {
    return this.getNumberAttribute('ipv4_prefix_count');
  }

  // ipv4_prefixes - computed: true, optional: false, required: false
  public get ipv4Prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_prefixes'));
  }

  // ipv6_address_count - computed: true, optional: false, required: false
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
  }

  // ipv6_prefix_count - computed: true, optional: false, required: false
  public get ipv6PrefixCount() {
    return this.getNumberAttribute('ipv6_prefix_count');
  }

  // ipv6_prefixes - computed: true, optional: false, required: false
  public get ipv6Prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_prefixes'));
  }

  // network_card_index - computed: true, optional: false, required: false
  public get networkCardIndex() {
    return this.getNumberAttribute('network_card_index');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAwsLaunchTemplatePlacement extends cdktf.ComplexComputedList {

  // affinity - computed: true, optional: false, required: false
  public get affinity() {
    return this.getStringAttribute('affinity');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_resource_group_arn - computed: true, optional: false, required: false
  public get hostResourceGroupArn() {
    return this.getStringAttribute('host_resource_group_arn');
  }

  // partition_number - computed: true, optional: false, required: false
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }

  // spread_domain - computed: true, optional: false, required: false
  public get spreadDomain() {
    return this.getStringAttribute('spread_domain');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
}
export class DataAwsLaunchTemplatePrivateDnsNameOptions extends cdktf.ComplexComputedList {

  // enable_resource_name_dns_a_record - computed: true, optional: false, required: false
  public get enableResourceNameDnsARecord() {
    return this.getBooleanAttribute('enable_resource_name_dns_a_record');
  }

  // enable_resource_name_dns_aaaa_record - computed: true, optional: false, required: false
  public get enableResourceNameDnsAaaaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record');
  }

  // hostname_type - computed: true, optional: false, required: false
  public get hostnameType() {
    return this.getStringAttribute('hostname_type');
  }
}
export class DataAwsLaunchTemplateTagSpecifications extends cdktf.ComplexComputedList {

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
}
export interface DataAwsLaunchTemplateFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#values DataAwsLaunchTemplate#values}
  */
  readonly values: string[];
}

export function dataAwsLaunchTemplateFilterToTerraform(struct?: DataAwsLaunchTemplateFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template aws_launch_template}
*/
export class DataAwsLaunchTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_launch_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_template aws_launch_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLaunchTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLaunchTemplateConfig = {}) {
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
    this._name = config.name;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: false, required: false
  public blockDeviceMappings(index: string) {
    return new DataAwsLaunchTemplateBlockDeviceMappings(this, 'block_device_mappings', index, false);
  }

  // capacity_reservation_specification - computed: true, optional: false, required: false
  public capacityReservationSpecification(index: string) {
    return new DataAwsLaunchTemplateCapacityReservationSpecification(this, 'capacity_reservation_specification', index, false);
  }

  // cpu_options - computed: true, optional: false, required: false
  public cpuOptions(index: string) {
    return new DataAwsLaunchTemplateCpuOptions(this, 'cpu_options', index, false);
  }

  // credit_specification - computed: true, optional: false, required: false
  public creditSpecification(index: string) {
    return new DataAwsLaunchTemplateCreditSpecification(this, 'credit_specification', index, false);
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getNumberAttribute('default_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_api_termination - computed: true, optional: false, required: false
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getStringAttribute('ebs_optimized');
  }

  // elastic_gpu_specifications - computed: true, optional: false, required: false
  public elasticGpuSpecifications(index: string) {
    return new DataAwsLaunchTemplateElasticGpuSpecifications(this, 'elastic_gpu_specifications', index, false);
  }

  // elastic_inference_accelerator - computed: true, optional: false, required: false
  public elasticInferenceAccelerator(index: string) {
    return new DataAwsLaunchTemplateElasticInferenceAccelerator(this, 'elastic_inference_accelerator', index, false);
  }

  // enclave_options - computed: true, optional: false, required: false
  public enclaveOptions(index: string) {
    return new DataAwsLaunchTemplateEnclaveOptions(this, 'enclave_options', index, false);
  }

  // hibernation_options - computed: true, optional: false, required: false
  public hibernationOptions(index: string) {
    return new DataAwsLaunchTemplateHibernationOptions(this, 'hibernation_options', index, false);
  }

  // iam_instance_profile - computed: true, optional: false, required: false
  public iamInstanceProfile(index: string) {
    return new DataAwsLaunchTemplateIamInstanceProfile(this, 'iam_instance_profile', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_initiated_shutdown_behavior - computed: true, optional: false, required: false
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }

  // instance_market_options - computed: true, optional: false, required: false
  public instanceMarketOptions(index: string) {
    return new DataAwsLaunchTemplateInstanceMarketOptions(this, 'instance_market_options', index, false);
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // license_specification - computed: true, optional: false, required: false
  public licenseSpecification(index: string) {
    return new DataAwsLaunchTemplateLicenseSpecification(this, 'license_specification', index, false);
  }

  // metadata_options - computed: true, optional: false, required: false
  public metadataOptions(index: string) {
    return new DataAwsLaunchTemplateMetadataOptions(this, 'metadata_options', index, false);
  }

  // monitoring - computed: true, optional: false, required: false
  public monitoring(index: string) {
    return new DataAwsLaunchTemplateMonitoring(this, 'monitoring', index, false);
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
    return this._name;
  }

  // network_interfaces - computed: true, optional: false, required: false
  public networkInterfaces(index: string) {
    return new DataAwsLaunchTemplateNetworkInterfaces(this, 'network_interfaces', index, false);
  }

  // placement - computed: true, optional: false, required: false
  public placement(index: string) {
    return new DataAwsLaunchTemplatePlacement(this, 'placement', index, false);
  }

  // private_dns_name_options - computed: true, optional: false, required: false
  public privateDnsNameOptions(index: string) {
    return new DataAwsLaunchTemplatePrivateDnsNameOptions(this, 'private_dns_name_options', index, false);
  }

  // ram_disk_id - computed: true, optional: false, required: false
  public get ramDiskId() {
    return this.getStringAttribute('ram_disk_id');
  }

  // security_group_names - computed: true, optional: false, required: false
  public get securityGroupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_names'));
  }

  // tag_specifications - computed: true, optional: false, required: false
  public tagSpecifications(index: string) {
    return new DataAwsLaunchTemplateTagSpecifications(this, 'tag_specifications', index, false);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsLaunchTemplateFilterToTerraform)(this._filter),
    };
  }
}
