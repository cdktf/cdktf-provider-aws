// https://www.terraform.io/docs/providers/aws/r/efs_access_point.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "file_system_arn": {
        "type": "string",
        "computed": true
      },
      "file_system_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "posix_user": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "gid": {
              "type": "number",
              "required": true
            },
            "secondary_gids": {
              "type": [
                "set",
                "number"
              ],
              "optional": true
            },
            "uid": {
              "type": "number",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "root_directory": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "path": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "creation_info": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "owner_gid": {
                    "type": "number",
                    "required": true
                  },
                  "owner_uid": {
                    "type": "number",
                    "required": true
                  },
                  "permissions": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EfsAccessPointConfig extends TerraformMetaArguments {
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
export interface EfsAccessPointRootDirectoryCreationInfo {
  readonly ownerGid: number;
  readonly ownerUid: number;
  readonly permissions: string;
}
export interface EfsAccessPointRootDirectory {
  readonly path?: string;
  /** creation_info block */
  readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo[];
}

// Resource

export class EfsAccessPoint extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // file_system_arn - computed: true, optional: false, required: true
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this._fileSystemId;
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // posix_user - computed: false, optional: true, required: false
  private _posixUser?: EfsAccessPointPosixUser[];
  public get posixUser() {
    return this._posixUser;
  }
  public set posixUser(value: EfsAccessPointPosixUser[] | undefined) {
    this._posixUser = value;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: EfsAccessPointRootDirectory[];
  public get rootDirectory() {
    return this._rootDirectory;
  }
  public set rootDirectory(value: EfsAccessPointRootDirectory[] | undefined) {
    this._rootDirectory = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: this._fileSystemId,
      tags: this._tags,
      posix_user: this._posixUser,
      root_directory: this._rootDirectory,
    };
  }
}
