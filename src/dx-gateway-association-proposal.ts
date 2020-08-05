// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allowed_prefixes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "associated_gateway_id": {
        "type": "string",
        "optional": true
      },
      "associated_gateway_owner_account_id": {
        "type": "string",
        "computed": true
      },
      "associated_gateway_type": {
        "type": "string",
        "computed": true
      },
      "dx_gateway_id": {
        "type": "string",
        "required": true
      },
      "dx_gateway_owner_account_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

// Configuration

export interface DxGatewayAssociationProposalConfig extends TerraformMetaArguments {
  readonly allowedPrefixes?: string[];
  readonly associatedGatewayId?: string;
  readonly dxGatewayId: string;
  readonly dxGatewayOwnerAccountId: string;
  readonly vpnGatewayId?: string;
}

// Resource

export class DxGatewayAssociationProposal extends TerraformResource {

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
    return this._allowedPrefixes ?? this.getListAttribute('allowed_prefixes');
  }
  public set allowedPrefixes(value: string[] | undefined) {
    this._allowedPrefixes = value;
  }

  // associated_gateway_id - computed: false, optional: true, required: false
  private _associatedGatewayId?: string;
  public get associatedGatewayId() {
    return this._associatedGatewayId;
  }
  public set associatedGatewayId(value: string | undefined) {
    this._associatedGatewayId = value;
  }

  // associated_gateway_owner_account_id - computed: true, optional: false, required: true
  public get associatedGatewayOwnerAccountId() {
    return this.getStringAttribute('associated_gateway_owner_account_id');
  }

  // associated_gateway_type - computed: true, optional: false, required: true
  public get associatedGatewayType() {
    return this.getStringAttribute('associated_gateway_type');
  }

  // dx_gateway_id - computed: false, optional: false, required: true
  private _dxGatewayId: string;
  public get dxGatewayId() {
    return this._dxGatewayId;
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }

  // dx_gateway_owner_account_id - computed: false, optional: false, required: true
  private _dxGatewayOwnerAccountId: string;
  public get dxGatewayOwnerAccountId() {
    return this._dxGatewayOwnerAccountId;
  }
  public set dxGatewayOwnerAccountId(value: string) {
    this._dxGatewayOwnerAccountId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
      allowed_prefixes: this._allowedPrefixes,
      associated_gateway_id: this._associatedGatewayId,
      dx_gateway_id: this._dxGatewayId,
      dx_gateway_owner_account_id: this._dxGatewayOwnerAccountId,
      vpn_gateway_id: this._vpnGatewayId,
    };
  }
}
