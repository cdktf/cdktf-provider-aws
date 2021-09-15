// https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#server_hostname DatasyncLocationNfs#server_hostname}
  */
  readonly serverHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#subdirectory DatasyncLocationNfs#subdirectory}
  */
  readonly subdirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags DatasyncLocationNfs#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags_all DatasyncLocationNfs#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * mount_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#mount_options DatasyncLocationNfs#mount_options}
  */
  readonly mountOptions?: DatasyncLocationNfsMountOptions[];
  /**
  * on_prem_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#on_prem_config DatasyncLocationNfs#on_prem_config}
  */
  readonly onPremConfig: DatasyncLocationNfsOnPremConfig[];
}
export interface DatasyncLocationNfsMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#version DatasyncLocationNfs#version}
  */
  readonly version?: string;
}

function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface DatasyncLocationNfsOnPremConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}
  */
  readonly agentArns: string[];
}

function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.agentArns),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs}
*/
export class DatasyncLocationNfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_location_nfs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationNfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_nfs',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._mountOptions = config.mountOptions;
    this._onPremConfig = config.onPremConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: DatasyncLocationNfsMountOptions[];
  public get mountOptions() {
    return this.interpolationForAttribute('mount_options') as any;
  }
  public set mountOptions(value: DatasyncLocationNfsMountOptions[] ) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions
  }

  // on_prem_config - computed: false, optional: false, required: true
  private _onPremConfig: DatasyncLocationNfsOnPremConfig[];
  public get onPremConfig() {
    return this.interpolationForAttribute('on_prem_config') as any;
  }
  public set onPremConfig(value: DatasyncLocationNfsOnPremConfig[]) {
    this._onPremConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConfigInput() {
    return this._onPremConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      mount_options: cdktf.listMapper(datasyncLocationNfsMountOptionsToTerraform)(this._mountOptions),
      on_prem_config: cdktf.listMapper(datasyncLocationNfsOnPremConfigToTerraform)(this._onPremConfig),
    };
  }
}
