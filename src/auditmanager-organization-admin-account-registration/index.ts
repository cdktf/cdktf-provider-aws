// https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerOrganizationAdminAccountRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}
  */
  readonly adminAccountId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}
*/
export class AuditmanagerOrganizationAdminAccountRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_organization_admin_account_registration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration} Resource
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
}
