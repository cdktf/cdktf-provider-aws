// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxGatewayAssociationProposalConfig extends cdktf.TerraformMetaArguments {
  readonly allowedPrefixes?: string[];
  readonly associatedGatewayId?: string;
  readonly dxGatewayId: string;
  readonly dxGatewayOwnerAccountId: string;
  readonly vpnGatewayId?: string;
}

// Resource

export class DxGatewayAssociationProposal extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxGatewayAssociationProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_gateway_association_proposal',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedPrefixes = config.allowedPrefixes;
    this._associatedGatewayId = config.associatedGatewayId;
    this._dxGatewayId = config.dxGatewayId;
    this._dxGatewayOwnerAccountId = config.dxGatewayOwnerAccountId;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_prefixes - computed: true, optional: true, required: false
  private _allowedPrefixes?: string[];
  public get allowedPrefixes() {
    return this.getListAttribute('allowed_prefixes');
  }
  public set allowedPrefixes(value: string[]) {
    this._allowedPrefixes = value;
  }
  public resetAllowedPrefixes() {
    this._allowedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrefixesInput() {
    return this._allowedPrefixes
  }

  // associated_gateway_id - computed: false, optional: true, required: false
  private _associatedGatewayId?: string;
  public get associatedGatewayId() {
    return this.getStringAttribute('associated_gateway_id');
  }
  public set associatedGatewayId(value: string ) {
    this._associatedGatewayId = value;
  }
  public resetAssociatedGatewayId() {
    this._associatedGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedGatewayIdInput() {
    return this._associatedGatewayId
  }

  // associated_gateway_owner_account_id - computed: true, optional: false, required: false
  public get associatedGatewayOwnerAccountId() {
    return this.getStringAttribute('associated_gateway_owner_account_id');
  }

  // associated_gateway_type - computed: true, optional: false, required: false
  public get associatedGatewayType() {
    return this.getStringAttribute('associated_gateway_type');
  }

  // dx_gateway_id - computed: false, optional: false, required: true
  private _dxGatewayId: string;
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId
  }

  // dx_gateway_owner_account_id - computed: false, optional: false, required: true
  private _dxGatewayOwnerAccountId: string;
  public get dxGatewayOwnerAccountId() {
    return this.getStringAttribute('dx_gateway_owner_account_id');
  }
  public set dxGatewayOwnerAccountId(value: string) {
    this._dxGatewayOwnerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayOwnerAccountIdInput() {
    return this._dxGatewayOwnerAccountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
      associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      dx_gateway_owner_account_id: cdktf.stringToTerraform(this._dxGatewayOwnerAccountId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }
}
