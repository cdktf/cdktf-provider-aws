// https://www.terraform.io/docs/providers/aws/r/route.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "destination_cidr_block": {
        "type": "string",
        "optional": true
      },
      "destination_ipv6_cidr_block": {
        "type": "string",
        "optional": true
      },
      "destination_prefix_list_id": {
        "type": "string",
        "computed": true
      },
      "egress_only_gateway_id": {
        "type": "string",
        "optional": true,
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
      "instance_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_owner_id": {
        "type": "string",
        "computed": true
      },
      "nat_gateway_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "origin": {
        "type": "string",
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "transit_gateway_id": {
        "type": "string",
        "optional": true
      },
      "vpc_peering_connection_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RouteConfig extends TerraformMetaArguments {
  readonly destinationCidrBlock?: string;
  readonly destinationIpv6CidrBlock?: string;
  readonly egressOnlyGatewayId?: string;
  readonly gatewayId?: string;
  readonly instanceId?: string;
  readonly natGatewayId?: string;
  readonly networkInterfaceId?: string;
  readonly routeTableId: string;
  readonly transitGatewayId?: string;
  readonly vpcPeeringConnectionId?: string;
  /** timeouts block */
  readonly timeouts?: RouteTimeouts;
}
export interface RouteTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class Route extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
    this._egressOnlyGatewayId = config.egressOnlyGatewayId;
    this._gatewayId = config.gatewayId;
    this._instanceId = config.instanceId;
    this._natGatewayId = config.natGatewayId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._routeTableId = config.routeTableId;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string;
  public get destinationCidrBlock() {
    return this._destinationCidrBlock;
  }
  public set destinationCidrBlock(value: string | undefined) {
    this._destinationCidrBlock = value;
  }

  // destination_ipv6_cidr_block - computed: false, optional: true, required: false
  private _destinationIpv6CidrBlock?: string;
  public get destinationIpv6CidrBlock() {
    return this._destinationIpv6CidrBlock;
  }
  public set destinationIpv6CidrBlock(value: string | undefined) {
    this._destinationIpv6CidrBlock = value;
  }

  // destination_prefix_list_id - computed: true, optional: false, required: true
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_gateway_id - computed: true, optional: true, required: false
  private _egressOnlyGatewayId?: string;
  public get egressOnlyGatewayId() {
    return this._egressOnlyGatewayId ?? this.getStringAttribute('egress_only_gateway_id');
  }
  public set egressOnlyGatewayId(value: string | undefined) {
    this._egressOnlyGatewayId = value;
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId ?? this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // instance_owner_id - computed: true, optional: false, required: true
  public get instanceOwnerId() {
    return this.getStringAttribute('instance_owner_id');
  }

  // nat_gateway_id - computed: true, optional: true, required: false
  private _natGatewayId?: string;
  public get natGatewayId() {
    return this._natGatewayId ?? this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string | undefined) {
    this._natGatewayId = value;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId ?? this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string | undefined) {
    this._networkInterfaceId = value;
  }

  // origin - computed: true, optional: false, required: true
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this._routeTableId;
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string | undefined) {
    this._transitGatewayId = value;
  }

  // vpc_peering_connection_id - computed: false, optional: true, required: false
  private _vpcPeeringConnectionId?: string;
  public get vpcPeeringConnectionId() {
    return this._vpcPeeringConnectionId;
  }
  public set vpcPeeringConnectionId(value: string | undefined) {
    this._vpcPeeringConnectionId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RouteTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RouteTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: this._destinationCidrBlock,
      destination_ipv6_cidr_block: this._destinationIpv6CidrBlock,
      egress_only_gateway_id: this._egressOnlyGatewayId,
      gateway_id: this._gatewayId,
      instance_id: this._instanceId,
      nat_gateway_id: this._natGatewayId,
      network_interface_id: this._networkInterfaceId,
      route_table_id: this._routeTableId,
      transit_gateway_id: this._transitGatewayId,
      vpc_peering_connection_id: this._vpcPeeringConnectionId,
      timeouts: this._timeouts,
    };
  }
}
