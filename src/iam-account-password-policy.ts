// https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_users_to_change_password": {
        "type": "bool",
        "optional": true
      },
      "expire_passwords": {
        "type": "bool",
        "computed": true
      },
      "hard_expiry": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_password_age": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "minimum_password_length": {
        "type": "number",
        "optional": true
      },
      "password_reuse_prevention": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "require_lowercase_characters": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "require_numbers": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "require_symbols": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "require_uppercase_characters": {
        "type": "bool",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamAccountPasswordPolicyConfig extends TerraformMetaArguments {
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

export class IamAccountPasswordPolicy extends TerraformResource {

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
    return this._allowUsersToChangePassword;
  }
  public set allowUsersToChangePassword(value: boolean | undefined) {
    this._allowUsersToChangePassword = value;
  }

  // expire_passwords - computed: true, optional: false, required: true
  public get expirePasswords() {
    return this.getBooleanAttribute('expire_passwords');
  }

  // hard_expiry - computed: true, optional: true, required: false
  private _hardExpiry?: boolean;
  public get hardExpiry() {
    return this._hardExpiry ?? this.getBooleanAttribute('hard_expiry');
  }
  public set hardExpiry(value: boolean | undefined) {
    this._hardExpiry = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_password_age - computed: true, optional: true, required: false
  private _maxPasswordAge?: number;
  public get maxPasswordAge() {
    return this._maxPasswordAge ?? this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number | undefined) {
    this._maxPasswordAge = value;
  }

  // minimum_password_length - computed: false, optional: true, required: false
  private _minimumPasswordLength?: number;
  public get minimumPasswordLength() {
    return this._minimumPasswordLength;
  }
  public set minimumPasswordLength(value: number | undefined) {
    this._minimumPasswordLength = value;
  }

  // password_reuse_prevention - computed: true, optional: true, required: false
  private _passwordReusePrevention?: number;
  public get passwordReusePrevention() {
    return this._passwordReusePrevention ?? this.getNumberAttribute('password_reuse_prevention');
  }
  public set passwordReusePrevention(value: number | undefined) {
    this._passwordReusePrevention = value;
  }

  // require_lowercase_characters - computed: true, optional: true, required: false
  private _requireLowercaseCharacters?: boolean;
  public get requireLowercaseCharacters() {
    return this._requireLowercaseCharacters ?? this.getBooleanAttribute('require_lowercase_characters');
  }
  public set requireLowercaseCharacters(value: boolean | undefined) {
    this._requireLowercaseCharacters = value;
  }

  // require_numbers - computed: true, optional: true, required: false
  private _requireNumbers?: boolean;
  public get requireNumbers() {
    return this._requireNumbers ?? this.getBooleanAttribute('require_numbers');
  }
  public set requireNumbers(value: boolean | undefined) {
    this._requireNumbers = value;
  }

  // require_symbols - computed: true, optional: true, required: false
  private _requireSymbols?: boolean;
  public get requireSymbols() {
    return this._requireSymbols ?? this.getBooleanAttribute('require_symbols');
  }
  public set requireSymbols(value: boolean | undefined) {
    this._requireSymbols = value;
  }

  // require_uppercase_characters - computed: true, optional: true, required: false
  private _requireUppercaseCharacters?: boolean;
  public get requireUppercaseCharacters() {
    return this._requireUppercaseCharacters ?? this.getBooleanAttribute('require_uppercase_characters');
  }
  public set requireUppercaseCharacters(value: boolean | undefined) {
    this._requireUppercaseCharacters = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_users_to_change_password: this._allowUsersToChangePassword,
      hard_expiry: this._hardExpiry,
      max_password_age: this._maxPasswordAge,
      minimum_password_length: this._minimumPasswordLength,
      password_reuse_prevention: this._passwordReusePrevention,
      require_lowercase_characters: this._requireLowercaseCharacters,
      require_numbers: this._requireNumbers,
      require_symbols: this._requireSymbols,
      require_uppercase_characters: this._requireUppercaseCharacters,
    };
  }
}
