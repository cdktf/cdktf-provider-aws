// https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
}

export function dataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference {
    return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions {
}

export function dataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference {
    return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}
*/
export class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_data_lake_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLakeformationDataLakeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLakeformationDataLakeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_data_lake_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogId = config.catalogId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: false, required: false
  public get admins() {
    return cdktf.Fn.tolist(this.getListAttribute('admins'));
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
  private _createDatabaseDefaultPermissions = new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(this, "create_database_default_permissions", false);
  public get createDatabaseDefaultPermissions() {
    return this._createDatabaseDefaultPermissions;
  }

  // create_table_default_permissions - computed: true, optional: false, required: false
  private _createTableDefaultPermissions = new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList(this, "create_table_default_permissions", false);
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
