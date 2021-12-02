// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Organizations
*/
export interface OrganizationsDelegatedAdministratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html#account_id OrganizationsDelegatedAdministrator#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html#service_principal OrganizationsDelegatedAdministrator#service_principal}
  */
  readonly servicePrincipal: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html aws_organizations_delegated_administrator}
*/
export class OrganizationsDelegatedAdministrator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_organizations_delegated_administrator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html aws_organizations_delegated_administrator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationsDelegatedAdministratorConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationsDelegatedAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_delegated_administrator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._servicePrincipal = config.servicePrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delegation_enabled_date - computed: true, optional: false, required: false
  public get delegationEnabledDate() {
    return this.getStringAttribute('delegation_enabled_date');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // joined_method - computed: true, optional: false, required: false
  public get joinedMethod() {
    return this.getStringAttribute('joined_method');
  }

  // joined_timestamp - computed: true, optional: false, required: false
  public get joinedTimestamp() {
    return this.getStringAttribute('joined_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_principal - computed: false, optional: false, required: true
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      service_principal: cdktf.stringToTerraform(this._servicePrincipal),
    };
  }
}
