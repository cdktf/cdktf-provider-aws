// https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxHostedPublicVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#address_family DxHostedPublicVirtualInterface#address_family}
  */
  readonly addressFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#amazon_address DxHostedPublicVirtualInterface#amazon_address}
  */
  readonly amazonAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}
  */
  readonly bgpAsn: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#connection_id DxHostedPublicVirtualInterface#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#customer_address DxHostedPublicVirtualInterface#customer_address}
  */
  readonly customerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#name DxHostedPublicVirtualInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}
  */
  readonly ownerAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}
  */
  readonly routeFilterPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#vlan DxHostedPublicVirtualInterface#vlan}
  */
  readonly vlan: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#timeouts DxHostedPublicVirtualInterface#timeouts}
  */
  readonly timeouts?: DxHostedPublicVirtualInterfaceTimeouts;
}
export interface DxHostedPublicVirtualInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#create DxHostedPublicVirtualInterface#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#delete DxHostedPublicVirtualInterface#delete}
  */
  readonly delete?: string;
}

function dxHostedPublicVirtualInterfaceTimeoutsToTerraform(struct?: DxHostedPublicVirtualInterfaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html aws_dx_hosted_public_virtual_interface}
*/
export class DxHostedPublicVirtualInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dx_hosted_public_virtual_interface";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html aws_dx_hosted_public_virtual_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxHostedPublicVirtualInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DxHostedPublicVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_hosted_public_virtual_interface',
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
    this._name = config.name;
    this._ownerAccountId = config.ownerAccountId;
    this._routeFilterPrefixes = config.routeFilterPrefixes;
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

  // route_filter_prefixes - computed: false, optional: false, required: true
  private _routeFilterPrefixes: string[];
  public get routeFilterPrefixes() {
    return this.getListAttribute('route_filter_prefixes');
  }
  public set routeFilterPrefixes(value: string[]) {
    this._routeFilterPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterPrefixesInput() {
    return this._routeFilterPrefixes
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
  private _timeouts?: DxHostedPublicVirtualInterfaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DxHostedPublicVirtualInterfaceTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
      route_filter_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._routeFilterPrefixes),
      vlan: cdktf.numberToTerraform(this._vlan),
      timeouts: dxHostedPublicVirtualInterfaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
