// https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html
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
      "creation_time": {
        "type": "string",
        "computed": true
      },
      "data_retention_in_hours": {
        "type": "number",
        "optional": true
      },
      "device_name": {
        "type": "string",
        "optional": true
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
      "media_type": {
        "type": "string",
        "optional": true
      },
      "name": {
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
      "version": {
        "type": "string",
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
            },
            "update": {
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

export interface KinesisVideoStreamConfig extends TerraformMetaArguments {
  readonly dataRetentionInHours?: number;
  readonly deviceName?: string;
  readonly kmsKeyId?: string;
  readonly mediaType?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: KinesisVideoStreamTimeouts;
}
export interface KinesisVideoStreamTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KinesisVideoStream extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisVideoStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_video_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRetentionInHours = config.dataRetentionInHours;
    this._deviceName = config.deviceName;
    this._kmsKeyId = config.kmsKeyId;
    this._mediaType = config.mediaType;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_retention_in_hours - computed: false, optional: true, required: false
  private _dataRetentionInHours?: number;
  public get dataRetentionInHours() {
    return this._dataRetentionInHours;
  }
  public set dataRetentionInHours(value: number | undefined) {
    this._dataRetentionInHours = value;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string;
  public get deviceName() {
    return this._deviceName;
  }
  public set deviceName(value: string | undefined) {
    this._deviceName = value;
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

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string;
  public get mediaType() {
    return this._mediaType;
  }
  public set mediaType(value: string | undefined) {
    this._mediaType = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KinesisVideoStreamTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KinesisVideoStreamTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      data_retention_in_hours: this._dataRetentionInHours,
      device_name: this._deviceName,
      kms_key_id: this._kmsKeyId,
      media_type: this._mediaType,
      name: this._name,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
