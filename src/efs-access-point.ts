// https://www.terraform.io/docs/providers/aws/r/efs_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
  readonly fileSystemId: string;
  readonly tags?: { [key: string]: string };
  /** posix_user block */
  readonly posixUser?: EfsAccessPointPosixUser[];
  /** root_directory block */
  readonly rootDirectory?: EfsAccessPointRootDirectory[];
}
export interface EfsAccessPointPosixUser {
  readonly gid: number;
  readonly secondaryGids?: number[];
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
  readonly ownerGid: number;
  readonly ownerUid: number;
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
  readonly path?: string;
  /** creation_info block */
  readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo[];
}

function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    creation_info: cdktf.listMapper(efsAccessPointRootDirectoryCreationInfoToTerraform)(struct!.creationInfo),
  }
}


// Resource

export class EfsAccessPoint extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      posix_user: cdktf.listMapper(efsAccessPointPosixUserToTerraform)(this._posixUser),
      root_directory: cdktf.listMapper(efsAccessPointRootDirectoryToTerraform)(this._rootDirectory),
    };
  }
}
