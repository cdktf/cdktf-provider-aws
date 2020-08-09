// https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "required": true
      },
      "name": {
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

export interface ConfigConfigurationRecorderStatusConfig extends TerraformMetaArguments {
  readonly isEnabled: boolean;
  readonly name: string;
}

// Resource

export class ConfigConfigurationRecorderStatus extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_recorder_status',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._isEnabled = config.isEnabled;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled: boolean;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value: boolean) {
    this._isEnabled = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      is_enabled: this._isEnabled,
      name: this._name,
    };
  }
}
