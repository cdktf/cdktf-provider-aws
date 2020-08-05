// https://www.terraform.io/docs/providers/aws/r/ami.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "architecture": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "ena_support": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_location": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kernel_id": {
        "type": "string",
        "optional": true
      },
      "manage_ebs_snapshots": {
        "type": "bool",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "ramdisk_id": {
        "type": "string",
        "optional": true
      },
      "root_device_name": {
        "type": "string",
        "optional": true
      },
      "root_snapshot_id": {
        "type": "string",
        "computed": true
      },
      "sriov_net_support": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "virtualization_type": {
        "type": "string",
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
              "optional": true
            },
            "iops": {
              "type": "number",
              "optional": true
            },
            "snapshot_id": {
              "type": "string",
              "optional": true
            },
            "volume_size": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "volume_type": {
              "type": "string",
              "optional": true
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

export interface AmiConfig extends TerraformMetaArguments {
  readonly architecture?: string;
  readonly description?: string;
  readonly enaSupport?: boolean;
  readonly imageLocation?: string;
  readonly kernelId?: string;
  readonly name: string;
  readonly ramdiskId?: string;
  readonly rootDeviceName?: string;
  readonly sriovNetSupport?: string;
  readonly tags?: { [key: string]: string };
  readonly virtualizationType?: string;
  /** ebs_block_device block */
  readonly ebsBlockDevice?: AmiEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: AmiEphemeralBlockDevice[];
  /** timeouts block */
  readonly timeouts?: AmiTimeouts;
}
export interface AmiEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface AmiEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}
export interface AmiTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class Ami extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AmiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._architecture = config.architecture;
    this._description = config.description;
    this._enaSupport = config.enaSupport;
    this._imageLocation = config.imageLocation;
    this._kernelId = config.kernelId;
    this._name = config.name;
    this._ramdiskId = config.ramdiskId;
    this._rootDeviceName = config.rootDeviceName;
    this._sriovNetSupport = config.sriovNetSupport;
    this._tags = config.tags;
    this._virtualizationType = config.virtualizationType;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string;
  public get architecture() {
    return this._architecture;
  }
  public set architecture(value: string | undefined) {
    this._architecture = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // ena_support - computed: false, optional: true, required: false
  private _enaSupport?: boolean;
  public get enaSupport() {
    return this._enaSupport;
  }
  public set enaSupport(value: boolean | undefined) {
    this._enaSupport = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_location - computed: true, optional: true, required: false
  private _imageLocation?: string;
  public get imageLocation() {
    return this._imageLocation ?? this.getStringAttribute('image_location');
  }
  public set imageLocation(value: string | undefined) {
    this._imageLocation = value;
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string;
  public get kernelId() {
    return this._kernelId;
  }
  public set kernelId(value: string | undefined) {
    this._kernelId = value;
  }

  // manage_ebs_snapshots - computed: true, optional: false, required: true
  public get manageEbsSnapshots() {
    return this.getBooleanAttribute('manage_ebs_snapshots');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // ramdisk_id - computed: false, optional: true, required: false
  private _ramdiskId?: string;
  public get ramdiskId() {
    return this._ramdiskId;
  }
  public set ramdiskId(value: string | undefined) {
    this._ramdiskId = value;
  }

  // root_device_name - computed: false, optional: true, required: false
  private _rootDeviceName?: string;
  public get rootDeviceName() {
    return this._rootDeviceName;
  }
  public set rootDeviceName(value: string | undefined) {
    this._rootDeviceName = value;
  }

  // root_snapshot_id - computed: true, optional: false, required: true
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // sriov_net_support - computed: false, optional: true, required: false
  private _sriovNetSupport?: string;
  public get sriovNetSupport() {
    return this._sriovNetSupport;
  }
  public set sriovNetSupport(value: string | undefined) {
    this._sriovNetSupport = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtualization_type - computed: false, optional: true, required: false
  private _virtualizationType?: string;
  public get virtualizationType() {
    return this._virtualizationType;
  }
  public set virtualizationType(value: string | undefined) {
    this._virtualizationType = value;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: AmiEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public set ebsBlockDevice(value: AmiEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: AmiEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public set ephemeralBlockDevice(value: AmiEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AmiTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AmiTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: this._architecture,
      description: this._description,
      ena_support: this._enaSupport,
      image_location: this._imageLocation,
      kernel_id: this._kernelId,
      name: this._name,
      ramdisk_id: this._ramdiskId,
      root_device_name: this._rootDeviceName,
      sriov_net_support: this._sriovNetSupport,
      tags: this._tags,
      virtualization_type: this._virtualizationType,
      ebs_block_device: this._ebsBlockDevice,
      ephemeral_block_device: this._ephemeralBlockDevice,
      timeouts: this._timeouts,
    };
  }
}
