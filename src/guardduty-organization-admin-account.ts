// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
  readonly adminAccountId: string;
}

// Resource

export class GuarddutyOrganizationAdminAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationAdminAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_admin_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminAccountId = config.adminAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_account_id - computed: false, optional: false, required: true
  private _adminAccountId: string;
  public get adminAccountId() {
    return this.getStringAttribute('admin_account_id');
  }
  public set adminAccountId(value: string) {
    this._adminAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountIdInput() {
    return this._adminAccountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_account_id: cdktf.stringToTerraform(this._adminAccountId),
    };
  }
}
