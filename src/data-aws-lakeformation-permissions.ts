// https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_resource DataAwsLakeformationPermissions#catalog_resource}
  */
  readonly catalogResource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#principal DataAwsLakeformationPermissions#principal}
  */
  readonly principal: string;
  /**
  * data_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#data_location DataAwsLakeformationPermissions#data_location}
  */
  readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
  /**
  * database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database DataAwsLakeformationPermissions#database}
  */
  readonly database?: DataAwsLakeformationPermissionsDatabase[];
  /**
  * table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table DataAwsLakeformationPermissions#table}
  */
  readonly table?: DataAwsLakeformationPermissionsTable[];
  /**
  * table_with_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
  */
  readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
}
export interface DataAwsLakeformationPermissionsDataLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#arn DataAwsLakeformationPermissions#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#column_names DataAwsLakeformationPermissions#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}
  */
  readonly excludedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions}
*/
export class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lakeformation_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLakeformationPermissionsConfig
  */
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
  private _catalogResource?: boolean | cdktf.IResolvable;
  public get catalogResource() {
    return this.getBooleanAttribute('catalog_resource');
  }
  public set catalogResource(value: boolean | cdktf.IResolvable ) {
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
