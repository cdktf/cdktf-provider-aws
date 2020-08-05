// https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html
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
      "destination_stream_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface PinpointEventStreamConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly destinationStreamArn: string;
  readonly roleArn: string;
}

// Resource

export class PinpointEventStream extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointEventStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_event_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._destinationStreamArn = config.destinationStreamArn;
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

  // destination_stream_arn - computed: false, optional: false, required: true
  private _destinationStreamArn: string;
  public get destinationStreamArn() {
    return this._destinationStreamArn;
  }
  public set destinationStreamArn(value: string) {
    this._destinationStreamArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
      destination_stream_arn: this._destinationStreamArn,
      role_arn: this._roleArn,
    };
  }
}
