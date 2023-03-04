// https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserLoginProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}
  */
  readonly passwordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}
  */
  readonly passwordResetRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile aws_iam_user_login_profile}
*/
export class IamUserLoginProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_user_login_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile aws_iam_user_login_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamUserLoginProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IamUserLoginProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_user_login_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_length - computed: false, optional: true, required: false
  private _passwordLength?: number; 
  public get passwordLength() {
    return this.getNumberAttribute('password_length');
  }
  public set passwordLength(value: number) {
    this._passwordLength = value;
  }
  public resetPasswordLength() {
    this._passwordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLengthInput() {
    return this._passwordLength;
  }

  // password_reset_required - computed: true, optional: true, required: false
  private _passwordResetRequired?: boolean | cdktf.IResolvable; 
  public get passwordResetRequired() {
    return this.getBooleanAttribute('password_reset_required');
  }
  public set passwordResetRequired(value: boolean | cdktf.IResolvable) {
    this._passwordResetRequired = value;
  }
  public resetPasswordResetRequired() {
    this._passwordResetRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetRequiredInput() {
    return this._passwordResetRequired;
  }

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string; 
  public get pgpKey() {
    return this.getStringAttribute('pgp_key');
  }
  public set pgpKey(value: string) {
    this._pgpKey = value;
  }
  public resetPgpKey() {
    this._pgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeyInput() {
    return this._pgpKey;
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
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password_length: cdktf.numberToTerraform(this._passwordLength),
      password_reset_required: cdktf.booleanToTerraform(this._passwordResetRequired),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}
