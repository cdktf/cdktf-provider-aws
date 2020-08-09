// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "action": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "principal": {
        "type": "string",
        "required": true
      },
      "statement_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "condition": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            },
            "value": {
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
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchEventPermissionConfig extends TerraformMetaArguments {
  readonly action?: string;
  readonly principal: string;
  readonly statementId: string;
  /** condition block */
  readonly condition?: CloudwatchEventPermissionCondition[];
}
export interface CloudwatchEventPermissionCondition {
  readonly key: string;
  readonly type: string;
  readonly value: string;
}

// Resource

export class CloudwatchEventPermission extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchEventPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._principal = config.principal;
    this._statementId = config.statementId;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string;
  public get action() {
    return this._action;
  }
  public set action(value: string | undefined) {
    this._action = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this._principal;
  }
  public set principal(value: string) {
    this._principal = value;
  }

  // statement_id - computed: false, optional: false, required: true
  private _statementId: string;
  public get statementId() {
    return this._statementId;
  }
  public set statementId(value: string) {
    this._statementId = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: CloudwatchEventPermissionCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: CloudwatchEventPermissionCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      principal: this._principal,
      statement_id: this._statementId,
      condition: this._condition,
    };
  }
}
