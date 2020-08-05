// https://www.terraform.io/docs/providers/aws/r/data_aws_dynamodb_table.html
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
      "attribute": {
        "type": [
          "set",
          [
            "object",
            {
              "name": "string",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "billing_mode": {
        "type": "string",
        "computed": true
      },
      "global_secondary_index": {
        "type": [
          "set",
          [
            "object",
            {
              "hash_key": "string",
              "name": "string",
              "non_key_attributes": [
                "list",
                "string"
              ],
              "projection_type": "string",
              "range_key": "string",
              "read_capacity": "number",
              "write_capacity": "number"
            }
          ]
        ],
        "computed": true
      },
      "hash_key": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "local_secondary_index": {
        "type": [
          "set",
          [
            "object",
            {
              "name": "string",
              "non_key_attributes": [
                "list",
                "string"
              ],
              "projection_type": "string",
              "range_key": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "point_in_time_recovery": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "range_key": {
        "type": "string",
        "computed": true
      },
      "read_capacity": {
        "type": "number",
        "computed": true
      },
      "replica": {
        "type": [
          "set",
          [
            "object",
            {
              "region_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "stream_arn": {
        "type": "string",
        "computed": true
      },
      "stream_enabled": {
        "type": "bool",
        "computed": true
      },
      "stream_label": {
        "type": "string",
        "computed": true
      },
      "stream_view_type": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "ttl": {
        "type": [
          "set",
          [
            "object",
            {
              "attribute_name": "string",
              "enabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "write_capacity": {
        "type": "number",
        "computed": true
      }
    },
    "block_types": {
      "server_side_encryption": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "computed": true
            },
            "kms_key_arn": {
              "type": "string",
              "computed": true
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
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsDynamodbTableConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** server_side_encryption block */
  readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption[];
}
export class DataAwsDynamodbTableAttribute extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsDynamodbTableGlobalSecondaryIndex extends ComplexComputedList {

  // hash_key - computed: true, optional: false, required: true
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_key_attributes - computed: true, optional: false, required: true
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: true
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }

  // range_key - computed: true, optional: false, required: true
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }

  // read_capacity - computed: true, optional: false, required: true
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }

  // write_capacity - computed: true, optional: false, required: true
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }
}
export class DataAwsDynamodbTableLocalSecondaryIndex extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_key_attributes - computed: true, optional: false, required: true
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: true
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }

  // range_key - computed: true, optional: false, required: true
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
}
export class DataAwsDynamodbTablePointInTimeRecovery extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsDynamodbTableReplica extends ComplexComputedList {

  // region_name - computed: true, optional: false, required: true
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export class DataAwsDynamodbTableTtl extends ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: true
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsDynamodbTableServerSideEncryption {
}

// Resource

export class DataAwsDynamodbTable extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig) {
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
    this._name = config.name;
    this._tags = config.tags;
    this._serverSideEncryption = config.serverSideEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute - computed: true, optional: false, required: true
  public attribute(index: string) {
    return new DataAwsDynamodbTableAttribute(this, 'attribute', index);
  }

  // billing_mode - computed: true, optional: false, required: true
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // global_secondary_index - computed: true, optional: false, required: true
  public globalSecondaryIndex(index: string) {
    return new DataAwsDynamodbTableGlobalSecondaryIndex(this, 'global_secondary_index', index);
  }

  // hash_key - computed: true, optional: false, required: true
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // local_secondary_index - computed: true, optional: false, required: true
  public localSecondaryIndex(index: string) {
    return new DataAwsDynamodbTableLocalSecondaryIndex(this, 'local_secondary_index', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // point_in_time_recovery - computed: true, optional: false, required: true
  public pointInTimeRecovery(index: string) {
    return new DataAwsDynamodbTablePointInTimeRecovery(this, 'point_in_time_recovery', index);
  }

  // range_key - computed: true, optional: false, required: true
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }

  // read_capacity - computed: true, optional: false, required: true
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }

  // replica - computed: true, optional: false, required: true
  public replica(index: string) {
    return new DataAwsDynamodbTableReplica(this, 'replica', index);
  }

  // stream_arn - computed: true, optional: false, required: true
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_enabled - computed: true, optional: false, required: true
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled');
  }

  // stream_label - computed: true, optional: false, required: true
  public get streamLabel() {
    return this.getStringAttribute('stream_label');
  }

  // stream_view_type - computed: true, optional: false, required: true
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // ttl - computed: true, optional: false, required: true
  public ttl(index: string) {
    return new DataAwsDynamodbTableTtl(this, 'ttl', index);
  }

  // write_capacity - computed: true, optional: false, required: true
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption[];
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public set serverSideEncryption(value: DataAwsDynamodbTableServerSideEncryption[] | undefined) {
    this._serverSideEncryption = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      server_side_encryption: this._serverSideEncryption,
    };
  }
}
