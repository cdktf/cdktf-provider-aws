// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lake Formation
*/
export namespace LakeFormation {
  export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#admins LakeformationDataLakeSettings#admins}
    */
    readonly admins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#catalog_id LakeformationDataLakeSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}
    */
    readonly trustedResourceOwners?: string[];
    /**
    * create_database_default_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
    */
    readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
    /**
    * create_table_default_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
    */
    readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
  }
  export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}
    */
    readonly principal?: string;
  }

  function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}
    */
    readonly principal?: string;
  }

  function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
      principal: cdktf.stringToTerraform(struct!.principal),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Resource
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
    private _admins?: string[] | undefined; 
    public get admins() {
      return this.getListAttribute('admins');
    }
    public set admins(value: string[] | undefined) {
      this._admins = value;
    }
    public resetAdmins() {
      this._admins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminsInput() {
      return this._admins
    }

    // catalog_id - computed: false, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // trusted_resource_owners - computed: true, optional: true, required: false
    private _trustedResourceOwners?: string[] | undefined; 
    public get trustedResourceOwners() {
      return this.getListAttribute('trusted_resource_owners');
    }
    public set trustedResourceOwners(value: string[] | undefined) {
      this._trustedResourceOwners = value;
    }
    public resetTrustedResourceOwners() {
      this._trustedResourceOwners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedResourceOwnersInput() {
      return this._trustedResourceOwners
    }

    // create_database_default_permissions - computed: false, optional: true, required: false
    private _createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | undefined; 
    public get createDatabaseDefaultPermissions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('create_database_default_permissions') as any;
    }
    public set createDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | undefined) {
      this._createDatabaseDefaultPermissions = value;
    }
    public resetCreateDatabaseDefaultPermissions() {
      this._createDatabaseDefaultPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDatabaseDefaultPermissionsInput() {
      return this._createDatabaseDefaultPermissions
    }

    // create_table_default_permissions - computed: false, optional: true, required: false
    private _createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | undefined; 
    public get createTableDefaultPermissions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('create_table_default_permissions') as any;
    }
    public set createTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | undefined) {
      this._createTableDefaultPermissions = value;
    }
    public resetCreateTableDefaultPermissions() {
      this._createTableDefaultPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTableDefaultPermissionsInput() {
      return this._createTableDefaultPermissions
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
  export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_resource LakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions LakeformationPermissions#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}
    */
    readonly permissionsWithGrantOption?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#principal LakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#data_location LakeformationPermissions#data_location}
    */
    readonly dataLocation?: LakeformationPermissionsDataLocation;
    /**
    * database block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database LakeformationPermissions#database}
    */
    readonly database?: LakeformationPermissionsDatabase;
    /**
    * table block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table LakeformationPermissions#table}
    */
    readonly table?: LakeformationPermissionsTable;
    /**
    * table_with_columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table_with_columns LakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationPermissionsTableWithColumns;
  }
  export interface LakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#arn LakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
  }

  function lakeformationPermissionsDataLocationToTerraform(struct?: LakeformationPermissionsDataLocationOutputReference | LakeformationPermissionsDataLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    }
  }

  export class LakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }
  }
  export interface LakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name: string;
  }

  function lakeformationPermissionsDatabaseToTerraform(struct?: LakeformationPermissionsDatabaseOutputReference | LakeformationPermissionsDatabase): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export class LakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }
  }
  export interface LakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
  }

  function lakeformationPermissionsTableToTerraform(struct?: LakeformationPermissionsTableOutputReference | LakeformationPermissionsTable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    }
  }

  export class LakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
      this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // wildcard - computed: false, optional: true, required: false
    private _wildcard?: boolean | cdktf.IResolvable | undefined; 
    public get wildcard() {
      return this.getBooleanAttribute('wildcard') as any;
    }
    public set wildcard(value: boolean | cdktf.IResolvable | undefined) {
      this._wildcard = value;
    }
    public resetWildcard() {
      this._wildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wildcardInput() {
      return this._wildcard
    }
  }
  export interface LakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#column_names LakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#excluded_column_names LakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
  }

  function lakeformationPermissionsTableWithColumnsToTerraform(struct?: LakeformationPermissionsTableWithColumnsOutputReference | LakeformationPermissionsTableWithColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    }
  }

  export class LakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // column_names - computed: false, optional: true, required: false
    private _columnNames?: string[] | undefined; 
    public get columnNames() {
      return this.getListAttribute('column_names');
    }
    public set columnNames(value: string[] | undefined) {
      this._columnNames = value;
    }
    public resetColumnNames() {
      this._columnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNamesInput() {
      return this._columnNames
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
      this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // excluded_column_names - computed: false, optional: true, required: false
    private _excludedColumnNames?: string[] | undefined; 
    public get excludedColumnNames() {
      return this.getListAttribute('excluded_column_names');
    }
    public set excludedColumnNames(value: string[] | undefined) {
      this._excludedColumnNames = value;
    }
    public resetExcludedColumnNames() {
      this._excludedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedColumnNamesInput() {
      return this._excludedColumnNames
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // wildcard - computed: false, optional: true, required: false
    private _wildcard?: boolean | cdktf.IResolvable | undefined; 
    public get wildcard() {
      return this.getBooleanAttribute('wildcard') as any;
    }
    public set wildcard(value: boolean | cdktf.IResolvable | undefined) {
      this._wildcard = value;
    }
    public resetWildcard() {
      this._wildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wildcardInput() {
      return this._wildcard
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions}
  */
  export class LakeformationPermissions extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_permissions";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationPermissionsConfig
    */
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
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
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
    private _catalogResource?: boolean | cdktf.IResolvable | undefined; 
    public get catalogResource() {
      return this.getBooleanAttribute('catalog_resource') as any;
    }
    public set catalogResource(value: boolean | cdktf.IResolvable | undefined) {
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
    private _permissions?: string[]; 
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
    private _permissionsWithGrantOption?: string[] | undefined; 
    public get permissionsWithGrantOption() {
      return this.getListAttribute('permissions_with_grant_option');
    }
    public set permissionsWithGrantOption(value: string[] | undefined) {
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
    private _principal?: string; 
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
    private _dataLocation?: LakeformationPermissionsDataLocation | undefined; 
    private __dataLocationOutput = new LakeformationPermissionsDataLocationOutputReference(this as any, "data_location", true);
    public get dataLocation() {
      return this.__dataLocationOutput;
    }
    public putDataLocation(value: LakeformationPermissionsDataLocation | undefined) {
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
    private _database?: LakeformationPermissionsDatabase | undefined; 
    private __databaseOutput = new LakeformationPermissionsDatabaseOutputReference(this as any, "database", true);
    public get database() {
      return this.__databaseOutput;
    }
    public putDatabase(value: LakeformationPermissionsDatabase | undefined) {
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
    private _table?: LakeformationPermissionsTable | undefined; 
    private __tableOutput = new LakeformationPermissionsTableOutputReference(this as any, "table", true);
    public get table() {
      return this.__tableOutput;
    }
    public putTable(value: LakeformationPermissionsTable | undefined) {
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
    private _tableWithColumns?: LakeformationPermissionsTableWithColumns | undefined; 
    private __tableWithColumnsOutput = new LakeformationPermissionsTableWithColumnsOutputReference(this as any, "table_with_columns", true);
    public get tableWithColumns() {
      return this.__tableWithColumnsOutput;
    }
    public putTableWithColumns(value: LakeformationPermissionsTableWithColumns | undefined) {
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
        data_location: lakeformationPermissionsDataLocationToTerraform(this._dataLocation),
        database: lakeformationPermissionsDatabaseToTerraform(this._database),
        table: lakeformationPermissionsTableToTerraform(this._table),
        table_with_columns: lakeformationPermissionsTableWithColumnsToTerraform(this._tableWithColumns),
      };
    }
  }
  export interface LakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html#arn LakeformationResource#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html#role_arn LakeformationResource#role_arn}
    */
    readonly roleArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html aws_lakeformation_resource}
  */
  export class LakeformationResource extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_resource";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html aws_lakeformation_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationResourceConfig
    */
    public constructor(scope: Construct, id: string, config: LakeformationResourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lakeformation_resource',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
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
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
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
    readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation;
    /**
    * database block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database DataAwsLakeformationPermissions#database}
    */
    readonly database?: DataAwsLakeformationPermissionsDatabase;
    /**
    * table block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table DataAwsLakeformationPermissions#table}
    */
    readonly table?: DataAwsLakeformationPermissionsTable;
    /**
    * table_with_columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns;
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

  function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    }
  }

  export class DataAwsLakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
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

  function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export class DataAwsLakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
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

  function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    }
  }

  export class DataAwsLakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
      this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // wildcard - computed: false, optional: true, required: false
    private _wildcard?: boolean | cdktf.IResolvable | undefined; 
    public get wildcard() {
      return this.getBooleanAttribute('wildcard') as any;
    }
    public set wildcard(value: boolean | cdktf.IResolvable | undefined) {
      this._wildcard = value;
    }
    public resetWildcard() {
      this._wildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wildcardInput() {
      return this._wildcard
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

  function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    }
  }

  export class DataAwsLakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // column_names - computed: false, optional: true, required: false
    private _columnNames?: string[] | undefined; 
    public get columnNames() {
      return this.getListAttribute('column_names');
    }
    public set columnNames(value: string[] | undefined) {
      this._columnNames = value;
    }
    public resetColumnNames() {
      this._columnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNamesInput() {
      return this._columnNames
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
      this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // excluded_column_names - computed: false, optional: true, required: false
    private _excludedColumnNames?: string[] | undefined; 
    public get excludedColumnNames() {
      return this.getListAttribute('excluded_column_names');
    }
    public set excludedColumnNames(value: string[] | undefined) {
      this._excludedColumnNames = value;
    }
    public resetExcludedColumnNames() {
      this._excludedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedColumnNamesInput() {
      return this._excludedColumnNames
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // wildcard - computed: false, optional: true, required: false
    private _wildcard?: boolean | cdktf.IResolvable | undefined; 
    public get wildcard() {
      return this.getBooleanAttribute('wildcard') as any;
    }
    public set wildcard(value: boolean | cdktf.IResolvable | undefined) {
      this._wildcard = value;
    }
    public resetWildcard() {
      this._wildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wildcardInput() {
      return this._wildcard
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
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
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
    private _catalogResource?: boolean | cdktf.IResolvable | undefined; 
    public get catalogResource() {
      return this.getBooleanAttribute('catalog_resource') as any;
    }
    public set catalogResource(value: boolean | cdktf.IResolvable | undefined) {
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
    private _principal?: string; 
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
    private _dataLocation?: DataAwsLakeformationPermissionsDataLocation | undefined; 
    private __dataLocationOutput = new DataAwsLakeformationPermissionsDataLocationOutputReference(this as any, "data_location", true);
    public get dataLocation() {
      return this.__dataLocationOutput;
    }
    public putDataLocation(value: DataAwsLakeformationPermissionsDataLocation | undefined) {
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
    private _database?: DataAwsLakeformationPermissionsDatabase | undefined; 
    private __databaseOutput = new DataAwsLakeformationPermissionsDatabaseOutputReference(this as any, "database", true);
    public get database() {
      return this.__databaseOutput;
    }
    public putDatabase(value: DataAwsLakeformationPermissionsDatabase | undefined) {
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
    private _table?: DataAwsLakeformationPermissionsTable | undefined; 
    private __tableOutput = new DataAwsLakeformationPermissionsTableOutputReference(this as any, "table", true);
    public get table() {
      return this.__tableOutput;
    }
    public putTable(value: DataAwsLakeformationPermissionsTable | undefined) {
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
    private _tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns | undefined; 
    private __tableWithColumnsOutput = new DataAwsLakeformationPermissionsTableWithColumnsOutputReference(this as any, "table_with_columns", true);
    public get tableWithColumns() {
      return this.__tableWithColumnsOutput;
    }
    public putTableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns | undefined) {
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
        data_location: dataAwsLakeformationPermissionsDataLocationToTerraform(this._dataLocation),
        database: dataAwsLakeformationPermissionsDatabaseToTerraform(this._database),
        table: dataAwsLakeformationPermissionsTableToTerraform(this._table),
        table_with_columns: dataAwsLakeformationPermissionsTableWithColumnsToTerraform(this._tableWithColumns),
      };
    }
  }
  export interface DataAwsLakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html#arn DataAwsLakeformationResource#arn}
    */
    readonly arn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html aws_lakeformation_resource}
  */
  export class DataAwsLakeformationResource extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_resource";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html aws_lakeformation_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationResourceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLakeformationResourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lakeformation_resource',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
      };
    }
  }
}
