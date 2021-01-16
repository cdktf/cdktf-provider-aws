// https://www.terraform.io/docs/providers/aws/r/data_aws_efs_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
  readonly accessPointId: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsEfsAccessPointPosixUser extends cdktf.ComplexComputedList {

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // secondary_gids - computed: true, optional: false, required: false
  public get secondaryGids() {
    return this.interpolationForAttribute('secondary_gids') as any;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}
export class DataAwsEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {

  // owner_gid - computed: true, optional: false, required: false
  public get ownerGid() {
    return this.getNumberAttribute('owner_gid');
  }

  // owner_uid - computed: true, optional: false, required: false
  public get ownerUid() {
    return this.getNumberAttribute('owner_uid');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
}
export class DataAwsEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {

  // creation_info - computed: true, optional: false, required: false
  public get creationInfo() {
    return this.interpolationForAttribute('creation_info') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

// Resource

export class DataAwsEfsAccessPoint extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // posix_user - computed: true, optional: false, required: false
  public posixUser(index: string) {
    return new DataAwsEfsAccessPointPosixUser(this, 'posix_user', index);
  }

  // root_directory - computed: true, optional: false, required: false
  public rootDirectory(index: string) {
    return new DataAwsEfsAccessPointRootDirectory(this, 'root_directory', index);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_id: cdktf.stringToTerraform(this._accessPointId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
