// https://www.terraform.io/docs/providers/aws/r/launch_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LaunchTemplateConfig extends TerraformMetaArguments {
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
export interface LaunchTemplateBlockDeviceMappings {
  readonly deviceName?: string;
  readonly noDevice?: string;
  readonly virtualName?: string;
  /** ebs block */
  readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs[];
}
export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
  readonly capacityReservationId?: string;
}
export interface LaunchTemplateCapacityReservationSpecification {
  readonly capacityReservationPreference?: string;
  /** capacity_reservation_target block */
  readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget[];
}
export interface LaunchTemplateCpuOptions {
  readonly coreCount?: number;
  readonly threadsPerCore?: number;
}
export interface LaunchTemplateCreditSpecification {
  readonly cpuCredits?: string;
}
export interface LaunchTemplateElasticGpuSpecifications {
  readonly type: string;
}
export interface LaunchTemplateElasticInferenceAccelerator {
  readonly type: string;
}
export interface LaunchTemplateHibernationOptions {
  readonly configured: boolean;
}
export interface LaunchTemplateIamInstanceProfile {
  readonly arn?: string;
  readonly name?: string;
}
export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
  readonly blockDurationMinutes?: number;
  readonly instanceInterruptionBehavior?: string;
  readonly maxPrice?: string;
  readonly spotInstanceType?: string;
  readonly validUntil?: string;
}
export interface LaunchTemplateInstanceMarketOptions {
  readonly marketType?: string;
  /** spot_options block */
  readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions[];
}
export interface LaunchTemplateLicenseSpecification {
  readonly licenseConfigurationArn: string;
}
export interface LaunchTemplateMetadataOptions {
  readonly httpEndpoint?: string;
  readonly httpPutResponseHopLimit?: number;
  readonly httpTokens?: string;
}
export interface LaunchTemplateMonitoring {
  readonly enabled?: boolean;
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
export interface LaunchTemplatePlacement {
  readonly affinity?: string;
  readonly availabilityZone?: string;
  readonly groupName?: string;
  readonly hostId?: string;
  readonly partitionNumber?: number;
  readonly spreadDomain?: string;
  readonly tenancy?: string;
}
export interface LaunchTemplateTagSpecifications {
  readonly resourceType?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class LaunchTemplate extends TerraformResource {

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
      default_version: this._defaultVersion,
      description: this._description,
      disable_api_termination: this._disableApiTermination,
      ebs_optimized: this._ebsOptimized,
      image_id: this._imageId,
      instance_initiated_shutdown_behavior: this._instanceInitiatedShutdownBehavior,
      instance_type: this._instanceType,
      kernel_id: this._kernelId,
      key_name: this._keyName,
      name: this._name,
      name_prefix: this._namePrefix,
      ram_disk_id: this._ramDiskId,
      security_group_names: this._securityGroupNames,
      tags: this._tags,
      update_default_version: this._updateDefaultVersion,
      user_data: this._userData,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      block_device_mappings: this._blockDeviceMappings,
      capacity_reservation_specification: this._capacityReservationSpecification,
      cpu_options: this._cpuOptions,
      credit_specification: this._creditSpecification,
      elastic_gpu_specifications: this._elasticGpuSpecifications,
      elastic_inference_accelerator: this._elasticInferenceAccelerator,
      hibernation_options: this._hibernationOptions,
      iam_instance_profile: this._iamInstanceProfile,
      instance_market_options: this._instanceMarketOptions,
      license_specification: this._licenseSpecification,
      metadata_options: this._metadataOptions,
      monitoring: this._monitoring,
      network_interfaces: this._networkInterfaces,
      placement: this._placement,
      tag_specifications: this._tagSpecifications,
    };
  }
}
