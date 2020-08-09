// https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html
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
        "required": true
      },
      "execution_role_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
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
      "policy_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "resource_types": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "target_tags": {
              "type": [
                "map",
                "string"
              ],
              "required": true
            }
          },
          "block_types": {
            "schedule": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "copy_tags": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "name": {
                    "type": "string",
                    "required": true
                  },
                  "tags_to_add": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  }
                },
                "block_types": {
                  "create_rule": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "interval": {
                          "type": "number",
                          "required": true
                        },
                        "interval_unit": {
                          "type": "string",
                          "optional": true
                        },
                        "times": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "retain_rule": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "count": {
                          "type": "number",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  }
                }
              },
              "min_items": 1
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

export interface DlmLifecyclePolicyConfig extends TerraformMetaArguments {
  readonly description: string;
  readonly executionRoleArn: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** policy_details block */
  readonly policyDetails: DlmLifecyclePolicyPolicyDetails[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
  readonly interval: number;
  readonly intervalUnit?: string;
  readonly times?: string[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
  readonly count: number;
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
  readonly copyTags?: boolean;
  readonly name: string;
  readonly tagsToAdd?: { [key: string]: string };
  /** create_rule block */
  readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule[];
  /** retain_rule block */
  readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule[];
}
export interface DlmLifecyclePolicyPolicyDetails {
  readonly resourceTypes: string[];
  readonly targetTags: { [key: string]: string };
  /** schedule block */
  readonly schedule: DlmLifecyclePolicyPolicyDetailsSchedule[];
}

// Resource

export class DlmLifecyclePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dlm_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._state = config.state;
    this._tags = config.tags;
    this._policyDetails = config.policyDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this._executionRoleArn;
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // policy_details - computed: false, optional: false, required: true
  private _policyDetails: DlmLifecyclePolicyPolicyDetails[];
  public get policyDetails() {
    return this._policyDetails;
  }
  public set policyDetails(value: DlmLifecyclePolicyPolicyDetails[]) {
    this._policyDetails = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      execution_role_arn: this._executionRoleArn,
      state: this._state,
      tags: this._tags,
      policy_details: this._policyDetails,
    };
  }
}
