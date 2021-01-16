// https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LakeformationPermissionsConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
  readonly catalogResource?: boolean;
  readonly permissions: string[];
  readonly permissionsWithGrantOption?: string[];
  readonly principal: string;
  /** data_location block */
  readonly dataLocation?: LakeformationPermissionsDataLocation[];
  /** database block */
  readonly database?: LakeformationPermissionsDatabase[];
  /** table block */
  readonly table?: LakeformationPermissionsTable[];
  /** table_with_columns block */
  readonly tableWithColumns?: LakeformationPermissionsTableWithColumns[];
}
export interface LakeformationPermissionsDataLocation {
  readonly arn: string;
  readonly catalogId?: string;
}
export interface LakeformationPermissionsDatabase {
  readonly catalogId?: string;
  readonly name: string;
}
export interface LakeformationPermissionsTable {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly name?: string;
  readonly wildcard?: boolean;
}
export interface LakeformationPermissionsTableWithColumns {
  readonly catalogId?: string;
  readonly columnNames?: string[];
  readonly databaseName: string;
  readonly excludedColumnNames?: string[];
  readonly name: string;
}

// Resource

export class LakeformationPermissions extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LakeformationPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_permissions',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._catalogResource = config.catalogResource;
    this._permissions = config.permissions;
    this._permissionsWithGrantOption = config.permissionsWithGrantOption;
    this._principal = config.principal;
    this._dataLocation = config.dataLocation;
    this._database = config.database;
    this._table = config.table;
    this._tableWithColumns = config.tableWithColumns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // catalog_resource - computed: false, optional: true, required: false
  private _catalogResource?: boolean;
  public get catalogResource() {
    return this._catalogResource;
  }
  public set catalogResource(value: boolean | undefined) {
    this._catalogResource = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions: string[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }

  // permissions_with_grant_option - computed: true, optional: true, required: false
  private _permissionsWithGrantOption?: string[];
  public get permissionsWithGrantOption() {
    return this._permissionsWithGrantOption ?? this.getListAttribute('permissions_with_grant_option');
  }
  public set permissionsWithGrantOption(value: string[] | undefined) {
    this._permissionsWithGrantOption = value;
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this._principal;
  }
  public set principal(value: string) {
    this._principal = value;
  }

  // data_location - computed: false, optional: true, required: false
  private _dataLocation?: LakeformationPermissionsDataLocation[];
  public get dataLocation() {
    return this._dataLocation;
  }
  public set dataLocation(value: LakeformationPermissionsDataLocation[] | undefined) {
    this._dataLocation = value;
  }

  // database - computed: false, optional: true, required: false
  private _database?: LakeformationPermissionsDatabase[];
  public get database() {
    return this._database;
  }
  public set database(value: LakeformationPermissionsDatabase[] | undefined) {
    this._database = value;
  }

  // table - computed: false, optional: true, required: false
  private _table?: LakeformationPermissionsTable[];
  public get table() {
    return this._table;
  }
  public set table(value: LakeformationPermissionsTable[] | undefined) {
    this._table = value;
  }

  // table_with_columns - computed: false, optional: true, required: false
  private _tableWithColumns?: LakeformationPermissionsTableWithColumns[];
  public get tableWithColumns() {
    return this._tableWithColumns;
  }
  public set tableWithColumns(value: LakeformationPermissionsTableWithColumns[] | undefined) {
    this._tableWithColumns = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      catalog_resource: this._catalogResource,
      permissions: this._permissions,
      permissions_with_grant_option: this._permissionsWithGrantOption,
      principal: this._principal,
      data_location: this._dataLocation,
      database: this._database,
      table: this._table,
      table_with_columns: this._tableWithColumns,
    };
  }
}
