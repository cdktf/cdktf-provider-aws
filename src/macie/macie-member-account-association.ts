// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie
*/
export interface MacieMemberAccountAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association#member_account_id MacieMemberAccountAssociation#member_account_id}
  */
  readonly memberAccountId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association aws_macie_member_account_association}
*/
export class MacieMemberAccountAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie_member_account_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association aws_macie_member_account_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacieMemberAccountAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie_member_account_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._memberAccountId = config.memberAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_account_id - computed: false, optional: false, required: true
  private _memberAccountId?: string; 
  public get memberAccountId() {
    return this.getStringAttribute('member_account_id');
  }
  public set memberAccountId(value: string) {
    this._memberAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountIdInput() {
    return this._memberAccountId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member_account_id: cdktf.stringToTerraform(this._memberAccountId),
    };
  }
}
