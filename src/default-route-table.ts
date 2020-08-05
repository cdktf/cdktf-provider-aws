// https://www.terraform.io/docs/providers/aws/r/default_route_table.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_route_table_id": {
        "type": "string",
        "required": true
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
      "propagating_vgws": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
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
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DefaultRouteTableConfig extends TerraformMetaArguments {
  readonly defaultRouteTableId: string;
  readonly propagatingVgws?: string[];
  readonly route?: DefaultRouteTableRoute[];
  readonly tags?: { [key: string]: string };
}
export interface DefaultRouteTableRoute {
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

export class DefaultRouteTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultRouteTableId = config.defaultRouteTableId;
    this._propagatingVgws = config.propagatingVgws;
    this._route = config.route;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_route_table_id - computed: false, optional: false, required: true
  private _defaultRouteTableId: string;
  public get defaultRouteTableId() {
    return this._defaultRouteTableId;
  }
  public set defaultRouteTableId(value: string) {
    this._defaultRouteTableId = value;
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

  // propagating_vgws - computed: false, optional: true, required: false
  private _propagatingVgws?: string[];
  public get propagatingVgws() {
    return this._propagatingVgws;
  }
  public set propagatingVgws(value: string[] | undefined) {
    this._propagatingVgws = value;
  }

  // route - computed: true, optional: true, required: false
  private _route?: DefaultRouteTableRoute[]
  public get route(): DefaultRouteTableRoute[] | undefined {
    return this._route; // Getting the computed value is not yet implemented
  }
  public set route(value: DefaultRouteTableRoute[] | undefined) {
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

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_route_table_id: this._defaultRouteTableId,
      propagating_vgws: this._propagatingVgws,
      route: this._route,
      tags: this._tags,
    };
  }
}
