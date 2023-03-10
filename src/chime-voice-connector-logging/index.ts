// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}
  */
  readonly enableMediaMetricLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}
  */
  readonly enableSipLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging aws_chime_voice_connector_logging}
*/
export class ChimeVoiceConnectorLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_logging";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging aws_chime_voice_connector_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_logging',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableMediaMetricLogs = config.enableMediaMetricLogs;
    this._enableSipLogs = config.enableSipLogs;
    this._id = config.id;
    this._voiceConnectorId = config.voiceConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_media_metric_logs - computed: false, optional: true, required: false
  private _enableMediaMetricLogs?: boolean | cdktf.IResolvable; 
  public get enableMediaMetricLogs() {
    return this.getBooleanAttribute('enable_media_metric_logs');
  }
  public set enableMediaMetricLogs(value: boolean | cdktf.IResolvable) {
    this._enableMediaMetricLogs = value;
  }
  public resetEnableMediaMetricLogs() {
    this._enableMediaMetricLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMediaMetricLogsInput() {
    return this._enableMediaMetricLogs;
  }

  // enable_sip_logs - computed: false, optional: true, required: false
  private _enableSipLogs?: boolean | cdktf.IResolvable; 
  public get enableSipLogs() {
    return this.getBooleanAttribute('enable_sip_logs');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      enable_media_metric_logs: cdktf.booleanToTerraform(this._enableMediaMetricLogs),
      enable_sip_logs: cdktf.booleanToTerraform(this._enableSipLogs),
      id: cdktf.stringToTerraform(this._id),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
    };
  }
}
