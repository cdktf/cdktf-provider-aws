// https://www.terraform.io/docs/providers/aws/r/glue_trigger.html
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
      "enabled": {
        "type": "bool",
        "optional": true
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
      "schedule": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "type": {
        "type": "string",
        "required": true
      },
      "workflow_name": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "actions": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "arguments": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "crawler_name": {
              "type": "string",
              "optional": true
            },
            "job_name": {
              "type": "string",
              "optional": true
            },
            "timeout": {
              "type": "number",
              "optional": true
            }
          }
        },
        "min_items": 1
      },
      "predicate": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "logical": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "conditions": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "crawl_state": {
                    "type": "string",
                    "optional": true
                  },
                  "crawler_name": {
                    "type": "string",
                    "optional": true
                  },
                  "job_name": {
                    "type": "string",
                    "optional": true
                  },
                  "logical_operator": {
                    "type": "string",
                    "optional": true
                  },
                  "state": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "min_items": 1
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
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

export interface GlueTriggerConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly schedule?: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly workflowName?: string;
  /** actions block */
  readonly actions: GlueTriggerActions[];
  /** predicate block */
  readonly predicate?: GlueTriggerPredicate[];
  /** timeouts block */
  readonly timeouts?: GlueTriggerTimeouts;
}
export interface GlueTriggerActions {
  readonly arguments?: { [key: string]: string };
  readonly crawlerName?: string;
  readonly jobName?: string;
  readonly timeout?: number;
}
export interface GlueTriggerPredicateConditions {
  readonly crawlState?: string;
  readonly crawlerName?: string;
  readonly jobName?: string;
  readonly logicalOperator?: string;
  readonly state?: string;
}
export interface GlueTriggerPredicate {
  readonly logical?: string;
  /** conditions block */
  readonly conditions: GlueTriggerPredicateConditions[];
}
export interface GlueTriggerTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GlueTrigger extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_trigger',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._schedule = config.schedule;
    this._tags = config.tags;
    this._type = config.type;
    this._workflowName = config.workflowName;
    this._actions = config.actions;
    this._predicate = config.predicate;
    this._timeouts = config.timeouts;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: string | undefined) {
    this._schedule = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string;
  public get workflowName() {
    return this._workflowName;
  }
  public set workflowName(value: string | undefined) {
    this._workflowName = value;
  }

  // actions - computed: false, optional: false, required: true
  private _actions: GlueTriggerActions[];
  public get actions() {
    return this._actions;
  }
  public set actions(value: GlueTriggerActions[]) {
    this._actions = value;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: GlueTriggerPredicate[];
  public get predicate() {
    return this._predicate;
  }
  public set predicate(value: GlueTriggerPredicate[] | undefined) {
    this._predicate = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GlueTriggerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GlueTriggerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      enabled: this._enabled,
      name: this._name,
      schedule: this._schedule,
      tags: this._tags,
      type: this._type,
      workflow_name: this._workflowName,
      actions: this._actions,
      predicate: this._predicate,
      timeouts: this._timeouts,
    };
  }
}
