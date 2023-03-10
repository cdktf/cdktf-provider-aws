// https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDynamodbTableItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}
  */
  readonly expressionAttributeNames?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}
  */
  readonly projectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}
  */
  readonly tableName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item aws_dynamodb_table_item}
*/
export class DataAwsDynamodbTableItem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_table_item";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item aws_dynamodb_table_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDynamodbTableItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDynamodbTableItemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table_item',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expressionAttributeNames = config.expressionAttributeNames;
    this._id = config.id;
    this._key = config.key;
    this._projectionExpression = config.projectionExpression;
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expression_attribute_names - computed: false, optional: true, required: false
  private _expressionAttributeNames?: { [key: string]: string }; 
  public get expressionAttributeNames() {
    return this.getStringMapAttribute('expression_attribute_names');
  }
  public set expressionAttributeNames(value: { [key: string]: string }) {
    this._expressionAttributeNames = value;
  }
  public resetExpressionAttributeNames() {
    this._expressionAttributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionAttributeNamesInput() {
    return this._expressionAttributeNames;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // item - computed: true, optional: false, required: false
  public get item() {
    return this.getStringAttribute('item');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // projection_expression - computed: false, optional: true, required: false
  private _projectionExpression?: string; 
  public get projectionExpression() {
    return this.getStringAttribute('projection_expression');
  }
  public set projectionExpression(value: string) {
    this._projectionExpression = value;
  }
  public resetProjectionExpression() {
    this._projectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionExpressionInput() {
    return this._projectionExpression;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expression_attribute_names: cdktf.hashMapper(cdktf.stringToTerraform)(this._expressionAttributeNames),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      projection_expression: cdktf.stringToTerraform(this._projectionExpression),
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }
}
