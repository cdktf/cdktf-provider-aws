// https://www.terraform.io/docs/providers/aws/r/data_aws_ami.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "architecture": {
        "type": "string",
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "block_device_mappings": {
        "type": [
          "set",
          [
            "object",
            {
              "device_name": "string",
              "ebs": [
                "map",
                "string"
              ],
              "no_device": "string",
              "virtual_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "creation_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "executable_users": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "hypervisor": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_id": {
        "type": "string",
        "computed": true
      },
      "image_location": {
        "type": "string",
        "computed": true
      },
      "image_owner_alias": {
        "type": "string",
        "computed": true
      },
      "image_type": {
        "type": "string",
        "computed": true
      },
      "kernel_id": {
        "type": "string",
        "computed": true
      },
      "most_recent": {
        "type": "bool",
        "optional": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "name_regex": {
        "type": "string",
        "optional": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "owners": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "platform": {
        "type": "string",
        "computed": true
      },
      "product_codes": {
        "type": [
          "set",
          [
            "object",
            {
              "product_code_id": "string",
              "product_code_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "public": {
        "type": "bool",
        "computed": true
      },
      "ramdisk_id": {
        "type": "string",
        "computed": true
      },
      "root_device_name": {
        "type": "string",
        "computed": true
      },
      "root_device_type": {
        "type": "string",
        "computed": true
      },
      "root_snapshot_id": {
        "type": "string",
        "computed": true
      },
      "sriov_net_support": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "state_reason": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "virtualization_type": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsAmiConfig extends TerraformMetaArguments {
  readonly executableUsers?: string[];
  readonly mostRecent?: boolean;
  readonly nameRegex?: string;
  readonly owners: string[];
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsAmiFilter[];
}
export class DataAwsAmiBlockDeviceMappings extends ComplexComputedList {

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: true
  public get ebs() {
    return 'not implemented' as any;
  }

  // no_device - computed: true, optional: false, required: true
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: true
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsAmiProductCodes extends ComplexComputedList {

  // product_code_id - computed: true, optional: false, required: true
  public get productCodeId() {
    return this.getStringAttribute('product_code_id');
  }

  // product_code_type - computed: true, optional: false, required: true
  public get productCodeType() {
    return this.getStringAttribute('product_code_type');
  }
}
export interface DataAwsAmiFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsAmi extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAmiConfig) {
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
    this._executableUsers = config.executableUsers;
    this._mostRecent = config.mostRecent;
    this._nameRegex = config.nameRegex;
    this._owners = config.owners;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: false, required: true
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: false, required: true
  public blockDeviceMappings(index: string) {
    return new DataAwsAmiBlockDeviceMappings(this, 'block_device_mappings', index);
  }

  // creation_date - computed: true, optional: false, required: true
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // executable_users - computed: false, optional: true, required: false
  private _executableUsers?: string[];
  public get executableUsers() {
    return this._executableUsers;
  }
  public set executableUsers(value: string[] | undefined) {
    this._executableUsers = value;
  }

  // hypervisor - computed: true, optional: false, required: true
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_location - computed: true, optional: false, required: true
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }

  // image_owner_alias - computed: true, optional: false, required: true
  public get imageOwnerAlias() {
    return this.getStringAttribute('image_owner_alias');
  }

  // image_type - computed: true, optional: false, required: true
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // kernel_id - computed: true, optional: false, required: true
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this._mostRecent;
  }
  public set mostRecent(value: boolean | undefined) {
    this._mostRecent = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string;
  public get nameRegex() {
    return this._nameRegex;
  }
  public set nameRegex(value: string | undefined) {
    this._nameRegex = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // owners - computed: false, optional: false, required: true
  private _owners: string[];
  public get owners() {
    return this._owners;
  }
  public set owners(value: string[]) {
    this._owners = value;
  }

  // platform - computed: true, optional: false, required: true
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // product_codes - computed: true, optional: false, required: true
  public productCodes(index: string) {
    return new DataAwsAmiProductCodes(this, 'product_codes', index);
  }

  // public - computed: true, optional: false, required: true
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // ramdisk_id - computed: true, optional: false, required: true
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // root_device_name - computed: true, optional: false, required: true
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }

  // root_device_type - computed: true, optional: false, required: true
  public get rootDeviceType() {
    return this.getStringAttribute('root_device_type');
  }

  // root_snapshot_id - computed: true, optional: false, required: true
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // sriov_net_support - computed: true, optional: false, required: true
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: true
  public stateReason(key: string): string {
    return new StringMap(this, 'state_reason').lookup(key);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtualization_type - computed: true, optional: false, required: true
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAmiFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsAmiFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      executable_users: this._executableUsers,
      most_recent: this._mostRecent,
      name_regex: this._nameRegex,
      owners: this._owners,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
