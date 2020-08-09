// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_instance_type_offerings.html
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
      "instance_types": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "location_type": {
        "type": "string",
        "optional": true
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

export interface DataAwsEc2InstanceTypeOfferingsConfig extends TerraformMetaArguments {
  readonly locationType?: string;
  /** filter block */
  readonly filter?: DataAwsEc2InstanceTypeOfferingsFilter[];
}
export interface DataAwsEc2InstanceTypeOfferingsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2InstanceTypeOfferings extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeOfferingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type_offerings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationType = config.locationType;
    this._filter = config.filter;
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

  // instance_types - computed: true, optional: false, required: true
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string;
  public get locationType() {
    return this._locationType;
  }
  public set locationType(value: string | undefined) {
    this._locationType = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2InstanceTypeOfferingsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2InstanceTypeOfferingsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location_type: this._locationType,
      filter: this._filter,
    };
  }
}
