// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_coip_pool.html
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
      "local_gateway_route_table_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "pool_cidrs": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "pool_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
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
                "set",
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

export interface DataAwsEc2CoipPoolConfig extends TerraformMetaArguments {
  readonly localGatewayRouteTableId?: string;
  readonly poolId?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2CoipPoolFilter[];
}
export interface DataAwsEc2CoipPoolFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2CoipPool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2CoipPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_coip_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._poolId = config.poolId;
    this._tags = config.tags;
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

  // local_gateway_route_table_id - computed: true, optional: true, required: false
  private _localGatewayRouteTableId?: string;
  public get localGatewayRouteTableId() {
    return this._localGatewayRouteTableId ?? this.getStringAttribute('local_gateway_route_table_id');
  }
  public set localGatewayRouteTableId(value: string | undefined) {
    this._localGatewayRouteTableId = value;
  }

  // pool_cidrs - computed: true, optional: false, required: true
  public get poolCidrs() {
    return this.getListAttribute('pool_cidrs');
  }

  // pool_id - computed: true, optional: true, required: false
  private _poolId?: string;
  public get poolId() {
    return this._poolId ?? this.getStringAttribute('pool_id');
  }
  public set poolId(value: string | undefined) {
    this._poolId = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2CoipPoolFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2CoipPoolFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_route_table_id: this._localGatewayRouteTableId,
      pool_id: this._poolId,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
