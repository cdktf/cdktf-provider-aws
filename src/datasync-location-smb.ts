// https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
  readonly agentArns: string[];
  readonly domain?: string;
  readonly password: string;
  readonly serverHostname: string;
  readonly subdirectory: string;
  readonly tags?: { [key: string]: string };
  readonly user: string;
  /** mount_options block */
  readonly mountOptions?: DatasyncLocationSmbMountOptions[];
}
export interface DatasyncLocationSmbMountOptions {
  readonly version?: string;
}

function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


// Resource

export class DatasyncLocationSmb extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      user: cdktf.stringToTerraform(this._user),
      mount_options: cdktf.listMapper(datasyncLocationSmbMountOptionsToTerraform)(this._mountOptions),
    };
  }
}
