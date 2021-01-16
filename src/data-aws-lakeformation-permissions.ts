// https://www.terraform.io/docs/providers/aws/r/data_aws_lakeformation_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
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

function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
  }
}

export interface DataAwsLakeformationPermissionsDatabase {
  readonly catalogId?: string;
  readonly name: string;
}

function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataAwsLakeformationPermissionsTable {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly name?: string;
  readonly wildcard?: boolean;
}

function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}

export interface DataAwsLakeformationPermissionsTableWithColumns {
  readonly catalogId?: string;
  readonly columnNames?: string[];
  readonly databaseName: string;
  readonly excludedColumnNames?: string[];
  readonly name: string;
}

function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


// Resource

export class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string ) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // catalog_resource - computed: false, optional: true, required: false
  private _catalogResource?: boolean;
  public get catalogResource() {
    return this.getBooleanAttribute('catalog_resource');
  }
  public set catalogResource(value: boolean ) {
    this._catalogResource = value;
  }
  public resetCatalogResource() {
    this._catalogResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogResourceInput() {
    return this._catalogResource
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // permissions_with_grant_option - computed: true, optional: false, required: false
  public get permissionsWithGrantOption() {
    return this.getListAttribute('permissions_with_grant_option');
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal
  }

  // data_location - computed: false, optional: true, required: false
  private _dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
  public get dataLocation() {
    return this.interpolationForAttribute('data_location') as any;
  }
  public set dataLocation(value: DataAwsLakeformationPermissionsDataLocation[] ) {
    this._dataLocation = value;
  }
  public resetDataLocation() {
    this._dataLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationInput() {
    return this._dataLocation
  }

  // database - computed: false, optional: true, required: false
  private _database?: DataAwsLakeformationPermissionsDatabase[];
  public get database() {
    return this.interpolationForAttribute('database') as any;
  }
  public set database(value: DataAwsLakeformationPermissionsDatabase[] ) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // table - computed: false, optional: true, required: false
  private _table?: DataAwsLakeformationPermissionsTable[];
  public get table() {
    return this.interpolationForAttribute('table') as any;
  }
  public set table(value: DataAwsLakeformationPermissionsTable[] ) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table
  }

  // table_with_columns - computed: false, optional: true, required: false
  private _tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
  public get tableWithColumns() {
    return this.interpolationForAttribute('table_with_columns') as any;
  }
  public set tableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns[] ) {
    this._tableWithColumns = value;
  }
  public resetTableWithColumns() {
    this._tableWithColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableWithColumnsInput() {
    return this._tableWithColumns
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      catalog_resource: cdktf.booleanToTerraform(this._catalogResource),
      principal: cdktf.stringToTerraform(this._principal),
      data_location: cdktf.listMapper(dataAwsLakeformationPermissionsDataLocationToTerraform)(this._dataLocation),
      database: cdktf.listMapper(dataAwsLakeformationPermissionsDatabaseToTerraform)(this._database),
      table: cdktf.listMapper(dataAwsLakeformationPermissionsTableToTerraform)(this._table),
      table_with_columns: cdktf.listMapper(dataAwsLakeformationPermissionsTableWithColumnsToTerraform)(this._tableWithColumns),
    };
  }
}
