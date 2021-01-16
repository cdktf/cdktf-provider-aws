// https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamAccountPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly allowUsersToChangePassword?: boolean;
  readonly hardExpiry?: boolean;
  readonly maxPasswordAge?: number;
  readonly minimumPasswordLength?: number;
  readonly passwordReusePrevention?: number;
  readonly requireLowercaseCharacters?: boolean;
  readonly requireNumbers?: boolean;
  readonly requireSymbols?: boolean;
  readonly requireUppercaseCharacters?: boolean;
}

// Resource

export class IamAccountPasswordPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _allowUsersToChangePassword?: boolean;
  public get allowUsersToChangePassword() {
    return this.getBooleanAttribute('allow_users_to_change_password');
  }
  public set allowUsersToChangePassword(value: boolean ) {
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
    return this.getBooleanAttribute('expire_passwords');
  }

  // hard_expiry - computed: true, optional: true, required: false
  private _hardExpiry?: boolean;
  public get hardExpiry() {
    return this.getBooleanAttribute('hard_expiry');
  }
  public set hardExpiry(value: boolean) {
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
  private _maxPasswordAge?: number;
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number) {
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
  private _minimumPasswordLength?: number;
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number ) {
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
  private _passwordReusePrevention?: number;
  public get passwordReusePrevention() {
    return this.getNumberAttribute('password_reuse_prevention');
  }
  public set passwordReusePrevention(value: number) {
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
  private _requireLowercaseCharacters?: boolean;
  public get requireLowercaseCharacters() {
    return this.getBooleanAttribute('require_lowercase_characters');
  }
  public set requireLowercaseCharacters(value: boolean) {
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
  private _requireNumbers?: boolean;
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }
  public set requireNumbers(value: boolean) {
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
  private _requireSymbols?: boolean;
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }
  public set requireSymbols(value: boolean) {
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
  private _requireUppercaseCharacters?: boolean;
  public get requireUppercaseCharacters() {
    return this.getBooleanAttribute('require_uppercase_characters');
  }
  public set requireUppercaseCharacters(value: boolean) {
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
