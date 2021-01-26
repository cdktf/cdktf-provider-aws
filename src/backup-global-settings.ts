// https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  readonly globalSettings: { [key: string]: string };
}

// Resource

export class BackupGlobalSettings extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupGlobalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._globalSettings = config.globalSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_settings - computed: false, optional: false, required: true
  private _globalSettings: { [key: string]: string };
  public get globalSettings() {
    return this.interpolationForAttribute('global_settings') as any;
  }
  public set globalSettings(value: { [key: string]: string }) {
    this._globalSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSettingsInput() {
    return this._globalSettings
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._globalSettings),
    };
  }
}
