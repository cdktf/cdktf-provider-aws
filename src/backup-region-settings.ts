// https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupRegionSettingsConfig extends cdktf.TerraformMetaArguments {
  readonly resourceTypeOptInPreference: { [key: string]: boolean };
}

// Resource

export class BackupRegionSettings extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupRegionSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_region_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceTypeOptInPreference = config.resourceTypeOptInPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_type_opt_in_preference - computed: false, optional: false, required: true
  private _resourceTypeOptInPreference: { [key: string]: boolean };
  public get resourceTypeOptInPreference() {
    return this.interpolationForAttribute('resource_type_opt_in_preference') as any;
  }
  public set resourceTypeOptInPreference(value: { [key: string]: boolean }) {
    this._resourceTypeOptInPreference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeOptInPreferenceInput() {
    return this._resourceTypeOptInPreference
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_type_opt_in_preference: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTypeOptInPreference),
    };
  }
}
