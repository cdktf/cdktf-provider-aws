// https://www.terraform.io/docs/providers/aws/r/data_aws_route_table.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "associations": {
        "type": [
          "list",
          [
            "object",
            {
              "gateway_id": "string",
              "main": "bool",
              "route_table_association_id": "string",
              "route_table_id": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "gateway_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "routes": {
        "type": [
          "list",
          [
            "object",
            {
              "cidr_block": "string",
              "egress_only_gateway_id": "string",
              "gateway_id": "string",
              "instance_id": "string",
              "ipv6_cidr_block": "string",
              "nat_gateway_id": "string",
              "network_interface_id": "string",
              "transit_gateway_id": "string",
              "vpc_peering_connection_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "subnet_id": {
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
      },
      "vpc_id": {
        "type": "string",
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsRouteTableConfig extends TerraformMetaArguments {
  readonly gatewayId?: string;
  readonly routeTableId?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsRouteTableFilter[];
}
export class DataAwsRouteTableAssociations extends ComplexComputedList {

  // gateway_id - computed: true, optional: false, required: true
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // main - computed: true, optional: false, required: true
  public get main() {
    return this.getBooleanAttribute('main');
  }

  // route_table_association_id - computed: true, optional: false, required: true
  public get routeTableAssociationId() {
    return this.getStringAttribute('route_table_association_id');
  }

  // route_table_id - computed: true, optional: false, required: true
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAwsRouteTableRoutes extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // egress_only_gateway_id - computed: true, optional: false, required: true
  public get egressOnlyGatewayId() {
    return this.getStringAttribute('egress_only_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: true
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ipv6_cidr_block - computed: true, optional: false, required: true
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // nat_gateway_id - computed: true, optional: false, required: true
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // transit_gateway_id - computed: true, optional: false, required: true
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: true
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}
export interface DataAwsRouteTableFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsRouteTable extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRouteTableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayId = config.gatewayId;
    this._routeTableId = config.routeTableId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associations - computed: true, optional: false, required: true
  public associations(index: string) {
    return new DataAwsRouteTableAssociations(this, 'associations', index);
  }

  // gateway_id - computed: true, optional: true, required: false
  private _gatewayId?: string;
  public get gatewayId() {
    return this._gatewayId ?? this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string | undefined) {
    this._gatewayId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string;
  public get routeTableId() {
    return this._routeTableId ?? this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string | undefined) {
    this._routeTableId = value;
  }

  // routes - computed: true, optional: false, required: true
  public routes(index: string) {
    return new DataAwsRouteTableRoutes(this, 'routes', index);
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId ?? this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRouteTableFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsRouteTableFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: this._gatewayId,
      route_table_id: this._routeTableId,
      subnet_id: this._subnetId,
      tags: this._tags,
      vpc_id: this._vpcId,
      filter: this._filter,
    };
  }
}
