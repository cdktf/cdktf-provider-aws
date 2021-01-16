// https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacieMemberAccountAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly memberAccountId: string;
}

// Resource

export class MacieMemberAccountAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _memberAccountId: string;
  public get memberAccountId() {
    return this.getStringAttribute('member_account_id');
  }
  public set memberAccountId(value: string) {
    this._memberAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountIdInput() {
    return this._memberAccountId
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
