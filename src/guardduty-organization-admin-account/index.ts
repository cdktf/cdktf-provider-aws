/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/guardduty_organization_admin_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/guardduty_organization_admin_account#admin_account_id GuarddutyOrganizationAdminAccount#admin_account_id}
  */
  readonly adminAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/guardduty_organization_admin_account#id GuarddutyOrganizationAdminAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/guardduty_organization_admin_account aws_guardduty_organization_admin_account}
*/
export class GuarddutyOrganizationAdminAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_organization_admin_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuarddutyOrganizationAdminAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuarddutyOrganizationAdminAccount to import
  * @param importFromId The id of the existing GuarddutyOrganizationAdminAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/guardduty_organization_admin_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuarddutyOrganizationAdminAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_organization_admin_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/guardduty_organization_admin_account aws_guardduty_organization_admin_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyOrganizationAdminAccountConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationAdminAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_admin_account',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.91.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminAccountId = config.adminAccountId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_account_id - computed: false, optional: false, required: true
  private _adminAccountId?: string; 
  public get adminAccountId() {
    return this.getStringAttribute('admin_account_id');
  }
  public set adminAccountId(value: string) {
    this._adminAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountIdInput() {
    return this._adminAccountId;
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
      admin_account_id: cdktf.stringToTerraform(this._adminAccountId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_account_id: {
        value: cdktf.stringToHclTerraform(this._adminAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
