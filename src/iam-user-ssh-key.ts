// https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "encoding": {
        "type": "string",
        "required": true
      },
      "fingerprint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "public_key": {
        "type": "string",
        "required": true
      },
      "ssh_public_key_id": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "username": {
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

export interface IamUserSshKeyConfig extends TerraformMetaArguments {
  readonly encoding: string;
  readonly publicKey: string;
  readonly status?: string;
  readonly username: string;
}

// Resource

export class IamUserSshKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _encoding: string;
  public get encoding() {
    return this._encoding;
  }
  public set encoding(value: string) {
    this._encoding = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey: string;
  public get publicKey() {
    return this._publicKey;
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }

  // ssh_public_key_id - computed: true, optional: false, required: true
  public get sshPublicKeyId() {
    return this.getStringAttribute('ssh_public_key_id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status ?? this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      encoding: this._encoding,
      public_key: this._publicKey,
      status: this._status,
      username: this._username,
    };
  }
}
