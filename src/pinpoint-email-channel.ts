// https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PinpointEmailChannelConfig extends cdktf.TerraformMetaArguments {
  readonly applicationId: string;
  readonly enabled?: boolean;
  readonly fromAddress: string;
  readonly identity: string;
  readonly roleArn: string;
}

// Resource

export class PinpointEmailChannel extends cdktf.TerraformResource {

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
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // from_address - computed: false, optional: false, required: true
  private _fromAddress: string;
  public get fromAddress() {
    return this.getStringAttribute('from_address');
  }
  public set fromAddress(value: string) {
    this._fromAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAddressInput() {
    return this._fromAddress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: false, optional: false, required: true
  private _identity: string;
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // messages_per_second - computed: true, optional: false, required: false
  public get messagesPerSecond() {
    return this.getNumberAttribute('messages_per_second');
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      from_address: cdktf.stringToTerraform(this._fromAddress),
      identity: cdktf.stringToTerraform(this._identity),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
