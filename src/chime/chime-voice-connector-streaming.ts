// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}
  */
  readonly dataRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
  */
  readonly streamingNotificationTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming aws_chime_voice_connector_streaming}
*/
export class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_chime_voice_connector_streaming";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming aws_chime_voice_connector_streaming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorStreamingConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_streaming',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRetention = config.dataRetention;
    this._disabled = config.disabled;
    this._streamingNotificationTargets = config.streamingNotificationTargets;
    this._voiceConnectorId = config.voiceConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_retention - computed: false, optional: false, required: true
  private _dataRetention?: number; 
  public get dataRetention() {
    return this.getNumberAttribute('data_retention');
  }
  public set dataRetention(value: number) {
    this._dataRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInput() {
    return this._dataRetention;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // streaming_notification_targets - computed: false, optional: true, required: false
  private _streamingNotificationTargets?: string[]; 
  public get streamingNotificationTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('streaming_notification_targets'));
  }
  public set streamingNotificationTargets(value: string[]) {
    this._streamingNotificationTargets = value;
  }
  public resetStreamingNotificationTargets() {
    this._streamingNotificationTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingNotificationTargetsInput() {
    return this._streamingNotificationTargets;
  }

  // voice_connector_id - computed: false, optional: false, required: true
  private _voiceConnectorId?: string; 
  public get voiceConnectorId() {
    return this.getStringAttribute('voice_connector_id');
  }
  public set voiceConnectorId(value: string) {
    this._voiceConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceConnectorIdInput() {
    return this._voiceConnectorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_retention: cdktf.numberToTerraform(this._dataRetention),
      disabled: cdktf.booleanToTerraform(this._disabled),
      streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform)(this._streamingNotificationTargets),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
    };
  }
}
