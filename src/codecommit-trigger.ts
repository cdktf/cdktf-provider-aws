// https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "configuration_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "repository_name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "trigger": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "branches": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "custom_data": {
              "type": "string",
              "optional": true
            },
            "destination_arn": {
              "type": "string",
              "required": true
            },
            "events": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "name": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 10
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodecommitTriggerConfig extends TerraformMetaArguments {
  readonly repositoryName: string;
  /** trigger block */
  readonly trigger: CodecommitTriggerTrigger[];
}
export interface CodecommitTriggerTrigger {
  readonly branches?: string[];
  readonly customData?: string;
  readonly destinationArn: string;
  readonly events: string[];
  readonly name: string;
}

// Resource

export class CodecommitTrigger extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodecommitTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecommit_trigger',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._repositoryName = config.repositoryName;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: true, optional: false, required: true
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this._repositoryName;
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger: CodecommitTriggerTrigger[];
  public get trigger() {
    return this._trigger;
  }
  public set trigger(value: CodecommitTriggerTrigger[]) {
    this._trigger = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      repository_name: this._repositoryName,
      trigger: this._trigger,
    };
  }
}
