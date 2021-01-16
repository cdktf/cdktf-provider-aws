// https://www.terraform.io/docs/providers/aws/r/data_aws_lakeformation_data_lake_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsLakeformationDataLakeSettingsConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
}
export class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions extends ComplexComputedList {

  // permissions - computed: true, optional: false, required: true
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: true
  public get principal() {
    return this.getStringAttribute('principal');
  }
}
export class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions extends ComplexComputedList {

  // permissions - computed: true, optional: false, required: true
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: true
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

// Resource

export class DataAwsLakeformationDataLakeSettings extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // admins - computed: true, optional: false, required: true
  public get admins() {
    return this.getListAttribute('admins');
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // create_database_default_permissions - computed: true, optional: false, required: true
  public createDatabaseDefaultPermissions(index: string) {
    return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(this, 'create_database_default_permissions', index);
  }

  // create_table_default_permissions - computed: true, optional: false, required: true
  public createTableDefaultPermissions(index: string) {
    return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions(this, 'create_table_default_permissions', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // trusted_resource_owners - computed: true, optional: false, required: true
  public get trustedResourceOwners() {
    return this.getListAttribute('trusted_resource_owners');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
    };
  }
}
