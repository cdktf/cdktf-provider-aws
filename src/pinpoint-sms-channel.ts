// https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "promotional_messages_per_second": {
        "type": "number",
        "computed": true
      },
      "sender_id": {
        "type": "string",
        "optional": true
      },
      "short_code": {
        "type": "string",
        "optional": true
      },
      "transactional_messages_per_second": {
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

export interface PinpointSmsChannelConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly enabled?: boolean;
  readonly senderId?: string;
  readonly shortCode?: string;
}

// Resource

export class PinpointSmsChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointSmsChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_sms_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._enabled = config.enabled;
    this._senderId = config.senderId;
    this._shortCode = config.shortCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // promotional_messages_per_second - computed: true, optional: false, required: true
  public get promotionalMessagesPerSecond() {
    return this.getNumberAttribute('promotional_messages_per_second');
  }

  // sender_id - computed: false, optional: true, required: false
  private _senderId?: string;
  public get senderId() {
    return this._senderId;
  }
  public set senderId(value: string | undefined) {
    this._senderId = value;
  }

  // short_code - computed: false, optional: true, required: false
  private _shortCode?: string;
  public get shortCode() {
    return this._shortCode;
  }
  public set shortCode(value: string | undefined) {
    this._shortCode = value;
  }

  // transactional_messages_per_second - computed: true, optional: false, required: true
  public get transactionalMessagesPerSecond() {
    return this.getNumberAttribute('transactional_messages_per_second');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      enabled: this._enabled,
      sender_id: this._senderId,
      short_code: this._shortCode,
    };
  }
}
