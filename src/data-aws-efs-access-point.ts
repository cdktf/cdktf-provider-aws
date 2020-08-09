// https://www.terraform.io/docs/providers/aws/r/data_aws_efs_access_point.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_point_id": {
        "type": "string",
        "required": true
      },
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
        "computed": true
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
      "posix_user": {
        "type": [
          "list",
          [
            "object",
            {
              "gid": "number",
              "secondary_gids": [
                "set",
                "number"
              ],
              "uid": "number"
            }
          ]
        ],
        "computed": true
      },
      "root_directory": {
        "type": [
          "list",
          [
            "object",
            {
              "creation_info": [
                "list",
                [
                  "object",
                  {
                    "owner_gid": "number",
                    "owner_uid": "number",
                    "permissions": "string"
                  }
                ]
              ],
              "path": "string"
            }
          ]
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsEfsAccessPointConfig extends TerraformMetaArguments {
  readonly accessPointId: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsEfsAccessPointPosixUser extends ComplexComputedList {

  // gid - computed: true, optional: false, required: true
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // secondary_gids - computed: true, optional: false, required: true
  public get secondaryGids() {
    return 'not implemented' as any;
  }

  // uid - computed: true, optional: false, required: true
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}
export class DataAwsEfsAccessPointRootDirectoryCreationInfo extends ComplexComputedList {

  // owner_gid - computed: true, optional: false, required: true
  public get ownerGid() {
    return this.getNumberAttribute('owner_gid');
  }

  // owner_uid - computed: true, optional: false, required: true
  public get ownerUid() {
    return this.getNumberAttribute('owner_uid');
  }

  // permissions - computed: true, optional: false, required: true
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
}
export class DataAwsEfsAccessPointRootDirectory extends ComplexComputedList {

  // creation_info - computed: true, optional: false, required: true
  public get creationInfo() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}

// Resource

export class DataAwsEfsAccessPoint extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointConfig) {
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
    this._accessPointId = config.accessPointId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: false, optional: false, required: true
  private _accessPointId: string;
  public get accessPointId() {
    return this._accessPointId;
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // file_system_arn - computed: true, optional: false, required: true
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // file_system_id - computed: true, optional: false, required: true
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
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

  // posix_user - computed: true, optional: false, required: true
  public posixUser(index: string) {
    return new DataAwsEfsAccessPointPosixUser(this, 'posix_user', index);
  }

  // root_directory - computed: true, optional: false, required: true
  public rootDirectory(index: string) {
    return new DataAwsEfsAccessPointRootDirectory(this, 'root_directory', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_id: this._accessPointId,
      tags: this._tags,
    };
  }
}
