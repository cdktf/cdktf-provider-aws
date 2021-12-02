// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lake Formation
*/
export interface DataAwsLakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}
  */
  readonly catalogId?: string;
}
export class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions extends cdktf.ComplexComputedList {

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}
export class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions extends cdktf.ComplexComputedList {

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
*/
export class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lakeformation_data_lake_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLakeformationDataLakeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLakeformationDataLakeSettingsConfig = {}) {
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
    this._catalogId = config.catalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: false, required: false
  public get admins() {
    return this.getListAttribute('admins');
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

  // create_database_default_permissions - computed: true, optional: false, required: false
  public createDatabaseDefaultPermissions(index: string) {
    return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(this, 'create_database_default_permissions', index);
  }

  // create_table_default_permissions - computed: true, optional: false, required: false
  public createTableDefaultPermissions(index: string) {
    return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions(this, 'create_table_default_permissions', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusted_resource_owners - computed: true, optional: false, required: false
  public get trustedResourceOwners() {
    return this.getListAttribute('trusted_resource_owners');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
    };
  }
}
