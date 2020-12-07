// https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionRouteConfig extends cdktf.TerraformMetaArguments {
  readonly destinationCidrBlock: string;
  readonly vpnConnectionId: string;
}

// Resource

export class VpnConnectionRoute extends cdktf.TerraformResource {

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
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vpn_connection_id - computed: false, optional: false, required: true
  private _vpnConnectionId: string;
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
  public set vpnConnectionId(value: string) {
    this._vpnConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionIdInput() {
    return this._vpnConnectionId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
    };
  }
}
