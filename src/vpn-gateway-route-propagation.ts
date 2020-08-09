// https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html
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
      "route_table_id": {
        "type": "string",
        "required": true
      },
      "vpn_gateway_id": {
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

export interface VpnGatewayRoutePropagationConfig extends TerraformMetaArguments {
  readonly routeTableId: string;
  readonly vpnGatewayId: string;
}

// Resource

export class VpnGatewayRoutePropagation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnGatewayRoutePropagationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_gateway_route_propagation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._routeTableId = config.routeTableId;
    this._vpnGatewayId = config.vpnGatewayId;
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

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this._routeTableId;
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId: string;
  public get vpnGatewayId() {
    return this._vpnGatewayId;
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      route_table_id: this._routeTableId,
      vpn_gateway_id: this._vpnGatewayId,
    };
  }
}
