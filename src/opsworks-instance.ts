// https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly agentVersion?: string;
  readonly amiId?: string;
  readonly architecture?: string;
  readonly autoScalingType?: string;
  readonly availabilityZone?: string;
  readonly createdAt?: string;
  readonly deleteEbs?: boolean;
  readonly deleteEip?: boolean;
  readonly ebsOptimized?: boolean;
  readonly ecsClusterArn?: string;
  readonly elasticIp?: string;
  readonly hostname?: string;
  readonly infrastructureClass?: string;
  readonly installUpdatesOnBoot?: boolean;
  readonly instanceProfileArn?: string;
  readonly instanceType?: string;
  readonly lastServiceErrorId?: string;
  readonly layerIds: string[];
  readonly os?: string;
  readonly platform?: string;
  readonly privateDns?: string;
  readonly privateIp?: string;
  readonly publicDns?: string;
  readonly publicIp?: string;
  readonly registeredBy?: string;
  readonly reportedAgentVersion?: string;
  readonly reportedOsFamily?: string;
  readonly reportedOsName?: string;
  readonly reportedOsVersion?: string;
  readonly rootDeviceType?: string;
  readonly rootDeviceVolumeId?: string;
  readonly securityGroupIds?: string[];
  readonly sshHostDsaKeyFingerprint?: string;
  readonly sshHostRsaKeyFingerprint?: string;
  readonly sshKeyName?: string;
  readonly stackId: string;
  readonly state?: string;
  readonly status?: string;
  readonly subnetId?: string;
  readonly tenancy?: string;
  readonly virtualizationType?: string;
  /** ebs_block_device block */
  readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
  /** root_block_device block */
  readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
  /** timeouts block */
  readonly timeouts?: OpsworksInstanceTimeouts;
}
export interface OpsworksInstanceEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly iops?: number;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}

function opsworksInstanceEbsBlockDeviceToTerraform(struct?: OpsworksInstanceEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    iops: cdktf.numberToTerraform(struct!.iops),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface OpsworksInstanceEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}

function opsworksInstanceEphemeralBlockDeviceToTerraform(struct?: OpsworksInstanceEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface OpsworksInstanceRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly iops?: number;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}

