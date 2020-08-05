// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_volume.html
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
      "availability_zone": {
        "type": "string",
        "computed": true
      },
      "encrypted": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "iops": {
        "type": "number",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "most_recent": {
        "type": "bool",
        "optional": true
      },
      "multi_attach_enabled": {
        "type": "bool",
        "computed": true
      },
      "outpost_arn": {
        "type": "string",
        "computed": true
      },
      "size": {
        "type": "number",
        "computed": true
      },
      "snapshot_id": {
        "type": "string",
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
      "volume_id": {
        "type": "string",
        "computed": true
      },
      "volume_type": {
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

// Configuration

export interface DataAwsEbsVolumeConfig extends TerraformMetaArguments {
  readonly mostRecent?: boolean;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEbsVolumeFilter[];
}
export interface DataAwsEbsVolumeFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEbsVolume extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsVolumeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mostRecent = config.mostRecent;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iops - computed: true, optional: false, required: true
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this._mostRecent;
  }
  public set mostRecent(value: boolean | undefined) {
    this._mostRecent = value;
  }

  // multi_attach_enabled - computed: true, optional: false, required: true
  public get multiAttachEnabled() {
    return this.getBooleanAttribute('multi_attach_enabled');
  }

  // outpost_arn - computed: true, optional: false, required: true
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: true
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_type - computed: true, optional: false, required: true
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEbsVolumeFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEbsVolumeFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      most_recent: this._mostRecent,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
