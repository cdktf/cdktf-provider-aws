// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Organizations
*/
export interface DataAwsOrganizationsDelegatedServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html#account_id DataAwsOrganizationsDelegatedServices#account_id}
  */
  readonly accountId: string;
}
export class DataAwsOrganizationsDelegatedServicesDelegatedServices extends cdktf.ComplexComputedList {

  // delegation_enabled_date - computed: true, optional: false, required: false
  public get delegationEnabledDate() {
    return this.getStringAttribute('delegation_enabled_date');
  }

  // service_principal - computed: true, optional: false, required: false
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services}
*/
export class DataAwsOrganizationsDelegatedServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_organizations_delegated_services";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOrganizationsDelegatedServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOrganizationsDelegatedServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_delegated_services',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
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

  // delegated_services - computed: true, optional: false, required: false
  public delegatedServices(index: string) {
    return new DataAwsOrganizationsDelegatedServicesDelegatedServices(this, 'delegated_services', index);
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
      account_id: cdktf.stringToTerraform(this._accountId),
    };
  }
}
