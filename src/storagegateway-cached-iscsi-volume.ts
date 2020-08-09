// https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html
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
      "chap_enabled": {
        "type": "bool",
        "computed": true
      },
      "gateway_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lun_number": {
        "type": "number",
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "required": true
      },
      "network_interface_port": {
        "type": "number",
        "computed": true
      },
      "snapshot_id": {
        "type": "string",
        "optional": true
      },
      "source_volume_arn": {
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
      "target_arn": {
        "type": "string",
        "computed": true
      },
      "target_name": {
        "type": "string",
        "required": true
      },
      "volume_arn": {
        "type": "string",
        "computed": true
      },
      "volume_id": {
        "type": "string",
        "computed": true
      },
      "volume_size_in_bytes": {
        "type": "number",
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

export interface StoragegatewayCachedIscsiVolumeConfig extends TerraformMetaArguments {
  readonly gatewayArn: string;
  readonly networkInterfaceId: string;
  readonly snapshotId?: string;
  readonly sourceVolumeArn?: string;
  readonly tags?: { [key: string]: string };
  readonly targetName: string;
  readonly volumeSizeInBytes: number;
}

// Resource

export class StoragegatewayCachedIscsiVolume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayCachedIscsiVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_cached_iscsi_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayArn = config.gatewayArn;
    this._networkInterfaceId = config.networkInterfaceId;
    this._snapshotId = config.snapshotId;
    this._sourceVolumeArn = config.sourceVolumeArn;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._volumeSizeInBytes = config.volumeSizeInBytes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chap_enabled - computed: true, optional: false, required: true
  public get chapEnabled() {
    return this.getBooleanAttribute('chap_enabled');
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this._gatewayArn;
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lun_number - computed: true, optional: false, required: true
  public get lunNumber() {
    return this.getNumberAttribute('lun_number');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // network_interface_port - computed: true, optional: false, required: true
  public get networkInterfacePort() {
    return this.getNumberAttribute('network_interface_port');
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this._snapshotId;
  }
  public set snapshotId(value: string | undefined) {
    this._snapshotId = value;
  }

  // source_volume_arn - computed: false, optional: true, required: false
  private _sourceVolumeArn?: string;
  public get sourceVolumeArn() {
    return this._sourceVolumeArn;
  }
  public set sourceVolumeArn(value: string | undefined) {
    this._sourceVolumeArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_arn - computed: true, optional: false, required: true
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName: string;
  public get targetName() {
    return this._targetName;
  }
  public set targetName(value: string) {
    this._targetName = value;
  }

  // volume_arn - computed: true, optional: false, required: true
  public get volumeArn() {
    return this.getStringAttribute('volume_arn');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size_in_bytes - computed: false, optional: false, required: true
  private _volumeSizeInBytes: number;
  public get volumeSizeInBytes() {
    return this._volumeSizeInBytes;
  }
  public set volumeSizeInBytes(value: number) {
    this._volumeSizeInBytes = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_arn: this._gatewayArn,
      network_interface_id: this._networkInterfaceId,
      snapshot_id: this._snapshotId,
      source_volume_arn: this._sourceVolumeArn,
      tags: this._tags,
      target_name: this._targetName,
      volume_size_in_bytes: this._volumeSizeInBytes,
    };
  }
}
