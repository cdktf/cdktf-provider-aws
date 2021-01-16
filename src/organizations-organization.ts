// https://www.terraform.io/docs/providers/aws/r/organizations_organization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
  readonly awsServiceAccessPrincipals?: string[];
  readonly enabledPolicyTypes?: string[];
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
    return this.interpolationForAttribute('policy_types') as any;
  }
}

// Resource

export class OrganizationsOrganization extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return new OrganizationsOrganizationAccounts(this, 'accounts', index);
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_access_principals - computed: false, optional: true, required: false
  private _awsServiceAccessPrincipals?: string[];
  public get awsServiceAccessPrincipals() {
    return this.getListAttribute('aws_service_access_principals');
  }
  public set awsServiceAccessPrincipals(value: string[] ) {
    this._awsServiceAccessPrincipals = value;
  }
  public resetAwsServiceAccessPrincipals() {
    this._awsServiceAccessPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceAccessPrincipalsInput() {
    return this._awsServiceAccessPrincipals
  }

  // enabled_policy_types - computed: false, optional: true, required: false
  private _enabledPolicyTypes?: string[];
  public get enabledPolicyTypes() {
    return this.getListAttribute('enabled_policy_types');
  }
  public set enabledPolicyTypes(value: string[] ) {
    this._enabledPolicyTypes = value;
  }
  public resetEnabledPolicyTypes() {
    this._enabledPolicyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledPolicyTypesInput() {
    return this._enabledPolicyTypes
  }

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string;
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string ) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet
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
    return new OrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
  }

  // roots - computed: true, optional: false, required: false
  public roots(index: string) {
    return new OrganizationsOrganizationRoots(this, 'roots', index);
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
