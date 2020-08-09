// https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html
// generated from terraform resource schema

/*
{
  "version": 0,
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
      "block_duration_minutes": {
        "type": "number",
        "optional": true
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
      "instance_interruption_behaviour": {
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
      "launch_group": {
        "type": "string",
        "optional": true
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
      "spot_bid_status": {
        "type": "string",
        "computed": true
      },
      "spot_instance_id": {
        "type": "string",
        "computed": true
      },
      "spot_price": {
        "type": "string",
        "optional": true
      },
      "spot_request_state": {
        "type": "string",
        "computed": true
      },
      "spot_type": {
        "type": "string",
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
      "valid_from": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "valid_until": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "volume_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "wait_for_fulfillment": {
        "type": "bool",
        "optional": true
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

export interface SpotInstanceRequestConfig extends TerraformMetaArguments {
  readonly ami: string;
  readonly associatePublicIpAddress?: boolean;
  readonly availabilityZone?: string;
  readonly blockDurationMinutes?: number;
  readonly cpuCoreCount?: number;
  readonly cpuThreadsPerCore?: number;
  readonly disableApiTermination?: boolean;
  readonly ebsOptimized?: boolean;
  readonly fetchPasswordData?: boolean;
  readonly hibernation?: boolean;
  readonly hostId?: string;
  readonly iamInstanceProfile?: string;
  readonly instanceInitiatedShutdownBehavior?: string;
  readonly instanceInterruptionBehaviour?: string;
  readonly instanceType: string;
  readonly ipv6AddressCount?: number;
  readonly ipv6Addresses?: string[];
  readonly keyName?: string;
  readonly launchGroup?: string;
  readonly monitoring?: boolean;
  readonly placementGroup?: string;
  readonly privateIp?: string;
  readonly securityGroups?: string[];
  readonly sourceDestCheck?: boolean;
  readonly spotPrice?: string;
  readonly spotType?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly tenancy?: string;
  readonly userData?: string;
  readonly userDataBase64?: string;
  readonly validFrom?: string;
  readonly validUntil?: string;
  readonly volumeTags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  readonly waitForFulfillment?: boolean;
  /** credit_specification block */
  readonly creditSpecification?: SpotInstanceRequestCreditSpecification[];
  /** ebs_block_device block */
  readonly ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
  /** metadata_options block */
  readonly metadataOptions?: SpotInstanceRequestMetadataOptions[];
  /** network_interface block */
  readonly networkInterface?: SpotInstanceRequestNetworkInterface[];
  /** root_block_device block */
  readonly rootBlockDevice?: SpotInstanceRequestRootBlockDevice[];
  /** timeouts block */
  readonly timeouts?: SpotInstanceRequestTimeouts;
}
export interface SpotInstanceRequestCreditSpecification {
  readonly cpuCredits?: string;
}
export interface SpotInstanceRequestEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface SpotInstanceRequestEphemeralBlockDevice {
  readonly deviceName: string;
  readonly noDevice?: boolean;
  readonly virtualName?: string;
}
export interface SpotInstanceRequestMetadataOptions {
  readonly httpEndpoint?: string;
  readonly httpPutResponseHopLimit?: number;
  readonly httpTokens?: string;
}
export interface SpotInstanceRequestNetworkInterface {
  readonly deleteOnTermination?: boolean;
  readonly deviceIndex: number;
  readonly networkInterfaceId: string;
}
export interface SpotInstanceRequestRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface SpotInstanceRequestTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SpotInstanceRequest extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpotInstanceRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_spot_instance_request',
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
    this._blockDurationMinutes = config.blockDurationMinutes;
    this._cpuCoreCount = config.cpuCoreCount;
    this._cpuThreadsPerCore = config.cpuThreadsPerCore;
    this._disableApiTermination = config.disableApiTermination;
    this._ebsOptimized = config.ebsOptimized;
    this._getPasswordData = config.fetchPasswordData;
    this._hibernation = config.hibernation;
    this._hostId = config.hostId;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
    this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
    this._instanceType = config.instanceType;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses = config.ipv6Addresses;
    this._keyName = config.keyName;
    this._launchGroup = config.launchGroup;
    this._monitoring = config.monitoring;
    this._placementGroup = config.placementGroup;
    this._privateIp = config.privateIp;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._spotPrice = config.spotPrice;
    this._spotType = config.spotType;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tenancy = config.tenancy;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._volumeTags = config.volumeTags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._waitForFulfillment = config.waitForFulfillment;
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

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number;
  public get blockDurationMinutes() {
    return this._blockDurationMinutes;
  }
  public set blockDurationMinutes(value: number | undefined) {
    this._blockDurationMinutes = value;
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

  // instance_interruption_behaviour - computed: false, optional: true, required: false
  private _instanceInterruptionBehaviour?: string;
  public get instanceInterruptionBehaviour() {
    return this._instanceInterruptionBehaviour;
  }
  public set instanceInterruptionBehaviour(value: string | undefined) {
    this._instanceInterruptionBehaviour = value;
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

  // launch_group - computed: false, optional: true, required: false
  private _launchGroup?: string;
  public get launchGroup() {
    return this._launchGroup;
  }
  public set launchGroup(value: string | undefined) {
    this._launchGroup = value;
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

  // spot_bid_status - computed: true, optional: false, required: true
  public get spotBidStatus() {
    return this.getStringAttribute('spot_bid_status');
  }

  // spot_instance_id - computed: true, optional: false, required: true
  public get spotInstanceId() {
    return this.getStringAttribute('spot_instance_id');
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string;
  public get spotPrice() {
    return this._spotPrice;
  }
  public set spotPrice(value: string | undefined) {
    this._spotPrice = value;
  }

  // spot_request_state - computed: true, optional: false, required: true
  public get spotRequestState() {
    return this.getStringAttribute('spot_request_state');
  }

  // spot_type - computed: false, optional: true, required: false
  private _spotType?: string;
  public get spotType() {
    return this._spotType;
  }
  public set spotType(value: string | undefined) {
    this._spotType = value;
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

  // valid_from - computed: true, optional: true, required: false
  private _validFrom?: string;
  public get validFrom() {
    return this._validFrom ?? this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string | undefined) {
    this._validFrom = value;
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string;
  public get validUntil() {
    return this._validUntil ?? this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string | undefined) {
    this._validUntil = value;
  }

  // volume_tags - computed: false, optional: true, required: false
  private _volumeTags?: { [key: string]: string };
  public get volumeTags() {
    return this._volumeTags;
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

  // wait_for_fulfillment - computed: false, optional: true, required: false
  private _waitForFulfillment?: boolean;
  public get waitForFulfillment() {
    return this._waitForFulfillment;
  }
  public set waitForFulfillment(value: boolean | undefined) {
    this._waitForFulfillment = value;
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification?: SpotInstanceRequestCreditSpecification[];
  public get creditSpecification() {
    return this._creditSpecification;
  }
  public set creditSpecification(value: SpotInstanceRequestCreditSpecification[] | undefined) {
    this._creditSpecification = value;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public set ebsBlockDevice(value: SpotInstanceRequestEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public set ephemeralBlockDevice(value: SpotInstanceRequestEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: SpotInstanceRequestMetadataOptions[];
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public set metadataOptions(value: SpotInstanceRequestMetadataOptions[] | undefined) {
    this._metadataOptions = value;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: SpotInstanceRequestNetworkInterface[];
  public get networkInterface() {
    return this._networkInterface;
  }
  public set networkInterface(value: SpotInstanceRequestNetworkInterface[] | undefined) {
    this._networkInterface = value;
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: SpotInstanceRequestRootBlockDevice[];
  public get rootBlockDevice() {
    return this._rootBlockDevice;
  }
  public set rootBlockDevice(value: SpotInstanceRequestRootBlockDevice[] | undefined) {
    this._rootBlockDevice = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpotInstanceRequestTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SpotInstanceRequestTimeouts | undefined) {
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
      block_duration_minutes: this._blockDurationMinutes,
      cpu_core_count: this._cpuCoreCount,
      cpu_threads_per_core: this._cpuThreadsPerCore,
      disable_api_termination: this._disableApiTermination,
      ebs_optimized: this._ebsOptimized,
      get_password_data: this._getPasswordData,
      hibernation: this._hibernation,
      host_id: this._hostId,
      iam_instance_profile: this._iamInstanceProfile,
      instance_initiated_shutdown_behavior: this._instanceInitiatedShutdownBehavior,
      instance_interruption_behaviour: this._instanceInterruptionBehaviour,
      instance_type: this._instanceType,
      ipv6_address_count: this._ipv6AddressCount,
      ipv6_addresses: this._ipv6Addresses,
      key_name: this._keyName,
      launch_group: this._launchGroup,
      monitoring: this._monitoring,
      placement_group: this._placementGroup,
      private_ip: this._privateIp,
      security_groups: this._securityGroups,
      source_dest_check: this._sourceDestCheck,
      spot_price: this._spotPrice,
      spot_type: this._spotType,
      subnet_id: this._subnetId,
      tags: this._tags,
      tenancy: this._tenancy,
      user_data: this._userData,
      user_data_base64: this._userDataBase64,
      valid_from: this._validFrom,
      valid_until: this._validUntil,
      volume_tags: this._volumeTags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      wait_for_fulfillment: this._waitForFulfillment,
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
