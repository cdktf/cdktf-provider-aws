// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_local_gateway_route_table.html
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
      "local_gateway_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "local_gateway_route_table_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "outpost_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
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

export interface DataAwsEc2LocalGatewayRouteTableConfig extends TerraformMetaArguments {
  readonly localGatewayId?: string;
  readonly localGatewayRouteTableId?: string;
  readonly outpostArn?: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2LocalGatewayRouteTableFilter[];
}
export interface DataAwsEc2LocalGatewayRouteTableFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2LocalGatewayRouteTable extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayRouteTableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayId = config.localGatewayId;
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._outpostArn = config.outpostArn;
    this._state = config.state;
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

  // local_gateway_id - computed: true, optional: true, required: false
  private _localGatewayId?: string;
  public get localGatewayId() {
    return this._localGatewayId ?? this.getStringAttribute('local_gateway_id');
  }
  public set localGatewayId(value: string | undefined) {
    this._localGatewayId = value;
  }

  // local_gateway_route_table_id - computed: true, optional: true, required: false
  private _localGatewayRouteTableId?: string;
  public get localGatewayRouteTableId() {
    return this._localGatewayRouteTableId ?? this.getStringAttribute('local_gateway_route_table_id');
  }
  public set localGatewayRouteTableId(value: string | undefined) {
    this._localGatewayRouteTableId = value;
  }

  // outpost_arn - computed: true, optional: true, required: false
  private _outpostArn?: string;
  public get outpostArn() {
    return this._outpostArn ?? this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string | undefined) {
    this._outpostArn = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
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
  private _filter?: DataAwsEc2LocalGatewayRouteTableFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2LocalGatewayRouteTableFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_id: this._localGatewayId,
      local_gateway_route_table_id: this._localGatewayRouteTableId,
      outpost_arn: this._outpostArn,
      state: this._state,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
