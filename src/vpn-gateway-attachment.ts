// https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html
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
      "vpc_id": {
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

export interface VpnGatewayAttachmentConfig extends TerraformMetaArguments {
  readonly vpcId: string;
  readonly vpnGatewayId: string;
}

// Resource

export class VpnGatewayAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnGatewayAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_gateway_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vpcId = config.vpcId;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
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
      vpc_id: this._vpcId,
      vpn_gateway_id: this._vpnGatewayId,
    };
  }
}
