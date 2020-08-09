// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_snapshot.html
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
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "most_recent": {
        "type": "bool",
        "optional": true
      },
      "owner_alias": {
        "type": "string",
        "computed": true
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
        "optional": true
      },
      "restorable_by_user_ids": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "snapshot_id": {
        "type": "string",
        "computed": true
      },
      "snapshot_ids": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "state": {
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
      "volume_size": {
        "type": "number",
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

export interface DataAwsEbsSnapshotConfig extends TerraformMetaArguments {
  readonly mostRecent?: boolean;
  readonly owners?: string[];
  readonly restorableByUserIds?: string[];
  readonly snapshotIds?: string[];
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEbsSnapshotFilter[];
}
export interface DataAwsEbsSnapshotFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEbsSnapshot extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsSnapshotConfig = {}) {
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
    this._mostRecent = config.mostRecent;
    this._owners = config.owners;
    this._restorableByUserIds = config.restorableByUserIds;
    this._snapshotIds = config.snapshotIds;
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

  // data_encryption_key_id - computed: true, optional: false, required: true
  public get dataEncryptionKeyId() {
    return this.getStringAttribute('data_encryption_key_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
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

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this._mostRecent;
  }
  public set mostRecent(value: boolean | undefined) {
    this._mostRecent = value;
  }

  // owner_alias - computed: true, optional: false, required: true
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[];
  public get owners() {
    return this._owners;
  }
  public set owners(value: string[] | undefined) {
    this._owners = value;
  }

  // restorable_by_user_ids - computed: false, optional: true, required: false
  private _restorableByUserIds?: string[];
  public get restorableByUserIds() {
    return this._restorableByUserIds;
  }
  public set restorableByUserIds(value: string[] | undefined) {
    this._restorableByUserIds = value;
  }

  // snapshot_id - computed: true, optional: false, required: true
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_ids - computed: false, optional: true, required: false
  private _snapshotIds?: string[];
  public get snapshotIds() {
    return this._snapshotIds;
  }
  public set snapshotIds(value: string[] | undefined) {
    this._snapshotIds = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
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

  // volume_size - computed: true, optional: false, required: true
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEbsSnapshotFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEbsSnapshotFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      most_recent: this._mostRecent,
      owners: this._owners,
      restorable_by_user_ids: this._restorableByUserIds,
      snapshot_ids: this._snapshotIds,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
