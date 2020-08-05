// https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "metric_name": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
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
      "default_action": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "logging_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "log_destination": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "redacted_fields": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "field_to_match": {
                    "nesting_mode": "set",
                    "block": {
                      "attributes": {
                        "data": {
                          "type": "string",
                          "optional": true
                        },
                        "type": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "rules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "priority": {
              "type": "number",
              "required": true
            },
            "rule_id": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "action": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "override_action": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafWebAclConfig extends TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** default_action block */
  readonly defaultAction: WafWebAclDefaultAction[];
  /** logging_configuration block */
  readonly loggingConfiguration?: WafWebAclLoggingConfiguration[];
  /** rules block */
  readonly rules?: WafWebAclRules[];
}
export interface WafWebAclDefaultAction {
  readonly type: string;
}
export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafWebAclLoggingConfigurationRedactedFields {
  /** field_to_match block */
  readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export interface WafWebAclLoggingConfiguration {
  readonly logDestination: string;
  /** redacted_fields block */
  readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields[];
}
export interface WafWebAclRulesAction {
  readonly type: string;
}
export interface WafWebAclRulesOverrideAction {
  readonly type: string;
}
export interface WafWebAclRules {
  readonly priority: number;
  readonly ruleId: string;
  readonly type?: string;
  /** action block */
  readonly action?: WafWebAclRulesAction[];
  /** override_action block */
  readonly overrideAction?: WafWebAclRulesOverrideAction[];
}

// Resource

export class WafWebAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafWebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_web_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metricName = config.metricName;
    this._name = config.name;
    this._tags = config.tags;
    this._defaultAction = config.defaultAction;
    this._loggingConfiguration = config.loggingConfiguration;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName: string;
  public get metricName() {
    return this._metricName;
  }
  public set metricName(value: string) {
    this._metricName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: WafWebAclDefaultAction[];
  public get defaultAction() {
    return this._defaultAction;
  }
  public set defaultAction(value: WafWebAclDefaultAction[]) {
    this._defaultAction = value;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: WafWebAclLoggingConfiguration[];
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public set loggingConfiguration(value: WafWebAclLoggingConfiguration[] | undefined) {
    this._loggingConfiguration = value;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: WafWebAclRules[];
  public get rules() {
    return this._rules;
  }
  public set rules(value: WafWebAclRules[] | undefined) {
    this._rules = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: this._metricName,
      name: this._name,
      tags: this._tags,
      default_action: this._defaultAction,
      logging_configuration: this._loggingConfiguration,
      rules: this._rules,
    };
  }
}
