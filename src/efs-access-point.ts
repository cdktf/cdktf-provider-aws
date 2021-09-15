// https://www.terraform.io/docs/providers/aws/r/efs_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#file_system_id EfsAccessPoint#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags EfsAccessPoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags_all EfsAccessPoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * posix_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#posix_user EfsAccessPoint#posix_user}
  */
  readonly posixUser?: EfsAccessPointPosixUser[];
  /**
  * root_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#root_directory EfsAccessPoint#root_directory}
  */
  readonly rootDirectory?: EfsAccessPointRootDirectory[];
}
export interface EfsAccessPointPosixUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#gid EfsAccessPoint#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#secondary_gids EfsAccessPoint#secondary_gids}
  */
  readonly secondaryGids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#uid EfsAccessPoint#uid}
  */
  readonly uid: number;
}

function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.secondaryGids),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}

export interface EfsAccessPointRootDirectoryCreationInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_gid EfsAccessPoint#owner_gid}
  */
  readonly ownerGid: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_uid EfsAccessPoint#owner_uid}
  */
  readonly ownerUid: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#permissions EfsAccessPoint#permissions}
  */
  readonly permissions: string;
}

function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner_gid: cdktf.numberToTerraform(struct!.ownerGid),
    owner_uid: cdktf.numberToTerraform(struct!.ownerUid),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

export interface EfsAccessPointRootDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#path EfsAccessPoint#path}
  */
  readonly path?: string;
  /**
  * creation_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#creation_info EfsAccessPoint#creation_info}
  */
  readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo[];
}

function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    creation_info: cdktf.listMapper(efsAccessPointRootDirectoryCreationInfoToTerraform)(struct!.creationInfo),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point}
*/
export class EfsAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_efs_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: EfsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_access_point',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileSystemId = config.fileSystemId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._posixUser = config.posixUser;
    this._rootDirectory = config.rootDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // posix_user - computed: false, optional: true, required: false
  private _posixUser?: EfsAccessPointPosixUser[];
  public get posixUser() {
    return this.interpolationForAttribute('posix_user') as any;
  }
  public set posixUser(value: EfsAccessPointPosixUser[] ) {
    this._posixUser = value;
  }
  public resetPosixUser() {
    this._posixUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: EfsAccessPointRootDirectory[];
  public get rootDirectory() {
    return this.interpolationForAttribute('root_directory') as any;
  }
  public set rootDirectory(value: EfsAccessPointRootDirectory[] ) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      posix_user: cdktf.listMapper(efsAccessPointPosixUserToTerraform)(this._posixUser),
      root_directory: cdktf.listMapper(efsAccessPointRootDirectoryToTerraform)(this._rootDirectory),
    };
  }
}
