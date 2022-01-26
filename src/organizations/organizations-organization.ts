// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Organizations
*/
export interface OrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}
  */
  readonly awsServiceAccessPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}
  */
  readonly enabledPolicyTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}
  */
  readonly featureSet?: string;
}
export class OrganizationsOrganizationAccounts extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
export class OrganizationsOrganizationNonMasterAccounts extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
export class OrganizationsOrganizationRootsPolicyTypes extends cdktf.ComplexComputedList {

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class OrganizationsOrganizationRoots extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_types - computed: true, optional: false, required: false
  public get policyTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_types');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization aws_organizations_organization}
*/
export class OrganizationsOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_organizations_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization aws_organizations_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationsOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationsOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_organization',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsServiceAccessPrincipals = config.awsServiceAccessPrincipals;
    this._enabledPolicyTypes = config.enabledPolicyTypes;
    this._featureSet = config.featureSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  public accounts(index: string) {
    return new OrganizationsOrganizationAccounts(this, 'accounts', index, false);
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_access_principals - computed: false, optional: true, required: false
  private _awsServiceAccessPrincipals?: string[]; 
  public get awsServiceAccessPrincipals() {
    return cdktf.Fn.tolist(this.getListAttribute('aws_service_access_principals'));
  }
  public set awsServiceAccessPrincipals(value: string[]) {
    this._awsServiceAccessPrincipals = value;
  }
  public resetAwsServiceAccessPrincipals() {
    this._awsServiceAccessPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceAccessPrincipalsInput() {
    return this._awsServiceAccessPrincipals;
  }

  // enabled_policy_types - computed: false, optional: true, required: false
  private _enabledPolicyTypes?: string[]; 
  public get enabledPolicyTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_policy_types'));
  }
  public set enabledPolicyTypes(value: string[]) {
    this._enabledPolicyTypes = value;
  }
  public resetEnabledPolicyTypes() {
    this._enabledPolicyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledPolicyTypesInput() {
    return this._enabledPolicyTypes;
  }

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_account_arn - computed: true, optional: false, required: false
  public get masterAccountArn() {
    return this.getStringAttribute('master_account_arn');
  }

  // master_account_email - computed: true, optional: false, required: false
  public get masterAccountEmail() {
    return this.getStringAttribute('master_account_email');
  }

  // master_account_id - computed: true, optional: false, required: false
  public get masterAccountId() {
    return this.getStringAttribute('master_account_id');
  }

  // non_master_accounts - computed: true, optional: false, required: false
  public nonMasterAccounts(index: string) {
    return new OrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index, false);
  }

  // roots - computed: true, optional: false, required: false
  public roots(index: string) {
    return new OrganizationsOrganizationRoots(this, 'roots', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_service_access_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._awsServiceAccessPrincipals),
      enabled_policy_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledPolicyTypes),
      feature_set: cdktf.stringToTerraform(this._featureSet),
    };
  }
}
