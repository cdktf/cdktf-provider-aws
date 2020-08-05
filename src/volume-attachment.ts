// https://www.terraform.io/docs/providers/aws/r/volume_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "device_name": {
        "type": "string",
        "required": true
      },
      "force_detach": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "required": true
      },
      "skip_destroy": {
        "type": "bool",
        "optional": true
      },
      "volume_id": {
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

export interface VolumeAttachmentConfig extends TerraformMetaArguments {
  readonly deviceName: string;
  readonly forceDetach?: boolean;
  readonly instanceId: string;
  readonly skipDestroy?: boolean;
  readonly volumeId: string;
}

// Resource

export class VolumeAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_volume_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceName = config.deviceName;
    this._forceDetach = config.forceDetach;
    this._instanceId = config.instanceId;
    this._skipDestroy = config.skipDestroy;
    this._volumeId = config.volumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName: string;
  public get deviceName() {
    return this._deviceName;
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }

  // force_detach - computed: false, optional: true, required: false
  private _forceDetach?: boolean;
  public get forceDetach() {
    return this._forceDetach;
  }
  public set forceDetach(value: boolean | undefined) {
    this._forceDetach = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean;
  public get skipDestroy() {
    return this._skipDestroy;
  }
  public set skipDestroy(value: boolean | undefined) {
    this._skipDestroy = value;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId: string;
  public get volumeId() {
    return this._volumeId;
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: this._deviceName,
      force_detach: this._forceDetach,
      instance_id: this._instanceId,
      skip_destroy: this._skipDestroy,
      volume_id: this._volumeId,
    };
  }
}
