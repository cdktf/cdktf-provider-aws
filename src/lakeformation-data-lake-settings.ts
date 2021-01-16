// https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LakeformationDataLakeSettingsConfig extends TerraformMetaArguments {
  readonly admins?: string[];
  readonly catalogId?: string;
  readonly trustedResourceOwners?: string[];
  /** create_database_default_permissions block */
  readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
  /** create_table_default_permissions block */
  readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
}
export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
  readonly permissions?: string[];
  readonly principal?: string;
}
export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
  readonly permissions?: string[];
  readonly principal?: string;
}

// Resource

export class LakeformationDataLakeSettings extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._admins ?? this.getListAttribute('admins');
  }
  public set admins(value: string[] | undefined) {
    this._admins = value;
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // trusted_resource_owners - computed: true, optional: true, required: false
  private _trustedResourceOwners?: string[];
  public get trustedResourceOwners() {
    return this._trustedResourceOwners ?? this.getListAttribute('trusted_resource_owners');
  }
  public set trustedResourceOwners(value: string[] | undefined) {
    this._trustedResourceOwners = value;
  }

  // create_database_default_permissions - computed: false, optional: true, required: false
  private _createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
  public get createDatabaseDefaultPermissions() {
    return this._createDatabaseDefaultPermissions;
  }
  public set createDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | undefined) {
    this._createDatabaseDefaultPermissions = value;
  }

  // create_table_default_permissions - computed: false, optional: true, required: false
  private _createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }
  public set createTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | undefined) {
    this._createTableDefaultPermissions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admins: this._admins,
      catalog_id: this._catalogId,
      trusted_resource_owners: this._trustedResourceOwners,
      create_database_default_permissions: this._createDatabaseDefaultPermissions,
      create_table_default_permissions: this._createTableDefaultPermissions,
    };
  }
}
