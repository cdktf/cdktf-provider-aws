// https://www.terraform.io/docs/providers/aws/r/instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ami Instance#ami}
  */
  readonly ami?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#associate_public_ip_address Instance#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#availability_zone Instance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_core_count Instance#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_threads_per_core Instance#cpu_threads_per_core}
  */
  readonly cpuThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#disable_api_termination Instance#disable_api_termination}
  */
  readonly disableApiTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_optimized Instance#ebs_optimized}
  */
  readonly ebsOptimized?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#get_password_data Instance#get_password_data}
  */
  readonly fetchPasswordData?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#hibernation Instance#hibernation}
  */
  readonly hibernation?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#host_id Instance#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iam_instance_profile Instance#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}
  */
  readonly instanceInitiatedShutdownBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_type Instance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_address_count Instance#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_addresses Instance#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#key_name Instance#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#monitoring Instance#monitoring}
  */
  readonly monitoring?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#placement_group Instance#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#private_ip Instance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#secondary_private_ips Instance#secondary_private_ips}
  */
  readonly secondaryPrivateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#security_groups Instance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#source_dest_check Instance#source_dest_check}
  */
  readonly sourceDestCheck?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#subnet_id Instance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags_all Instance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tenancy Instance#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data Instance#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data_base64 Instance#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_tags Instance#volume_tags}
  */
  readonly volumeTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#vpc_security_group_ids Instance#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * capacity_reservation_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_specification Instance#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: InstanceCapacityReservationSpecification[];
  /**
  * credit_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#credit_specification Instance#credit_specification}
  */
  readonly creditSpecification?: InstanceCreditSpecification[];
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_block_device Instance#ebs_block_device}
  */
  readonly ebsBlockDevice?: InstanceEbsBlockDevice[];
  /**
  * enclave_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enclave_options Instance#enclave_options}
  */
  readonly enclaveOptions?: InstanceEnclaveOptions[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ephemeral_block_device Instance#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
  /**
  * launch_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#launch_template Instance#launch_template}
  */
  readonly launchTemplate?: InstanceLaunchTemplate[];
  /**
  * metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#metadata_options Instance#metadata_options}
  */
  readonly metadataOptions?: InstanceMetadataOptions[];
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface Instance#network_interface}
  */
  readonly networkInterface?: InstanceNetworkInterface[];
  /**
  * root_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#root_block_device Instance#root_block_device}
  */
  readonly rootBlockDevice?: InstanceRootBlockDevice[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceCapacityReservationSpecificationCapacityReservationTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_id Instance#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
}

function instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: InstanceCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
  }
}

export interface InstanceCapacityReservationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_preference Instance#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * capacity_reservation_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_target Instance#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: InstanceCapacityReservationSpecificationCapacityReservationTarget[];
}

function instanceCapacityReservationSpecificationToTerraform(struct?: InstanceCapacityReservationSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: cdktf.listMapper(instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct!.capacityReservationTarget),
  }
}

export interface InstanceCreditSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_credits Instance#cpu_credits}
  */
  readonly cpuCredits?: string;
}

function instanceCreditSpecificationToTerraform(struct?: InstanceCreditSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
  }
}

export interface InstanceEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}
  */
  readonly encrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#snapshot_id Instance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}
  */
  readonly volumeType?: string;
}

function instanceEbsBlockDeviceToTerraform(struct?: InstanceEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface InstanceEnclaveOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enabled Instance#enabled}
  */
  readonly enabled?: boolean;
}

function instanceEnclaveOptionsToTerraform(struct?: InstanceEnclaveOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface InstanceEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#no_device Instance#no_device}
  */
  readonly noDevice?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#virtual_name Instance#virtual_name}
  */
  readonly virtualName?: string;
}

function instanceEphemeralBlockDeviceToTerraform(struct?: InstanceEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.booleanToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface InstanceLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#id Instance#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#name Instance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#version Instance#version}
  */
  readonly version?: string;
}

function instanceLaunchTemplateToTerraform(struct?: InstanceLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface InstanceMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_endpoint Instance#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_put_response_hop_limit Instance#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_tokens Instance#http_tokens}
  */
  readonly httpTokens?: string;
}

function instanceMetadataOptionsToTerraform(struct?: InstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export interface InstanceNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_index Instance#device_index}
  */
  readonly deviceIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface_id Instance#network_interface_id}
  */
  readonly networkInterfaceId: string;
}

function instanceNetworkInterfaceToTerraform(struct?: InstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
  }
}

