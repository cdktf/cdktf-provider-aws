// https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxHostedPrivateVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
  readonly addressFamily: string;
  readonly amazonAddress?: string;
  readonly bgpAsn: number;
  readonly bgpAuthKey?: string;
  readonly connectionId: string;
  readonly customerAddress?: string;
  readonly mtu?: number;
  readonly name: string;
  readonly ownerAccountId: string;
  readonly vlan: number;
  /** timeouts block */
  readonly timeouts?: DxHostedPrivateVirtualInterfaceTimeouts;
}
export interface DxHostedPrivateVirtualInterfaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dxHostedPrivateVirtualInterfaceTimeoutsToTerraform(struct?: DxHostedPrivateVirtualInterfaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DxHostedPrivateVirtualInterface extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_hosted_private_virtual_interface',
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
    this._mtu = config.mtu;
    this._name = config.name;
    this._ownerAccountId = config.ownerAccountId;
    this._vlan = config.vlan;
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

  // owner_account_id - computed: false, optional: false, required: true
  private _ownerAccountId: string;
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }
  public set ownerAccountId(value: string) {
    this._ownerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountIdInput() {
    return this._ownerAccountId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxHostedPrivateVirtualInterfaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DxHostedPrivateVirtualInterfaceTimeouts ) {
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
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
      vlan: cdktf.numberToTerraform(this._vlan),
      timeouts: dxHostedPrivateVirtualInterfaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
