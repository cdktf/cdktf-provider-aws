// https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html
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
      "activated_rule": {
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
              "min_items": 1,
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

export interface WafregionalRuleGroupConfig extends TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** activated_rule block */
  readonly activatedRule?: WafregionalRuleGroupActivatedRule[];
}
export interface WafregionalRuleGroupActivatedRuleAction {
  readonly type: string;
}
export interface WafregionalRuleGroupActivatedRule {
  readonly priority: number;
  readonly ruleId: string;
  readonly type?: string;
  /** action block */
  readonly action: WafregionalRuleGroupActivatedRuleAction[];
}

// Resource

export class WafregionalRuleGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_rule_group',
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
    this._activatedRule = config.activatedRule;
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

  // activated_rule - computed: false, optional: true, required: false
  private _activatedRule?: WafregionalRuleGroupActivatedRule[];
  public get activatedRule() {
    return this._activatedRule;
  }
  public set activatedRule(value: WafregionalRuleGroupActivatedRule[] | undefined) {
    this._activatedRule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: this._metricName,
      name: this._name,
      tags: this._tags,
      activated_rule: this._activatedRule,
    };
  }
}
