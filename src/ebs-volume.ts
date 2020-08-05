// https://www.terraform.io/docs/providers/aws/r/ebs_volume.html
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
        "required": true
      },
      "encrypted": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "iops": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "multi_attach_enabled": {
        "type": "bool",
        "optional": true
      },
      "outpost_arn": {
        "type": "string",
        "optional": true
      },
      "size": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "snapshot_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "type": {
        "type": "string",
        "optional": true,
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

export interface EbsVolumeConfig extends TerraformMetaArguments {
  readonly availabilityZone: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly multiAttachEnabled?: boolean;
  readonly outpostArn?: string;
  readonly size?: number;
  readonly snapshotId?: string;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
}

// Resource

export class EbsVolume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EbsVolumeConfig) {
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
    this._availabilityZone = config.availabilityZone;
    this._encrypted = config.encrypted;
    this._iops = config.iops;
    this._kmsKeyId = config.kmsKeyId;
    this._multiAttachEnabled = config.multiAttachEnabled;
    this._outpostArn = config.outpostArn;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone: string;
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this._encrypted ?? this.getBooleanAttribute('encrypted');
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

  // iops - computed: true, optional: true, required: false
  private _iops?: number;
  public get iops() {
    return this._iops ?? this.getNumberAttribute('iops');
  }
  public set iops(value: number | undefined) {
    this._iops = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // multi_attach_enabled - computed: false, optional: true, required: false
  private _multiAttachEnabled?: boolean;
  public get multiAttachEnabled() {
    return this._multiAttachEnabled;
  }
  public set multiAttachEnabled(value: boolean | undefined) {
    this._multiAttachEnabled = value;
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string;
  public get outpostArn() {
    return this._outpostArn;
  }
  public set outpostArn(value: string | undefined) {
    this._outpostArn = value;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number;
  public get size() {
    return this._size ?? this.getNumberAttribute('size');
  }
  public set size(value: number | undefined) {
    this._size = value;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this._snapshotId ?? this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string | undefined) {
    this._snapshotId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type ?? this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      encrypted: this._encrypted,
      iops: this._iops,
      kms_key_id: this._kmsKeyId,
      multi_attach_enabled: this._multiAttachEnabled,
      outpost_arn: this._outpostArn,
      size: this._size,
      snapshot_id: this._snapshotId,
      tags: this._tags,
      type: this._type,
    };
  }
}
