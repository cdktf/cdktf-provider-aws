// https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html
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
      "data_encryption_key_id": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
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
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "owner_alias": {
        "type": "string",
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "volume_id": {
        "type": "string",
        "required": true
      },
      "volume_size": {
        "type": "number",
        "computed": true
      }
    },
    "block_types": {
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

export interface EbsSnapshotConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly tags?: { [key: string]: string };
  readonly volumeId: string;
  /** timeouts block */
  readonly timeouts?: EbsSnapshotTimeouts;
}
export interface EbsSnapshotTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class EbsSnapshot extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EbsSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._tags = config.tags;
    this._volumeId = config.volumeId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_encryption_key_id - computed: true, optional: false, required: true
  public get dataEncryptionKeyId() {
    return this.getStringAttribute('data_encryption_key_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // owner_alias - computed: true, optional: false, required: true
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId: string;
  public get volumeId() {
    return this._volumeId;
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }

  // volume_size - computed: true, optional: false, required: true
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EbsSnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EbsSnapshotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      tags: this._tags,
      volume_id: this._volumeId,
      timeouts: this._timeouts,
    };
  }
}
