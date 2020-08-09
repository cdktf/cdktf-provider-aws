// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_route_table.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_association_route_table": {
        "type": "bool",
        "computed": true
      },
      "default_propagation_route_table": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "transit_gateway_id": {
        "type": "string",
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

export interface DataAwsEc2TransitGatewayRouteTableConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayRouteTableFilter[];
}
export interface DataAwsEc2TransitGatewayRouteTableFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2TransitGatewayRouteTable extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_association_route_table - computed: true, optional: false, required: true
  public get defaultAssociationRouteTable() {
    return this.getBooleanAttribute('default_association_route_table');
  }

  // default_propagation_route_table - computed: true, optional: false, required: true
  public get defaultPropagationRouteTable() {
    return this.getBooleanAttribute('default_propagation_route_table');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_id - computed: true, optional: false, required: true
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayRouteTableFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2TransitGatewayRouteTableFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      filter: this._filter,
    };
  }
}
