// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector#aws_region ChimeVoiceConnector#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector#name ChimeVoiceConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector#require_encryption ChimeVoiceConnector#require_encryption}
  */
  readonly requireEncryption: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector aws_chime_voice_connector}
*/
export class ChimeVoiceConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_chime_voice_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector aws_chime_voice_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsRegion = config.awsRegion;
    this._name = config.name;
    this._requireEncryption = config.requireEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // outbound_host_name - computed: true, optional: false, required: false
  public get outboundHostName() {
    return this.getStringAttribute('outbound_host_name');
  }

  // require_encryption - computed: false, optional: false, required: true
  private _requireEncryption?: boolean | cdktf.IResolvable; 
  public get requireEncryption() {
    return this.getBooleanAttribute('require_encryption');
  }
  public set requireEncryption(value: boolean | cdktf.IResolvable) {
    this._requireEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEncryptionInput() {
    return this._requireEncryption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      name: cdktf.stringToTerraform(this._name),
      require_encryption: cdktf.booleanToTerraform(this._requireEncryption),
    };
  }
}
