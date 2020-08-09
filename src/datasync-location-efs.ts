// https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatasyncLocationEfsConfig extends TerraformMetaArguments {
  readonly efsFileSystemArn: string;
  readonly subdirectory?: string;
  readonly tags?: { [key: string]: string };
  /** ec2_config block */
  readonly ec2Config: DatasyncLocationEfsEc2Config[];
}
export interface DatasyncLocationEfsEc2Config {
  readonly securityGroupArns: string[];
  readonly subnetArn: string;
}

// Resource

export class DatasyncLocationEfs extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_efs',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._efsFileSystemArn = config.efsFileSystemArn;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._ec2Config = config.ec2Config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // efs_file_system_arn - computed: false, optional: false, required: true
  private _efsFileSystemArn: string;
  public get efsFileSystemArn() {
    return this._efsFileSystemArn;
  }
  public set efsFileSystemArn(value: string) {
    this._efsFileSystemArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // subdirectory - computed: false, optional: true, required: false
  private _subdirectory?: string;
  public get subdirectory() {
    return this._subdirectory;
  }
  public set subdirectory(value: string | undefined) {
    this._subdirectory = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // ec2_config - computed: false, optional: false, required: true
  private _ec2Config: DatasyncLocationEfsEc2Config[];
  public get ec2Config() {
    return this._ec2Config;
  }
  public set ec2Config(value: DatasyncLocationEfsEc2Config[]) {
    this._ec2Config = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      efs_file_system_arn: this._efsFileSystemArn,
      subdirectory: this._subdirectory,
      tags: this._tags,
      ec2_config: this._ec2Config,
    };
  }
}
