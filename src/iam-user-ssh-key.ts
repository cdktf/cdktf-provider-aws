// https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
  readonly encoding: string;
  readonly publicKey: string;
  readonly status?: string;
  readonly username: string;
}

// Resource

export class IamUserSshKey extends cdktf.TerraformResource {

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
  private _publicKey: string;
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
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
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
  private _username: string;
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
