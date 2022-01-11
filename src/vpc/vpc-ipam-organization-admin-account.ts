// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcIpamOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#delegated_admin_account_id VpcIpamOrganizationAdminAccount#delegated_admin_account_id}
  */
  readonly delegatedAdminAccountId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account aws_vpc_ipam_organization_admin_account}
*/
export class VpcIpamOrganizationAdminAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_ipam_organization_admin_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account aws_vpc_ipam_organization_admin_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamOrganizationAdminAccountConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamOrganizationAdminAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_organization_admin_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._delegatedAdminAccountId = config.delegatedAdminAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delegated_admin_account_id - computed: false, optional: false, required: true
  private _delegatedAdminAccountId?: string; 
  public get delegatedAdminAccountId() {
    return this.getStringAttribute('delegated_admin_account_id');
  }
  public set delegatedAdminAccountId(value: string) {
    this._delegatedAdminAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAdminAccountIdInput() {
    return this._delegatedAdminAccountId;
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_principal - computed: true, optional: false, required: false
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_admin_account_id: cdktf.stringToTerraform(this._delegatedAdminAccountId),
    };
  }
}
