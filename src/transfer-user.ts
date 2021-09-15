// https://www.terraform.io/docs/providers/aws/r/transfer_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory TransferUser#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_type TransferUser#home_directory_type}
  */
  readonly homeDirectoryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#policy TransferUser#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#role TransferUser#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#server_id TransferUser#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags TransferUser#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags_all TransferUser#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#user_name TransferUser#user_name}
  */
  readonly userName: string;
  /**
  * home_directory_mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_mappings TransferUser#home_directory_mappings}
  */
  readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[];
  /**
  * posix_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#posix_profile TransferUser#posix_profile}
  */
  readonly posixProfile?: TransferUserPosixProfile[];
}
export interface TransferUserHomeDirectoryMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#entry TransferUser#entry}
  */
  readonly entry: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#target TransferUser#target}
  */
  readonly target: string;
}

function transferUserHomeDirectoryMappingsToTerraform(struct?: TransferUserHomeDirectoryMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    entry: cdktf.stringToTerraform(struct!.entry),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export interface TransferUserPosixProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#gid TransferUser#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#secondary_gids TransferUser#secondary_gids}
  */
  readonly secondaryGids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#uid TransferUser#uid}
  */
  readonly uid: number;
}

function transferUserPosixProfileToTerraform(struct?: TransferUserPosixProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.secondaryGids),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user}
*/
export class TransferUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_transfer_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferUserConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._userName = config.userName;
    this._homeDirectoryMappings = config.homeDirectoryMappings;
    this._posixProfile = config.posixProfile;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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

  // posix_profile - computed: false, optional: true, required: false
  private _posixProfile?: TransferUserPosixProfile[];
  public get posixProfile() {
    return this.interpolationForAttribute('posix_profile') as any;
  }
  public set posixProfile(value: TransferUserPosixProfile[] ) {
    this._posixProfile = value;
  }
  public resetPosixProfile() {
    this._posixProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixProfileInput() {
    return this._posixProfile
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      user_name: cdktf.stringToTerraform(this._userName),
      home_directory_mappings: cdktf.listMapper(transferUserHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
      posix_profile: cdktf.listMapper(transferUserPosixProfileToTerraform)(this._posixProfile),
    };
  }
}
