// https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "encrypted_password": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_fingerprint": {
        "type": "string",
        "computed": true
      },
      "password_length": {
        "type": "number",
        "optional": true
      },
      "password_reset_required": {
        "type": "bool",
        "optional": true
      },
      "pgp_key": {
        "type": "string",
        "required": true
      },
      "user": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamUserLoginProfileConfig extends TerraformMetaArguments {
  readonly passwordLength?: number;
  readonly passwordResetRequired?: boolean;
  readonly pgpKey: string;
  readonly user: string;
}

// Resource

export class IamUserLoginProfile extends TerraformResource {

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

  // encrypted_password - computed: true, optional: false, required: true
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_fingerprint - computed: true, optional: false, required: true
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // password_length - computed: false, optional: true, required: false
  private _passwordLength?: number;
  public get passwordLength() {
    return this._passwordLength;
  }
  public set passwordLength(value: number | undefined) {
    this._passwordLength = value;
  }

  // password_reset_required - computed: false, optional: true, required: false
  private _passwordResetRequired?: boolean;
  public get passwordResetRequired() {
    return this._passwordResetRequired;
  }
  public set passwordResetRequired(value: boolean | undefined) {
    this._passwordResetRequired = value;
  }

  // pgp_key - computed: false, optional: false, required: true
  private _pgpKey: string;
  public get pgpKey() {
    return this._pgpKey;
  }
  public set pgpKey(value: string) {
    this._pgpKey = value;
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      password_length: this._passwordLength,
      password_reset_required: this._passwordResetRequired,
      pgp_key: this._pgpKey,
      user: this._user,
    };
  }
}
