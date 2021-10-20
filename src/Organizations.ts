// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Organizations
*/
export namespace Organizations {
  export interface OrganizationsAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#email OrganizationsAccount#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}
    */
    readonly iamUserAccessToBilling?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#name OrganizationsAccount#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#parent_id OrganizationsAccount#parent_id}
    */
    readonly parentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#role_name OrganizationsAccount#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#tags OrganizationsAccount#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#tags_all OrganizationsAccount#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account}
  */
  export class OrganizationsAccount extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_organizations_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsAccountConfig
    */
    public constructor(scope: Construct, id: string, config: OrganizationsAccountConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_organizations_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._email = config.email;
      this._iamUserAccessToBilling = config.iamUserAccessToBilling;
      this._name = config.name;
      this._parentId = config.parentId;
      this._roleName = config.roleName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // email - computed: false, optional: false, required: true
    private _email?: string; 
    public get email() {
      return this.getStringAttribute('email');
    }
    public set email(value: string) {
      this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
      return this._email
    }

    // iam_user_access_to_billing - computed: false, optional: true, required: false
    private _iamUserAccessToBilling?: string | undefined; 
    public get iamUserAccessToBilling() {
      return this.getStringAttribute('iam_user_access_to_billing');
    }
    public set iamUserAccessToBilling(value: string | undefined) {
      this._iamUserAccessToBilling = value;
    }
    public resetIamUserAccessToBilling() {
      this._iamUserAccessToBilling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamUserAccessToBillingInput() {
      return this._iamUserAccessToBilling
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

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // parent_id - computed: true, optional: true, required: false
    private _parentId?: string | undefined; 
    public get parentId() {
      return this.getStringAttribute('parent_id');
    }
    public set parentId(value: string | undefined) {
      this._parentId = value;
    }
    public resetParentId() {
      this._parentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentIdInput() {
      return this._parentId
    }

    // role_name - computed: false, optional: true, required: false
    private _roleName?: string | undefined; 
    public get roleName() {
      return this.getStringAttribute('role_name');
    }
    public set roleName(value: string | undefined) {
      this._roleName = value;
    }
    public resetRoleName() {
      this._roleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleNameInput() {
      return this._roleName
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        email: cdktf.stringToTerraform(this._email),
        iam_user_access_to_billing: cdktf.stringToTerraform(this._iamUserAccessToBilling),
        name: cdktf.stringToTerraform(this._name),
        parent_id: cdktf.stringToTerraform(this._parentId),
        role_name: cdktf.stringToTerraform(this._roleName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
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
      return this._accountId
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
      return this._servicePrincipal
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
  export interface OrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}
    */
    readonly awsServiceAccessPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html#enabled_policy_types OrganizationsOrganization#enabled_policy_types}
    */
    readonly enabledPolicyTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html#feature_set OrganizationsOrganization#feature_set}
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
      return this.interpolationForAttribute('policy_types') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization} Resource
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
      return new OrganizationsOrganizationAccounts(this, 'accounts', index);
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_service_access_principals - computed: false, optional: true, required: false
    private _awsServiceAccessPrincipals?: string[] | undefined; 
    public get awsServiceAccessPrincipals() {
      return this.getListAttribute('aws_service_access_principals');
    }
    public set awsServiceAccessPrincipals(value: string[] | undefined) {
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
    private _enabledPolicyTypes?: string[] | undefined; 
    public get enabledPolicyTypes() {
      return this.getListAttribute('enabled_policy_types');
    }
    public set enabledPolicyTypes(value: string[] | undefined) {
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
    private _featureSet?: string | undefined; 
    public get featureSet() {
      return this.getStringAttribute('feature_set');
    }
    public set featureSet(value: string | undefined) {
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
  export interface OrganizationsOrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#name OrganizationsOrganizationalUnit#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#parent_id OrganizationsOrganizationalUnit#parent_id}
    */
    readonly parentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#tags OrganizationsOrganizationalUnit#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#tags_all OrganizationsOrganizationalUnit#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class OrganizationsOrganizationalUnitAccounts extends cdktf.ComplexComputedList {

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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit}
  */
  export class OrganizationsOrganizationalUnit extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_organizations_organizational_unit";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationalUnitConfig
    */
    public constructor(scope: Construct, id: string, config: OrganizationsOrganizationalUnitConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_organizations_organizational_unit',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._parentId = config.parentId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accounts - computed: true, optional: false, required: false
    public accounts(index: string) {
      return new OrganizationsOrganizationalUnitAccounts(this, 'accounts', index);
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // parent_id - computed: false, optional: false, required: true
    private _parentId?: string; 
    public get parentId() {
      return this.getStringAttribute('parent_id');
    }
    public set parentId(value: string) {
      this._parentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentIdInput() {
      return this._parentId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        parent_id: cdktf.stringToTerraform(this._parentId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface OrganizationsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html#content OrganizationsPolicy#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html#description OrganizationsPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html#name OrganizationsPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html#tags OrganizationsPolicy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html#tags_all OrganizationsPolicy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html#type OrganizationsPolicy#type}
    */
    readonly type?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html aws_organizations_policy}
  */
  export class OrganizationsPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_organizations_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy.html aws_organizations_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: OrganizationsPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_organizations_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._content = config.content;
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string) {
      this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        content: cdktf.stringToTerraform(this._content),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface OrganizationsPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html#policy_id OrganizationsPolicyAttachment#policy_id}
    */
    readonly policyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html#target_id OrganizationsPolicyAttachment#target_id}
    */
    readonly targetId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html aws_organizations_policy_attachment}
  */
  export class OrganizationsPolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_organizations_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html aws_organizations_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsPolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: OrganizationsPolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_organizations_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policyId = config.policyId;
      this._targetId = config.targetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy_id - computed: false, optional: false, required: true
    private _policyId?: string; 
    public get policyId() {
      return this.getStringAttribute('policy_id');
    }
    public set policyId(value: string) {
      this._policyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyIdInput() {
      return this._policyId
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId?: string; 
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy_id: cdktf.stringToTerraform(this._policyId),
        target_id: cdktf.stringToTerraform(this._targetId),
      };
    }
  }
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
    private _servicePrincipal?: string | undefined; 
    public get servicePrincipal() {
      return this.getStringAttribute('service_principal');
    }
    public set servicePrincipal(value: string | undefined) {
      this._servicePrincipal = value;
    }
    public resetServicePrincipal() {
      this._servicePrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get servicePrincipalInput() {
      return this._servicePrincipal
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
      return this._accountId
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
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('policy_types') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization}
  */
  export class DataAwsOrganizationsOrganization extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_organizations_organization";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationConfig = {}
    */
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
  export interface DataAwsOrganizationsOrganizationalUnitsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}
    */
    readonly parentId: string;
  }
  export class DataAwsOrganizationsOrganizationalUnitsChildren extends cdktf.ComplexComputedList {

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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units}
  */
  export class DataAwsOrganizationsOrganizationalUnits extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_organizations_organizational_units";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationalUnitsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_organizations_organizational_units',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._parentId = config.parentId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // children - computed: true, optional: false, required: false
    public children(index: string) {
      return new DataAwsOrganizationsOrganizationalUnitsChildren(this, 'children', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // parent_id - computed: false, optional: false, required: true
    private _parentId?: string; 
    public get parentId() {
      return this.getStringAttribute('parent_id');
    }
    public set parentId(value: string) {
      this._parentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentIdInput() {
      return this._parentId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        parent_id: cdktf.stringToTerraform(this._parentId),
      };
    }
  }
}
