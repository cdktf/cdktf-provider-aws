// https://www.terraform.io/docs/providers/aws/r/backup_plan.html
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
      },
      "version": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "rule": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "completion_window": {
              "type": "number",
              "optional": true
            },
            "recovery_point_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "rule_name": {
              "type": "string",
              "required": true
            },
            "schedule": {
              "type": "string",
              "optional": true
            },
            "start_window": {
              "type": "number",
              "optional": true
            },
            "target_vault_name": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "copy_action": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "destination_vault_arn": {
                    "type": "string",
                    "required": true
                  }
                },
                "block_types": {
                  "lifecycle": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "cold_storage_after": {
                          "type": "number",
                          "optional": true
                        },
                        "delete_after": {
                          "type": "number",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              }
            },
            "lifecycle": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "cold_storage_after": {
                    "type": "number",
                    "optional": true
                  },
                  "delete_after": {
                    "type": "number",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupPlanConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** rule block */
  readonly rule: BackupPlanRule[];
}
export interface BackupPlanRuleCopyActionLifecycle {
  readonly coldStorageAfter?: number;
  readonly deleteAfter?: number;
}
export interface BackupPlanRuleCopyAction {
  readonly destinationVaultArn: string;
  /** lifecycle block */
  readonly lifecycle?: BackupPlanRuleCopyActionLifecycle[];
}
export interface BackupPlanRuleLifecycle {
  readonly coldStorageAfter?: number;
  readonly deleteAfter?: number;
}
export interface BackupPlanRule {
  readonly completionWindow?: number;
  readonly recoveryPointTags?: { [key: string]: string };
  readonly ruleName: string;
  readonly schedule?: string;
  readonly startWindow?: number;
  readonly targetVaultName: string;
  /** copy_action block */
  readonly copyAction?: BackupPlanRuleCopyAction[];
  /** lifecycle block */
  readonly lifecycle?: BackupPlanRuleLifecycle[];
}

// Resource

export class BackupPlan extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
    this._rule = config.rule;
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

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // rule - computed: false, optional: false, required: true
  private _rule: BackupPlanRule[];
  public get rule() {
    return this._rule;
  }
  public set rule(value: BackupPlanRule[]) {
    this._rule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      rule: this._rule,
    };
  }
}
