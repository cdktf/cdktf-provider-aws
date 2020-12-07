// https://www.terraform.io/docs/providers/aws/r/data_aws_organizations_organization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
}
export class DataAwsOrganizationsOrganizationAccounts extends cdktf.ComplexComputedList {

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
export class DataAwsOrganizationsOrganizationNonMasterAccounts extends cdktf.ComplexComputedList {

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
export class DataAwsOrganizationsOrganizationRootsPolicyTypes extends cdktf.ComplexComputedList {

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsOrganizationsOrganizationRoots extends cdktf.ComplexComputedList {

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

export class DataAwsOrganizationsOrganization extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  public accounts(index: string) {
    return new DataAwsOrganizationsOrganizationAccounts(this, 'accounts', index);
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_access_principals - computed: true, optional: false, required: false
  public get awsServiceAccessPrincipals() {
    return this.getListAttribute('aws_service_access_principals');
  }

  // enabled_policy_types - computed: true, optional: false, required: false
  public get enabledPolicyTypes() {
    return this.getListAttribute('enabled_policy_types');
  }

  // feature_set - computed: true, optional: false, required: false
  public get featureSet() {
    return this.getStringAttribute('feature_set');
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
    return new DataAwsOrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
  }

  // roots - computed: true, optional: false, required: false
  public roots(index: string) {
    return new DataAwsOrganizationsOrganizationRoots(this, 'roots', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
