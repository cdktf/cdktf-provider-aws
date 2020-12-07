// https://www.terraform.io/docs/providers/aws/r/vpn_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
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
export class VpnConnectionRoutes extends cdktf.ComplexComputedList {

  // destination_cidr_block - computed: true, optional: false, required: false
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class VpnConnectionVgwTelemetry extends cdktf.ComplexComputedList {

  // accepted_route_count - computed: true, optional: false, required: false
  public get acceptedRouteCount() {
    return this.getNumberAttribute('accepted_route_count');
  }

  // last_status_change - computed: true, optional: false, required: false
  public get lastStatusChange() {
    return this.getStringAttribute('last_status_change');
  }

  // outside_ip_address - computed: true, optional: false, required: false
  public get outsideIpAddress() {
    return this.getStringAttribute('outside_ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

// Resource

export class VpnConnection extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_gateway_configuration - computed: true, optional: false, required: false
  public get customerGatewayConfiguration() {
    return this.getStringAttribute('customer_gateway_configuration');
  }

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId: string;
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // routes - computed: true, optional: false, required: false
  public routes(index: string) {
    return new VpnConnectionRoutes(this, 'routes', index);
  }

  // static_routes_only - computed: true, optional: true, required: false
  private _staticRoutesOnly?: boolean;
  public get staticRoutesOnly() {
    return this.getBooleanAttribute('static_routes_only');
  }
  public set staticRoutesOnly(value: boolean) {
    this._staticRoutesOnly = value;
  }
  public resetStaticRoutesOnly() {
    this._staticRoutesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesOnlyInput() {
    return this._staticRoutesOnly
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string ) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // tunnel1_address - computed: true, optional: false, required: false
  public get tunnel1Address() {
    return this.getStringAttribute('tunnel1_address');
  }

  // tunnel1_bgp_asn - computed: true, optional: false, required: false
  public get tunnel1BgpAsn() {
    return this.getStringAttribute('tunnel1_bgp_asn');
  }

  // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
  public get tunnel1BgpHoldtime() {
    return this.getNumberAttribute('tunnel1_bgp_holdtime');
  }

  // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
  public get tunnel1CgwInsideAddress() {
    return this.getStringAttribute('tunnel1_cgw_inside_address');
  }

  // tunnel1_inside_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideCidr?: string;
  public get tunnel1InsideCidr() {
    return this.getStringAttribute('tunnel1_inside_cidr');
  }
  public set tunnel1InsideCidr(value: string) {
    this._tunnel1InsideCidr = value;
  }
  public resetTunnel1InsideCidr() {
    this._tunnel1InsideCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1InsideCidrInput() {
    return this._tunnel1InsideCidr
  }

  // tunnel1_preshared_key - computed: true, optional: true, required: false
  private _tunnel1PresharedKey?: string;
  public get tunnel1PresharedKey() {
    return this.getStringAttribute('tunnel1_preshared_key');
  }
  public set tunnel1PresharedKey(value: string) {
    this._tunnel1PresharedKey = value;
  }
  public resetTunnel1PresharedKey() {
    this._tunnel1PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1PresharedKeyInput() {
    return this._tunnel1PresharedKey
  }

  // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
  public get tunnel1VgwInsideAddress() {
    return this.getStringAttribute('tunnel1_vgw_inside_address');
  }

  // tunnel2_address - computed: true, optional: false, required: false
  public get tunnel2Address() {
    return this.getStringAttribute('tunnel2_address');
  }

  // tunnel2_bgp_asn - computed: true, optional: false, required: false
  public get tunnel2BgpAsn() {
    return this.getStringAttribute('tunnel2_bgp_asn');
  }

  // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
  public get tunnel2BgpHoldtime() {
    return this.getNumberAttribute('tunnel2_bgp_holdtime');
  }

  // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
  public get tunnel2CgwInsideAddress() {
    return this.getStringAttribute('tunnel2_cgw_inside_address');
  }

  // tunnel2_inside_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideCidr?: string;
  public get tunnel2InsideCidr() {
    return this.getStringAttribute('tunnel2_inside_cidr');
  }
  public set tunnel2InsideCidr(value: string) {
    this._tunnel2InsideCidr = value;
  }
  public resetTunnel2InsideCidr() {
    this._tunnel2InsideCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2InsideCidrInput() {
    return this._tunnel2InsideCidr
  }

  // tunnel2_preshared_key - computed: true, optional: true, required: false
  private _tunnel2PresharedKey?: string;
  public get tunnel2PresharedKey() {
    return this.getStringAttribute('tunnel2_preshared_key');
  }
  public set tunnel2PresharedKey(value: string) {
    this._tunnel2PresharedKey = value;
  }
  public resetTunnel2PresharedKey() {
    this._tunnel2PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2PresharedKeyInput() {
    return this._tunnel2PresharedKey
  }

  // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
  public get tunnel2VgwInsideAddress() {
    return this.getStringAttribute('tunnel2_vgw_inside_address');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vgw_telemetry - computed: true, optional: false, required: false
  public vgwTelemetry(index: string) {
    return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string;
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string ) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
      tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
      tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
      tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
      type: cdktf.stringToTerraform(this._type),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }
}
