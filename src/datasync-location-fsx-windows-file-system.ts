// https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatasyncLocationFsxWindowsFileSystemConfig extends TerraformMetaArguments {
  readonly domain?: string;
  readonly fsxFilesystemArn: string;
  readonly password: string;
  readonly securityGroupArns: string[];
  readonly subdirectory?: string;
  readonly tags?: { [key: string]: string };
  readonly user: string;
}

// Resource

export class DatasyncLocationFsxWindowsFileSystem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_fsx_windows_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._fsxFilesystemArn = config.fsxFilesystemArn;
    this._password = config.password;
    this._securityGroupArns = config.securityGroupArns;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // fsx_filesystem_arn - computed: false, optional: false, required: true
  private _fsxFilesystemArn: string;
  public get fsxFilesystemArn() {
    return this._fsxFilesystemArn;
  }
  public set fsxFilesystemArn(value: string) {
    this._fsxFilesystemArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns: string[];
  public get securityGroupArns() {
    return this._securityGroupArns;
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string;
  public get subdirectory() {
    return this._subdirectory ?? this.getStringAttribute('subdirectory');
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

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      fsx_filesystem_arn: this._fsxFilesystemArn,
      password: this._password,
      security_group_arns: this._securityGroupArns,
      subdirectory: this._subdirectory,
      tags: this._tags,
      user: this._user,
    };
  }
}
