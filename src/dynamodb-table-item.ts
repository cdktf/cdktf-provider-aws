// https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbTableItemConfig extends cdktf.TerraformMetaArguments {
  readonly hashKey: string;
  readonly item: string;
  readonly rangeKey?: string;
  readonly tableName: string;
}

// Resource

export class DynamodbTableItem extends cdktf.TerraformResource {

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
    return this.getStringAttribute('hash_key');
  }
  public set hashKey(value: string) {
    this._hashKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyInput() {
    return this._hashKey
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item - computed: false, optional: false, required: true
  private _item: string;
  public get item() {
    return this.getStringAttribute('item');
  }
  public set item(value: string) {
    this._item = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item
  }

  // range_key - computed: false, optional: true, required: false
  private _rangeKey?: string;
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
  public set rangeKey(value: string ) {
    this._rangeKey = value;
  }
  public resetRangeKey() {
    this._rangeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyInput() {
    return this._rangeKey
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hash_key: cdktf.stringToTerraform(this._hashKey),
      item: cdktf.stringToTerraform(this._item),
      range_key: cdktf.stringToTerraform(this._rangeKey),
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }
}
