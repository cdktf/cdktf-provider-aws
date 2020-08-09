// https://www.terraform.io/docs/providers/aws/r/instance.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "ami": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "associate_public_ip_address": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cpu_core_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "cpu_threads_per_core": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "disable_api_termination": {
        "type": "bool",
        "optional": true
      },
      "ebs_optimized": {
        "type": "bool",
        "optional": true
      },
      "get_password_data": {
        "type": "bool",
        "optional": true
      },
      "hibernation": {
        "type": "bool",
        "optional": true
      },
      "host_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "iam_instance_profile": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_initiated_shutdown_behavior": {
        "type": "string",
        "optional": true
      },
      "instance_state": {
        "type": "string",
        "computed": true
      },
      "instance_type": {
        "type": "string",
        "required": true
      },
      "ipv6_address_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "ipv6_addresses": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "key_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "monitoring": {
        "type": "bool",
        "optional": true
      },
      "network_interface_id": {
        "type": "string",
        "computed": true
      },
      "outpost_arn": {
        "type": "string",
        "computed": true
      },
      "password_data": {
        "type": "string",
        "computed": true
      },
      "placement_group": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "primary_network_interface_id": {
        "type": "string",
        "computed": true
      },
      "private_dns": {
        "type": "string",
        "computed": true
      },
      "private_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "public_dns": {
        "type": "string",
        "computed": true
      },
      "public_ip": {
        "type": "string",
        "computed": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "source_dest_check": {
        "type": "bool",
        "optional": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "tenancy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "user_data": {
        "type": "string",
        "optional": true
      },
      "user_data_base64": {
        "type": "string",
        "optional": true
      },
      "volume_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "credit_specification": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cpu_credits": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "ebs_block_device": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "delete_on_termination": {
              "type": "bool",
              "optional": true
            },
            "device_name": {
              "type": "string",
              "required": true
            },
            "encrypted": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "iops": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "kms_key_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "snapshot_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "volume_id": {
              "type": "string",
              "computed": true
            },
            "volume_size": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "ephemeral_block_device": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "device_name": {
              "type": "string",
              "required": true
            },
            "no_device": {
              "type": "bool",
              "optional": true
            },
            "virtual_name": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "metadata_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "http_endpoint": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "http_put_response_hop_limit": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "http_tokens": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "network_interface": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "delete_on_termination": {
              "type": "bool",
              "optional": true
            },
            "device_index": {
              "type": "number",
              "required": true
            },
            "network_interface_id": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "root_block_device": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "delete_on_termination": {
              "type": "bool",
              "optional": true
            },
            "device_name": {
              "type": "string",
              "computed": true
            },
            "encrypted": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "iops": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "kms_key_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "volume_id": {
              "type": "string",
              "computed": true
            },
            "volume_size": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
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
    return this._ami;
  }
  public set ami(value: string) {
    this._ami = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: true, required: false
  private _associatePublicIpAddress?: boolean;
  public get associatePublicIpAddress() {
    return this._associatePublicIpAddress ?? this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | undefined) {
    this._associatePublicIpAddress = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number;
  public get cpuCoreCount() {
    return this._cpuCoreCount ?? this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number | undefined) {
    this._cpuCoreCount = value;
  }

  // cpu_threads_per_core - computed: true, optional: true, required: false
  private _cpuThreadsPerCore?: number;
  public get cpuThreadsPerCore() {
    return this._cpuThreadsPerCore ?? this.getNumberAttribute('cpu_threads_per_core');
  }
  public set cpuThreadsPerCore(value: number | undefined) {
    this._cpuThreadsPerCore = value;
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
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this._ebsOptimized;
  }
  public set ebsOptimized(value: boolean | undefined) {
    this._ebsOptimized = value;
  }

  // get_password_data - computed: false, optional: true, required: false
  private _getPasswordData?: boolean;
  public get fetchPasswordData() {
    return this._getPasswordData;
  }
  public set fetchPasswordData(value: boolean | undefined) {
    this._getPasswordData = value;
  }

  // hibernation - computed: false, optional: true, required: false
  private _hibernation?: boolean;
  public get hibernation() {
    return this._hibernation;
  }
  public set hibernation(value: boolean | undefined) {
    this._hibernation = value;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string;
  public get hostId() {
    return this._hostId ?? this.getStringAttribute('host_id');
  }
  public set hostId(value: string | undefined) {
    this._hostId = value;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string;
  public get iamInstanceProfile() {
    return this._iamInstanceProfile;
  }
  public set iamInstanceProfile(value: string | undefined) {
    this._iamInstanceProfile = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_initiated_shutdown_behavior - computed: false, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string;
  public get instanceInitiatedShutdownBehavior() {
    return this._instanceInitiatedShutdownBehavior;
  }
  public set instanceInitiatedShutdownBehavior(value: string | undefined) {
    this._instanceInitiatedShutdownBehavior = value;
  }

  // instance_state - computed: true, optional: false, required: true
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number;
  public get ipv6AddressCount() {
    return this._ipv6AddressCount ?? this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number | undefined) {
    this._ipv6AddressCount = value;
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[];
  public get ipv6Addresses() {
    return this._ipv6Addresses ?? this.getListAttribute('ipv6_addresses');
  }
  public set ipv6Addresses(value: string[] | undefined) {
    this._ipv6Addresses = value;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this._keyName ?? this.getStringAttribute('key_name');
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean;
  public get monitoring() {
    return this._monitoring;
  }
  public set monitoring(value: boolean | undefined) {
    this._monitoring = value;
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // outpost_arn - computed: true, optional: false, required: true
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // password_data - computed: true, optional: false, required: true
  public get passwordData() {
    return this.getStringAttribute('password_data');
  }

  // placement_group - computed: true, optional: true, required: false
  private _placementGroup?: string;
  public get placementGroup() {
    return this._placementGroup ?? this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string | undefined) {
    this._placementGroup = value;
  }

  // primary_network_interface_id - computed: true, optional: false, required: true
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }

  // private_dns - computed: true, optional: false, required: true
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this._privateIp ?? this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string | undefined) {
    this._privateIp = value;
  }

  // public_dns - computed: true, optional: false, required: true
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean;
  public get sourceDestCheck() {
    return this._sourceDestCheck;
  }
  public set sourceDestCheck(value: boolean | undefined) {
    this._sourceDestCheck = value;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string;
  public get tenancy() {
    return this._tenancy ?? this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string | undefined) {
    this._tenancy = value;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this._userData;
  }
  public set userData(value: string | undefined) {
    this._userData = value;
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string;
  public get userDataBase64() {
    return this._userDataBase64;
  }
  public set userDataBase64(value: string | undefined) {
    this._userDataBase64 = value;
  }

  // volume_tags - computed: true, optional: true, required: false
  private _volumeTags?: { [key: string]: string }
  public get volumeTags(): { [key: string]: string } | undefined {
    return this._volumeTags; // Getting the computed value is not yet implemented
  }
  public set volumeTags(value: { [key: string]: string } | undefined) {
    this._volumeTags = value;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this._vpcSecurityGroupIds ?? this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this._vpcSecurityGroupIds = value;
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: InstanceCreditSpecification[];
  public get creditSpecification() {
    return this._creditSpecification;
  }
  public set creditSpecification(value: InstanceCreditSpecification[] | undefined) {
    this._creditSpecification = value;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: InstanceEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public set ebsBlockDevice(value: InstanceEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public set ephemeralBlockDevice(value: InstanceEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: InstanceMetadataOptions[];
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public set metadataOptions(value: InstanceMetadataOptions[] | undefined) {
    this._metadataOptions = value;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: InstanceNetworkInterface[];
  public get networkInterface() {
    return this._networkInterface;
  }
  public set networkInterface(value: InstanceNetworkInterface[] | undefined) {
    this._networkInterface = value;
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: InstanceRootBlockDevice[];
  public get rootBlockDevice() {
    return this._rootBlockDevice;
  }
  public set rootBlockDevice(value: InstanceRootBlockDevice[] | undefined) {
    this._rootBlockDevice = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: InstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: InstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
