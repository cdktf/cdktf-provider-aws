// https://www.terraform.io/docs/providers/aws/r/media_package_channel.html
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
      "channel_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "hls_ingest": {
        "type": [
          "list",
          [
            "object",
            {
              "ingest_endpoints": [
                "list",
                [
                  "object",
                  {
                    "password": "string",
                    "url": "string",
                    "username": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "id": {
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface MediaPackageChannelConfig extends TerraformMetaArguments {
  readonly channelId: string;
  readonly description?: string;
  readonly tags?: { [key: string]: string };
}
export class MediaPackageChannelHlsIngestIngestEndpoints extends ComplexComputedList {

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class MediaPackageChannelHlsIngest extends ComplexComputedList {

  // ingest_endpoints - computed: true, optional: false, required: true
  public get ingestEndpoints() {
    return 'not implemented' as any;
  }
}

// Resource

export class MediaPackageChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MediaPackageChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_media_package_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._channelId = config.channelId;
    this._description = config.description;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId: string;
  public get channelId() {
    return this._channelId;
  }
  public set channelId(value: string) {
    this._channelId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // hls_ingest - computed: true, optional: false, required: true
  public hlsIngest(index: string) {
    return new MediaPackageChannelHlsIngest(this, 'hls_ingest', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
      channel_id: this._channelId,
      description: this._description,
      tags: this._tags,
    };
  }
}
