// https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html
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
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
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
      "source_region": {
        "type": "string",
        "required": true
      },
      "source_snapshot_id": {
        "type": "string",
        "required": true
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
        "computed": true
      },
      "volume_size": {
        "type": "number",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EbsSnapshotCopyConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly encrypted?: boolean;
  readonly kmsKeyId?: string;
  readonly sourceRegion: string;
  readonly sourceSnapshotId: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class EbsSnapshotCopy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EbsSnapshotCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_copy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._sourceRegion = config.sourceRegion;
    this._sourceSnapshotId = config.sourceSnapshotId;
    this._tags = config.tags;
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

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this._encrypted;
  }
  public set encrypted(value: boolean | undefined) {
    this._encrypted = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // owner_alias - computed: true, optional: false, required: true
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // source_region - computed: false, optional: false, required: true
  private _sourceRegion: string;
  public get sourceRegion() {
    return this._sourceRegion;
  }
  public set sourceRegion(value: string) {
    this._sourceRegion = value;
  }

  // source_snapshot_id - computed: false, optional: false, required: true
  private _sourceSnapshotId: string;
  public get sourceSnapshotId() {
    return this._sourceSnapshotId;
  }
  public set sourceSnapshotId(value: string) {
    this._sourceSnapshotId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      encrypted: this._encrypted,
      kms_key_id: this._kmsKeyId,
      source_region: this._sourceRegion,
      source_snapshot_id: this._sourceSnapshotId,
      tags: this._tags,
    };
  }
}
