// https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "snapshot_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SnapshotCreateVolumePermissionConfig extends TerraformMetaArguments {
  readonly accountId: string;
  readonly snapshotId: string;
}

// Resource

export class SnapshotCreateVolumePermission extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_snapshot_create_volume_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._snapshotId = config.snapshotId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string) {
    this._accountId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId: string;
  public get snapshotId() {
    return this._snapshotId;
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      snapshot_id: this._snapshotId,
    };
  }
}
