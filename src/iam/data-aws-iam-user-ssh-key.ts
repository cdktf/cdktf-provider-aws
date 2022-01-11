// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface DataAwsIamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key#encoding DataAwsIamUserSshKey#encoding}
  */
  readonly encoding: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key#ssh_public_key_id DataAwsIamUserSshKey#ssh_public_key_id}
  */
  readonly sshPublicKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key#username DataAwsIamUserSshKey#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key aws_iam_user_ssh_key}
*/
export class DataAwsIamUserSshKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_user_ssh_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_user_ssh_key aws_iam_user_ssh_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamUserSshKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamUserSshKeyConfig) {
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
    this._sshPublicKeyId = config.sshPublicKeyId;
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
    return this._encoding;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // ssh_public_key_id - computed: false, optional: false, required: true
  private _sshPublicKeyId?: string; 
  public get sshPublicKeyId() {
    return this.getStringAttribute('ssh_public_key_id');
  }
  public set sshPublicKeyId(value: string) {
    this._sshPublicKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyIdInput() {
    return this._sshPublicKeyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encoding: cdktf.stringToTerraform(this._encoding),
      ssh_public_key_id: cdktf.stringToTerraform(this._sshPublicKeyId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
