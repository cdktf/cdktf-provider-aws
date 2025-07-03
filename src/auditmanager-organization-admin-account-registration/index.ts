/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/auditmanager_organization_admin_account_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerOrganizationAdminAccountRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}
  */
  readonly adminAccountId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/auditmanager_organization_admin_account_registration#region AuditmanagerOrganizationAdminAccountRegistration#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}
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
  * @param importFromId The id of the existing AuditmanagerOrganizationAdminAccountRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/auditmanager_organization_admin_account_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditmanagerOrganizationAdminAccountRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_auditmanager_organization_admin_account_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration} Resource
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
        providerVersion: '6.2.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_account_id: cdktf.stringToTerraform(this._adminAccountId),
      region: cdktf.stringToTerraform(this._region),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
