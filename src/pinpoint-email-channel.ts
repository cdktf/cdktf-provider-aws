// https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html
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
      "from_address": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity": {
        "type": "string",
        "required": true
      },
      "messages_per_second": {
        "type": "number",
        "computed": true
      },
      "role_arn": {
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

export interface PinpointEmailChannelConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly enabled?: boolean;
  readonly fromAddress: string;
  readonly identity: string;
  readonly roleArn: string;
}

// Resource

export class PinpointEmailChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointEmailChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_email_channel',
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
    this._fromAddress = config.fromAddress;
    this._identity = config.identity;
    this._roleArn = config.roleArn;
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

  // from_address - computed: false, optional: false, required: true
  private _fromAddress: string;
  public get fromAddress() {
    return this._fromAddress;
  }
  public set fromAddress(value: string) {
    this._fromAddress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity - computed: false, optional: false, required: true
  private _identity: string;
  public get identity() {
    return this._identity;
  }
  public set identity(value: string) {
    this._identity = value;
  }

  // messages_per_second - computed: true, optional: false, required: true
  public get messagesPerSecond() {
    return this.getNumberAttribute('messages_per_second');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      enabled: this._enabled,
      from_address: this._fromAddress,
      identity: this._identity,
      role_arn: this._roleArn,
    };
  }
}
