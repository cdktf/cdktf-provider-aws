// https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}
  */
  readonly admins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}
  */
  readonly allowExternalDataFiltering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}
  */
  readonly authorizedSessionTagValueList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}
  */
  readonly externalDataFilteringAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}
  */
  readonly readOnlyAdmins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}
  */
  readonly trustedResourceOwners?: string[];
  /**
  * create_database_default_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
  */
  readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable;
  /**
  * create_table_default_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
  */
  readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable;
}
export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}
  */
  readonly permissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}
  */
  readonly principal?: string;
}

export function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToHclTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal = value.principal;
    }
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList extends cdktf.ComplexList {
  public internalValue? : LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable

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
  public get(index: number): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference {
    return new LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}
  */
  readonly permissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}
  */
  readonly principal?: string;
}

export function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToHclTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal = value.principal;
    }
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class LakeformationDataLakeSettingsCreateTableDefaultPermissionsList extends cdktf.ComplexList {
  public internalValue? : LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable

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
  public get(index: number): LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference {
    return new LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}
*/
export class LakeformationDataLakeSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_data_lake_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationDataLakeSettings to import
  * @param importFromId The id of the existing LakeformationDataLakeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationDataLakeSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lakeformation_data_lake_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationDataLakeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LakeformationDataLakeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_data_lake_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.51.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admins = config.admins;
    this._allowExternalDataFiltering = config.allowExternalDataFiltering;
    this._authorizedSessionTagValueList = config.authorizedSessionTagValueList;
    this._catalogId = config.catalogId;
    this._externalDataFilteringAllowList = config.externalDataFilteringAllowList;
    this._id = config.id;
    this._readOnlyAdmins = config.readOnlyAdmins;
    this._trustedResourceOwners = config.trustedResourceOwners;
    this._createDatabaseDefaultPermissions.internalValue = config.createDatabaseDefaultPermissions;
    this._createTableDefaultPermissions.internalValue = config.createTableDefaultPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: true, required: false
  private _admins?: string[]; 
  public get admins() {
    return cdktf.Fn.tolist(this.getListAttribute('admins'));
  }
  public set admins(value: string[]) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
  }

  // allow_external_data_filtering - computed: false, optional: true, required: false
  private _allowExternalDataFiltering?: boolean | cdktf.IResolvable; 
  public get allowExternalDataFiltering() {
    return this.getBooleanAttribute('allow_external_data_filtering');
  }
  public set allowExternalDataFiltering(value: boolean | cdktf.IResolvable) {
    this._allowExternalDataFiltering = value;
  }
  public resetAllowExternalDataFiltering() {
    this._allowExternalDataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalDataFilteringInput() {
    return this._allowExternalDataFiltering;
  }

  // authorized_session_tag_value_list - computed: true, optional: true, required: false
  private _authorizedSessionTagValueList?: string[]; 
  public get authorizedSessionTagValueList() {
    return this.getListAttribute('authorized_session_tag_value_list');
  }
  public set authorizedSessionTagValueList(value: string[]) {
    this._authorizedSessionTagValueList = value;
  }
  public resetAuthorizedSessionTagValueList() {
    this._authorizedSessionTagValueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedSessionTagValueListInput() {
    return this._authorizedSessionTagValueList;
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

  // external_data_filtering_allow_list - computed: true, optional: true, required: false
  private _externalDataFilteringAllowList?: string[]; 
  public get externalDataFilteringAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('external_data_filtering_allow_list'));
  }
  public set externalDataFilteringAllowList(value: string[]) {
    this._externalDataFilteringAllowList = value;
  }
  public resetExternalDataFilteringAllowList() {
    this._externalDataFilteringAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataFilteringAllowListInput() {
    return this._externalDataFilteringAllowList;
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

  // read_only_admins - computed: true, optional: true, required: false
  private _readOnlyAdmins?: string[]; 
  public get readOnlyAdmins() {
    return cdktf.Fn.tolist(this.getListAttribute('read_only_admins'));
  }
  public set readOnlyAdmins(value: string[]) {
    this._readOnlyAdmins = value;
  }
  public resetReadOnlyAdmins() {
    this._readOnlyAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyAdminsInput() {
    return this._readOnlyAdmins;
  }

  // trusted_resource_owners - computed: true, optional: true, required: false
  private _trustedResourceOwners?: string[]; 
  public get trustedResourceOwners() {
    return this.getListAttribute('trusted_resource_owners');
  }
  public set trustedResourceOwners(value: string[]) {
    this._trustedResourceOwners = value;
  }
  public resetTrustedResourceOwners() {
    this._trustedResourceOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedResourceOwnersInput() {
    return this._trustedResourceOwners;
  }

  // create_database_default_permissions - computed: false, optional: true, required: false
  private _createDatabaseDefaultPermissions = new LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(this, "create_database_default_permissions", false);
  public get createDatabaseDefaultPermissions() {
    return this._createDatabaseDefaultPermissions;
  }
  public putCreateDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable) {
    this._createDatabaseDefaultPermissions.internalValue = value;
  }
  public resetCreateDatabaseDefaultPermissions() {
    this._createDatabaseDefaultPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseDefaultPermissionsInput() {
    return this._createDatabaseDefaultPermissions.internalValue;
  }

  // create_table_default_permissions - computed: false, optional: true, required: false
  private _createTableDefaultPermissions = new LakeformationDataLakeSettingsCreateTableDefaultPermissionsList(this, "create_table_default_permissions", false);
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }
  public putCreateTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable) {
    this._createTableDefaultPermissions.internalValue = value;
  }
  public resetCreateTableDefaultPermissions() {
    this._createTableDefaultPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTableDefaultPermissionsInput() {
    return this._createTableDefaultPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._admins),
      allow_external_data_filtering: cdktf.booleanToTerraform(this._allowExternalDataFiltering),
      authorized_session_tag_value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedSessionTagValueList),
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      external_data_filtering_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalDataFilteringAllowList),
      id: cdktf.stringToTerraform(this._id),
      read_only_admins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readOnlyAdmins),
      trusted_resource_owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustedResourceOwners),
      create_database_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform, true)(this._createDatabaseDefaultPermissions.internalValue),
      create_table_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform, true)(this._createTableDefaultPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._admins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_external_data_filtering: {
        value: cdktf.booleanToHclTerraform(this._allowExternalDataFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorized_session_tag_value_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedSessionTagValueList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_filtering_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalDataFilteringAllowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_admins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readOnlyAdmins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trusted_resource_owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustedResourceOwners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      create_database_default_permissions: {
        value: cdktf.listMapperHcl(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToHclTerraform, true)(this._createDatabaseDefaultPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList",
      },
      create_table_default_permissions: {
        value: cdktf.listMapperHcl(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToHclTerraform, true)(this._createTableDefaultPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationDataLakeSettingsCreateTableDefaultPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
