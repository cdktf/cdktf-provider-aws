// https://www.terraform.io/docs/providers/aws/r/launch_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_optimized LaunchConfiguration#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#enable_monitoring LaunchConfiguration#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iam_instance_profile LaunchConfiguration#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#image_id LaunchConfiguration#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#instance_type LaunchConfiguration#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#key_name LaunchConfiguration#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name LaunchConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name_prefix LaunchConfiguration#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#placement_tenancy LaunchConfiguration#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#security_groups LaunchConfiguration#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#spot_price LaunchConfiguration#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data LaunchConfiguration#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data_base64 LaunchConfiguration#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}
  */
  readonly vpcClassicLinkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}
  */
  readonly vpcClassicLinkSecurityGroups?: string[];
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_block_device LaunchConfiguration#ebs_block_device}
  */
  readonly ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
  /**
  * metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#metadata_options LaunchConfiguration#metadata_options}
  */
  readonly metadataOptions?: LaunchConfigurationMetadataOptions[];
  /**
  * root_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#root_block_device LaunchConfiguration#root_block_device}
  */
  readonly rootBlockDevice?: LaunchConfigurationRootBlockDevice[];
}
export interface LaunchConfigurationEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#no_device LaunchConfiguration#no_device}
  */
  readonly noDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#snapshot_id LaunchConfiguration#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#throughput LaunchConfiguration#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}
  */
  readonly volumeType?: string;
}

function launchConfigurationEbsBlockDeviceToTerraform(struct?: LaunchConfigurationEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    no_device: cdktf.booleanToTerraform(struct!.noDevice),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface LaunchConfigurationEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#virtual_name LaunchConfiguration#virtual_name}
  */
  readonly virtualName: string;
}

function launchConfigurationEphemeralBlockDeviceToTerraform(struct?: LaunchConfigurationEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface LaunchConfigurationMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_endpoint LaunchConfiguration#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_tokens LaunchConfiguration#http_tokens}
  */
  readonly httpTokens?: string;
}

function launchConfigurationMetadataOptionsToTerraform(struct?: LaunchConfigurationMetadataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export interface LaunchConfigurationRootBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#throughput LaunchConfiguration#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}
  */
  readonly volumeType?: string;
}

function launchConfigurationRootBlockDeviceToTerraform(struct?: LaunchConfigurationRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration}
*/
export class LaunchConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_launch_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchConfigurationConfig
  */
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
    this._metadataOptions = config.metadataOptions;
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
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable;
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable ) {
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
  private _ebsOptimized?: boolean | cdktf.IResolvable;
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
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
  private _enableMonitoring?: boolean | cdktf.IResolvable;
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable ) {
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

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: LaunchConfigurationMetadataOptions[];
  public get metadataOptions() {
    return this.interpolationForAttribute('metadata_options') as any;
  }
  public set metadataOptions(value: LaunchConfigurationMetadataOptions[] ) {
    this._metadataOptions = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions
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
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      key_name: cdktf.stringToTerraform(this._keyName),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
      vpc_classic_link_id: cdktf.stringToTerraform(this._vpcClassicLinkId),
      vpc_classic_link_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcClassicLinkSecurityGroups),
      ebs_block_device: cdktf.listMapper(launchConfigurationEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(launchConfigurationEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      metadata_options: cdktf.listMapper(launchConfigurationMetadataOptionsToTerraform)(this._metadataOptions),
      root_block_device: cdktf.listMapper(launchConfigurationRootBlockDeviceToTerraform)(this._rootBlockDevice),
    };
  }
}