function opsworksInstanceRootBlockDeviceToTerraform(struct?: OpsworksInstanceRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    iops: cdktf.numberToTerraform(struct!.iops),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface OpsworksInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function opsworksInstanceTimeoutsToTerraform(struct?: OpsworksInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class OpsworksInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentVersion = config.agentVersion;
    this._amiId = config.amiId;
    this._architecture = config.architecture;
    this._autoScalingType = config.autoScalingType;
    this._availabilityZone = config.availabilityZone;
    this._createdAt = config.createdAt;
    this._deleteEbs = config.deleteEbs;
    this._deleteEip = config.deleteEip;
    this._ebsOptimized = config.ebsOptimized;
    this._ecsClusterArn = config.ecsClusterArn;
    this._elasticIp = config.elasticIp;
    this._hostname = config.hostname;
    this._infrastructureClass = config.infrastructureClass;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceProfileArn = config.instanceProfileArn;
    this._instanceType = config.instanceType;
    this._lastServiceErrorId = config.lastServiceErrorId;
    this._layerIds = config.layerIds;
    this._os = config.os;
    this._platform = config.platform;
    this._privateDns = config.privateDns;
    this._privateIp = config.privateIp;
    this._publicDns = config.publicDns;
    this._publicIp = config.publicIp;
    this._registeredBy = config.registeredBy;
    this._reportedAgentVersion = config.reportedAgentVersion;
    this._reportedOsFamily = config.reportedOsFamily;
    this._reportedOsName = config.reportedOsName;
    this._reportedOsVersion = config.reportedOsVersion;
    this._rootDeviceType = config.rootDeviceType;
    this._rootDeviceVolumeId = config.rootDeviceVolumeId;
    this._securityGroupIds = config.securityGroupIds;
    this._sshHostDsaKeyFingerprint = config.sshHostDsaKeyFingerprint;
    this._sshHostRsaKeyFingerprint = config.sshHostRsaKeyFingerprint;
    this._sshKeyName = config.sshKeyName;
    this._stackId = config.stackId;
    this._state = config.state;
    this._status = config.status;
    this._subnetId = config.subnetId;
    this._tenancy = config.tenancy;
    this._virtualizationType = config.virtualizationType;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._rootBlockDevice = config.rootBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: false, optional: true, required: false
  private _agentVersion?: string;
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string ) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion
  }

  // ami_id - computed: true, optional: true, required: false
  private _amiId?: string;
  public get amiId() {
    return this.getStringAttribute('ami_id');
  }
  public set amiId(value: string) {
    this._amiId = value;
  }
  public resetAmiId() {
    this._amiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiIdInput() {
    return this._amiId
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string;
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string ) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture
  }

  // auto_scaling_type - computed: false, optional: true, required: false
  private _autoScalingType?: string;
  public get autoScalingType() {
    return this.getStringAttribute('auto_scaling_type');
  }
  public set autoScalingType(value: string ) {
    this._autoScalingType = value;
  }
  public resetAutoScalingType() {
    this._autoScalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingTypeInput() {
    return this._autoScalingType
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

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string;
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt
  }

  // delete_ebs - computed: false, optional: true, required: false
  private _deleteEbs?: boolean;
  public get deleteEbs() {
    return this.getBooleanAttribute('delete_ebs');
  }
  public set deleteEbs(value: boolean ) {
    this._deleteEbs = value;
  }
  public resetDeleteEbs() {
    this._deleteEbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEbsInput() {
    return this._deleteEbs
  }

  // delete_eip - computed: false, optional: true, required: false
  private _deleteEip?: boolean;
  public get deleteEip() {
    return this.getBooleanAttribute('delete_eip');
  }
  public set deleteEip(value: boolean ) {
    this._deleteEip = value;
  }
  public resetDeleteEip() {
    this._deleteEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEipInput() {
    return this._deleteEip
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

  // ec2_instance_id - computed: true, optional: false, required: false
  public get ec2InstanceId() {
    return this.getStringAttribute('ec2_instance_id');
  }

  // ecs_cluster_arn - computed: true, optional: true, required: false
  private _ecsClusterArn?: string;
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }
  public set ecsClusterArn(value: string) {
    this._ecsClusterArn = value;
  }
  public resetEcsClusterArn() {
    this._ecsClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsClusterArnInput() {
    return this._ecsClusterArn
  }

  // elastic_ip - computed: true, optional: true, required: false
  private _elasticIp?: string;
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_class - computed: true, optional: true, required: false
  private _infrastructureClass?: string;
  public get infrastructureClass() {
    return this.getStringAttribute('infrastructure_class');
  }
  public set infrastructureClass(value: string) {
    this._infrastructureClass = value;
  }
  public resetInfrastructureClass() {
    this._infrastructureClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureClassInput() {
    return this._infrastructureClass
  }

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean;
  public get installUpdatesOnBoot() {
    return this.getBooleanAttribute('install_updates_on_boot');
  }
  public set installUpdatesOnBoot(value: boolean ) {
    this._installUpdatesOnBoot = value;
  }
  public resetInstallUpdatesOnBoot() {
    this._installUpdatesOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installUpdatesOnBootInput() {
    return this._installUpdatesOnBoot
  }

  // instance_profile_arn - computed: true, optional: true, required: false
  private _instanceProfileArn?: string;
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn
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

  // last_service_error_id - computed: true, optional: true, required: false
  private _lastServiceErrorId?: string;
  public get lastServiceErrorId() {
    return this.getStringAttribute('last_service_error_id');
  }
  public set lastServiceErrorId(value: string) {
    this._lastServiceErrorId = value;
  }
  public resetLastServiceErrorId() {
    this._lastServiceErrorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServiceErrorIdInput() {
    return this._lastServiceErrorId
  }

  // layer_ids - computed: false, optional: false, required: true
  private _layerIds: string[];
  public get layerIds() {
    return this.getListAttribute('layer_ids');
  }
  public set layerIds(value: string[]) {
    this._layerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerIdsInput() {
    return this._layerIds
  }

  // os - computed: true, optional: true, required: false
  private _os?: string;
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string;
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform
  }

  // private_dns - computed: true, optional: true, required: false
  private _privateDns?: string;
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }
  public set privateDns(value: string) {
    this._privateDns = value;
  }
  public resetPrivateDns() {
    this._privateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsInput() {
    return this._privateDns
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

  // public_dns - computed: true, optional: true, required: false
  private _publicDns?: string;
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }
  public set publicDns(value: string) {
    this._publicDns = value;
  }
  public resetPublicDns() {
    this._publicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDnsInput() {
    return this._publicDns
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string;
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp
  }

  // registered_by - computed: true, optional: true, required: false
  private _registeredBy?: string;
  public get registeredBy() {
    return this.getStringAttribute('registered_by');
  }
  public set registeredBy(value: string) {
    this._registeredBy = value;
  }
  public resetRegisteredBy() {
    this._registeredBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredByInput() {
    return this._registeredBy
  }

  // reported_agent_version - computed: true, optional: true, required: false
  private _reportedAgentVersion?: string;
  public get reportedAgentVersion() {
    return this.getStringAttribute('reported_agent_version');
  }
  public set reportedAgentVersion(value: string) {
    this._reportedAgentVersion = value;
  }
  public resetReportedAgentVersion() {
    this._reportedAgentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportedAgentVersionInput() {
    return this._reportedAgentVersion
  }

  // reported_os_family - computed: true, optional: true, required: false
  private _reportedOsFamily?: string;
  public get reportedOsFamily() {
    return this.getStringAttribute('reported_os_family');
  }
  public set reportedOsFamily(value: string) {
    this._reportedOsFamily = value;
  }
  public resetReportedOsFamily() {
    this._reportedOsFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportedOsFamilyInput() {
    return this._reportedOsFamily
  }

  // reported_os_name - computed: true, optional: true, required: false
  private _reportedOsName?: string;
  public get reportedOsName() {
    return this.getStringAttribute('reported_os_name');
  }
  public set reportedOsName(value: string) {
    this._reportedOsName = value;
  }
  public resetReportedOsName() {
    this._reportedOsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportedOsNameInput() {
    return this._reportedOsName
  }

  // reported_os_version - computed: true, optional: true, required: false
  private _reportedOsVersion?: string;
  public get reportedOsVersion() {
    return this.getStringAttribute('reported_os_version');
  }
  public set reportedOsVersion(value: string) {
    this._reportedOsVersion = value;
  }
  public resetReportedOsVersion() {
    this._reportedOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportedOsVersionInput() {
    return this._reportedOsVersion
  }

  // root_device_type - computed: true, optional: true, required: false
  private _rootDeviceType?: string;
  public get rootDeviceType() {
    return this.getStringAttribute('root_device_type');
  }
  public set rootDeviceType(value: string) {
    this._rootDeviceType = value;
  }
  public resetRootDeviceType() {
    this._rootDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceTypeInput() {
    return this._rootDeviceType
  }

  // root_device_volume_id - computed: true, optional: true, required: false
  private _rootDeviceVolumeId?: string;
  public get rootDeviceVolumeId() {
    return this.getStringAttribute('root_device_volume_id');
  }
  public set rootDeviceVolumeId(value: string) {
    this._rootDeviceVolumeId = value;
  }
  public resetRootDeviceVolumeId() {
    this._rootDeviceVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceVolumeIdInput() {
    return this._rootDeviceVolumeId
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // ssh_host_dsa_key_fingerprint - computed: true, optional: true, required: false
  private _sshHostDsaKeyFingerprint?: string;
  public get sshHostDsaKeyFingerprint() {
    return this.getStringAttribute('ssh_host_dsa_key_fingerprint');
  }
  public set sshHostDsaKeyFingerprint(value: string) {
    this._sshHostDsaKeyFingerprint = value;
  }
  public resetSshHostDsaKeyFingerprint() {
    this._sshHostDsaKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostDsaKeyFingerprintInput() {
    return this._sshHostDsaKeyFingerprint
  }

  // ssh_host_rsa_key_fingerprint - computed: true, optional: true, required: false
  private _sshHostRsaKeyFingerprint?: string;
  public get sshHostRsaKeyFingerprint() {
    return this.getStringAttribute('ssh_host_rsa_key_fingerprint');
  }
  public set sshHostRsaKeyFingerprint(value: string) {
    this._sshHostRsaKeyFingerprint = value;
  }
  public resetSshHostRsaKeyFingerprint() {
    this._sshHostRsaKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostRsaKeyFingerprintInput() {
    return this._sshHostRsaKeyFingerprint
  }

  // ssh_key_name - computed: true, optional: true, required: false
  private _sshKeyName?: string;
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
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

  // virtualization_type - computed: true, optional: true, required: false
  private _virtualizationType?: string;
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }
  public set virtualizationType(value: string) {
    this._virtualizationType = value;
  }
  public resetVirtualizationType() {
    this._virtualizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationTypeInput() {
    return this._virtualizationType
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: OpsworksInstanceEbsBlockDevice[] ) {
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
  private _ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[] ) {
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
  private _rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
  public get rootBlockDevice() {
    return this.interpolationForAttribute('root_block_device') as any;
  }
  public set rootBlockDevice(value: OpsworksInstanceRootBlockDevice[] ) {
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
  private _timeouts?: OpsworksInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: OpsworksInstanceTimeouts ) {
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
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      ami_id: cdktf.stringToTerraform(this._amiId),
      architecture: cdktf.stringToTerraform(this._architecture),
      auto_scaling_type: cdktf.stringToTerraform(this._autoScalingType),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      created_at: cdktf.stringToTerraform(this._createdAt),
      delete_ebs: cdktf.booleanToTerraform(this._deleteEbs),
      delete_eip: cdktf.booleanToTerraform(this._deleteEip),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      ecs_cluster_arn: cdktf.stringToTerraform(this._ecsClusterArn),
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      hostname: cdktf.stringToTerraform(this._hostname),
      infrastructure_class: cdktf.stringToTerraform(this._infrastructureClass),
      install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      last_service_error_id: cdktf.stringToTerraform(this._lastServiceErrorId),
      layer_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._layerIds),
      os: cdktf.stringToTerraform(this._os),
      platform: cdktf.stringToTerraform(this._platform),
      private_dns: cdktf.stringToTerraform(this._privateDns),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      public_dns: cdktf.stringToTerraform(this._publicDns),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      registered_by: cdktf.stringToTerraform(this._registeredBy),
      reported_agent_version: cdktf.stringToTerraform(this._reportedAgentVersion),
      reported_os_family: cdktf.stringToTerraform(this._reportedOsFamily),
      reported_os_name: cdktf.stringToTerraform(this._reportedOsName),
      reported_os_version: cdktf.stringToTerraform(this._reportedOsVersion),
      root_device_type: cdktf.stringToTerraform(this._rootDeviceType),
      root_device_volume_id: cdktf.stringToTerraform(this._rootDeviceVolumeId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      ssh_host_dsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostDsaKeyFingerprint),
      ssh_host_rsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostRsaKeyFingerprint),
      ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
      stack_id: cdktf.stringToTerraform(this._stackId),
      state: cdktf.stringToTerraform(this._state),
      status: cdktf.stringToTerraform(this._status),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
      ebs_block_device: cdktf.listMapper(opsworksInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(opsworksInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      root_block_device: cdktf.listMapper(opsworksInstanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
      timeouts: opsworksInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
