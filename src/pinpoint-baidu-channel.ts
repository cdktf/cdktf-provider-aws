// https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_key": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "application_id": {
        "type": "string",
        "required": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "secret_key": {
        "type": "string",
        "required": true,
        "sensitive": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PinpointBaiduChannelConfig extends TerraformMetaArguments {
  readonly apiKey: string;
  readonly applicationId: string;
  readonly enabled?: boolean;
  readonly secretKey: string;
}

// Resource

export class PinpointBaiduChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointBaiduChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_baidu_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiKey = config.apiKey;
    this._applicationId = config.applicationId;
    this._enabled = config.enabled;
    this._secretKey = config.secretKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey: string;
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey: string;
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: this._apiKey,
      application_id: this._applicationId,
      enabled: this._enabled,
      secret_key: this._secretKey,
    };
  }
}
