// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html
// generated from terraform resource schema

/*
{
  "version": 1,
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
        "optional": true,
        "computed": true
      },
      "associated_gateway_owner_account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "associated_gateway_type": {
        "type": "string",
        "computed": true
      },
      "dx_gateway_association_id": {
        "type": "string",
        "computed": true
      },
      "dx_gateway_id": {
        "type": "string",
        "required": true
      },
      "dx_gateway_owner_account_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "proposal_id": {
        "type": "string",
        "optional": true
      },
      "vpn_gateway_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DxGatewayAssociationConfig extends TerraformMetaArguments {
  readonly allowedPrefixes?: string[];
  readonly associatedGatewayId?: string;
  readonly associatedGatewayOwnerAccountId?: string;
  readonly dxGatewayId: string;
  readonly proposalId?: string;
  readonly vpnGatewayId?: string;
  /** timeouts block */
  readonly timeouts?: DxGatewayAssociationTimeouts;
}
export interface DxGatewayAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DxGatewayAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_gateway_association',
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
    this._associatedGatewayOwnerAccountId = config.associatedGatewayOwnerAccountId;
    this._dxGatewayId = config.dxGatewayId;
    this._proposalId = config.proposalId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._timeouts = config.timeouts;
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

  // associated_gateway_id - computed: true, optional: true, required: false
  private _associatedGatewayId?: string;
  public get associatedGatewayId() {
    return this._associatedGatewayId ?? this.getStringAttribute('associated_gateway_id');
  }
  public set associatedGatewayId(value: string | undefined) {
    this._associatedGatewayId = value;
  }

  // associated_gateway_owner_account_id - computed: true, optional: true, required: false
  private _associatedGatewayOwnerAccountId?: string;
  public get associatedGatewayOwnerAccountId() {
    return this._associatedGatewayOwnerAccountId ?? this.getStringAttribute('associated_gateway_owner_account_id');
  }
  public set associatedGatewayOwnerAccountId(value: string | undefined) {
    this._associatedGatewayOwnerAccountId = value;
  }

  // associated_gateway_type - computed: true, optional: false, required: true
  public get associatedGatewayType() {
    return this.getStringAttribute('associated_gateway_type');
  }

  // dx_gateway_association_id - computed: true, optional: false, required: true
  public get dxGatewayAssociationId() {
    return this.getStringAttribute('dx_gateway_association_id');
  }

  // dx_gateway_id - computed: false, optional: false, required: true
  private _dxGatewayId: string;
  public get dxGatewayId() {
    return this._dxGatewayId;
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }

  // dx_gateway_owner_account_id - computed: true, optional: false, required: true
  public get dxGatewayOwnerAccountId() {
    return this.getStringAttribute('dx_gateway_owner_account_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // proposal_id - computed: false, optional: true, required: false
  private _proposalId?: string;
  public get proposalId() {
    return this._proposalId;
  }
  public set proposalId(value: string | undefined) {
    this._proposalId = value;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string;
  public get vpnGatewayId() {
    return this._vpnGatewayId;
  }
  public set vpnGatewayId(value: string | undefined) {
    this._vpnGatewayId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxGatewayAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DxGatewayAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_prefixes: this._allowedPrefixes,
      associated_gateway_id: this._associatedGatewayId,
      associated_gateway_owner_account_id: this._associatedGatewayOwnerAccountId,
      dx_gateway_id: this._dxGatewayId,
      proposal_id: this._proposalId,
      vpn_gateway_id: this._vpnGatewayId,
      timeouts: this._timeouts,
    };
  }
}
