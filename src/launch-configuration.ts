// https://www.terraform.io/docs/providers/aws/r/launch_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "associate_public_ip_address": {
        "type": "bool",
        "optional": true
      },
      "ebs_optimized": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "enable_monitoring": {
        "type": "bool",
        "optional": true
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
      "image_id": {
        "type": "string",
        "required": true
      },
      "instance_type": {
        "type": "string",
        "required": true
      },
      "key_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "placement_tenancy": {
        "type": "string",
        "optional": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "spot_price": {
        "type": "string",
        "optional": true
      },
      "user_data": {
        "type": "string",
        "optional": true
      },
      "user_data_base64": {
        "type": "string",
        "optional": true
      },
      "vpc_classic_link_id": {
        "type": "string",
        "optional": true
      },
      "vpc_classic_link_security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
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
            "no_device": {
              "type": "bool",
              "optional": true
            },
            "snapshot_id": {
              "type": "string",
              "optional": true,
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
            "virtual_name": {
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
      }
    }
  }
}
*/
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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean;
  public get associatePublicIpAddress() {
    return this._associatePublicIpAddress;
  }
  public set associatePublicIpAddress(value: boolean | undefined) {
    this._associatePublicIpAddress = value;
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this._ebsOptimized ?? this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | undefined) {
    this._ebsOptimized = value;
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean;
  public get enableMonitoring() {
    return this._enableMonitoring;
  }
  public set enableMonitoring(value: boolean | undefined) {
    this._enableMonitoring = value;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string) {
    this._imageId = value;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this._keyName ?? this.getStringAttribute('key_name');
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
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

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string;
  public get placementTenancy() {
    return this._placementTenancy;
  }
  public set placementTenancy(value: string | undefined) {
    this._placementTenancy = value;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups;
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string;
  public get spotPrice() {
    return this._spotPrice;
  }
  public set spotPrice(value: string | undefined) {
    this._spotPrice = value;
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

  // vpc_classic_link_id - computed: false, optional: true, required: false
  private _vpcClassicLinkId?: string;
  public get vpcClassicLinkId() {
    return this._vpcClassicLinkId;
  }
  public set vpcClassicLinkId(value: string | undefined) {
    this._vpcClassicLinkId = value;
  }

  // vpc_classic_link_security_groups - computed: false, optional: true, required: false
  private _vpcClassicLinkSecurityGroups?: string[];
  public get vpcClassicLinkSecurityGroups() {
    return this._vpcClassicLinkSecurityGroups;
  }
  public set vpcClassicLinkSecurityGroups(value: string[] | undefined) {
    this._vpcClassicLinkSecurityGroups = value;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public set ebsBlockDevice(value: LaunchConfigurationEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public set ephemeralBlockDevice(value: LaunchConfigurationEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: LaunchConfigurationRootBlockDevice[];
  public get rootBlockDevice() {
    return this._rootBlockDevice;
  }
  public set rootBlockDevice(value: LaunchConfigurationRootBlockDevice[] | undefined) {
    this._rootBlockDevice = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
