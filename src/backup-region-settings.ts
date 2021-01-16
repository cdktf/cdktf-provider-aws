// https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupRegionSettingsConfig extends TerraformMetaArguments {
  readonly resourceTypeOptInPreference: { [key: string]: boolean };
}

// Resource

export class BackupRegionSettings extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_type_opt_in_preference - computed: false, optional: false, required: true
  private _resourceTypeOptInPreference: { [key: string]: boolean };
  public get resourceTypeOptInPreference() {
    return this._resourceTypeOptInPreference;
  }
  public set resourceTypeOptInPreference(value: { [key: string]: boolean }) {
    this._resourceTypeOptInPreference = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_type_opt_in_preference: this._resourceTypeOptInPreference,
    };
  }
}
