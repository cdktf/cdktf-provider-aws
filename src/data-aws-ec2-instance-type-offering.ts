// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_instance_type_offering.html
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
      "instance_type": {
        "type": "string",
        "computed": true
      },
      "location_type": {
        "type": "string",
        "optional": true
      },
      "preferred_instance_types": {
        "type": [
          "list",
          "string"
        ],
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

export interface DataAwsEc2InstanceTypeOfferingConfig extends TerraformMetaArguments {
  readonly locationType?: string;
  readonly preferredInstanceTypes?: string[];
  /** filter block */
  readonly filter?: DataAwsEc2InstanceTypeOfferingFilter[];
}
export interface DataAwsEc2InstanceTypeOfferingFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2InstanceTypeOffering extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeOfferingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type_offering',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationType = config.locationType;
    this._preferredInstanceTypes = config.preferredInstanceTypes;
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

  // instance_type - computed: true, optional: false, required: true
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string;
  public get locationType() {
    return this._locationType;
  }
  public set locationType(value: string | undefined) {
    this._locationType = value;
  }

  // preferred_instance_types - computed: false, optional: true, required: false
  private _preferredInstanceTypes?: string[];
  public get preferredInstanceTypes() {
    return this._preferredInstanceTypes;
  }
  public set preferredInstanceTypes(value: string[] | undefined) {
    this._preferredInstanceTypes = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2InstanceTypeOfferingFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2InstanceTypeOfferingFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location_type: this._locationType,
      preferred_instance_types: this._preferredInstanceTypes,
      filter: this._filter,
    };
  }
}
