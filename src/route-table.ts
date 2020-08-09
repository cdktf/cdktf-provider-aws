// https://www.terraform.io/docs/providers/aws/r/route_table.html
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
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "propagating_vgws": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "route": {
        "type": [
          "set",
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
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RouteTableConfig extends TerraformMetaArguments {
  readonly propagatingVgws?: string[];
  readonly route?: RouteTableRoute[];
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
}
export interface RouteTableRoute {
  readonly cidrBlock?: string;
  readonly egressOnlyGatewayId?: string;
  readonly gatewayId?: string;
  readonly instanceId?: string;
  readonly ipv6CidrBlock?: string;
  readonly natGatewayId?: string;
  readonly networkInterfaceId?: string;
  readonly transitGatewayId?: string;
  readonly vpcPeeringConnectionId?: string;
}

// Resource

export class RouteTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteTableConfig) {
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
    this._propagatingVgws = config.propagatingVgws;
    this._route = config.route;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
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

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagating_vgws - computed: true, optional: true, required: false
  private _propagatingVgws?: string[];
  public get propagatingVgws() {
    return this._propagatingVgws ?? this.getListAttribute('propagating_vgws');
  }
  public set propagatingVgws(value: string[] | undefined) {
    this._propagatingVgws = value;
  }

  // route - computed: true, optional: true, required: false
  private _route?: RouteTableRoute[]
  public get route(): RouteTableRoute[] | undefined {
    return this._route; // Getting the computed value is not yet implemented
  }
  public set route(value: RouteTableRoute[] | undefined) {
    this._route = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      propagating_vgws: this._propagatingVgws,
      route: this._route,
      tags: this._tags,
      vpc_id: this._vpcId,
    };
  }
}
