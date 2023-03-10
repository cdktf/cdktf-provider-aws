// https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#delegated_admin_account_id VpcIpamOrganizationAdminAccount#delegated_admin_account_id}
  */
  readonly delegatedAdminAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#id VpcIpamOrganizationAdminAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account aws_vpc_ipam_organization_admin_account}
*/
export class VpcIpamOrganizationAdminAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_organization_admin_account";

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
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._delegatedAdminAccountId = config.delegatedAdminAccountId;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
