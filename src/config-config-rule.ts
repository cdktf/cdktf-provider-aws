// https://www.terraform.io/docs/providers/aws/r/config_config_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "input_parameters": {
        "type": "string",
        "optional": true
      },
      "maximum_execution_frequency": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "rule_id": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "scope": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "compliance_resource_id": {
              "type": "string",
              "optional": true
            },
            "compliance_resource_types": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "tag_key": {
              "type": "string",
              "optional": true
            },
            "tag_value": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "owner": {
              "type": "string",
              "required": true
            },
            "source_identifier": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "source_detail": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "event_source": {
                    "type": "string",
                    "optional": true
                  },
                  "maximum_execution_frequency": {
                    "type": "string",
                    "optional": true
                  },
                  "message_type": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 25
            }
          }
        },
        "min_items": 1,
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

export interface ConfigConfigRuleConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly inputParameters?: string;
  readonly maximumExecutionFrequency?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** scope block */
  readonly scope?: ConfigConfigRuleScope[];
  /** source block */
  readonly source: ConfigConfigRuleSource[];
}
export interface ConfigConfigRuleScope {
  readonly complianceResourceId?: string;
  readonly complianceResourceTypes?: string[];
  readonly tagKey?: string;
  readonly tagValue?: string;
}
export interface ConfigConfigRuleSourceSourceDetail {
  readonly eventSource?: string;
  readonly maximumExecutionFrequency?: string;
  readonly messageType?: string;
}
export interface ConfigConfigRuleSource {
  readonly owner: string;
  readonly sourceIdentifier: string;
  /** source_detail block */
  readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
}

// Resource

export class ConfigConfigRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._inputParameters = config.inputParameters;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._tags = config.tags;
    this._scope = config.scope;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: string;
  public get inputParameters() {
    return this._inputParameters;
  }
  public set inputParameters(value: string | undefined) {
    this._inputParameters = value;
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string;
  public get maximumExecutionFrequency() {
    return this._maximumExecutionFrequency;
  }
  public set maximumExecutionFrequency(value: string | undefined) {
    this._maximumExecutionFrequency = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // rule_id - computed: true, optional: false, required: true
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: ConfigConfigRuleScope[];
  public get scope() {
    return this._scope;
  }
  public set scope(value: ConfigConfigRuleScope[] | undefined) {
    this._scope = value;
  }

  // source - computed: false, optional: false, required: true
  private _source: ConfigConfigRuleSource[];
  public get source() {
    return this._source;
  }
  public set source(value: ConfigConfigRuleSource[]) {
    this._source = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      input_parameters: this._inputParameters,
      maximum_execution_frequency: this._maximumExecutionFrequency,
      name: this._name,
      tags: this._tags,
      scope: this._scope,
      source: this._source,
    };
  }
}
