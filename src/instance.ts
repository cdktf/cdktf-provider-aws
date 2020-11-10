// https://www.terraform.io/docs/providers/aws/r/instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface InstanceConfig extends TerraformMetaArguments {
  readonly ami: string;
  readonly associatePublicIpAddress?: boolean;
  readonly availabilityZone?: string;
  readonly cpuCoreCount?: number;
  readonly cpuThreadsPerCore?: number;
  readonly disableApiTermination?: boolean;
  readonly ebsOptimized?: boolean;
  readonly fetchPasswordData?: boolean;
  readonly hibernation?: boolean;
  readonly hostId?: string;
  readonly iamInstanceProfile?: string;
  readonly instanceInitiatedShutdownBehavior?: string;
  readonly instanceType: string;
  readonly ipv6AddressCount?: number;
  readonly ipv6Addresses?: string[];
  readonly keyName?: string;
  readonly monitoring?: boolean;
  readonly placementGroup?: string;
  readonly privateIp?: string;
  readonly securityGroups?: string[];
  readonly sourceDestCheck?: boolean;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly tenancy?: string;
  readonly userData?: string;
  readonly userDataBase64?: string;
  readonly volumeTags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** credit_specification block */
  readonly creditSpecification?: InstanceCreditSpecification[];
  /** ebs_block_device block */
  readonly ebsBlockDevice?: InstanceEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
  /** metadata_options block */
  readonly metadataOptions?: InstanceMetadataOptions[];
  /** network_interface block */
  readonly networkInterface?: InstanceNetworkInterface[];
  /** root_block_device block */
  readonly rootBlockDevice?: InstanceRootBlockDevice[];
  /** timeouts block */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceCreditSpecification {
  readonly cpuCredits?: string;
}
export interface InstanceEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface InstanceEphemeralBlockDevice {
  readonly deviceName: string;
  readonly noDevice?: boolean;
  readonly virtualName?: string;
}
export interface InstanceMetadataOptions {
  readonly httpEndpoint?: string;
  readonly httpPutResponseHopLimit?: number;
  readonly httpTokens?: string;
}
export interface InstanceNetworkInterface {
  readonly deleteOnTermination?: boolean;
  readonly deviceIndex: number;
  readonly networkInterfaceId: string;
}
export interface InstanceRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface InstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class Instance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ami = config.ami;
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._availabilityZone = config.availabilityZone;
    this._cpuCoreCount = config.cpuCoreCount;
    this._cpuThreadsPerCore = config.cpuThreadsPerCore;
    this._disableApiTermination = config.disableApiTermination;
    this._ebsOptimized = config.ebsOptimized;
    this._getPasswordData = config.fetchPasswordData;
    this._hibernation = config.hibernation;
    this._hostId = config.hostId;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
    this._instanceType = config.instanceType;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses = config.ipv6Addresses;
    this._keyName = config.keyName;
    this._monitoring = config.monitoring;
    this._placementGroup = config.placementGroup;
    this._privateIp = config.privateIp;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tenancy = config.tenancy;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._volumeTags = config.volumeTags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._creditSpecification = config.creditSpecification;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._metadataOptions = config.metadataOptions;
    this._networkInterface = config.networkInterface;
    this._rootBlockDevice = config.rootBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami - computed: false, optional: false, required: true
  private _ami: string;
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: true, required: false
  private _associatePublicIpAddress?: boolean;
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number;
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount
  }

  // cpu_threads_per_core - computed: true, optional: true, required: false
  private _cpuThreadsPerCore?: number;
  public get cpuThreadsPerCore() {
    return this.getNumberAttribute('cpu_threads_per_core');
  }
  public set cpuThreadsPerCore(value: number) {
    this._cpuThreadsPerCore = value;
  }
  public resetCpuThreadsPerCore() {
    this._cpuThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThreadsPerCoreInput() {
    return this._cpuThreadsPerCore
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
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean ) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized
  }

  // get_password_data - computed: false, optional: true, required: false
  private _getPasswordData?: boolean;
  public get fetchPasswordData() {
    return this.getBooleanAttribute('get_password_data');
  }
  public set fetchPasswordData(value: boolean ) {
    this._getPasswordData = value;
  }
  public resetFetchPasswordData() {
    this._getPasswordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchPasswordDataInput() {
    return this._getPasswordData
  }

  // hibernation - computed: false, optional: true, required: false
  private _hibernation?: boolean;
  public get hibernation() {
    return this.getBooleanAttribute('hibernation');
  }
  public set hibernation(value: boolean ) {
    this._hibernation = value;
  }
  public resetHibernation() {
    this._hibernation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationInput() {
    return this._hibernation
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string;
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId
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

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
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

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number;
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[];
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses
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

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean;
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean ) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // password_data - computed: true, optional: false, required: false
  public get passwordData() {
    return this.getStringAttribute('password_data');
  }

  // placement_group - computed: true, optional: true, required: false
  private _placementGroup?: string;
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup
  }

  // primary_network_interface_id - computed: true, optional: false, required: false
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }

  // private_dns - computed: true, optional: false, required: false
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp
  }

  // public_dns - computed: true, optional: false, required: false
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean;
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean ) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string;
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy
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

  // volume_tags - computed: true, optional: true, required: false
  private _volumeTags?: { [key: string]: string }
  public get volumeTags(): { [key: string]: string } {
    return this.interpolationForAttribute('volume_tags') as any; // Getting the computed value is not yet implemented
  }
  public set volumeTags(value: { [key: string]: string }) {
    this._volumeTags = value;
  }
  public resetVolumeTags() {
    this._volumeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTagsInput() {
    return this._volumeTags
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: InstanceCreditSpecification[];
  public get creditSpecification() {
    return this.interpolationForAttribute('credit_specification') as any;
  }
  public set creditSpecification(value: InstanceCreditSpecification[] ) {
    this._creditSpecification = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: InstanceEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: InstanceEbsBlockDevice[] ) {
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
  private _ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: InstanceEphemeralBlockDevice[] ) {
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
  private _metadataOptions?: InstanceMetadataOptions[];
  public get metadataOptions() {
    return this.interpolationForAttribute('metadata_options') as any;
  }
  public set metadataOptions(value: InstanceMetadataOptions[] ) {
    this._metadataOptions = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: InstanceNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: InstanceNetworkInterface[] ) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: InstanceRootBlockDevice[];
  public get rootBlockDevice() {
    return this.interpolationForAttribute('root_block_device') as any;
  }
  public set rootBlockDevice(value: InstanceRootBlockDevice[] ) {
    this._rootBlockDevice = value;
  }
  public resetRootBlockDevice() {
    this._rootBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootBlockDeviceInput() {
    return this._rootBlockDevice
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: InstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: InstanceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ami: this._ami,
      associate_public_ip_address: this._associatePublicIpAddress,
      availability_zone: this._availabilityZone,
      cpu_core_count: this._cpuCoreCount,
      cpu_threads_per_core: this._cpuThreadsPerCore,
      disable_api_termination: this._disableApiTermination,
      ebs_optimized: this._ebsOptimized,
      get_password_data: this._getPasswordData,
      hibernation: this._hibernation,
      host_id: this._hostId,
      iam_instance_profile: this._iamInstanceProfile,
      instance_initiated_shutdown_behavior: this._instanceInitiatedShutdownBehavior,
      instance_type: this._instanceType,
      ipv6_address_count: this._ipv6AddressCount,
      ipv6_addresses: this._ipv6Addresses,
      key_name: this._keyName,
      monitoring: this._monitoring,
      placement_group: this._placementGroup,
      private_ip: this._privateIp,
      security_groups: this._securityGroups,
      source_dest_check: this._sourceDestCheck,
      subnet_id: this._subnetId,
      tags: this._tags,
      tenancy: this._tenancy,
      user_data: this._userData,
      user_data_base64: this._userDataBase64,
      volume_tags: this._volumeTags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      credit_specification: this._creditSpecification,
      ebs_block_device: this._ebsBlockDevice,
      ephemeral_block_device: this._ephemeralBlockDevice,
      metadata_options: this._metadataOptions,
      network_interface: this._networkInterface,
      root_block_device: this._rootBlockDevice,
      timeouts: this._timeouts,
    };
  }
}
