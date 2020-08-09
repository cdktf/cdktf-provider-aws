// https://www.terraform.io/docs/providers/aws/r/iam_access_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "encrypted_secret": {
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
      "pgp_key": {
        "type": "string",
        "optional": true
      },
      "secret": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "ses_smtp_password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "ses_smtp_password_v4": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "status": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface IamAccessKeyConfig extends TerraformMetaArguments {
  readonly pgpKey?: string;
  readonly status?: string;
  readonly user: string;
}

// Resource

export class IamAccessKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // encrypted_secret - computed: true, optional: false, required: true
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
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

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string;
  public get pgpKey() {
    return this._pgpKey;
  }
  public set pgpKey(value: string | undefined) {
    this._pgpKey = value;
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // ses_smtp_password - computed: true, optional: false, required: true
  public get sesSmtpPassword() {
    return this.getStringAttribute('ses_smtp_password');
  }

  // ses_smtp_password_v4 - computed: true, optional: false, required: true
  public get sesSmtpPasswordV4() {
    return this.getStringAttribute('ses_smtp_password_v4');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status ?? this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
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
      pgp_key: this._pgpKey,
      status: this._status,
      user: this._user,
    };
  }
}
