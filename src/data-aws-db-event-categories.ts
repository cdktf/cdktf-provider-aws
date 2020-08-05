// https://www.terraform.io/docs/providers/aws/r/data_aws_db_event_categories.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "event_categories": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "source_type": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsDbEventCategoriesConfig extends TerraformMetaArguments {
  readonly sourceType?: string;
}

// Resource

export class DataAwsDbEventCategories extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // event_categories - computed: true, optional: false, required: true
  public get eventCategories() {
    return this.getListAttribute('event_categories');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string;
  public get sourceType() {
    return this._sourceType;
  }
  public set sourceType(value: string | undefined) {
    this._sourceType = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      source_type: this._sourceType,
    };
  }
}
