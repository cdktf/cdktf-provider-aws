// https://www.terraform.io/docs/providers/aws/r/data_aws_pricing_product.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "result": {
        "type": "string",
        "computed": true
      },
      "service_code": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "filters": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "field": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsPricingProductConfig extends TerraformMetaArguments {
  readonly serviceCode: string;
  /** filters block */
  readonly filters: DataAwsPricingProductFilters[];
}
export interface DataAwsPricingProductFilters {
  readonly field: string;
  readonly value: string;
}

// Resource

export class DataAwsPricingProduct extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsPricingProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pricing_product',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serviceCode = config.serviceCode;
    this._filters = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // result - computed: true, optional: false, required: true
  public get result() {
    return this.getStringAttribute('result');
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode: string;
  public get serviceCode() {
    return this._serviceCode;
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }

  // filters - computed: false, optional: false, required: true
  private _filters: DataAwsPricingProductFilters[];
  public get filters() {
    return this._filters;
  }
  public set filters(value: DataAwsPricingProductFilters[]) {
    this._filters = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      service_code: this._serviceCode,
      filters: this._filters,
    };
  }
}
