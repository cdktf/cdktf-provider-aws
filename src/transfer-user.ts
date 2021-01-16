// https://www.terraform.io/docs/providers/aws/r/transfer_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
  readonly homeDirectory?: string;
  readonly homeDirectoryType?: string;
  readonly policy?: string;
  readonly role: string;
  readonly serverId: string;
  readonly tags?: { [key: string]: string };
  readonly userName: string;
  /** home_directory_mappings block */
  readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[];
}
export interface TransferUserHomeDirectoryMappings {
  readonly entry: string;
  readonly target: string;
}

function transferUserHomeDirectoryMappingsToTerraform(struct?: TransferUserHomeDirectoryMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    entry: cdktf.stringToTerraform(struct!.entry),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
    this._homeDirectoryType = config.homeDirectoryType;
    this._policy = config.policy;
    this._role = config.role;
    this._serverId = config.serverId;
    this._tags = config.tags;
    this._userName = config.userName;
    this._homeDirectoryMappings = config.homeDirectoryMappings;
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

  // home_directory_type - computed: false, optional: true, required: false
  private _homeDirectoryType?: string;
  public get homeDirectoryType() {
    return this.getStringAttribute('home_directory_type');
  }
  public set homeDirectoryType(value: string ) {
    this._homeDirectoryType = value;
  }
  public resetHomeDirectoryType() {
    this._homeDirectoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryTypeInput() {
    return this._homeDirectoryType
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

  // home_directory_mappings - computed: false, optional: true, required: false
  private _homeDirectoryMappings?: TransferUserHomeDirectoryMappings[];
  public get homeDirectoryMappings() {
    return this.interpolationForAttribute('home_directory_mappings') as any;
  }
  public set homeDirectoryMappings(value: TransferUserHomeDirectoryMappings[] ) {
    this._homeDirectoryMappings = value;
  }
  public resetHomeDirectoryMappings() {
    this._homeDirectoryMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryMappingsInput() {
    return this._homeDirectoryMappings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
      policy: cdktf.stringToTerraform(this._policy),
      role: cdktf.stringToTerraform(this._role),
      server_id: cdktf.stringToTerraform(this._serverId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_name: cdktf.stringToTerraform(this._userName),
      home_directory_mappings: cdktf.listMapper(transferUserHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
    };
  }
}
