// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "snapshot_copy_grant_name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedshiftSnapshotCopyGrantConfig extends TerraformMetaArguments {
  readonly kmsKeyId?: string;
  readonly snapshotCopyGrantName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class RedshiftSnapshotCopyGrant extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftSnapshotCopyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_snapshot_copy_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyId = config.kmsKeyId;
    this._snapshotCopyGrantName = config.snapshotCopyGrantName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // snapshot_copy_grant_name - computed: false, optional: false, required: true
  private _snapshotCopyGrantName: string;
  public get snapshotCopyGrantName() {
    return this._snapshotCopyGrantName;
  }
  public set snapshotCopyGrantName(value: string) {
    this._snapshotCopyGrantName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_id: this._kmsKeyId,
      snapshot_copy_grant_name: this._snapshotCopyGrantName,
      tags: this._tags,
    };
  }
}
