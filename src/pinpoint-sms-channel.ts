// https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PinpointSmsChannelConfig extends cdktf.TerraformMetaArguments {
  readonly applicationId: string;
  readonly enabled?: boolean;
  readonly senderId?: string;
  readonly shortCode?: string;
}

// Resource

export class PinpointSmsChannel extends cdktf.TerraformResource {

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // promotional_messages_per_second - computed: true, optional: false, required: false
  public get promotionalMessagesPerSecond() {
    return this.getNumberAttribute('promotional_messages_per_second');
  }

  // sender_id - computed: false, optional: true, required: false
  private _senderId?: string;
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string ) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId
  }

  // short_code - computed: false, optional: true, required: false
  private _shortCode?: string;
  public get shortCode() {
    return this.getStringAttribute('short_code');
  }
  public set shortCode(value: string ) {
    this._shortCode = value;
  }
  public resetShortCode() {
    this._shortCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortCodeInput() {
    return this._shortCode
  }

  // transactional_messages_per_second - computed: true, optional: false, required: false
  public get transactionalMessagesPerSecond() {
    return this.getNumberAttribute('transactional_messages_per_second');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      sender_id: cdktf.stringToTerraform(this._senderId),
      short_code: cdktf.stringToTerraform(this._shortCode),
    };
  }
}
