// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Chime
*/
export interface ChimeVoiceConnectorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#name ChimeVoiceConnectorGroup#name}
  */
  readonly name: string;
  /**
  * connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#connector ChimeVoiceConnectorGroup#connector}
  */
  readonly connector?: ChimeVoiceConnectorGroupConnector[];
}
export interface ChimeVoiceConnectorGroupConnector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#priority ChimeVoiceConnectorGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

export function chimeVoiceConnectorGroupConnectorToTerraform(struct?: ChimeVoiceConnectorGroupConnector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    voice_connector_id: cdktf.stringToTerraform(struct!.voiceConnectorId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group}
*/
export class ChimeVoiceConnectorGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_chime_voice_connector_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._connector = config.connector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // connector - computed: false, optional: true, required: false
  private _connector?: ChimeVoiceConnectorGroupConnector[]; 
  public get connector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connector') as any;
  }
  public set connector(value: ChimeVoiceConnectorGroupConnector[]) {
    this._connector = value;
  }
  public resetConnector() {
    this._connector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      connector: cdktf.listMapper(chimeVoiceConnectorGroupConnectorToTerraform)(this._connector),
    };
  }
}
