// https://www.terraform.io/docs/providers/aws/r/backup_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings#global_settings BackupGlobalSettings#global_settings}
  */
  readonly globalSettings: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings#id BackupGlobalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings aws_backup_global_settings}
*/
export class BackupGlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_global_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings aws_backup_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupGlobalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: BackupGlobalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._globalSettings = config.globalSettings;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_settings - computed: false, optional: false, required: true
  private _globalSettings?: { [key: string]: string }; 
  public get globalSettings() {
    return this.getStringMapAttribute('global_settings');
  }
  public set globalSettings(value: { [key: string]: string }) {
    this._globalSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSettingsInput() {
    return this._globalSettings;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._globalSettings),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
