// https://www.terraform.io/docs/providers/aws/r/organizations_organization.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accounts": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "email": "string",
              "id": "string",
              "name": "string",
              "status": "string"
            }
          ]
        ],
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "aws_service_access_principals": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "enabled_policy_types": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "feature_set": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "master_account_arn": {
        "type": "string",
        "computed": true
      },
      "master_account_email": {
        "type": "string",
        "computed": true
      },
      "master_account_id": {
        "type": "string",
        "computed": true
      },
      "non_master_accounts": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "email": "string",
              "id": "string",
              "name": "string",
              "status": "string"
            }
          ]
        ],
        "computed": true
      },
      "roots": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "id": "string",
              "name": "string",
              "policy_types": [
                "list",
                [
                  "object",
                  {
                    "status": "string",
                    "type": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface OrganizationsOrganizationConfig extends TerraformMetaArguments {
  readonly awsServiceAccessPrincipals?: string[];
  readonly enabledPolicyTypes?: string[];
  readonly featureSet?: string;
}
export class OrganizationsOrganizationAccounts extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class OrganizationsOrganizationNonMasterAccounts extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class OrganizationsOrganizationRootsPolicyTypes extends ComplexComputedList {

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class OrganizationsOrganizationRoots extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_types - computed: true, optional: false, required: true
  public get policyTypes() {
    return 'not implemented' as any;
  }
}

// Resource

export class OrganizationsOrganization extends TerraformResource {

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

  // accounts - computed: true, optional: false, required: true
  public accounts(index: string) {
    return new OrganizationsOrganizationAccounts(this, 'accounts', index);
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_access_principals - computed: false, optional: true, required: false
  private _awsServiceAccessPrincipals?: string[];
  public get awsServiceAccessPrincipals() {
    return this._awsServiceAccessPrincipals;
  }
  public set awsServiceAccessPrincipals(value: string[] | undefined) {
    this._awsServiceAccessPrincipals = value;
  }

  // enabled_policy_types - computed: false, optional: true, required: false
  private _enabledPolicyTypes?: string[];
  public get enabledPolicyTypes() {
    return this._enabledPolicyTypes;
  }
  public set enabledPolicyTypes(value: string[] | undefined) {
    this._enabledPolicyTypes = value;
  }

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string;
  public get featureSet() {
    return this._featureSet;
  }
  public set featureSet(value: string | undefined) {
    this._featureSet = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // master_account_arn - computed: true, optional: false, required: true
  public get masterAccountArn() {
    return this.getStringAttribute('master_account_arn');
  }

  // master_account_email - computed: true, optional: false, required: true
  public get masterAccountEmail() {
    return this.getStringAttribute('master_account_email');
  }

  // master_account_id - computed: true, optional: false, required: true
  public get masterAccountId() {
    return this.getStringAttribute('master_account_id');
  }

  // non_master_accounts - computed: true, optional: false, required: true
  public nonMasterAccounts(index: string) {
    return new OrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
  }

  // roots - computed: true, optional: false, required: true
  public roots(index: string) {
    return new OrganizationsOrganizationRoots(this, 'roots', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_service_access_principals: this._awsServiceAccessPrincipals,
      enabled_policy_types: this._enabledPolicyTypes,
      feature_set: this._featureSet,
    };
  }
}
