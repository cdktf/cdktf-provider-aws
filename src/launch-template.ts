// https://www.terraform.io/docs/providers/aws/r/launch_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly defaultVersion?: number;
  readonly description?: string;
  readonly disableApiTermination?: boolean;
  readonly ebsOptimized?: string;
  readonly imageId?: string;
  readonly instanceInitiatedShutdownBehavior?: string;
  readonly instanceType?: string;
  readonly kernelId?: string;
  readonly keyName?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly ramDiskId?: string;
  readonly securityGroupNames?: string[];
  readonly tags?: { [key: string]: string };
  readonly updateDefaultVersion?: boolean;
  readonly userData?: string;
  readonly vpcSecurityGroupIds?: string[];
  /** block_device_mappings block */
  readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
  /** capacity_reservation_specification block */
  readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification[];
  /** cpu_options block */
  readonly cpuOptions?: LaunchTemplateCpuOptions[];
  /** credit_specification block */
  readonly creditSpecification?: LaunchTemplateCreditSpecification[];
  /** elastic_gpu_specifications block */
  readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
  /** elastic_inference_accelerator block */
  readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator[];
  /** hibernation_options block */
  readonly hibernationOptions?: LaunchTemplateHibernationOptions[];
  /** iam_instance_profile block */
  readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile[];
  /** instance_market_options block */
  readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions[];
  /** license_specification block */
  readonly licenseSpecification?: LaunchTemplateLicenseSpecification[];
  /** metadata_options block */
  readonly metadataOptions?: LaunchTemplateMetadataOptions[];
  /** monitoring block */
  readonly monitoring?: LaunchTemplateMonitoring[];
  /** network_interfaces block */
  readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[];
  /** placement block */
  readonly placement?: LaunchTemplatePlacement[];
  /** tag_specifications block */
  readonly tagSpecifications?: LaunchTemplateTagSpecifications[];
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
  readonly deleteOnTermination?: string;
  readonly encrypted?: string;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
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
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface LaunchTemplateBlockDeviceMappings {
  readonly deviceName?: string;
  readonly noDevice?: string;
  readonly virtualName?: string;
  /** ebs block */
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
  readonly capacityReservationId?: string;
}

function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
  }
}

export interface LaunchTemplateCapacityReservationSpecification {
  readonly capacityReservationPreference?: string;
  /** capacity_reservation_target block */
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
  readonly coreCount?: number;
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
  readonly cpuCredits?: string;
}

function launchTemplateCreditSpecificationToTerraform(struct?: LaunchTemplateCreditSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
  }
}

export interface LaunchTemplateElasticGpuSpecifications {
  readonly type: string;
}

function launchTemplateElasticGpuSpecificationsToTerraform(struct?: LaunchTemplateElasticGpuSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LaunchTemplateElasticInferenceAccelerator {
  readonly type: string;
}

function launchTemplateElasticInferenceAcceleratorToTerraform(struct?: LaunchTemplateElasticInferenceAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LaunchTemplateHibernationOptions {
  readonly configured: boolean;
}

function launchTemplateHibernationOptionsToTerraform(struct?: LaunchTemplateHibernationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configured: cdktf.booleanToTerraform(struct!.configured),
  }
}

export interface LaunchTemplateIamInstanceProfile {
  readonly arn?: string;
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
  readonly blockDurationMinutes?: number;
  readonly instanceInterruptionBehavior?: string;
  readonly maxPrice?: string;
  readonly spotInstanceType?: string;
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
  readonly marketType?: string;
  /** spot_options block */
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
  readonly licenseConfigurationArn: string;
}

function launchTemplateLicenseSpecificationToTerraform(struct?: LaunchTemplateLicenseSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    license_configuration_arn: cdktf.stringToTerraform(struct!.licenseConfigurationArn),
  }
}

export interface LaunchTemplateMetadataOptions {
  readonly httpEndpoint?: string;
  readonly httpPutResponseHopLimit?: number;
  readonly httpTokens?: string;
}

function launchTemplateMetadataOptionsToTerraform(struct?: LaunchTemplateMetadataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export interface LaunchTemplateMonitoring {
  readonly enabled?: boolean;
}

function launchTemplateMonitoringToTerraform(struct?: LaunchTemplateMonitoring): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LaunchTemplateNetworkInterfaces {
  readonly associatePublicIpAddress?: string;
  readonly deleteOnTermination?: boolean;
  readonly description?: string;
  readonly deviceIndex?: number;
  readonly ipv4AddressCount?: number;
  readonly ipv4Addresses?: string[];
  readonly ipv6AddressCount?: number;
  readonly ipv6Addresses?: string[];
  readonly networkInterfaceId?: string;
  readonly privateIpAddress?: string;
  readonly securityGroups?: string[];
  readonly subnetId?: string;
}

function launchTemplateNetworkInterfacesToTerraform(struct?: LaunchTemplateNetworkInterfaces): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associate_public_ip_address: cdktf.stringToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
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
  readonly affinity?: string;
  readonly availabilityZone?: string;
  readonly groupName?: string;
  readonly hostId?: string;
  readonly partitionNumber?: number;
  readonly spreadDomain?: string;
  readonly tenancy?: string;
}

function launchTemplatePlacementToTerraform(struct?: LaunchTemplatePlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    partition_number: cdktf.numberToTerraform(struct!.partitionNumber),
    spread_domain: cdktf.stringToTerraform(struct!.spreadDomain),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export interface LaunchTemplateTagSpecifications {
  readonly resourceType?: string;
  readonly tags?: { [key: string]: string };
}

function launchTemplateTagSpecificationsToTerraform(struct?: LaunchTemplateTagSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}


// Resource

export class LaunchTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._updateDefaultVersion = config.updateDefaultVersion;
    this._userData = config.userData;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._blockDeviceMappings = config.blockDeviceMappings;
    this._capacityReservationSpecification = config.capacityReservationSpecification;
    this._cpuOptions = config.cpuOptions;
    this._creditSpecification = config.creditSpecification;
    this._elasticGpuSpecifications = config.elasticGpuSpecifications;
    this._elasticInferenceAccelerator = config.elasticInferenceAccelerator;
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
  private _disableApiTermination?: boolean;
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean ) {
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // update_default_version - computed: false, optional: true, required: false
  private _updateDefaultVersion?: boolean;
  public get updateDefaultVersion() {
    return this.getBooleanAttribute('update_default_version');
  }
  public set updateDefaultVersion(value: boolean ) {
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
      update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
      capacity_reservation_specification: cdktf.listMapper(launchTemplateCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
      cpu_options: cdktf.listMapper(launchTemplateCpuOptionsToTerraform)(this._cpuOptions),
      credit_specification: cdktf.listMapper(launchTemplateCreditSpecificationToTerraform)(this._creditSpecification),
      elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform)(this._elasticGpuSpecifications),
      elastic_inference_accelerator: cdktf.listMapper(launchTemplateElasticInferenceAcceleratorToTerraform)(this._elasticInferenceAccelerator),
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
