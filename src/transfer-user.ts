// https://www.terraform.io/docs/providers/aws/r/transfer_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
  readonly homeDirectory?: string;
  readonly policy?: string;
  readonly role: string;
  readonly serverId: string;
  readonly tags?: { [key: string]: string };
  readonly userName: string;
}

// Resource

export class TransferUser extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TransferUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._homeDirectory = config.homeDirectory;
    this._policy = config.policy;
    this._role = config.role;
    this._serverId = config.serverId;
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

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string;
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string ) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
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

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
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
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      policy: cdktf.stringToTerraform(this._policy),
      role: cdktf.stringToTerraform(this._role),
      server_id: cdktf.stringToTerraform(this._serverId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
