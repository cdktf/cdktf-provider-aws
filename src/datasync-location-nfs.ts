// https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatasyncLocationNfsConfig extends TerraformMetaArguments {
  readonly serverHostname: string;
  readonly subdirectory: string;
  readonly tags?: { [key: string]: string };
  /** on_prem_config block */
  readonly onPremConfig: DatasyncLocationNfsOnPremConfig[];
}
export interface DatasyncLocationNfsOnPremConfig {
  readonly agentArns: string[];
}

// Resource

export class DatasyncLocationNfs extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      server_hostname: this._serverHostname,
      subdirectory: this._subdirectory,
      tags: this._tags,
      on_prem_config: this._onPremConfig,
    };
  }
}
