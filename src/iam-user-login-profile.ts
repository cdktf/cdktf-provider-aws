// https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserLoginProfileConfig extends cdktf.TerraformMetaArguments {
  readonly passwordLength?: number;
  readonly passwordResetRequired?: boolean;
  readonly pgpKey: string;
  readonly user: string;
}

// Resource

export class IamUserLoginProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _passwordLength?: number;
  public get passwordLength() {
    return this.getNumberAttribute('password_length');
  }
  public set passwordLength(value: number ) {
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
  private _passwordResetRequired?: boolean;
  public get passwordResetRequired() {
    return this.getBooleanAttribute('password_reset_required');
  }
  public set passwordResetRequired(value: boolean ) {
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
  private _pgpKey: string;
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
  private _user: string;
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
