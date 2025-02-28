/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}
  */
  readonly enableMediaMetricLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}
  */
  readonly enableSipLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging aws_chime_voice_connector_logging}
*/
export class ChimeVoiceConnectorLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChimeVoiceConnectorLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorLogging to import
  * @param importFromId The id of the existing ChimeVoiceConnectorLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeVoiceConnectorLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chime_voice_connector_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/chime_voice_connector_logging aws_chime_voice_connector_logging} Resource
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
        providerVersion: '5.89.0',
        providerVersionConstraint: '~> 5.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_media_metric_logs: {
        value: cdktf.booleanToHclTerraform(this._enableMediaMetricLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sip_logs: {
        value: cdktf.booleanToHclTerraform(this._enableSipLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_connector_id: {
        value: cdktf.stringToHclTerraform(this._voiceConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
