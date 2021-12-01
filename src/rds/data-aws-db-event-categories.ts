// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DataAwsDbEventCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html#source_type DataAwsDbEventCategories#source_type}
  */
  readonly sourceType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories}
*/
export class DataAwsDbEventCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_event_categories";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDbEventCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsDbEventCategoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_db_event_categories',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._sourceType = config.sourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_categories - computed: true, optional: false, required: false
  public get eventCategories() {
    return this.getListAttribute('event_categories');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      source_type: cdktf.stringToTerraform(this._sourceType),
    };
  }
}
