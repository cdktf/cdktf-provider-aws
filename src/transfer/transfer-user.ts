// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Transfer
*/
export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory TransferUser#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory_type TransferUser#home_directory_type}
  */
  readonly homeDirectoryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#policy TransferUser#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#role TransferUser#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#server_id TransferUser#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#tags TransferUser#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#tags_all TransferUser#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#user_name TransferUser#user_name}
  */
  readonly userName: string;
  /**
  * home_directory_mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory_mappings TransferUser#home_directory_mappings}
  */
  readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[] | cdktf.IResolvable;
  /**
  * posix_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#posix_profile TransferUser#posix_profile}
  */
  readonly posixProfile?: TransferUserPosixProfile;
}
export interface TransferUserHomeDirectoryMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#entry TransferUser#entry}
  */
  readonly entry: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#target TransferUser#target}
  */
  readonly target: string;
}

export function transferUserHomeDirectoryMappingsToTerraform(struct?: TransferUserHomeDirectoryMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.stringToTerraform(struct!.entry),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export interface TransferUserPosixProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#gid TransferUser#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#secondary_gids TransferUser#secondary_gids}
  */
  readonly secondaryGids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#uid TransferUser#uid}
  */
  readonly uid: number;
}

export function transferUserPosixProfileToTerraform(struct?: TransferUserPosixProfileOutputReference | TransferUserPosixProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.secondaryGids),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}

export class TransferUserPosixProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TransferUserPosixProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._secondaryGids !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGids = this._secondaryGids;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferUserPosixProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._secondaryGids = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
      this._secondaryGids = value.secondaryGids;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // secondary_gids - computed: false, optional: true, required: false
  private _secondaryGids?: number[]; 
  public get secondaryGids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('secondary_gids')));
  }
  public set secondaryGids(value: number[]) {
    this._secondaryGids = value;
  }
  public resetSecondaryGids() {
    this._secondaryGids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGidsInput() {
    return this._secondaryGids;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user aws_transfer_user}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user aws_transfer_user} Resource
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
    this._posixProfile.internalValue = config.posixProfile;
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
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // home_directory_type - computed: false, optional: true, required: false
  private _homeDirectoryType?: string; 
  public get homeDirectoryType() {
    return this.getStringAttribute('home_directory_type');
  }
  public set homeDirectoryType(value: string) {
    this._homeDirectoryType = value;
  }
  public resetHomeDirectoryType() {
    this._homeDirectoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryTypeInput() {
    return this._homeDirectoryType;
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
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // home_directory_mappings - computed: false, optional: true, required: false
  private _homeDirectoryMappings?: TransferUserHomeDirectoryMappings[] | cdktf.IResolvable; 
  public get homeDirectoryMappings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('home_directory_mappings');
  }
  public set homeDirectoryMappings(value: TransferUserHomeDirectoryMappings[] | cdktf.IResolvable) {
    this._homeDirectoryMappings = value;
  }
  public resetHomeDirectoryMappings() {
    this._homeDirectoryMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryMappingsInput() {
    return this._homeDirectoryMappings;
  }

  // posix_profile - computed: false, optional: true, required: false
  private _posixProfile = new TransferUserPosixProfileOutputReference(this, "posix_profile", true);
  public get posixProfile() {
    return this._posixProfile;
  }
  public putPosixProfile(value: TransferUserPosixProfile) {
    this._posixProfile.internalValue = value;
  }
  public resetPosixProfile() {
    this._posixProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixProfileInput() {
    return this._posixProfile.internalValue;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_name: cdktf.stringToTerraform(this._userName),
      home_directory_mappings: cdktf.listMapper(transferUserHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
      posix_profile: transferUserPosixProfileToTerraform(this._posixProfile.internalValue),
    };
  }
}
