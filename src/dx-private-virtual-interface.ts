// https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxPrivateVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
  readonly addressFamily: string;
  readonly amazonAddress?: string;
  readonly bgpAsn: number;
  readonly bgpAuthKey?: string;
  readonly connectionId: string;
  readonly customerAddress?: string;
  readonly dxGatewayId?: string;
  readonly mtu?: number;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly vlan: number;
  readonly vpnGatewayId?: string;
  /** timeouts block */
  readonly timeouts?: DxPrivateVirtualInterfaceTimeouts;
}
export interface DxPrivateVirtualInterfaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dxPrivateVirtualInterfaceTimeoutsToTerraform(struct?: DxPrivateVirtualInterfaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DxPrivateVirtualInterface extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxPrivateVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_private_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressFamily = config.addressFamily;
    this._amazonAddress = config.amazonAddress;
    this._bgpAsn = config.bgpAsn;
    this._bgpAuthKey = config.bgpAuthKey;
    this._connectionId = config.connectionId;
    this._customerAddress = config.customerAddress;
    this._dxGatewayId = config.dxGatewayId;
    this._mtu = config.mtu;
    this._name = config.name;
    this._tags = config.tags;
    this._vlan = config.vlan;
    this._vpnGatewayId = config.vpnGatewayId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily: string;
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string;
  public get amazonAddress() {
    return this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string) {
    this._amazonAddress = value;
  }
  public resetAmazonAddress() {
    this._amazonAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonAddressInput() {
    return this._amazonAddress
  }

  // amazon_side_asn - computed: true, optional: false, required: false
  public get amazonSideAsn() {
    return this.getStringAttribute('amazon_side_asn');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_device - computed: true, optional: false, required: false
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bgp_asn - computed: false, optional: false, required: true
  private _bgpAsn: number;
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string;
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId: string;
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string;
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress
  }

  // dx_gateway_id - computed: false, optional: true, required: false
  private _dxGatewayId?: string;
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string ) {
    this._dxGatewayId = value;
  }
  public resetDxGatewayId() {
    this._dxGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jumbo_frame_capable - computed: true, optional: false, required: false
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number;
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number ) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // vlan - computed: false, optional: false, required: true
  private _vlan: number;
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxPrivateVirtualInterfaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DxPrivateVirtualInterfaceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      amazon_address: cdktf.stringToTerraform(this._amazonAddress),
      bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
      bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      customer_address: cdktf.stringToTerraform(this._customerAddress),
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vlan: cdktf.numberToTerraform(this._vlan),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      timeouts: dxPrivateVirtualInterfaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
