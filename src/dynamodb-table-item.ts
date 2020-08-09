// https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "hash_key": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "item": {
        "type": "string",
        "required": true
      },
      "range_key": {
        "type": "string",
        "optional": true
      },
      "table_name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DynamodbTableItemConfig extends TerraformMetaArguments {
  readonly hashKey: string;
  readonly item: string;
  readonly rangeKey?: string;
  readonly tableName: string;
}

// Resource

export class DynamodbTableItem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DynamodbTableItemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table_item',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hashKey = config.hashKey;
    this._item = config.item;
    this._rangeKey = config.rangeKey;
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: false, optional: false, required: true
  private _item: string;
  public get item() {
    return this._item;
  }
  public set item(value: string) {
    this._item = value;
  }

  // range_key - computed: false, optional: true, required: false
  private _rangeKey?: string;
  public get rangeKey() {
    return this._rangeKey;
  }
  public set rangeKey(value: string | undefined) {
    this._rangeKey = value;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName: string;
  public get tableName() {
    return this._tableName;
  }
  public set tableName(value: string) {
    this._tableName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      hash_key: this._hashKey,
      item: this._item,
      range_key: this._rangeKey,
      table_name: this._tableName,
    };
  }
}
