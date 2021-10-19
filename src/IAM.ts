// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export namespace IAM {
  export interface IamAccessKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#pgp_key IamAccessKey#pgp_key}
    */
    readonly pgpKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#status IamAccessKey#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#user IamAccessKey#user}
    */
    readonly user: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key}
  */
  export class IamAccessKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_access_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccessKeyConfig
    */
    public constructor(scope: Construct, id: string, config: IamAccessKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_access_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._pgpKey = config.pgpKey;
      this._status = config.status;
      this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
    }

    // encrypted_secret - computed: true, optional: false, required: false
    public get encryptedSecret() {
      return this.getStringAttribute('encrypted_secret');
    }

    // encrypted_ses_smtp_password_v4 - computed: true, optional: false, required: false
    public get encryptedSesSmtpPasswordV4() {
      return this.getStringAttribute('encrypted_ses_smtp_password_v4');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_fingerprint - computed: true, optional: false, required: false
    public get keyFingerprint() {
      return this.getStringAttribute('key_fingerprint');
    }

    // pgp_key - computed: false, optional: true, required: false
    private _pgpKey?: string | undefined; 
    public get pgpKey() {
      return this.getStringAttribute('pgp_key');
    }
    public set pgpKey(value: string | undefined) {
      this._pgpKey = value;
    }
    public resetPgpKey() {
      this._pgpKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pgpKeyInput() {
      return this._pgpKey
    }

    // secret - computed: true, optional: false, required: false
    public get secret() {
      return this.getStringAttribute('secret');
    }

    // ses_smtp_password_v4 - computed: true, optional: false, required: false
    public get sesSmtpPasswordV4() {
      return this.getStringAttribute('ses_smtp_password_v4');
    }

    // status - computed: false, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // user - computed: false, optional: false, required: true
    private _user?: string; 
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        pgp_key: cdktf.stringToTerraform(this._pgpKey),
        status: cdktf.stringToTerraform(this._status),
        user: cdktf.stringToTerraform(this._user),
      };
    }
  }
  export interface IamAccountAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html#account_alias IamAccountAlias#account_alias}
    */
    readonly accountAlias: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias}
  */
  export class IamAccountAlias extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_account_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountAliasConfig
    */
    public constructor(scope: Construct, id: string, config: IamAccountAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_account_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountAlias = config.accountAlias;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_alias - computed: false, optional: false, required: true
    private _accountAlias?: string; 
    public get accountAlias() {
      return this.getStringAttribute('account_alias');
    }
    public set accountAlias(value: string) {
      this._accountAlias = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountAliasInput() {
      return this._accountAlias
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
        account_alias: cdktf.stringToTerraform(this._accountAlias),
      };
    }
  }
  export interface IamAccountPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}
    */
    readonly allowUsersToChangePassword?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#hard_expiry IamAccountPasswordPolicy#hard_expiry}
    */
    readonly hardExpiry?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#max_password_age IamAccountPasswordPolicy#max_password_age}
    */
    readonly maxPasswordAge?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}
    */
    readonly minimumPasswordLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}
    */
    readonly passwordReusePrevention?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}
    */
    readonly requireLowercaseCharacters?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_numbers IamAccountPasswordPolicy#require_numbers}
    */
    readonly requireNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_symbols IamAccountPasswordPolicy#require_symbols}
    */
    readonly requireSymbols?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}
    */
    readonly requireUppercaseCharacters?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}
  */
  export class IamAccountPasswordPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_account_password_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountPasswordPolicyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: IamAccountPasswordPolicyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_account_password_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowUsersToChangePassword = config.allowUsersToChangePassword;
      this._hardExpiry = config.hardExpiry;
      this._maxPasswordAge = config.maxPasswordAge;
      this._minimumPasswordLength = config.minimumPasswordLength;
      this._passwordReusePrevention = config.passwordReusePrevention;
      this._requireLowercaseCharacters = config.requireLowercaseCharacters;
      this._requireNumbers = config.requireNumbers;
      this._requireSymbols = config.requireSymbols;
      this._requireUppercaseCharacters = config.requireUppercaseCharacters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_users_to_change_password - computed: false, optional: true, required: false
    private _allowUsersToChangePassword?: boolean | cdktf.IResolvable | undefined; 
    public get allowUsersToChangePassword() {
      return this.getBooleanAttribute('allow_users_to_change_password') as any;
    }
    public set allowUsersToChangePassword(value: boolean | cdktf.IResolvable | undefined) {
      this._allowUsersToChangePassword = value;
    }
    public resetAllowUsersToChangePassword() {
      this._allowUsersToChangePassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowUsersToChangePasswordInput() {
      return this._allowUsersToChangePassword
    }

    // expire_passwords - computed: true, optional: false, required: false
    public get expirePasswords() {
      return this.getBooleanAttribute('expire_passwords') as any;
    }

    // hard_expiry - computed: true, optional: true, required: false
    private _hardExpiry?: boolean | cdktf.IResolvable | undefined; 
    public get hardExpiry() {
      return this.getBooleanAttribute('hard_expiry') as any;
    }
    public set hardExpiry(value: boolean | cdktf.IResolvable | undefined) {
      this._hardExpiry = value;
    }
    public resetHardExpiry() {
      this._hardExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hardExpiryInput() {
      return this._hardExpiry
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_password_age - computed: true, optional: true, required: false
    private _maxPasswordAge?: number | undefined; 
    public get maxPasswordAge() {
      return this.getNumberAttribute('max_password_age');
    }
    public set maxPasswordAge(value: number | undefined) {
      this._maxPasswordAge = value;
    }
    public resetMaxPasswordAge() {
      this._maxPasswordAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPasswordAgeInput() {
      return this._maxPasswordAge
    }

    // minimum_password_length - computed: false, optional: true, required: false
    private _minimumPasswordLength?: number | undefined; 
    public get minimumPasswordLength() {
      return this.getNumberAttribute('minimum_password_length');
    }
    public set minimumPasswordLength(value: number | undefined) {
      this._minimumPasswordLength = value;
    }
    public resetMinimumPasswordLength() {
      this._minimumPasswordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumPasswordLengthInput() {
      return this._minimumPasswordLength
    }

    // password_reuse_prevention - computed: true, optional: true, required: false
    private _passwordReusePrevention?: number | undefined; 
    public get passwordReusePrevention() {
      return this.getNumberAttribute('password_reuse_prevention');
    }
    public set passwordReusePrevention(value: number | undefined) {
      this._passwordReusePrevention = value;
    }
    public resetPasswordReusePrevention() {
      this._passwordReusePrevention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordReusePreventionInput() {
      return this._passwordReusePrevention
    }

    // require_lowercase_characters - computed: true, optional: true, required: false
    private _requireLowercaseCharacters?: boolean | cdktf.IResolvable | undefined; 
    public get requireLowercaseCharacters() {
      return this.getBooleanAttribute('require_lowercase_characters') as any;
    }
    public set requireLowercaseCharacters(value: boolean | cdktf.IResolvable | undefined) {
      this._requireLowercaseCharacters = value;
    }
    public resetRequireLowercaseCharacters() {
      this._requireLowercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireLowercaseCharactersInput() {
      return this._requireLowercaseCharacters
    }

    // require_numbers - computed: true, optional: true, required: false
    private _requireNumbers?: boolean | cdktf.IResolvable | undefined; 
    public get requireNumbers() {
      return this.getBooleanAttribute('require_numbers') as any;
    }
    public set requireNumbers(value: boolean | cdktf.IResolvable | undefined) {
      this._requireNumbers = value;
    }
    public resetRequireNumbers() {
      this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireNumbersInput() {
      return this._requireNumbers
    }

    // require_symbols - computed: true, optional: true, required: false
    private _requireSymbols?: boolean | cdktf.IResolvable | undefined; 
    public get requireSymbols() {
      return this.getBooleanAttribute('require_symbols') as any;
    }
    public set requireSymbols(value: boolean | cdktf.IResolvable | undefined) {
      this._requireSymbols = value;
    }
    public resetRequireSymbols() {
      this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireSymbolsInput() {
      return this._requireSymbols
    }

    // require_uppercase_characters - computed: true, optional: true, required: false
    private _requireUppercaseCharacters?: boolean | cdktf.IResolvable | undefined; 
    public get requireUppercaseCharacters() {
      return this.getBooleanAttribute('require_uppercase_characters') as any;
    }
    public set requireUppercaseCharacters(value: boolean | cdktf.IResolvable | undefined) {
      this._requireUppercaseCharacters = value;
    }
    public resetRequireUppercaseCharacters() {
      this._requireUppercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireUppercaseCharactersInput() {
      return this._requireUppercaseCharacters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allow_users_to_change_password: cdktf.booleanToTerraform(this._allowUsersToChangePassword),
        hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
        max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
        minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
        password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
        require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
        require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
        require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
        require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
      };
    }
  }
  export interface IamGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html#name IamGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html#path IamGroup#path}
    */
    readonly path?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html aws_iam_group}
  */
  export class IamGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html aws_iam_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupConfig
    */
    public constructor(scope: Construct, id: string, config: IamGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._path = config.path;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // unique_id - computed: true, optional: false, required: false
    public get uniqueId() {
      return this.getStringAttribute('unique_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        path: cdktf.stringToTerraform(this._path),
      };
    }
  }
  export interface IamGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html#group IamGroupMembership#group}
    */
    readonly group: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html#name IamGroupMembership#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html#users IamGroupMembership#users}
    */
    readonly users: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html aws_iam_group_membership}
  */
  export class IamGroupMembership extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_group_membership";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html aws_iam_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupMembershipConfig
    */
    public constructor(scope: Construct, id: string, config: IamGroupMembershipConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_group_membership',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._group = config.group;
      this._name = config.name;
      this._users = config.users;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group - computed: false, optional: false, required: true
    private _group?: string; 
    public get group() {
      return this.getStringAttribute('group');
    }
    public set group(value: string) {
      this._group = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
      return this._group
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

    // users - computed: false, optional: false, required: true
    private _users?: string[]; 
    public get users() {
      return this.getListAttribute('users');
    }
    public set users(value: string[]) {
      this._users = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usersInput() {
      return this._users
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        group: cdktf.stringToTerraform(this._group),
        name: cdktf.stringToTerraform(this._name),
        users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
      };
    }
  }
  export interface IamGroupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html#group IamGroupPolicy#group}
    */
    readonly group: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html#name IamGroupPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html#name_prefix IamGroupPolicy#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html#policy IamGroupPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html aws_iam_group_policy}
  */
  export class IamGroupPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_group_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html aws_iam_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: IamGroupPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_group_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._group = config.group;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group - computed: false, optional: false, required: true
    private _group?: string; 
    public get group() {
      return this.getStringAttribute('group');
    }
    public set group(value: string) {
      this._group = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
      return this._group
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        group: cdktf.stringToTerraform(this._group),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface IamGroupPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html#group IamGroupPolicyAttachment#group}
    */
    readonly group: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html#policy_arn IamGroupPolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html aws_iam_group_policy_attachment}
  */
  export class IamGroupPolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_group_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html aws_iam_group_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupPolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: IamGroupPolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_group_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._group = config.group;
      this._policyArn = config.policyArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group - computed: false, optional: false, required: true
    private _group?: string; 
    public get group() {
      return this.getStringAttribute('group');
    }
    public set group(value: string) {
      this._group = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
      return this._group
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy_arn - computed: false, optional: false, required: true
    private _policyArn?: string; 
    public get policyArn() {
      return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
      this._policyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
      return this._policyArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        group: cdktf.stringToTerraform(this._group),
        policy_arn: cdktf.stringToTerraform(this._policyArn),
      };
    }
  }
  export interface IamInstanceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html#name IamInstanceProfile#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html#name_prefix IamInstanceProfile#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html#path IamInstanceProfile#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html#role IamInstanceProfile#role}
    */
    readonly role?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html#tags IamInstanceProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html#tags_all IamInstanceProfile#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html aws_iam_instance_profile}
  */
  export class IamInstanceProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_instance_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html aws_iam_instance_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamInstanceProfileConfig = {}
    */
    public constructor(scope: Construct, id: string, config: IamInstanceProfileConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_instance_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._path = config.path;
      this._role = config.role;
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

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // role - computed: false, optional: true, required: false
    private _role?: string | undefined; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string | undefined) {
      this._role = value;
    }
    public resetRole() {
      this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
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

    // unique_id - computed: true, optional: false, required: false
    public get uniqueId() {
      return this.getStringAttribute('unique_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        path: cdktf.stringToTerraform(this._path),
        role: cdktf.stringToTerraform(this._role),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#client_id_list IamOpenidConnectProvider#client_id_list}
    */
    readonly clientIdList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags IamOpenidConnectProvider#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags_all IamOpenidConnectProvider#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#thumbprint_list IamOpenidConnectProvider#thumbprint_list}
    */
    readonly thumbprintList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#url IamOpenidConnectProvider#url}
    */
    readonly url: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider}
  */
  export class IamOpenidConnectProvider extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_openid_connect_provider";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamOpenidConnectProviderConfig
    */
    public constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_openid_connect_provider',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clientIdList = config.clientIdList;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._thumbprintList = config.thumbprintList;
      this._url = config.url;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // client_id_list - computed: false, optional: false, required: true
    private _clientIdList?: string[]; 
    public get clientIdList() {
      return this.getListAttribute('client_id_list');
    }
    public set clientIdList(value: string[]) {
      this._clientIdList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdListInput() {
      return this._clientIdList
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // thumbprint_list - computed: false, optional: false, required: true
    private _thumbprintList?: string[]; 
    public get thumbprintList() {
      return this.getListAttribute('thumbprint_list');
    }
    public set thumbprintList(value: string[]) {
      this._thumbprintList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get thumbprintListInput() {
      return this._thumbprintList
    }

    // url - computed: false, optional: false, required: true
    private _url?: string; 
    public get url() {
      return this.getStringAttribute('url');
    }
    public set url(value: string) {
      this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
      return this._url
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        client_id_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientIdList),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        thumbprint_list: cdktf.listMapper(cdktf.stringToTerraform)(this._thumbprintList),
        url: cdktf.stringToTerraform(this._url),
      };
    }
  }
  export interface IamPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#description IamPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#name IamPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#name_prefix IamPolicy#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#path IamPolicy#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#policy IamPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#tags IamPolicy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html#tags_all IamPolicy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html aws_iam_policy}
  */
  export class IamPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_policy.html aws_iam_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: IamPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._path = config.path;
      this._policy = config.policy;
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

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
      return this.getStringAttribute('policy_id');
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
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        path: cdktf.stringToTerraform(this._path),
        policy: cdktf.stringToTerraform(this._policy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface IamPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#groups IamPolicyAttachment#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#name IamPolicyAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#policy_arn IamPolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#roles IamPolicyAttachment#roles}
    */
    readonly roles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html#users IamPolicyAttachment#users}
    */
    readonly users?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html aws_iam_policy_attachment}
  */
  export class IamPolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html aws_iam_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamPolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: IamPolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._groups = config.groups;
      this._name = config.name;
      this._policyArn = config.policyArn;
      this._roles = config.roles;
      this._users = config.users;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // groups - computed: false, optional: true, required: false
    private _groups?: string[] | undefined; 
    public get groups() {
      return this.getListAttribute('groups');
    }
    public set groups(value: string[] | undefined) {
      this._groups = value;
    }
    public resetGroups() {
      this._groups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
      return this._groups
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

    // policy_arn - computed: false, optional: false, required: true
    private _policyArn?: string; 
    public get policyArn() {
      return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
      this._policyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
      return this._policyArn
    }

    // roles - computed: false, optional: true, required: false
    private _roles?: string[] | undefined; 
    public get roles() {
      return this.getListAttribute('roles');
    }
    public set roles(value: string[] | undefined) {
      this._roles = value;
    }
    public resetRoles() {
      this._roles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
      return this._roles
    }

    // users - computed: false, optional: true, required: false
    private _users?: string[] | undefined; 
    public get users() {
      return this.getListAttribute('users');
    }
    public set users(value: string[] | undefined) {
      this._users = value;
    }
    public resetUsers() {
      this._users = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usersInput() {
      return this._users
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
        name: cdktf.stringToTerraform(this._name),
        policy_arn: cdktf.stringToTerraform(this._policyArn),
        roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
        users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
      };
    }
  }
  export interface IamRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#assume_role_policy IamRole#assume_role_policy}
    */
    readonly assumeRolePolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#description IamRole#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#force_detach_policies IamRole#force_detach_policies}
    */
    readonly forceDetachPolicies?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#managed_policy_arns IamRole#managed_policy_arns}
    */
    readonly managedPolicyArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#max_session_duration IamRole#max_session_duration}
    */
    readonly maxSessionDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name IamRole#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name_prefix IamRole#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#path IamRole#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#permissions_boundary IamRole#permissions_boundary}
    */
    readonly permissionsBoundary?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#tags IamRole#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#tags_all IamRole#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * inline_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#inline_policy IamRole#inline_policy}
    */
    readonly inlinePolicy?: IamRoleInlinePolicy[];
  }
  export interface IamRoleInlinePolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name IamRole#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#policy IamRole#policy}
    */
    readonly policy?: string;
  }

  function iamRoleInlinePolicyToTerraform(struct?: IamRoleInlinePolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      policy: cdktf.stringToTerraform(struct!.policy),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role}
  */
  export class IamRole extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_role";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRoleConfig
    */
    public constructor(scope: Construct, id: string, config: IamRoleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_role',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._assumeRolePolicy = config.assumeRolePolicy;
      this._description = config.description;
      this._forceDetachPolicies = config.forceDetachPolicies;
      this._managedPolicyArns = config.managedPolicyArns;
      this._maxSessionDuration = config.maxSessionDuration;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._path = config.path;
      this._permissionsBoundary = config.permissionsBoundary;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._inlinePolicy = config.inlinePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // assume_role_policy - computed: false, optional: false, required: true
    private _assumeRolePolicy?: string; 
    public get assumeRolePolicy() {
      return this.getStringAttribute('assume_role_policy');
    }
    public set assumeRolePolicy(value: string) {
      this._assumeRolePolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assumeRolePolicyInput() {
      return this._assumeRolePolicy
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
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

    // force_detach_policies - computed: false, optional: true, required: false
    private _forceDetachPolicies?: boolean | cdktf.IResolvable | undefined; 
    public get forceDetachPolicies() {
      return this.getBooleanAttribute('force_detach_policies') as any;
    }
    public set forceDetachPolicies(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDetachPolicies = value;
    }
    public resetForceDetachPolicies() {
      this._forceDetachPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDetachPoliciesInput() {
      return this._forceDetachPolicies
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // managed_policy_arns - computed: true, optional: true, required: false
    private _managedPolicyArns?: string[] | undefined; 
    public get managedPolicyArns() {
      return this.getListAttribute('managed_policy_arns');
    }
    public set managedPolicyArns(value: string[] | undefined) {
      this._managedPolicyArns = value;
    }
    public resetManagedPolicyArns() {
      this._managedPolicyArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedPolicyArnsInput() {
      return this._managedPolicyArns
    }

    // max_session_duration - computed: false, optional: true, required: false
    private _maxSessionDuration?: number | undefined; 
    public get maxSessionDuration() {
      return this.getNumberAttribute('max_session_duration');
    }
    public set maxSessionDuration(value: number | undefined) {
      this._maxSessionDuration = value;
    }
    public resetMaxSessionDuration() {
      this._maxSessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSessionDurationInput() {
      return this._maxSessionDuration
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // permissions_boundary - computed: false, optional: true, required: false
    private _permissionsBoundary?: string | undefined; 
    public get permissionsBoundary() {
      return this.getStringAttribute('permissions_boundary');
    }
    public set permissionsBoundary(value: string | undefined) {
      this._permissionsBoundary = value;
    }
    public resetPermissionsBoundary() {
      this._permissionsBoundary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsBoundaryInput() {
      return this._permissionsBoundary
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

    // unique_id - computed: true, optional: false, required: false
    public get uniqueId() {
      return this.getStringAttribute('unique_id');
    }

    // inline_policy - computed: false, optional: true, required: false
    private _inlinePolicy?: IamRoleInlinePolicy[] | undefined; 
    public get inlinePolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('inline_policy') as any;
    }
    public set inlinePolicy(value: IamRoleInlinePolicy[] | undefined) {
      this._inlinePolicy = value;
    }
    public resetInlinePolicy() {
      this._inlinePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlinePolicyInput() {
      return this._inlinePolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        assume_role_policy: cdktf.stringToTerraform(this._assumeRolePolicy),
        description: cdktf.stringToTerraform(this._description),
        force_detach_policies: cdktf.booleanToTerraform(this._forceDetachPolicies),
        managed_policy_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._managedPolicyArns),
        max_session_duration: cdktf.numberToTerraform(this._maxSessionDuration),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        path: cdktf.stringToTerraform(this._path),
        permissions_boundary: cdktf.stringToTerraform(this._permissionsBoundary),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        inline_policy: cdktf.listMapper(iamRoleInlinePolicyToTerraform)(this._inlinePolicy),
      };
    }
  }
  export interface IamRolePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#name IamRolePolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#name_prefix IamRolePolicy#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#policy IamRolePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html#role IamRolePolicy#role}
    */
    readonly role: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html aws_iam_role_policy}
  */
  export class IamRolePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_role_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html aws_iam_role_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: IamRolePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_role_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._policy = config.policy;
      this._role = config.role;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string) {
      this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        policy: cdktf.stringToTerraform(this._policy),
        role: cdktf.stringToTerraform(this._role),
      };
    }
  }
  export interface IamRolePolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html#policy_arn IamRolePolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html#role IamRolePolicyAttachment#role}
    */
    readonly role: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html aws_iam_role_policy_attachment}
  */
  export class IamRolePolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_role_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html aws_iam_role_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_role_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policyArn = config.policyArn;
      this._role = config.role;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy_arn - computed: false, optional: false, required: true
    private _policyArn?: string; 
    public get policyArn() {
      return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
      this._policyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
      return this._policyArn
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string) {
      this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy_arn: cdktf.stringToTerraform(this._policyArn),
        role: cdktf.stringToTerraform(this._role),
      };
    }
  }
  export interface IamSamlProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#name IamSamlProvider#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#saml_metadata_document IamSamlProvider#saml_metadata_document}
    */
    readonly samlMetadataDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#tags IamSamlProvider#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#tags_all IamSamlProvider#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html aws_iam_saml_provider}
  */
  export class IamSamlProvider extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_saml_provider";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html aws_iam_saml_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamSamlProviderConfig
    */
    public constructor(scope: Construct, id: string, config: IamSamlProviderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_saml_provider',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._samlMetadataDocument = config.samlMetadataDocument;
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

    // saml_metadata_document - computed: false, optional: false, required: true
    private _samlMetadataDocument?: string; 
    public get samlMetadataDocument() {
      return this.getStringAttribute('saml_metadata_document');
    }
    public set samlMetadataDocument(value: string) {
      this._samlMetadataDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get samlMetadataDocumentInput() {
      return this._samlMetadataDocument
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

    // valid_until - computed: true, optional: false, required: false
    public get validUntil() {
      return this.getStringAttribute('valid_until');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        saml_metadata_document: cdktf.stringToTerraform(this._samlMetadataDocument),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface IamServerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#certificate_body IamServerCertificate#certificate_body}
    */
    readonly certificateBody: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#certificate_chain IamServerCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#name IamServerCertificate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#name_prefix IamServerCertificate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#path IamServerCertificate#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#private_key IamServerCertificate#private_key}
    */
    readonly privateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#tags IamServerCertificate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html#tags_all IamServerCertificate#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html aws_iam_server_certificate}
  */
  export class IamServerCertificate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_server_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html aws_iam_server_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServerCertificateConfig
    */
    public constructor(scope: Construct, id: string, config: IamServerCertificateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_server_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificateBody = config.certificateBody;
      this._certificateChain = config.certificateChain;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._path = config.path;
      this._privateKey = config.privateKey;
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

    // certificate_body - computed: false, optional: false, required: true
    private _certificateBody?: string; 
    public get certificateBody() {
      return this.getStringAttribute('certificate_body');
    }
    public set certificateBody(value: string) {
      this._certificateBody = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateBodyInput() {
      return this._certificateBody
    }

    // certificate_chain - computed: false, optional: true, required: false
    private _certificateChain?: string | undefined; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string | undefined) {
      this._certificateChain = value;
    }
    public resetCertificateChain() {
      this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // expiration - computed: true, optional: false, required: false
    public get expiration() {
      return this.getStringAttribute('expiration');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // private_key - computed: false, optional: false, required: true
    private _privateKey?: string; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
      this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
      return this._privateKey
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

    // upload_date - computed: true, optional: false, required: false
    public get uploadDate() {
      return this.getStringAttribute('upload_date');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate_body: cdktf.stringToTerraform(this._certificateBody),
        certificate_chain: cdktf.stringToTerraform(this._certificateChain),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        path: cdktf.stringToTerraform(this._path),
        private_key: cdktf.stringToTerraform(this._privateKey),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface IamServiceLinkedRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#aws_service_name IamServiceLinkedRole#aws_service_name}
    */
    readonly awsServiceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#custom_suffix IamServiceLinkedRole#custom_suffix}
    */
    readonly customSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#description IamServiceLinkedRole#description}
    */
    readonly description?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role}
  */
  export class IamServiceLinkedRole extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_service_linked_role";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServiceLinkedRoleConfig
    */
    public constructor(scope: Construct, id: string, config: IamServiceLinkedRoleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_service_linked_role',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._awsServiceName = config.awsServiceName;
      this._customSuffix = config.customSuffix;
      this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_service_name - computed: false, optional: false, required: true
    private _awsServiceName?: string; 
    public get awsServiceName() {
      return this.getStringAttribute('aws_service_name');
    }
    public set awsServiceName(value: string) {
      this._awsServiceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsServiceNameInput() {
      return this._awsServiceName
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
    }

    // custom_suffix - computed: false, optional: true, required: false
    private _customSuffix?: string | undefined; 
    public get customSuffix() {
      return this.getStringAttribute('custom_suffix');
    }
    public set customSuffix(value: string | undefined) {
      this._customSuffix = value;
    }
    public resetCustomSuffix() {
      this._customSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSuffixInput() {
      return this._customSuffix
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

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // unique_id - computed: true, optional: false, required: false
    public get uniqueId() {
      return this.getStringAttribute('unique_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aws_service_name: cdktf.stringToTerraform(this._awsServiceName),
        custom_suffix: cdktf.stringToTerraform(this._customSuffix),
        description: cdktf.stringToTerraform(this._description),
      };
    }
  }
  export interface IamUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html#force_destroy IamUser#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html#name IamUser#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html#path IamUser#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html#permissions_boundary IamUser#permissions_boundary}
    */
    readonly permissionsBoundary?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html#tags IamUser#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html#tags_all IamUser#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html aws_iam_user}
  */
  export class IamUser extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user.html aws_iam_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserConfig
    */
    public constructor(scope: Construct, id: string, config: IamUserConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._forceDestroy = config.forceDestroy;
      this._name = config.name;
      this._path = config.path;
      this._permissionsBoundary = config.permissionsBoundary;
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

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
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

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // permissions_boundary - computed: false, optional: true, required: false
    private _permissionsBoundary?: string | undefined; 
    public get permissionsBoundary() {
      return this.getStringAttribute('permissions_boundary');
    }
    public set permissionsBoundary(value: string | undefined) {
      this._permissionsBoundary = value;
    }
    public resetPermissionsBoundary() {
      this._permissionsBoundary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsBoundaryInput() {
      return this._permissionsBoundary
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

    // unique_id - computed: true, optional: false, required: false
    public get uniqueId() {
      return this.getStringAttribute('unique_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        name: cdktf.stringToTerraform(this._name),
        path: cdktf.stringToTerraform(this._path),
        permissions_boundary: cdktf.stringToTerraform(this._permissionsBoundary),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface IamUserGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html#groups IamUserGroupMembership#groups}
    */
    readonly groups: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html#user IamUserGroupMembership#user}
    */
    readonly user: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html aws_iam_user_group_membership}
  */
  export class IamUserGroupMembership extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user_group_membership";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html aws_iam_user_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserGroupMembershipConfig
    */
    public constructor(scope: Construct, id: string, config: IamUserGroupMembershipConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user_group_membership',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._groups = config.groups;
      this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // groups - computed: false, optional: false, required: true
    private _groups?: string[]; 
    public get groups() {
      return this.getListAttribute('groups');
    }
    public set groups(value: string[]) {
      this._groups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
      return this._groups
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // user - computed: false, optional: false, required: true
    private _user?: string; 
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
        user: cdktf.stringToTerraform(this._user),
      };
    }
  }
  export interface IamUserLoginProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#password_length IamUserLoginProfile#password_length}
    */
    readonly passwordLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#password_reset_required IamUserLoginProfile#password_reset_required}
    */
    readonly passwordResetRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#pgp_key IamUserLoginProfile#pgp_key}
    */
    readonly pgpKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#user IamUserLoginProfile#user}
    */
    readonly user: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html aws_iam_user_login_profile}
  */
  export class IamUserLoginProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user_login_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html aws_iam_user_login_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserLoginProfileConfig
    */
    public constructor(scope: Construct, id: string, config: IamUserLoginProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user_login_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._passwordLength = config.passwordLength;
      this._passwordResetRequired = config.passwordResetRequired;
      this._pgpKey = config.pgpKey;
      this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // encrypted_password - computed: true, optional: false, required: false
    public get encryptedPassword() {
      return this.getStringAttribute('encrypted_password');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_fingerprint - computed: true, optional: false, required: false
    public get keyFingerprint() {
      return this.getStringAttribute('key_fingerprint');
    }

    // password_length - computed: false, optional: true, required: false
    private _passwordLength?: number | undefined; 
    public get passwordLength() {
      return this.getNumberAttribute('password_length');
    }
    public set passwordLength(value: number | undefined) {
      this._passwordLength = value;
    }
    public resetPasswordLength() {
      this._passwordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordLengthInput() {
      return this._passwordLength
    }

    // password_reset_required - computed: false, optional: true, required: false
    private _passwordResetRequired?: boolean | cdktf.IResolvable | undefined; 
    public get passwordResetRequired() {
      return this.getBooleanAttribute('password_reset_required') as any;
    }
    public set passwordResetRequired(value: boolean | cdktf.IResolvable | undefined) {
      this._passwordResetRequired = value;
    }
    public resetPasswordResetRequired() {
      this._passwordResetRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordResetRequiredInput() {
      return this._passwordResetRequired
    }

    // pgp_key - computed: false, optional: false, required: true
    private _pgpKey?: string; 
    public get pgpKey() {
      return this.getStringAttribute('pgp_key');
    }
    public set pgpKey(value: string) {
      this._pgpKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pgpKeyInput() {
      return this._pgpKey
    }

    // user - computed: false, optional: false, required: true
    private _user?: string; 
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        password_length: cdktf.numberToTerraform(this._passwordLength),
        password_reset_required: cdktf.booleanToTerraform(this._passwordResetRequired),
        pgp_key: cdktf.stringToTerraform(this._pgpKey),
        user: cdktf.stringToTerraform(this._user),
      };
    }
  }
  export interface IamUserPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#name IamUserPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#name_prefix IamUserPolicy#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#policy IamUserPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#user IamUserPolicy#user}
    */
    readonly user: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html aws_iam_user_policy}
  */
  export class IamUserPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html aws_iam_user_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: IamUserPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._policy = config.policy;
      this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // user - computed: false, optional: false, required: true
    private _user?: string; 
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        policy: cdktf.stringToTerraform(this._policy),
        user: cdktf.stringToTerraform(this._user),
      };
    }
  }
  export interface IamUserPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html#policy_arn IamUserPolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html#user IamUserPolicyAttachment#user}
    */
    readonly user: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html aws_iam_user_policy_attachment}
  */
  export class IamUserPolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html aws_iam_user_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserPolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: IamUserPolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policyArn = config.policyArn;
      this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy_arn - computed: false, optional: false, required: true
    private _policyArn?: string; 
    public get policyArn() {
      return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
      this._policyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
      return this._policyArn
    }

    // user - computed: false, optional: false, required: true
    private _user?: string; 
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy_arn: cdktf.stringToTerraform(this._policyArn),
        user: cdktf.stringToTerraform(this._user),
      };
    }
  }
  export interface IamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#encoding IamUserSshKey#encoding}
    */
    readonly encoding: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#public_key IamUserSshKey#public_key}
    */
    readonly publicKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#status IamUserSshKey#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#username IamUserSshKey#username}
    */
    readonly username: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html aws_iam_user_ssh_key}
  */
  export class IamUserSshKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user_ssh_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html aws_iam_user_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserSshKeyConfig
    */
    public constructor(scope: Construct, id: string, config: IamUserSshKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user_ssh_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._encoding = config.encoding;
      this._publicKey = config.publicKey;
      this._status = config.status;
      this._username = config.username;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // encoding - computed: false, optional: false, required: true
    private _encoding?: string; 
    public get encoding() {
      return this.getStringAttribute('encoding');
    }
    public set encoding(value: string) {
      this._encoding = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingInput() {
      return this._encoding
    }

    // fingerprint - computed: true, optional: false, required: false
    public get fingerprint() {
      return this.getStringAttribute('fingerprint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // public_key - computed: false, optional: false, required: true
    private _publicKey?: string; 
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }
    public set publicKey(value: string) {
      this._publicKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeyInput() {
      return this._publicKey
    }

    // ssh_public_key_id - computed: true, optional: false, required: false
    public get sshPublicKeyId() {
      return this.getStringAttribute('ssh_public_key_id');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // username - computed: false, optional: false, required: true
    private _username?: string; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string) {
      this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        encoding: cdktf.stringToTerraform(this._encoding),
        public_key: cdktf.stringToTerraform(this._publicKey),
        status: cdktf.stringToTerraform(this._status),
        username: cdktf.stringToTerraform(this._username),
      };
    }
  }
  export interface DataAwsIamAccountAliasConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias}
  */
  export class DataAwsIamAccountAlias extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_account_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamAccountAliasConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamAccountAliasConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_account_alias',
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

    // account_alias - computed: true, optional: false, required: false
    public get accountAlias() {
      return this.getStringAttribute('account_alias');
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
      };
    }
  }
  export interface DataAwsIamGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html#group_name DataAwsIamGroup#group_name}
    */
    readonly groupName: string;
  }
  export class DataAwsIamGroupUsers extends cdktf.ComplexComputedList {

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // user_id - computed: true, optional: false, required: false
    public get userId() {
      return this.getStringAttribute('user_id');
    }

    // user_name - computed: true, optional: false, required: false
    public get userName() {
      return this.getStringAttribute('user_name');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html aws_iam_group}
  */
  export class DataAwsIamGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html aws_iam_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._groupName = config.groupName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // group_id - computed: true, optional: false, required: false
    public get groupId() {
      return this.getStringAttribute('group_id');
    }

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
      return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
      this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
      return this._groupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // users - computed: true, optional: false, required: false
    public users(index: string) {
      return new DataAwsIamGroupUsers(this, 'users', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        group_name: cdktf.stringToTerraform(this._groupName),
      };
    }
  }
  export interface DataAwsIamInstanceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profile.html#name DataAwsIamInstanceProfile#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profile.html aws_iam_instance_profile}
  */
  export class DataAwsIamInstanceProfile extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_instance_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profile.html aws_iam_instance_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamInstanceProfileConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamInstanceProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_instance_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
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

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // role_id - computed: true, optional: false, required: false
    public get roleId() {
      return this.getStringAttribute('role_id');
    }

    // role_name - computed: true, optional: false, required: false
    public get roleName() {
      return this.getStringAttribute('role_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsIamPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html#name DataAwsIamPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html#path_prefix DataAwsIamPolicy#path_prefix}
    */
    readonly pathPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html#tags DataAwsIamPolicy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html aws_iam_policy}
  */
  export class DataAwsIamPolicy extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html aws_iam_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPolicyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamPolicyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._pathPrefix = config.pathPrefix;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // path_prefix - computed: false, optional: true, required: false
    private _pathPrefix?: string | undefined; 
    public get pathPrefix() {
      return this.getStringAttribute('path_prefix');
    }
    public set pathPrefix(value: string | undefined) {
      this._pathPrefix = value;
    }
    public resetPathPrefix() {
      this._pathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixInput() {
      return this._pathPrefix
    }

    // policy - computed: true, optional: false, required: false
    public get policy() {
      return this.getStringAttribute('policy');
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
      return this.getStringAttribute('policy_id');
    }

    // tags - computed: true, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        path_prefix: cdktf.stringToTerraform(this._pathPrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsIamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#override_json DataAwsIamPolicyDocument#override_json}
    */
    readonly overrideJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}
    */
    readonly overridePolicyDocuments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#policy_id DataAwsIamPolicyDocument#policy_id}
    */
    readonly policyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#source_json DataAwsIamPolicyDocument#source_json}
    */
    readonly sourceJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}
    */
    readonly sourcePolicyDocuments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#version DataAwsIamPolicyDocument#version}
    */
    readonly version?: string;
    /**
    * statement block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#statement DataAwsIamPolicyDocument#statement}
    */
    readonly statement?: DataAwsIamPolicyDocumentStatement[];
  }
  export interface DataAwsIamPolicyDocumentStatementCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#test DataAwsIamPolicyDocument#test}
    */
    readonly test: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#values DataAwsIamPolicyDocument#values}
    */
    readonly values: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#variable DataAwsIamPolicyDocument#variable}
    */
    readonly variable: string;
  }

  function dataAwsIamPolicyDocumentStatementConditionToTerraform(struct?: DataAwsIamPolicyDocumentStatementCondition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      test: cdktf.stringToTerraform(struct!.test),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
      variable: cdktf.stringToTerraform(struct!.variable),
    }
  }

  export interface DataAwsIamPolicyDocumentStatementNotPrincipals {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#identifiers DataAwsIamPolicyDocument#identifiers}
    */
    readonly identifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#type DataAwsIamPolicyDocument#type}
    */
    readonly type: string;
  }

  function dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementNotPrincipals): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identifiers),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface DataAwsIamPolicyDocumentStatementPrincipals {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#identifiers DataAwsIamPolicyDocument#identifiers}
    */
    readonly identifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#type DataAwsIamPolicyDocument#type}
    */
    readonly type: string;
  }

  function dataAwsIamPolicyDocumentStatementPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementPrincipals): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identifiers),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface DataAwsIamPolicyDocumentStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#actions DataAwsIamPolicyDocument#actions}
    */
    readonly actions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#effect DataAwsIamPolicyDocument#effect}
    */
    readonly effect?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#not_actions DataAwsIamPolicyDocument#not_actions}
    */
    readonly notActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#not_resources DataAwsIamPolicyDocument#not_resources}
    */
    readonly notResources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#resources DataAwsIamPolicyDocument#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#sid DataAwsIamPolicyDocument#sid}
    */
    readonly sid?: string;
    /**
    * condition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#condition DataAwsIamPolicyDocument#condition}
    */
    readonly condition?: DataAwsIamPolicyDocumentStatementCondition[];
    /**
    * not_principals block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#not_principals DataAwsIamPolicyDocument#not_principals}
    */
    readonly notPrincipals?: DataAwsIamPolicyDocumentStatementNotPrincipals[];
    /**
    * principals block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#principals DataAwsIamPolicyDocument#principals}
    */
    readonly principals?: DataAwsIamPolicyDocumentStatementPrincipals[];
  }

  function dataAwsIamPolicyDocumentStatementToTerraform(struct?: DataAwsIamPolicyDocumentStatement): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
      effect: cdktf.stringToTerraform(struct!.effect),
      not_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notActions),
      not_resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notResources),
      resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
      sid: cdktf.stringToTerraform(struct!.sid),
      condition: cdktf.listMapper(dataAwsIamPolicyDocumentStatementConditionToTerraform)(struct!.condition),
      not_principals: cdktf.listMapper(dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform)(struct!.notPrincipals),
      principals: cdktf.listMapper(dataAwsIamPolicyDocumentStatementPrincipalsToTerraform)(struct!.principals),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html aws_iam_policy_document}
  */
  export class DataAwsIamPolicyDocument extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_policy_document";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html aws_iam_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPolicyDocumentConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamPolicyDocumentConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_policy_document',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._overrideJson = config.overrideJson;
      this._overridePolicyDocuments = config.overridePolicyDocuments;
      this._policyId = config.policyId;
      this._sourceJson = config.sourceJson;
      this._sourcePolicyDocuments = config.sourcePolicyDocuments;
      this._version = config.version;
      this._statement = config.statement;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // json - computed: true, optional: false, required: false
    public get json() {
      return this.getStringAttribute('json');
    }

    // override_json - computed: false, optional: true, required: false
    private _overrideJson?: string | undefined; 
    public get overrideJson() {
      return this.getStringAttribute('override_json');
    }
    public set overrideJson(value: string | undefined) {
      this._overrideJson = value;
    }
    public resetOverrideJson() {
      this._overrideJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideJsonInput() {
      return this._overrideJson
    }

    // override_policy_documents - computed: false, optional: true, required: false
    private _overridePolicyDocuments?: string[] | undefined; 
    public get overridePolicyDocuments() {
      return this.getListAttribute('override_policy_documents');
    }
    public set overridePolicyDocuments(value: string[] | undefined) {
      this._overridePolicyDocuments = value;
    }
    public resetOverridePolicyDocuments() {
      this._overridePolicyDocuments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridePolicyDocumentsInput() {
      return this._overridePolicyDocuments
    }

    // policy_id - computed: false, optional: true, required: false
    private _policyId?: string | undefined; 
    public get policyId() {
      return this.getStringAttribute('policy_id');
    }
    public set policyId(value: string | undefined) {
      this._policyId = value;
    }
    public resetPolicyId() {
      this._policyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyIdInput() {
      return this._policyId
    }

    // source_json - computed: false, optional: true, required: false
    private _sourceJson?: string | undefined; 
    public get sourceJson() {
      return this.getStringAttribute('source_json');
    }
    public set sourceJson(value: string | undefined) {
      this._sourceJson = value;
    }
    public resetSourceJson() {
      this._sourceJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceJsonInput() {
      return this._sourceJson
    }

    // source_policy_documents - computed: false, optional: true, required: false
    private _sourcePolicyDocuments?: string[] | undefined; 
    public get sourcePolicyDocuments() {
      return this.getListAttribute('source_policy_documents');
    }
    public set sourcePolicyDocuments(value: string[] | undefined) {
      this._sourcePolicyDocuments = value;
    }
    public resetSourcePolicyDocuments() {
      this._sourcePolicyDocuments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePolicyDocumentsInput() {
      return this._sourcePolicyDocuments
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // statement - computed: false, optional: true, required: false
    private _statement?: DataAwsIamPolicyDocumentStatement[] | undefined; 
    public get statement() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('statement') as any;
    }
    public set statement(value: DataAwsIamPolicyDocumentStatement[] | undefined) {
      this._statement = value;
    }
    public resetStatement() {
      this._statement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementInput() {
      return this._statement
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        override_json: cdktf.stringToTerraform(this._overrideJson),
        override_policy_documents: cdktf.listMapper(cdktf.stringToTerraform)(this._overridePolicyDocuments),
        policy_id: cdktf.stringToTerraform(this._policyId),
        source_json: cdktf.stringToTerraform(this._sourceJson),
        source_policy_documents: cdktf.listMapper(cdktf.stringToTerraform)(this._sourcePolicyDocuments),
        version: cdktf.stringToTerraform(this._version),
        statement: cdktf.listMapper(dataAwsIamPolicyDocumentStatementToTerraform)(this._statement),
      };
    }
  }
  export interface DataAwsIamRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html#name DataAwsIamRole#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html#tags DataAwsIamRole#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html aws_iam_role}
  */
  export class DataAwsIamRole extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_role";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html aws_iam_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamRoleConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamRoleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_role',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // assume_role_policy - computed: true, optional: false, required: false
    public get assumeRolePolicy() {
      return this.getStringAttribute('assume_role_policy');
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
      return this.getStringAttribute('create_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_session_duration - computed: true, optional: false, required: false
    public get maxSessionDuration() {
      return this.getNumberAttribute('max_session_duration');
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

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // permissions_boundary - computed: true, optional: false, required: false
    public get permissionsBoundary() {
      return this.getStringAttribute('permissions_boundary');
    }

    // tags - computed: true, optional: true, required: false
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

    // unique_id - computed: true, optional: false, required: false
    public get uniqueId() {
      return this.getStringAttribute('unique_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsIamRolesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html#name_regex DataAwsIamRoles#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html#path_prefix DataAwsIamRoles#path_prefix}
    */
    readonly pathPrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html aws_iam_roles}
  */
  export class DataAwsIamRoles extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_roles";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_roles.html aws_iam_roles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamRolesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamRolesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_roles',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._nameRegex = config.nameRegex;
      this._pathPrefix = config.pathPrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name_regex - computed: false, optional: true, required: false
    private _nameRegex?: string | undefined; 
    public get nameRegex() {
      return this.getStringAttribute('name_regex');
    }
    public set nameRegex(value: string | undefined) {
      this._nameRegex = value;
    }
    public resetNameRegex() {
      this._nameRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameRegexInput() {
      return this._nameRegex
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // path_prefix - computed: false, optional: true, required: false
    private _pathPrefix?: string | undefined; 
    public get pathPrefix() {
      return this.getStringAttribute('path_prefix');
    }
    public set pathPrefix(value: string | undefined) {
      this._pathPrefix = value;
    }
    public resetPathPrefix() {
      this._pathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixInput() {
      return this._pathPrefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name_regex: cdktf.stringToTerraform(this._nameRegex),
        path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      };
    }
  }
  export interface DataAwsIamServerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#latest DataAwsIamServerCertificate#latest}
    */
    readonly latest?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#name DataAwsIamServerCertificate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#name_prefix DataAwsIamServerCertificate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#path_prefix DataAwsIamServerCertificate#path_prefix}
    */
    readonly pathPrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html aws_iam_server_certificate}
  */
  export class DataAwsIamServerCertificate extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_server_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html aws_iam_server_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamServerCertificateConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamServerCertificateConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_server_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._latest = config.latest;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._pathPrefix = config.pathPrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_body - computed: true, optional: false, required: false
    public get certificateBody() {
      return this.getStringAttribute('certificate_body');
    }

    // certificate_chain - computed: true, optional: false, required: false
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }

    // expiration_date - computed: true, optional: false, required: false
    public get expirationDate() {
      return this.getStringAttribute('expiration_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // latest - computed: false, optional: true, required: false
    private _latest?: boolean | cdktf.IResolvable | undefined; 
    public get latest() {
      return this.getBooleanAttribute('latest') as any;
    }
    public set latest(value: boolean | cdktf.IResolvable | undefined) {
      this._latest = value;
    }
    public resetLatest() {
      this._latest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latestInput() {
      return this._latest
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // path_prefix - computed: false, optional: true, required: false
    private _pathPrefix?: string | undefined; 
    public get pathPrefix() {
      return this.getStringAttribute('path_prefix');
    }
    public set pathPrefix(value: string | undefined) {
      this._pathPrefix = value;
    }
    public resetPathPrefix() {
      this._pathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixInput() {
      return this._pathPrefix
    }

    // upload_date - computed: true, optional: false, required: false
    public get uploadDate() {
      return this.getStringAttribute('upload_date');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        latest: cdktf.booleanToTerraform(this._latest),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      };
    }
  }
  export interface DataAwsIamSessionContextConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html#arn DataAwsIamSessionContext#arn}
    */
    readonly arn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context}
  */
  export class DataAwsIamSessionContext extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_session_context";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamSessionContextConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamSessionContextConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_session_context',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // issuer_arn - computed: true, optional: false, required: false
    public get issuerArn() {
      return this.getStringAttribute('issuer_arn');
    }

    // issuer_id - computed: true, optional: false, required: false
    public get issuerId() {
      return this.getStringAttribute('issuer_id');
    }

    // issuer_name - computed: true, optional: false, required: false
    public get issuerName() {
      return this.getStringAttribute('issuer_name');
    }

    // session_name - computed: true, optional: false, required: false
    public get sessionName() {
      return this.getStringAttribute('session_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
      };
    }
  }
  export interface DataAwsIamUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html#tags DataAwsIamUser#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html#user_name DataAwsIamUser#user_name}
    */
    readonly userName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html aws_iam_user}
  */
  export class DataAwsIamUser extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_user";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html aws_iam_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamUserConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamUserConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_user',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // permissions_boundary - computed: true, optional: false, required: false
    public get permissionsBoundary() {
      return this.getStringAttribute('permissions_boundary');
    }

    // tags - computed: true, optional: true, required: false
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

    // user_id - computed: true, optional: false, required: false
    public get userId() {
      return this.getStringAttribute('user_id');
    }

    // user_name - computed: false, optional: false, required: true
    private _userName?: string; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
      this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        user_name: cdktf.stringToTerraform(this._userName),
      };
    }
  }
  export interface DataAwsIamUsersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_users.html#name_regex DataAwsIamUsers#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_users.html#path_prefix DataAwsIamUsers#path_prefix}
    */
    readonly pathPrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_users.html aws_iam_users}
  */
  export class DataAwsIamUsers extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iam_users";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_users.html aws_iam_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamUsersConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIamUsersConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iam_users',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._nameRegex = config.nameRegex;
      this._pathPrefix = config.pathPrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name_regex - computed: false, optional: true, required: false
    private _nameRegex?: string | undefined; 
    public get nameRegex() {
      return this.getStringAttribute('name_regex');
    }
    public set nameRegex(value: string | undefined) {
      this._nameRegex = value;
    }
    public resetNameRegex() {
      this._nameRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameRegexInput() {
      return this._nameRegex
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // path_prefix - computed: false, optional: true, required: false
    private _pathPrefix?: string | undefined; 
    public get pathPrefix() {
      return this.getStringAttribute('path_prefix');
    }
    public set pathPrefix(value: string | undefined) {
      this._pathPrefix = value;
    }
    public resetPathPrefix() {
      this._pathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixInput() {
      return this._pathPrefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name_regex: cdktf.stringToTerraform(this._nameRegex),
        path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      };
    }
  }
}
