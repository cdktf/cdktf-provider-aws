// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lake Formation
*/
export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}
  */
  readonly admins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}
  */
  readonly trustedResourceOwners?: string[];
  /**
  * create_database_default_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
  */
  readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable;
  /**
  * create_table_default_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
  */
  readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable;
}
export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}
  */
  readonly permissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}
  */
  readonly principal?: string;
}

export function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}
  */
  readonly permissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}
  */
  readonly principal?: string;
}

export function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}
*/
export class LakeformationDataLakeSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lakeformation_data_lake_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationDataLakeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LakeformationDataLakeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_data_lake_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._admins = config.admins;
    this._catalogId = config.catalogId;
    this._trustedResourceOwners = config.trustedResourceOwners;
    this._createDatabaseDefaultPermissions = config.createDatabaseDefaultPermissions;
    this._createTableDefaultPermissions = config.createTableDefaultPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: true, required: false
  private _admins?: string[]; 
  public get admins() {
    return cdktf.Fn.tolist(this.getListAttribute('admins'));
  }
  public set admins(value: string[]) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusted_resource_owners - computed: true, optional: true, required: false
  private _trustedResourceOwners?: string[]; 
  public get trustedResourceOwners() {
    return this.getListAttribute('trusted_resource_owners');
  }
  public set trustedResourceOwners(value: string[]) {
    this._trustedResourceOwners = value;
  }
  public resetTrustedResourceOwners() {
    this._trustedResourceOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedResourceOwnersInput() {
    return this._trustedResourceOwners;
  }

  // create_database_default_permissions - computed: false, optional: true, required: false
  private _createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable; 
  public get createDatabaseDefaultPermissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('create_database_default_permissions');
  }
  public set createDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable) {
    this._createDatabaseDefaultPermissions = value;
  }
  public resetCreateDatabaseDefaultPermissions() {
    this._createDatabaseDefaultPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseDefaultPermissionsInput() {
    return this._createDatabaseDefaultPermissions;
  }

  // create_table_default_permissions - computed: false, optional: true, required: false
  private _createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable; 
  public get createTableDefaultPermissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('create_table_default_permissions');
  }
  public set createTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable) {
    this._createTableDefaultPermissions = value;
  }
  public resetCreateTableDefaultPermissions() {
    this._createTableDefaultPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTableDefaultPermissionsInput() {
    return this._createTableDefaultPermissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admins: cdktf.listMapper(cdktf.stringToTerraform)(this._admins),
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      trusted_resource_owners: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedResourceOwners),
      create_database_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform)(this._createDatabaseDefaultPermissions),
      create_table_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform)(this._createTableDefaultPermissions),
    };
  }
}
