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
  /** enclave_options block */
  readonly enclaveOptions?: LaunchTemplateEnclaveOptions[];
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
  readonly throughput?: number;
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
export interface LaunchTemplateEnclaveOptions {
  readonly enabled?: boolean;
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
  readonly associateCarrierIpAddress?: string;
  readonly associatePublicIpAddress?: string;
  readonly deleteOnTermination?: string;
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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_version - computed: true, optional: true, required: false
  private _defaultVersion?: number;
  public get defaultVersion() {
    return this._defaultVersion ?? this.getNumberAttribute('default_version');
  }
  public set defaultVersion(value: number | undefined) {
    this._defaultVersion = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // disable_api_termination - computed: false, optional: true, required: false
  private _disableApiTermination?: boolean;
  public get disableApiTermination() {
    return this._disableApiTermination;
  }
  public set disableApiTermination(value: boolean | undefined) {
    this._disableApiTermination = value;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: string;
  public get ebsOptimized() {
    return this._ebsOptimized;
  }
  public set ebsOptimized(value: string | undefined) {
    this._ebsOptimized = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string | undefined) {
    this._imageId = value;
  }

  // instance_initiated_shutdown_behavior - computed: false, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string;
  public get instanceInitiatedShutdownBehavior() {
    return this._instanceInitiatedShutdownBehavior;
  }
  public set instanceInitiatedShutdownBehavior(value: string | undefined) {
    this._instanceInitiatedShutdownBehavior = value;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string | undefined) {
    this._instanceType = value;
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string;
  public get kernelId() {
    return this._kernelId;
  }
  public set kernelId(value: string | undefined) {
    this._kernelId = value;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this._keyName;
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
  }

  // latest_version - computed: true, optional: false, required: true
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // ram_disk_id - computed: false, optional: true, required: false
  private _ramDiskId?: string;
  public get ramDiskId() {
    return this._ramDiskId;
  }
  public set ramDiskId(value: string | undefined) {
    this._ramDiskId = value;
  }

  // security_group_names - computed: false, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this._securityGroupNames;
  }
  public set securityGroupNames(value: string[] | undefined) {
    this._securityGroupNames = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // update_default_version - computed: false, optional: true, required: false
  private _updateDefaultVersion?: boolean;
  public get updateDefaultVersion() {
    return this._updateDefaultVersion;
  }
  public set updateDefaultVersion(value: boolean | undefined) {
    this._updateDefaultVersion = value;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this._userData;
  }
  public set userData(value: string | undefined) {
    this._userData = value;
  }

  // vpc_security_group_ids - computed: false, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this._vpcSecurityGroupIds;
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this._vpcSecurityGroupIds = value;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public set blockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[] | undefined) {
    this._blockDeviceMappings = value;
  }

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification[];
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }
  public set capacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification[] | undefined) {
    this._capacityReservationSpecification = value;
  }

  // cpu_options - computed: false, optional: true, required: false
  private _cpuOptions?: LaunchTemplateCpuOptions[];
  public get cpuOptions() {
    return this._cpuOptions;
  }
  public set cpuOptions(value: LaunchTemplateCpuOptions[] | undefined) {
    this._cpuOptions = value;
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: LaunchTemplateCreditSpecification[];
  public get creditSpecification() {
    return this._creditSpecification;
  }
  public set creditSpecification(value: LaunchTemplateCreditSpecification[] | undefined) {
    this._creditSpecification = value;
  }

  // elastic_gpu_specifications - computed: false, optional: true, required: false
  private _elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
  public get elasticGpuSpecifications() {
    return this._elasticGpuSpecifications;
  }
  public set elasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[] | undefined) {
    this._elasticGpuSpecifications = value;
  }

  // elastic_inference_accelerator - computed: false, optional: true, required: false
  private _elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator[];
  public get elasticInferenceAccelerator() {
    return this._elasticInferenceAccelerator;
  }
  public set elasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator[] | undefined) {
    this._elasticInferenceAccelerator = value;
  }

  // enclave_options - computed: false, optional: true, required: false
  private _enclaveOptions?: LaunchTemplateEnclaveOptions[];
  public get enclaveOptions() {
    return this._enclaveOptions;
  }
  public set enclaveOptions(value: LaunchTemplateEnclaveOptions[] | undefined) {
    this._enclaveOptions = value;
  }

  // hibernation_options - computed: false, optional: true, required: false
  private _hibernationOptions?: LaunchTemplateHibernationOptions[];
  public get hibernationOptions() {
    return this._hibernationOptions;
  }
  public set hibernationOptions(value: LaunchTemplateHibernationOptions[] | undefined) {
    this._hibernationOptions = value;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: LaunchTemplateIamInstanceProfile[];
  public get iamInstanceProfile() {
    return this._iamInstanceProfile;
  }
  public set iamInstanceProfile(value: LaunchTemplateIamInstanceProfile[] | undefined) {
    this._iamInstanceProfile = value;
  }

  // instance_market_options - computed: false, optional: true, required: false
  private _instanceMarketOptions?: LaunchTemplateInstanceMarketOptions[];
  public get instanceMarketOptions() {
    return this._instanceMarketOptions;
  }
  public set instanceMarketOptions(value: LaunchTemplateInstanceMarketOptions[] | undefined) {
    this._instanceMarketOptions = value;
  }

  // license_specification - computed: false, optional: true, required: false
  private _licenseSpecification?: LaunchTemplateLicenseSpecification[];
  public get licenseSpecification() {
    return this._licenseSpecification;
  }
  public set licenseSpecification(value: LaunchTemplateLicenseSpecification[] | undefined) {
    this._licenseSpecification = value;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: LaunchTemplateMetadataOptions[];
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public set metadataOptions(value: LaunchTemplateMetadataOptions[] | undefined) {
    this._metadataOptions = value;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: LaunchTemplateMonitoring[];
  public get monitoring() {
    return this._monitoring;
  }
  public set monitoring(value: LaunchTemplateMonitoring[] | undefined) {
    this._monitoring = value;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces?: LaunchTemplateNetworkInterfaces[];
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public set networkInterfaces(value: LaunchTemplateNetworkInterfaces[] | undefined) {
    this._networkInterfaces = value;
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: LaunchTemplatePlacement[];
  public get placement() {
    return this._placement;
  }
  public set placement(value: LaunchTemplatePlacement[] | undefined) {
    this._placement = value;
  }

  // tag_specifications - computed: false, optional: true, required: false
  private _tagSpecifications?: LaunchTemplateTagSpecifications[];
  public get tagSpecifications() {
    return this._tagSpecifications;
  }
  public set tagSpecifications(value: LaunchTemplateTagSpecifications[] | undefined) {
    this._tagSpecifications = value;
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
      enclave_options: this._enclaveOptions,
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
