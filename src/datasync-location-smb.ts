// https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#agent_arns DatasyncLocationSmb#agent_arns}
  */
  readonly agentArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#domain DatasyncLocationSmb#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#password DatasyncLocationSmb#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#server_hostname DatasyncLocationSmb#server_hostname}
  */
  readonly serverHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#subdirectory DatasyncLocationSmb#subdirectory}
  */
  readonly subdirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#tags DatasyncLocationSmb#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#tags_all DatasyncLocationSmb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#user DatasyncLocationSmb#user}
  */
  readonly user: string;
  /**
  * mount_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#mount_options DatasyncLocationSmb#mount_options}
  */
  readonly mountOptions?: DatasyncLocationSmbMountOptions[];
}
export interface DatasyncLocationSmbMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#version DatasyncLocationSmb#version}
  */
  readonly version?: string;
}

function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb}
*/
export class DatasyncLocationSmb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_location_smb";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationSmbConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_smb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentArns = config.agentArns;
    this._domain = config.domain;
    this._password = config.password;
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._user = config.user;
    this._mountOptions = config.mountOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns: string[];
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // server_hostname - computed: false, optional: false, required: true
  private _serverHostname: string;
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: DatasyncLocationSmbMountOptions[];
  public get mountOptions() {
    return this.interpolationForAttribute('mount_options') as any;
  }
  public set mountOptions(value: DatasyncLocationSmbMountOptions[] ) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
      domain: cdktf.stringToTerraform(this._domain),
      password: cdktf.stringToTerraform(this._password),
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      user: cdktf.stringToTerraform(this._user),
      mount_options: cdktf.listMapper(datasyncLocationSmbMountOptionsToTerraform)(this._mountOptions),
    };
  }
}
