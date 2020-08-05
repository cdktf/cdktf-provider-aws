// https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "billing_mode": {
        "type": "string",
        "optional": true
      },
      "hash_key": {
        "type": "string",
        "required": true
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
      "range_key": {
        "type": "string",
        "optional": true
      },
      "read_capacity": {
        "type": "number",
        "optional": true
      },
      "stream_arn": {
        "type": "string",
        "computed": true
      },
      "stream_enabled": {
        "type": "bool",
        "optional": true
      },
      "stream_label": {
        "type": "string",
        "computed": true
      },
      "stream_view_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "write_capacity": {
        "type": "number",
        "optional": true
      }
    },
    "block_types": {
      "attribute": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
      },
      "global_secondary_index": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "hash_key": {
              "type": "string",
              "required": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "non_key_attributes": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "projection_type": {
              "type": "string",
              "required": true
            },
            "range_key": {
              "type": "string",
              "optional": true
            },
            "read_capacity": {
              "type": "number",
              "optional": true
            },
            "write_capacity": {
              "type": "number",
              "optional": true
            }
          }
        }
      },
      "local_secondary_index": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "non_key_attributes": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "projection_type": {
              "type": "string",
              "required": true
            },
            "range_key": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "point_in_time_recovery": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "replica": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "region_name": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "server_side_encryption": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "required": true
            },
            "kms_key_arn": {
              "type": "string",
              "optional": true,
              "computed": true
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
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "ttl": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "attribute_name": {
              "type": "string",
              "required": true
            },
            "enabled": {
              "type": "bool",
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

export interface DynamodbTableConfig extends TerraformMetaArguments {
  readonly billingMode?: string;
  readonly hashKey: string;
  readonly name: string;
  readonly rangeKey?: string;
  readonly readCapacity?: number;
  readonly streamEnabled?: boolean;
  readonly streamViewType?: string;
  readonly tags?: { [key: string]: string };
  readonly writeCapacity?: number;
  /** attribute block */
  readonly attribute: DynamodbTableAttribute[];
  /** global_secondary_index block */
  readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[];
  /** local_secondary_index block */
  readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[];
  /** point_in_time_recovery block */
  readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery[];
  /** replica block */
  readonly replica?: DynamodbTableReplica[];
  /** server_side_encryption block */
  readonly serverSideEncryption?: DynamodbTableServerSideEncryption[];
  /** timeouts block */
  readonly timeouts?: DynamodbTableTimeouts;
  /** ttl block */
  readonly ttl?: DynamodbTableTtl[];
}
export interface DynamodbTableAttribute {
  readonly name: string;
  readonly type: string;
}
export interface DynamodbTableGlobalSecondaryIndex {
  readonly hashKey: string;
  readonly name: string;
  readonly nonKeyAttributes?: string[];
  readonly projectionType: string;
  readonly rangeKey?: string;
  readonly readCapacity?: number;
  readonly writeCapacity?: number;
}
export interface DynamodbTableLocalSecondaryIndex {
  readonly name: string;
  readonly nonKeyAttributes?: string[];
  readonly projectionType: string;
  readonly rangeKey: string;
}
export interface DynamodbTablePointInTimeRecovery {
  readonly enabled: boolean;
}
export interface DynamodbTableReplica {
  readonly regionName: string;
}
export interface DynamodbTableServerSideEncryption {
  readonly enabled: boolean;
  readonly kmsKeyArn?: string;
}
export interface DynamodbTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface DynamodbTableTtl {
  readonly attributeName: string;
  readonly enabled?: boolean;
}

// Resource

export class DynamodbTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingMode = config.billingMode;
    this._hashKey = config.hashKey;
    this._name = config.name;
    this._rangeKey = config.rangeKey;
    this._readCapacity = config.readCapacity;
    this._streamEnabled = config.streamEnabled;
    this._streamViewType = config.streamViewType;
    this._tags = config.tags;
    this._writeCapacity = config.writeCapacity;
    this._attribute = config.attribute;
    this._globalSecondaryIndex = config.globalSecondaryIndex;
    this._localSecondaryIndex = config.localSecondaryIndex;
    this._pointInTimeRecovery = config.pointInTimeRecovery;
    this._replica = config.replica;
    this._serverSideEncryption = config.serverSideEncryption;
    this._timeouts = config.timeouts;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // billing_mode - computed: false, optional: true, required: false
  private _billingMode?: string;
  public get billingMode() {
    return this._billingMode;
  }
  public set billingMode(value: string | undefined) {
    this._billingMode = value;
  }

  // hash_key - computed: false, optional: false, required: true
  private _hashKey: string;
  public get hashKey() {
    return this._hashKey;
  }
  public set hashKey(value: string) {
    this._hashKey = value;
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

  // range_key - computed: false, optional: true, required: false
  private _rangeKey?: string;
  public get rangeKey() {
    return this._rangeKey;
  }
  public set rangeKey(value: string | undefined) {
    this._rangeKey = value;
  }

  // read_capacity - computed: false, optional: true, required: false
  private _readCapacity?: number;
  public get readCapacity() {
    return this._readCapacity;
  }
  public set readCapacity(value: number | undefined) {
    this._readCapacity = value;
  }

  // stream_arn - computed: true, optional: false, required: true
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_enabled - computed: false, optional: true, required: false
  private _streamEnabled?: boolean;
  public get streamEnabled() {
    return this._streamEnabled;
  }
  public set streamEnabled(value: boolean | undefined) {
    this._streamEnabled = value;
  }

  // stream_label - computed: true, optional: false, required: true
  public get streamLabel() {
    return this.getStringAttribute('stream_label');
  }

  // stream_view_type - computed: true, optional: true, required: false
  private _streamViewType?: string;
  public get streamViewType() {
    return this._streamViewType ?? this.getStringAttribute('stream_view_type');
  }
  public set streamViewType(value: string | undefined) {
    this._streamViewType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // write_capacity - computed: false, optional: true, required: false
  private _writeCapacity?: number;
  public get writeCapacity() {
    return this._writeCapacity;
  }
  public set writeCapacity(value: number | undefined) {
    this._writeCapacity = value;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute: DynamodbTableAttribute[];
  public get attribute() {
    return this._attribute;
  }
  public set attribute(value: DynamodbTableAttribute[]) {
    this._attribute = value;
  }

  // global_secondary_index - computed: false, optional: true, required: false
  private _globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[];
  public get globalSecondaryIndex() {
    return this._globalSecondaryIndex;
  }
  public set globalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[] | undefined) {
    this._globalSecondaryIndex = value;
  }

  // local_secondary_index - computed: false, optional: true, required: false
  private _localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[];
  public get localSecondaryIndex() {
    return this._localSecondaryIndex;
  }
  public set localSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[] | undefined) {
    this._localSecondaryIndex = value;
  }

  // point_in_time_recovery - computed: false, optional: true, required: false
  private _pointInTimeRecovery?: DynamodbTablePointInTimeRecovery[];
  public get pointInTimeRecovery() {
    return this._pointInTimeRecovery;
  }
  public set pointInTimeRecovery(value: DynamodbTablePointInTimeRecovery[] | undefined) {
    this._pointInTimeRecovery = value;
  }

  // replica - computed: false, optional: true, required: false
  private _replica?: DynamodbTableReplica[];
  public get replica() {
    return this._replica;
  }
  public set replica(value: DynamodbTableReplica[] | undefined) {
    this._replica = value;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: DynamodbTableServerSideEncryption[];
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public set serverSideEncryption(value: DynamodbTableServerSideEncryption[] | undefined) {
    this._serverSideEncryption = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DynamodbTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DynamodbTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: DynamodbTableTtl[];
  public get ttl() {
    return this._ttl;
  }
  public set ttl(value: DynamodbTableTtl[] | undefined) {
    this._ttl = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_mode: this._billingMode,
      hash_key: this._hashKey,
      name: this._name,
      range_key: this._rangeKey,
      read_capacity: this._readCapacity,
      stream_enabled: this._streamEnabled,
      stream_view_type: this._streamViewType,
      tags: this._tags,
      write_capacity: this._writeCapacity,
      attribute: this._attribute,
      global_secondary_index: this._globalSecondaryIndex,
      local_secondary_index: this._localSecondaryIndex,
      point_in_time_recovery: this._pointInTimeRecovery,
      replica: this._replica,
      server_side_encryption: this._serverSideEncryption,
      timeouts: this._timeouts,
      ttl: this._ttl,
    };
  }
}
