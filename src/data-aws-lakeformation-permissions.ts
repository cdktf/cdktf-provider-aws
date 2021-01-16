// https://www.terraform.io/docs/providers/aws/r/data_aws_lakeformation_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsLakeformationPermissionsConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
  readonly catalogResource?: boolean;
  readonly principal: string;
  /** data_location block */
  readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
  /** database block */
  readonly database?: DataAwsLakeformationPermissionsDatabase[];
  /** table block */
  readonly table?: DataAwsLakeformationPermissionsTable[];
  /** table_with_columns block */
  readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
}
export interface DataAwsLakeformationPermissionsDataLocation {
  readonly arn: string;
  readonly catalogId?: string;
}
export interface DataAwsLakeformationPermissionsDatabase {
  readonly catalogId?: string;
  readonly name: string;
}
export interface DataAwsLakeformationPermissionsTable {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly name?: string;
  readonly wildcard?: boolean;
}
export interface DataAwsLakeformationPermissionsTableWithColumns {
  readonly catalogId?: string;
  readonly columnNames?: string[];
  readonly databaseName: string;
  readonly excludedColumnNames?: string[];
  readonly name: string;
}

// Resource

export class DataAwsLakeformationPermissions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig) {
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

  // permissions - computed: true, optional: false, required: true
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // permissions_with_grant_option - computed: true, optional: false, required: true
  public get permissionsWithGrantOption() {
    return this.getListAttribute('permissions_with_grant_option');
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
  private _dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
  public get dataLocation() {
    return this._dataLocation;
  }
  public set dataLocation(value: DataAwsLakeformationPermissionsDataLocation[] | undefined) {
    this._dataLocation = value;
  }

  // database - computed: false, optional: true, required: false
  private _database?: DataAwsLakeformationPermissionsDatabase[];
  public get database() {
    return this._database;
  }
  public set database(value: DataAwsLakeformationPermissionsDatabase[] | undefined) {
    this._database = value;
  }

  // table - computed: false, optional: true, required: false
  private _table?: DataAwsLakeformationPermissionsTable[];
  public get table() {
    return this._table;
  }
  public set table(value: DataAwsLakeformationPermissionsTable[] | undefined) {
    this._table = value;
  }

  // table_with_columns - computed: false, optional: true, required: false
  private _tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
  public get tableWithColumns() {
    return this._tableWithColumns;
  }
  public set tableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns[] | undefined) {
    this._tableWithColumns = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      catalog_resource: this._catalogResource,
      principal: this._principal,
      data_location: this._dataLocation,
      database: this._database,
      table: this._table,
      table_with_columns: this._tableWithColumns,
    };
  }
}
