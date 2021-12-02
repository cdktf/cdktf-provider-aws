// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}
  */
  readonly enableSipLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging}
*/
export class ChimeVoiceConnectorLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_chime_voice_connector_logging";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_logging',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableSipLogs = config.enableSipLogs;
    this._voiceConnectorId = config.voiceConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_sip_logs - computed: false, optional: true, required: false
  private _enableSipLogs?: boolean | cdktf.IResolvable; 
  public get enableSipLogs() {
    return this.getBooleanAttribute('enable_sip_logs') as any;
  }
  public set enableSipLogs(value: boolean | cdktf.IResolvable) {
    this._enableSipLogs = value;
  }
  public resetEnableSipLogs() {
    this._enableSipLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSipLogsInput() {
    return this._enableSipLogs;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      enable_sip_logs: cdktf.booleanToTerraform(this._enableSipLogs),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
    };
  }
}
