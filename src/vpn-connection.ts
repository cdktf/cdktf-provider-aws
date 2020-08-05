// https://www.terraform.io/docs/providers/aws/r/vpn_connection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "customer_gateway_configuration": {
        "type": "string",
        "computed": true
      },
      "customer_gateway_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "routes": {
        "type": [
          "set",
          [
            "object",
            {
              "destination_cidr_block": "string",
              "source": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "static_routes_only": {
        "type": "bool",
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
      "transit_gateway_attachment_id": {
        "type": "string",
        "computed": true
      },
      "transit_gateway_id": {
        "type": "string",
        "optional": true
      },
      "tunnel1_address": {
        "type": "string",
        "computed": true
      },
      "tunnel1_bgp_asn": {
        "type": "string",
        "computed": true
      },
      "tunnel1_bgp_holdtime": {
        "type": "number",
        "computed": true
      },
      "tunnel1_cgw_inside_address": {
        "type": "string",
        "computed": true
      },
      "tunnel1_inside_cidr": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tunnel1_preshared_key": {
        "type": "string",
        "optional": true,
        "computed": true,
        "sensitive": true
      },
      "tunnel1_vgw_inside_address": {
        "type": "string",
        "computed": true
      },
      "tunnel2_address": {
        "type": "string",
        "computed": true
      },
      "tunnel2_bgp_asn": {
        "type": "string",
        "computed": true
      },
      "tunnel2_bgp_holdtime": {
        "type": "number",
        "computed": true
      },
      "tunnel2_cgw_inside_address": {
        "type": "string",
        "computed": true
      },
      "tunnel2_inside_cidr": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tunnel2_preshared_key": {
        "type": "string",
        "optional": true,
        "computed": true,
        "sensitive": true
      },
      "tunnel2_vgw_inside_address": {
        "type": "string",
        "computed": true
      },
      "type": {
        "type": "string",
        "required": true
      },
      "vgw_telemetry": {
        "type": [
          "set",
          [
            "object",
            {
              "accepted_route_count": "number",
              "last_status_change": "string",
              "outside_ip_address": "string",
              "status": "string",
              "status_message": "string"
            }
          ]
        ],
        "computed": true
      },
      "vpn_gateway_id": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface VpnConnectionConfig extends TerraformMetaArguments {
  readonly customerGatewayId: string;
  readonly staticRoutesOnly?: boolean;
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId?: string;
  readonly tunnel1InsideCidr?: string;
  readonly tunnel1PresharedKey?: string;
  readonly tunnel2InsideCidr?: string;
  readonly tunnel2PresharedKey?: string;
  readonly type: string;
  readonly vpnGatewayId?: string;
}
export class VpnConnectionRoutes extends ComplexComputedList {

  // destination_cidr_block - computed: true, optional: false, required: true
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class VpnConnectionVgwTelemetry extends ComplexComputedList {

  // accepted_route_count - computed: true, optional: false, required: true
  public get acceptedRouteCount() {
    return this.getNumberAttribute('accepted_route_count');
  }

  // last_status_change - computed: true, optional: false, required: true
  public get lastStatusChange() {
    return this.getStringAttribute('last_status_change');
  }

  // outside_ip_address - computed: true, optional: false, required: true
  public get outsideIpAddress() {
    return this.getStringAttribute('outside_ip_address');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: true
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

// Resource

export class VpnConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerGatewayId = config.customerGatewayId;
    this._staticRoutesOnly = config.staticRoutesOnly;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._tunnel1InsideCidr = config.tunnel1InsideCidr;
    this._tunnel1PresharedKey = config.tunnel1PresharedKey;
    this._tunnel2InsideCidr = config.tunnel2InsideCidr;
    this._tunnel2PresharedKey = config.tunnel2PresharedKey;
    this._type = config.type;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_gateway_configuration - computed: true, optional: false, required: true
  public get customerGatewayConfiguration() {
    return this.getStringAttribute('customer_gateway_configuration');
  }

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId: string;
  public get customerGatewayId() {
    return this._customerGatewayId;
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // routes - computed: true, optional: false, required: true
  public routes(index: string) {
    return new VpnConnectionRoutes(this, 'routes', index);
  }

  // static_routes_only - computed: true, optional: true, required: false
  private _staticRoutesOnly?: boolean;
  public get staticRoutesOnly() {
    return this._staticRoutesOnly ?? this.getBooleanAttribute('static_routes_only');
  }
  public set staticRoutesOnly(value: boolean | undefined) {
    this._staticRoutesOnly = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: true
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string | undefined) {
    this._transitGatewayId = value;
  }

  // tunnel1_address - computed: true, optional: false, required: true
  public get tunnel1Address() {
    return this.getStringAttribute('tunnel1_address');
  }

  // tunnel1_bgp_asn - computed: true, optional: false, required: true
  public get tunnel1BgpAsn() {
    return this.getStringAttribute('tunnel1_bgp_asn');
  }

  // tunnel1_bgp_holdtime - computed: true, optional: false, required: true
  public get tunnel1BgpHoldtime() {
    return this.getNumberAttribute('tunnel1_bgp_holdtime');
  }

  // tunnel1_cgw_inside_address - computed: true, optional: false, required: true
  public get tunnel1CgwInsideAddress() {
    return this.getStringAttribute('tunnel1_cgw_inside_address');
  }

  // tunnel1_inside_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideCidr?: string;
  public get tunnel1InsideCidr() {
    return this._tunnel1InsideCidr ?? this.getStringAttribute('tunnel1_inside_cidr');
  }
  public set tunnel1InsideCidr(value: string | undefined) {
    this._tunnel1InsideCidr = value;
  }

  // tunnel1_preshared_key - computed: true, optional: true, required: false
  private _tunnel1PresharedKey?: string;
  public get tunnel1PresharedKey() {
    return this._tunnel1PresharedKey ?? this.getStringAttribute('tunnel1_preshared_key');
  }
  public set tunnel1PresharedKey(value: string | undefined) {
    this._tunnel1PresharedKey = value;
  }

  // tunnel1_vgw_inside_address - computed: true, optional: false, required: true
  public get tunnel1VgwInsideAddress() {
    return this.getStringAttribute('tunnel1_vgw_inside_address');
  }

  // tunnel2_address - computed: true, optional: false, required: true
  public get tunnel2Address() {
    return this.getStringAttribute('tunnel2_address');
  }

  // tunnel2_bgp_asn - computed: true, optional: false, required: true
  public get tunnel2BgpAsn() {
    return this.getStringAttribute('tunnel2_bgp_asn');
  }

  // tunnel2_bgp_holdtime - computed: true, optional: false, required: true
  public get tunnel2BgpHoldtime() {
    return this.getNumberAttribute('tunnel2_bgp_holdtime');
  }

  // tunnel2_cgw_inside_address - computed: true, optional: false, required: true
  public get tunnel2CgwInsideAddress() {
    return this.getStringAttribute('tunnel2_cgw_inside_address');
  }

  // tunnel2_inside_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideCidr?: string;
  public get tunnel2InsideCidr() {
    return this._tunnel2InsideCidr ?? this.getStringAttribute('tunnel2_inside_cidr');
  }
  public set tunnel2InsideCidr(value: string | undefined) {
    this._tunnel2InsideCidr = value;
  }

  // tunnel2_preshared_key - computed: true, optional: true, required: false
  private _tunnel2PresharedKey?: string;
  public get tunnel2PresharedKey() {
    return this._tunnel2PresharedKey ?? this.getStringAttribute('tunnel2_preshared_key');
  }
  public set tunnel2PresharedKey(value: string | undefined) {
    this._tunnel2PresharedKey = value;
  }

  // tunnel2_vgw_inside_address - computed: true, optional: false, required: true
  public get tunnel2VgwInsideAddress() {
    return this.getStringAttribute('tunnel2_vgw_inside_address');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // vgw_telemetry - computed: true, optional: false, required: true
  public vgwTelemetry(index: string) {
    return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string;
  public get vpnGatewayId() {
    return this._vpnGatewayId;
  }
  public set vpnGatewayId(value: string | undefined) {
    this._vpnGatewayId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: this._customerGatewayId,
      static_routes_only: this._staticRoutesOnly,
      tags: this._tags,
      transit_gateway_id: this._transitGatewayId,
      tunnel1_inside_cidr: this._tunnel1InsideCidr,
      tunnel1_preshared_key: this._tunnel1PresharedKey,
      tunnel2_inside_cidr: this._tunnel2InsideCidr,
      tunnel2_preshared_key: this._tunnel2PresharedKey,
      type: this._type,
      vpn_gateway_id: this._vpnGatewayId,
    };
  }
}
