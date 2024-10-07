/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/auditmanager_organization_admin_account_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerOrganizationAdminAccountRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}
  */
  readonly adminAccountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}
*/
export class AuditmanagerOrganizationAdminAccountRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_organization_admin_account_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditmanagerOrganizationAdminAccountRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditmanagerOrganizationAdminAccountRegistration to import
  * @param importFromId The id of the existing AuditmanagerOrganizationAdminAccountRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/auditmanager_organization_admin_account_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditmanagerOrganizationAdminAccountRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_auditmanager_organization_admin_account_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerOrganizationAdminAccountRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerOrganizationAdminAccountRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_organization_admin_account_registration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.70.0',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_account_id: cdktf.stringToTerraform(this._adminAccountId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
