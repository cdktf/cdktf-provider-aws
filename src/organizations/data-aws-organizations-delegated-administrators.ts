// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Organizations
*/
export interface DataAwsOrganizationsDelegatedAdministratorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}
  */
  readonly servicePrincipal?: string;
}
export class DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators extends cdktf.ComplexComputedList {

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

  // id - computed: true, optional: false, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators}
*/
export class DataAwsOrganizationsDelegatedAdministrators extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_organizations_delegated_administrators";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOrganizationsDelegatedAdministratorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsOrganizationsDelegatedAdministratorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_delegated_administrators',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._servicePrincipal = config.servicePrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegated_administrators - computed: true, optional: false, required: false
  public delegatedAdministrators(index: string) {
    return new DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators(this, 'delegated_administrators', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_principal: cdktf.stringToTerraform(this._servicePrincipal),
    };
  }
}