export interface InstanceRootBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}
  */
  readonly encrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}
  */
  readonly volumeType?: string;
}

function instanceRootBlockDeviceToTerraform(struct?: InstanceRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#create Instance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete Instance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#update Instance#update}
  */
  readonly update?: string;
}

function instanceTimeoutsToTerraform(struct?: InstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig = {}) {
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
    this._secondaryPrivateIps = config.secondaryPrivateIps;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tenancy = config.tenancy;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._volumeTags = config.volumeTags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._capacityReservationSpecification = config.capacityReservationSpecification;
    this._creditSpecification = config.creditSpecification;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._enclaveOptions = config.enclaveOptions;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._launchTemplate = config.launchTemplate;
    this._metadataOptions = config.metadataOptions;
    this._networkInterface = config.networkInterface;
    this._rootBlockDevice = config.rootBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami - computed: true, optional: true, required: false
  private _ami?: string;
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  public resetAmi() {
    this._ami = undefined;
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

  // disable_api_termination - computed: true, optional: true, required: false
  private _disableApiTermination?: boolean;
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination
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

  // instance_initiated_shutdown_behavior - computed: true, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string;
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }
  public set instanceInitiatedShutdownBehavior(value: string) {
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

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
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

  // monitoring - computed: true, optional: true, required: false
  private _monitoring?: boolean;
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring
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

  // secondary_private_ips - computed: true, optional: true, required: false
  private _secondaryPrivateIps?: string[];
  public get secondaryPrivateIps() {
    return this.getListAttribute('secondary_private_ips');
  }
  public set secondaryPrivateIps(value: string[]) {
    this._secondaryPrivateIps = value;
  }
  public resetSecondaryPrivateIps() {
    this._secondaryPrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpsInput() {
    return this._secondaryPrivateIps
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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

  // user_data - computed: true, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData
  }

  // user_data_base64 - computed: true, optional: true, required: false
  private _userDataBase64?: string;
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64
  }

  // volume_tags - computed: false, optional: true, required: false
  private _volumeTags?: { [key: string]: string };
  public get volumeTags() {
    return this.interpolationForAttribute('volume_tags') as any;
  }
  public set volumeTags(value: { [key: string]: string } ) {
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

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification?: InstanceCapacityReservationSpecification[];
  public get capacityReservationSpecification() {
    return this.interpolationForAttribute('capacity_reservation_specification') as any;
  }
  public set capacityReservationSpecification(value: InstanceCapacityReservationSpecification[] ) {
    this._capacityReservationSpecification = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification
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

  // enclave_options - computed: false, optional: true, required: false
  private _enclaveOptions?: InstanceEnclaveOptions[];
  public get enclaveOptions() {
    return this.interpolationForAttribute('enclave_options') as any;
  }
  public set enclaveOptions(value: InstanceEnclaveOptions[] ) {
    this._enclaveOptions = value;
  }
  public resetEnclaveOptions() {
    this._enclaveOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveOptionsInput() {
    return this._enclaveOptions
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

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate?: InstanceLaunchTemplate[];
  public get launchTemplate() {
    return this.interpolationForAttribute('launch_template') as any;
  }
  public set launchTemplate(value: InstanceLaunchTemplate[] ) {
    this._launchTemplate = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate
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
      ami: cdktf.stringToTerraform(this._ami),
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
      hibernation: cdktf.booleanToTerraform(this._hibernation),
      host_id: cdktf.stringToTerraform(this._hostId),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
      key_name: cdktf.stringToTerraform(this._keyName),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      placement_group: cdktf.stringToTerraform(this._placementGroup),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
      volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      capacity_reservation_specification: cdktf.listMapper(instanceCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
      credit_specification: cdktf.listMapper(instanceCreditSpecificationToTerraform)(this._creditSpecification),
      ebs_block_device: cdktf.listMapper(instanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      enclave_options: cdktf.listMapper(instanceEnclaveOptionsToTerraform)(this._enclaveOptions),
      ephemeral_block_device: cdktf.listMapper(instanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      launch_template: cdktf.listMapper(instanceLaunchTemplateToTerraform)(this._launchTemplate),
      metadata_options: cdktf.listMapper(instanceMetadataOptionsToTerraform)(this._metadataOptions),
      network_interface: cdktf.listMapper(instanceNetworkInterfaceToTerraform)(this._networkInterface),
      root_block_device: cdktf.listMapper(instanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
      timeouts: instanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
