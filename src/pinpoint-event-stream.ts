// https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PinpointEventStreamConfig extends cdktf.TerraformMetaArguments {
  readonly applicationId: string;
  readonly destinationStreamArn: string;
  readonly roleArn: string;
}

// Resource

export class PinpointEventStream extends cdktf.TerraformResource {

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
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // destination_stream_arn - computed: false, optional: false, required: true
  private _destinationStreamArn: string;
  public get destinationStreamArn() {
    return this.getStringAttribute('destination_stream_arn');
  }
  public set destinationStreamArn(value: string) {
    this._destinationStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationStreamArnInput() {
    return this._destinationStreamArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      destination_stream_arn: cdktf.stringToTerraform(this._destinationStreamArn),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
