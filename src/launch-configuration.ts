// https://www.terraform.io/docs/providers/aws/r/launch_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LaunchConfigurationConfig extends TerraformMetaArguments {
  readonly associatePublicIpAddress?: boolean;
  readonly ebsOptimized?: boolean;
  readonly enableMonitoring?: boolean;
  readonly iamInstanceProfile?: string;
  readonly imageId: string;
  readonly instanceType: string;
  readonly keyName?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly placementTenancy?: string;
  readonly securityGroups?: string[];
  readonly spotPrice?: string;
  readonly userData?: string;
  readonly userDataBase64?: string;
  readonly vpcClassicLinkId?: string;
  readonly vpcClassicLinkSecurityGroups?: string[];
  /** ebs_block_device block */
  readonly ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
  /** root_block_device block */
  readonly rootBlockDevice?: LaunchConfigurationRootBlockDevice[];
}
export interface LaunchConfigurationEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly noDevice?: boolean;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface LaunchConfigurationEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}
export interface LaunchConfigurationRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}

// Resource

export class LaunchConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LaunchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_launch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._ebsOptimized = config.ebsOptimized;
    this._enableMonitoring = config.enableMonitoring;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._imageId = config.imageId;
    this._instanceType = config.instanceType;
    this._keyName = config.keyName;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._placementTenancy = config.placementTenancy;
    this._securityGroups = config.securityGroups;
    this._spotPrice = config.spotPrice;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._vpcClassicLinkId = config.vpcClassicLinkId;
    this._vpcClassicLinkSecurityGroups = config.vpcClassicLinkSecurityGroups;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._rootBlockDevice = config.rootBlockDevice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean;
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean ) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean;
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean ) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string;
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string ) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId: string;
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
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

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string;
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }
  public set placementTenancy(value: string ) {
    this._placementTenancy = value;
  }
  public resetPlacementTenancy() {
    this._placementTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTenancyInput() {
    return this._placementTenancy
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] ) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string;
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string ) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice
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

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string;
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string ) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64
  }

  // vpc_classic_link_id - computed: false, optional: true, required: false
  private _vpcClassicLinkId?: string;
  public get vpcClassicLinkId() {
    return this.getStringAttribute('vpc_classic_link_id');
  }
  public set vpcClassicLinkId(value: string ) {
    this._vpcClassicLinkId = value;
  }
  public resetVpcClassicLinkId() {
    this._vpcClassicLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcClassicLinkIdInput() {
    return this._vpcClassicLinkId
  }

  // vpc_classic_link_security_groups - computed: false, optional: true, required: false
  private _vpcClassicLinkSecurityGroups?: string[];
  public get vpcClassicLinkSecurityGroups() {
    return this.getListAttribute('vpc_classic_link_security_groups');
  }
  public set vpcClassicLinkSecurityGroups(value: string[] ) {
    this._vpcClassicLinkSecurityGroups = value;
  }
  public resetVpcClassicLinkSecurityGroups() {
    this._vpcClassicLinkSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcClassicLinkSecurityGroupsInput() {
    return this._vpcClassicLinkSecurityGroups
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: LaunchConfigurationEbsBlockDevice[] ) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: LaunchConfigurationEphemeralBlockDevice[] ) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: LaunchConfigurationRootBlockDevice[];
  public get rootBlockDevice() {
    return this.interpolationForAttribute('root_block_device') as any;
  }
  public set rootBlockDevice(value: LaunchConfigurationRootBlockDevice[] ) {
    this._rootBlockDevice = value;
  }
  public resetRootBlockDevice() {
    this._rootBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootBlockDeviceInput() {
    return this._rootBlockDevice
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_public_ip_address: this._associatePublicIpAddress,
      ebs_optimized: this._ebsOptimized,
      enable_monitoring: this._enableMonitoring,
      iam_instance_profile: this._iamInstanceProfile,
      image_id: this._imageId,
      instance_type: this._instanceType,
      key_name: this._keyName,
      name: this._name,
      name_prefix: this._namePrefix,
      placement_tenancy: this._placementTenancy,
      security_groups: this._securityGroups,
      spot_price: this._spotPrice,
      user_data: this._userData,
      user_data_base64: this._userDataBase64,
      vpc_classic_link_id: this._vpcClassicLinkId,
      vpc_classic_link_security_groups: this._vpcClassicLinkSecurityGroups,
      ebs_block_device: this._ebsBlockDevice,
      ephemeral_block_device: this._ephemeralBlockDevice,
      root_block_device: this._rootBlockDevice,
    };
  }
}
