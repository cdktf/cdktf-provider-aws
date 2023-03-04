// https://www.terraform.io/docs/providers/aws/r/backup_region_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupRegionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#id BackupRegionSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#resource_type_management_preference BackupRegionSettings#resource_type_management_preference}
  */
  readonly resourceTypeManagementPreference?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}
  */
  readonly resourceTypeOptInPreference: { [key: string]: (boolean | cdktf.IResolvable) };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings aws_backup_region_settings}
*/
export class BackupRegionSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_region_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings aws_backup_region_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupRegionSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: BackupRegionSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_region_settings',
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
    this._id = config.id;
    this._resourceTypeManagementPreference = config.resourceTypeManagementPreference;
    this._resourceTypeOptInPreference = config.resourceTypeOptInPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource_type_management_preference - computed: true, optional: true, required: false
  private _resourceTypeManagementPreference?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get resourceTypeManagementPreference() {
    return this.getBooleanMapAttribute('resource_type_management_preference');
  }
  public set resourceTypeManagementPreference(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._resourceTypeManagementPreference = value;
  }
  public resetResourceTypeManagementPreference() {
    this._resourceTypeManagementPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeManagementPreferenceInput() {
    return this._resourceTypeManagementPreference;
  }

  // resource_type_opt_in_preference - computed: false, optional: false, required: true
  private _resourceTypeOptInPreference?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get resourceTypeOptInPreference() {
    return this.getBooleanMapAttribute('resource_type_opt_in_preference');
  }
  public set resourceTypeOptInPreference(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._resourceTypeOptInPreference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeOptInPreferenceInput() {
    return this._resourceTypeOptInPreference;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_type_management_preference: cdktf.hashMapper(cdktf.booleanToTerraform)(this._resourceTypeManagementPreference),
      resource_type_opt_in_preference: cdktf.hashMapper(cdktf.booleanToTerraform)(this._resourceTypeOptInPreference),
    };
  }
}
