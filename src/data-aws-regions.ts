// https://www.terraform.io/docs/providers/aws/r/data_aws_regions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "all_regions": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "names": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRegionsConfig extends TerraformMetaArguments {
  readonly allRegions?: boolean;
  /** filter block */
  readonly filter?: DataAwsRegionsFilter[];
}
export interface DataAwsRegionsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsRegions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRegionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_regions',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allRegions = config.allRegions;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean;
  public get allRegions() {
    return this._allRegions;
  }
  public set allRegions(value: boolean | undefined) {
    this._allRegions = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // names - computed: true, optional: false, required: true
  public get names() {
    return this.getListAttribute('names');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRegionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsRegionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      all_regions: this._allRegions,
      filter: this._filter,
    };
  }
}
