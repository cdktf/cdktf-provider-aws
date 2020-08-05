// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_snapshot_ids.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ids": {
        "type": [
          "list",
          "string"
        ],
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

export interface DataAwsEbsSnapshotIdsConfig extends TerraformMetaArguments {
  readonly owners?: string[];
  readonly restorableByUserIds?: string[];
  /** filter block */
  readonly filter?: DataAwsEbsSnapshotIdsFilter[];
}
export interface DataAwsEbsSnapshotIdsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEbsSnapshotIds extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsSnapshotIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_ids',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._owners = config.owners;
    this._restorableByUserIds = config.restorableByUserIds;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: true, optional: false, required: true
  public get ids() {
    return this.getListAttribute('ids');
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEbsSnapshotIdsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEbsSnapshotIdsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      owners: this._owners,
      restorable_by_user_ids: this._restorableByUserIds,
      filter: this._filter,
    };
  }
}
