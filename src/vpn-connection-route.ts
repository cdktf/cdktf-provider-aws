// https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "destination_cidr_block": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "vpn_connection_id": {
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

export interface VpnConnectionRouteConfig extends TerraformMetaArguments {
  readonly destinationCidrBlock: string;
  readonly vpnConnectionId: string;
}

// Resource

export class VpnConnectionRoute extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnConnectionRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_connection_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._vpnConnectionId = config.vpnConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this._destinationCidrBlock;
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // vpn_connection_id - computed: false, optional: false, required: true
  private _vpnConnectionId: string;
  public get vpnConnectionId() {
    return this._vpnConnectionId;
  }
  public set vpnConnectionId(value: string) {
    this._vpnConnectionId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: this._destinationCidrBlock,
      vpn_connection_id: this._vpnConnectionId,
    };
  }
}
