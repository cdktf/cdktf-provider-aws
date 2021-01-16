// https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
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

function lakeformationPermissionsDataLocationToTerraform(struct?: LakeformationPermissionsDataLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
  }
}

export interface LakeformationPermissionsDatabase {
  readonly catalogId?: string;
  readonly name: string;
}

function lakeformationPermissionsDatabaseToTerraform(struct?: LakeformationPermissionsDatabase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface LakeformationPermissionsTable {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly name?: string;
  readonly wildcard?: boolean;
}

function lakeformationPermissionsTableToTerraform(struct?: LakeformationPermissionsTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}

export interface LakeformationPermissionsTableWithColumns {
  readonly catalogId?: string;
  readonly columnNames?: string[];
  readonly databaseName: string;
  readonly excludedColumnNames?: string[];
  readonly name: string;
}

function lakeformationPermissionsTableWithColumnsToTerraform(struct?: LakeformationPermissionsTableWithColumns): any {
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

export class LakeformationPermissions extends cdktf.TerraformResource {

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

  // permissions - computed: false, optional: false, required: true
  private _permissions: string[];
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // permissions_with_grant_option - computed: true, optional: true, required: false
  private _permissionsWithGrantOption?: string[];
  public get permissionsWithGrantOption() {
    return this.getListAttribute('permissions_with_grant_option');
  }
  public set permissionsWithGrantOption(value: string[]) {
    this._permissionsWithGrantOption = value;
  }
  public resetPermissionsWithGrantOption() {
    this._permissionsWithGrantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsWithGrantOptionInput() {
    return this._permissionsWithGrantOption
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
  private _dataLocation?: LakeformationPermissionsDataLocation[];
  public get dataLocation() {
    return this.interpolationForAttribute('data_location') as any;
  }
  public set dataLocation(value: LakeformationPermissionsDataLocation[] ) {
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
  private _database?: LakeformationPermissionsDatabase[];
  public get database() {
    return this.interpolationForAttribute('database') as any;
  }
  public set database(value: LakeformationPermissionsDatabase[] ) {
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
  private _table?: LakeformationPermissionsTable[];
  public get table() {
    return this.interpolationForAttribute('table') as any;
  }
  public set table(value: LakeformationPermissionsTable[] ) {
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
  private _tableWithColumns?: LakeformationPermissionsTableWithColumns[];
  public get tableWithColumns() {
    return this.interpolationForAttribute('table_with_columns') as any;
  }
  public set tableWithColumns(value: LakeformationPermissionsTableWithColumns[] ) {
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
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._permissions),
      permissions_with_grant_option: cdktf.listMapper(cdktf.stringToTerraform)(this._permissionsWithGrantOption),
      principal: cdktf.stringToTerraform(this._principal),
      data_location: cdktf.listMapper(lakeformationPermissionsDataLocationToTerraform)(this._dataLocation),
      database: cdktf.listMapper(lakeformationPermissionsDatabaseToTerraform)(this._database),
      table: cdktf.listMapper(lakeformationPermissionsTableToTerraform)(this._table),
      table_with_columns: cdktf.listMapper(lakeformationPermissionsTableWithColumnsToTerraform)(this._tableWithColumns),
    };
  }
}
