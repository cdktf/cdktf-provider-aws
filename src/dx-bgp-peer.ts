// https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DxBgpPeerConfig extends TerraformMetaArguments {
  readonly addressFamily: string;
  readonly amazonAddress?: string;
  readonly bgpAsn: number;
  readonly bgpAuthKey?: string;
  readonly customerAddress?: string;
  readonly virtualInterfaceId: string;
  /** timeouts block */
  readonly timeouts?: DxBgpPeerTimeouts;
}
export interface DxBgpPeerTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DxBgpPeer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxBgpPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_bgp_peer',
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
    this._customerAddress = config.customerAddress;
    this._virtualInterfaceId = config.virtualInterfaceId;
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

  // bgp_peer_id - computed: true, optional: false, required: false
  public get bgpPeerId() {
    return this.getStringAttribute('bgp_peer_id');
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
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

  // virtual_interface_id - computed: false, optional: false, required: true
  private _virtualInterfaceId: string;
  public get virtualInterfaceId() {
    return this.getStringAttribute('virtual_interface_id');
  }
  public set virtualInterfaceId(value: string) {
    this._virtualInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInterfaceIdInput() {
    return this._virtualInterfaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxBgpPeerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DxBgpPeerTimeouts ) {
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
      address_family: this._addressFamily,
      amazon_address: this._amazonAddress,
      bgp_asn: this._bgpAsn,
      bgp_auth_key: this._bgpAuthKey,
      customer_address: this._customerAddress,
      virtual_interface_id: this._virtualInterfaceId,
      timeouts: this._timeouts,
    };
  }
}
