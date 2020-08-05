// https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html
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
      }
    },
    "block_types": {
      "replica": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "region_name": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
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
            },
            "update": {
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

export interface DynamodbGlobalTableConfig extends TerraformMetaArguments {
  readonly name: string;
  /** replica block */
  readonly replica: DynamodbGlobalTableReplica[];
  /** timeouts block */
  readonly timeouts?: DynamodbGlobalTableTimeouts;
}
export interface DynamodbGlobalTableReplica {
  readonly regionName: string;
}
export interface DynamodbGlobalTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DynamodbGlobalTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_global_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._replica = config.replica;
    this._timeouts = config.timeouts;
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

  // replica - computed: false, optional: false, required: true
  private _replica: DynamodbGlobalTableReplica[];
  public get replica() {
    return this._replica;
  }
  public set replica(value: DynamodbGlobalTableReplica[]) {
    this._replica = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DynamodbGlobalTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DynamodbGlobalTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      replica: this._replica,
      timeouts: this._timeouts,
    };
  }
}
