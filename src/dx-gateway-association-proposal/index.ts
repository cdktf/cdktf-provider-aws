// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxGatewayAssociationProposalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}
  */
  readonly allowedPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}
  */
  readonly associatedGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}
  */
  readonly dxGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}
  */
  readonly dxGatewayOwnerAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal}
*/
export class DxGatewayAssociationProposal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_gateway_association_proposal";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxGatewayAssociationProposalConfig
  */
  public constructor(scope: Construct, id: string, config: DxGatewayAssociationProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_gateway_association_proposal',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedPrefixes = config.allowedPrefixes;
    this._associatedGatewayId = config.associatedGatewayId;
    this._dxGatewayId = config.dxGatewayId;
    this._dxGatewayOwnerAccountId = config.dxGatewayOwnerAccountId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_prefixes - computed: true, optional: true, required: false
  private _allowedPrefixes?: string[]; 
  public get allowedPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_prefixes'));
  }
  public set allowedPrefixes(value: string[]) {
    this._allowedPrefixes = value;
  }
  public resetAllowedPrefixes() {
    this._allowedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrefixesInput() {
    return this._allowedPrefixes;
  }

  // associated_gateway_id - computed: false, optional: false, required: true
  private _associatedGatewayId?: string; 
  public get associatedGatewayId() {
    return this.getStringAttribute('associated_gateway_id');
  }
  public set associatedGatewayId(value: string) {
    this._associatedGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedGatewayIdInput() {
    return this._associatedGatewayId;
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
  private _dxGatewayId?: string; 
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId;
  }

  // dx_gateway_owner_account_id - computed: false, optional: false, required: true
  private _dxGatewayOwnerAccountId?: string; 
  public get dxGatewayOwnerAccountId() {
    return this.getStringAttribute('dx_gateway_owner_account_id');
  }
  public set dxGatewayOwnerAccountId(value: string) {
    this._dxGatewayOwnerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayOwnerAccountIdInput() {
    return this._dxGatewayOwnerAccountId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrefixes),
      associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      dx_gateway_owner_account_id: cdktf.stringToTerraform(this._dxGatewayOwnerAccountId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
