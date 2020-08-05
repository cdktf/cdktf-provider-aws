// https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html
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
      "name": {
        "type": "string",
        "optional": true
      },
      "role_arn": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "recording_group": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "all_supported": {
              "type": "bool",
              "optional": true
            },
            "include_global_resource_types": {
              "type": "bool",
              "optional": true
            },
            "resource_types": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigConfigurationRecorderConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly roleArn: string;
  /** recording_group block */
  readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
}
export interface ConfigConfigurationRecorderRecordingGroup {
  readonly allSupported?: boolean;
  readonly includeGlobalResourceTypes?: boolean;
  readonly resourceTypes?: string[];
}

// Resource

export class ConfigConfigurationRecorder extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_recorder',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._recordingGroup = config.recordingGroup;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // recording_group - computed: false, optional: true, required: false
  private _recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
  public get recordingGroup() {
    return this._recordingGroup;
  }
  public set recordingGroup(value: ConfigConfigurationRecorderRecordingGroup[] | undefined) {
    this._recordingGroup = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      role_arn: this._roleArn,
      recording_group: this._recordingGroup,
    };
  }
}
