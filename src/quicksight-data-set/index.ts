// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightDataSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#id QuicksightDataSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}
  */
  readonly importMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tags_all QuicksightDataSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * column_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}
  */
  readonly columnGroups?: QuicksightDataSetColumnGroups[] | cdktf.IResolvable;
  /**
  * column_level_permission_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}
  */
  readonly columnLevelPermissionRules?: QuicksightDataSetColumnLevelPermissionRules[] | cdktf.IResolvable;
  /**
  * data_set_usage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}
  */
  readonly dataSetUsageConfiguration?: QuicksightDataSetDataSetUsageConfiguration;
  /**
  * field_folders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}
  */
  readonly fieldFolders?: QuicksightDataSetFieldFolders[] | cdktf.IResolvable;
  /**
  * logical_table_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}
  */
  readonly logicalTableMap?: QuicksightDataSetLogicalTableMap[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}
  */
  readonly permissions?: QuicksightDataSetPermissions[] | cdktf.IResolvable;
  /**
  * physical_table_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}
  */
  readonly physicalTableMap?: QuicksightDataSetPhysicalTableMap[] | cdktf.IResolvable;
  /**
  * refresh_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#refresh_properties QuicksightDataSet#refresh_properties}
  */
  readonly refreshProperties?: QuicksightDataSetRefreshProperties;
  /**
  * row_level_permission_data_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}
  */
  readonly rowLevelPermissionDataSet?: QuicksightDataSetRowLevelPermissionDataSet;
  /**
  * row_level_permission_tag_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#row_level_permission_tag_configuration QuicksightDataSet#row_level_permission_tag_configuration}
  */
  readonly rowLevelPermissionTagConfiguration?: QuicksightDataSetRowLevelPermissionTagConfiguration;
}
export interface QuicksightDataSetOutputColumns {
}

export function quicksightDataSetOutputColumnsToTerraform(struct?: QuicksightDataSetOutputColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class QuicksightDataSetOutputColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetOutputColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetOutputColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class QuicksightDataSetOutputColumnsList extends cdktf.ComplexList {

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
  public get(index: number): QuicksightDataSetOutputColumnsOutputReference {
    return new QuicksightDataSetOutputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
}

export function quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference | QuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._countryCode = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._countryCode = value.countryCode;
      this._name = value.name;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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
    return this._name;
  }
}
export interface QuicksightDataSetColumnGroups {
  /**
  * geo_spatial_column_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}
  */
  readonly geoSpatialColumnGroup?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup;
}

export function quicksightDataSetColumnGroupsToTerraform(struct?: QuicksightDataSetColumnGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_spatial_column_group: quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct!.geoSpatialColumnGroup),
  }
}

export class QuicksightDataSetColumnGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetColumnGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoSpatialColumnGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoSpatialColumnGroup = this._geoSpatialColumnGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetColumnGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoSpatialColumnGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoSpatialColumnGroup.internalValue = value.geoSpatialColumnGroup;
    }
  }

  // geo_spatial_column_group - computed: false, optional: true, required: false
  private _geoSpatialColumnGroup = new QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(this, "geo_spatial_column_group");
  public get geoSpatialColumnGroup() {
    return this._geoSpatialColumnGroup;
  }
  public putGeoSpatialColumnGroup(value: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup) {
    this._geoSpatialColumnGroup.internalValue = value;
  }
  public resetGeoSpatialColumnGroup() {
    this._geoSpatialColumnGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoSpatialColumnGroupInput() {
    return this._geoSpatialColumnGroup.internalValue;
  }
}

export class QuicksightDataSetColumnGroupsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetColumnGroups[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetColumnGroupsOutputReference {
    return new QuicksightDataSetColumnGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetColumnLevelPermissionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}
  */
  readonly principals?: string[];
}

export function quicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
  }
}

export class QuicksightDataSetColumnLevelPermissionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._principals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._principals = value.principals;
    }
  }

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}

export class QuicksightDataSetColumnLevelPermissionRulesList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetColumnLevelPermissionRules[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetColumnLevelPermissionRulesOutputReference {
    return new QuicksightDataSetColumnLevelPermissionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetDataSetUsageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}
  */
  readonly disableUseAsDirectQuerySource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}
  */
  readonly disableUseAsImportedSource?: boolean | cdktf.IResolvable;
}

export function quicksightDataSetDataSetUsageConfigurationToTerraform(struct?: QuicksightDataSetDataSetUsageConfigurationOutputReference | QuicksightDataSetDataSetUsageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_use_as_direct_query_source: cdktf.booleanToTerraform(struct!.disableUseAsDirectQuerySource),
    disable_use_as_imported_source: cdktf.booleanToTerraform(struct!.disableUseAsImportedSource),
  }
}

export class QuicksightDataSetDataSetUsageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetDataSetUsageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUseAsDirectQuerySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseAsDirectQuerySource = this._disableUseAsDirectQuerySource;
    }
    if (this._disableUseAsImportedSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseAsImportedSource = this._disableUseAsImportedSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetDataSetUsageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUseAsDirectQuerySource = undefined;
      this._disableUseAsImportedSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUseAsDirectQuerySource = value.disableUseAsDirectQuerySource;
      this._disableUseAsImportedSource = value.disableUseAsImportedSource;
    }
  }

  // disable_use_as_direct_query_source - computed: true, optional: true, required: false
  private _disableUseAsDirectQuerySource?: boolean | cdktf.IResolvable; 
  public get disableUseAsDirectQuerySource() {
    return this.getBooleanAttribute('disable_use_as_direct_query_source');
  }
  public set disableUseAsDirectQuerySource(value: boolean | cdktf.IResolvable) {
    this._disableUseAsDirectQuerySource = value;
  }
  public resetDisableUseAsDirectQuerySource() {
    this._disableUseAsDirectQuerySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseAsDirectQuerySourceInput() {
    return this._disableUseAsDirectQuerySource;
  }

  // disable_use_as_imported_source - computed: true, optional: true, required: false
  private _disableUseAsImportedSource?: boolean | cdktf.IResolvable; 
  public get disableUseAsImportedSource() {
    return this.getBooleanAttribute('disable_use_as_imported_source');
  }
  public set disableUseAsImportedSource(value: boolean | cdktf.IResolvable) {
    this._disableUseAsImportedSource = value;
  }
  public resetDisableUseAsImportedSource() {
    this._disableUseAsImportedSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseAsImportedSourceInput() {
    return this._disableUseAsImportedSource;
  }
}
export interface QuicksightDataSetFieldFolders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#description QuicksightDataSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#field_folders_id QuicksightDataSet#field_folders_id}
  */
  readonly fieldFoldersId: string;
}

export function quicksightDataSetFieldFoldersToTerraform(struct?: QuicksightDataSetFieldFolders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    description: cdktf.stringToTerraform(struct!.description),
    field_folders_id: cdktf.stringToTerraform(struct!.fieldFoldersId),
  }
}

export class QuicksightDataSetFieldFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetFieldFolders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fieldFoldersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldFoldersId = this._fieldFoldersId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetFieldFolders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._description = undefined;
      this._fieldFoldersId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._description = value.description;
      this._fieldFoldersId = value.fieldFoldersId;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // field_folders_id - computed: false, optional: false, required: true
  private _fieldFoldersId?: string; 
  public get fieldFoldersId() {
    return this.getStringAttribute('field_folders_id');
  }
  public set fieldFoldersId(value: string) {
    this._fieldFoldersId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFoldersIdInput() {
    return this._fieldFoldersId;
  }
}

export class QuicksightDataSetFieldFoldersList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetFieldFolders[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetFieldFoldersOutputReference {
    return new QuicksightDataSetFieldFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#format QuicksightDataSet#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}
  */
  readonly newColumnType: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    format: cdktf.stringToTerraform(struct!.format),
    new_column_type: cdktf.stringToTerraform(struct!.newColumnType),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._newColumnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColumnType = this._newColumnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._format = undefined;
      this._newColumnType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._format = value.format;
      this._newColumnType = value.newColumnType;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // new_column_type - computed: false, optional: false, required: true
  private _newColumnType?: string; 
  public get newColumnType() {
    return this.getStringAttribute('new_column_type');
  }
  public set newColumnType(value: string) {
    this._newColumnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newColumnTypeInput() {
    return this._newColumnType;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_id QuicksightDataSet#column_id}
  */
  readonly columnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#expression QuicksightDataSet#expression}
  */
  readonly expression: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_id: cdktf.stringToTerraform(struct!.columnId),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnId = this._columnId;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnId = undefined;
      this._columnName = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnId = value.columnId;
      this._columnName = value.columnName;
      this._expression = value.expression;
    }
  }

  // column_id - computed: false, optional: false, required: true
  private _columnId?: string; 
  public get columnId() {
    return this.getStringAttribute('column_id');
  }
  public set columnId(value: string) {
    this._columnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIdInput() {
    return this._columnId;
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference {
    return new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
  */
  readonly columns: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | cdktf.IResolvable;
}

export function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform, true)(struct!.columns),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns.internalValue = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}
  */
  readonly conditionExpression: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionExpression = value.conditionExpression;
    }
  }

  // condition_expression - computed: false, optional: false, required: true
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}
  */
  readonly projectedColumns: string[];
}

export function quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    projected_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectedColumns),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectedColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectedColumns = this._projectedColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectedColumns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectedColumns = value.projectedColumns;
    }
  }

  // projected_columns - computed: false, optional: false, required: true
  private _projectedColumns?: string[]; 
  public get projectedColumns() {
    return this.getListAttribute('projected_columns');
  }
  public set projectedColumns(value: string[]) {
    this._projectedColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedColumnsInput() {
    return this._projectedColumns;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}
  */
  readonly newColumnName: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    new_column_name: cdktf.stringToTerraform(struct!.newColumnName),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._newColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColumnName = this._newColumnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._newColumnName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._newColumnName = value.newColumnName;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // new_column_name - computed: false, optional: false, required: true
  private _newColumnName?: string; 
  public get newColumnName() {
    return this.getStringAttribute('new_column_name');
  }
  public set newColumnName(value: string) {
    this._newColumnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newColumnNameInput() {
    return this._newColumnName;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#text QuicksightDataSet#text}
  */
  readonly text?: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}
  */
  readonly columnGeographicRole?: string;
  /**
  * column_description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_description QuicksightDataSet#column_description}
  */
  readonly columnDescription?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;
}

export function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_geographic_role: cdktf.stringToTerraform(struct!.columnGeographicRole),
    column_description: quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct!.columnDescription),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnGeographicRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGeographicRole = this._columnGeographicRole;
    }
    if (this._columnDescription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescription = this._columnDescription?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnGeographicRole = undefined;
      this._columnDescription.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnGeographicRole = value.columnGeographicRole;
      this._columnDescription.internalValue = value.columnDescription;
    }
  }

  // column_geographic_role - computed: true, optional: true, required: false
  private _columnGeographicRole?: string; 
  public get columnGeographicRole() {
    return this.getStringAttribute('column_geographic_role');
  }
  public set columnGeographicRole(value: string) {
    this._columnGeographicRole = value;
  }
  public resetColumnGeographicRole() {
    this._columnGeographicRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGeographicRoleInput() {
    return this._columnGeographicRole;
  }

  // column_description - computed: false, optional: true, required: false
  private _columnDescription = new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(this, "column_description");
  public get columnDescription() {
    return this._columnDescription;
  }
  public putColumnDescription(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription) {
    this._columnDescription.internalValue = value;
  }
  public resetColumnDescription() {
    this._columnDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionInput() {
    return this._columnDescription.internalValue;
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference {
    return new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}
  */
  readonly tags: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | cdktf.IResolvable;
}

export function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    tags: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform, true)(struct!.tags),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._tags.internalValue = value.tags;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // tags - computed: false, optional: false, required: true
  private _tags = new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tag_names QuicksightDataSet#tag_names}
  */
  readonly tagNames: string[];
}

export function quicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagNames),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._tagNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNames = this._tagNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._tagNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._tagNames = value.tagNames;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // tag_names - computed: false, optional: false, required: true
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }
}
export interface QuicksightDataSetLogicalTableMapDataTransforms {
  /**
  * cast_column_type_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}
  */
  readonly castColumnTypeOperation?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation;
  /**
  * create_columns_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#create_columns_operation QuicksightDataSet#create_columns_operation}
  */
  readonly createColumnsOperation?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation;
  /**
  * filter_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#filter_operation QuicksightDataSet#filter_operation}
  */
  readonly filterOperation?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation;
  /**
  * project_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#project_operation QuicksightDataSet#project_operation}
  */
  readonly projectOperation?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation;
  /**
  * rename_column_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#rename_column_operation QuicksightDataSet#rename_column_operation}
  */
  readonly renameColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation;
  /**
  * tag_column_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tag_column_operation QuicksightDataSet#tag_column_operation}
  */
  readonly tagColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation;
  /**
  * untag_column_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#untag_column_operation QuicksightDataSet#untag_column_operation}
  */
  readonly untagColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation;
}

export function quicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cast_column_type_operation: quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct!.castColumnTypeOperation),
    create_columns_operation: quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct!.createColumnsOperation),
    filter_operation: quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct!.filterOperation),
    project_operation: quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct!.projectOperation),
    rename_column_operation: quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct!.renameColumnOperation),
    tag_column_operation: quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct!.tagColumnOperation),
    untag_column_operation: quicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationToTerraform(struct!.untagColumnOperation),
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._castColumnTypeOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.castColumnTypeOperation = this._castColumnTypeOperation?.internalValue;
    }
    if (this._createColumnsOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createColumnsOperation = this._createColumnsOperation?.internalValue;
    }
    if (this._filterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperation = this._filterOperation?.internalValue;
    }
    if (this._projectOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectOperation = this._projectOperation?.internalValue;
    }
    if (this._renameColumnOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameColumnOperation = this._renameColumnOperation?.internalValue;
    }
    if (this._tagColumnOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagColumnOperation = this._tagColumnOperation?.internalValue;
    }
    if (this._untagColumnOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagColumnOperation = this._untagColumnOperation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._castColumnTypeOperation.internalValue = undefined;
      this._createColumnsOperation.internalValue = undefined;
      this._filterOperation.internalValue = undefined;
      this._projectOperation.internalValue = undefined;
      this._renameColumnOperation.internalValue = undefined;
      this._tagColumnOperation.internalValue = undefined;
      this._untagColumnOperation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._castColumnTypeOperation.internalValue = value.castColumnTypeOperation;
      this._createColumnsOperation.internalValue = value.createColumnsOperation;
      this._filterOperation.internalValue = value.filterOperation;
      this._projectOperation.internalValue = value.projectOperation;
      this._renameColumnOperation.internalValue = value.renameColumnOperation;
      this._tagColumnOperation.internalValue = value.tagColumnOperation;
      this._untagColumnOperation.internalValue = value.untagColumnOperation;
    }
  }

  // cast_column_type_operation - computed: false, optional: true, required: false
  private _castColumnTypeOperation = new QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(this, "cast_column_type_operation");
  public get castColumnTypeOperation() {
    return this._castColumnTypeOperation;
  }
  public putCastColumnTypeOperation(value: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation) {
    this._castColumnTypeOperation.internalValue = value;
  }
  public resetCastColumnTypeOperation() {
    this._castColumnTypeOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castColumnTypeOperationInput() {
    return this._castColumnTypeOperation.internalValue;
  }

  // create_columns_operation - computed: false, optional: true, required: false
  private _createColumnsOperation = new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(this, "create_columns_operation");
  public get createColumnsOperation() {
    return this._createColumnsOperation;
  }
  public putCreateColumnsOperation(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation) {
    this._createColumnsOperation.internalValue = value;
  }
  public resetCreateColumnsOperation() {
    this._createColumnsOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createColumnsOperationInput() {
    return this._createColumnsOperation.internalValue;
  }

  // filter_operation - computed: false, optional: true, required: false
  private _filterOperation = new QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation) {
    this._filterOperation.internalValue = value;
  }
  public resetFilterOperation() {
    this._filterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperationInput() {
    return this._filterOperation.internalValue;
  }

  // project_operation - computed: false, optional: true, required: false
  private _projectOperation = new QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(this, "project_operation");
  public get projectOperation() {
    return this._projectOperation;
  }
  public putProjectOperation(value: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation) {
    this._projectOperation.internalValue = value;
  }
  public resetProjectOperation() {
    this._projectOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectOperationInput() {
    return this._projectOperation.internalValue;
  }

  // rename_column_operation - computed: false, optional: true, required: false
  private _renameColumnOperation = new QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(this, "rename_column_operation");
  public get renameColumnOperation() {
    return this._renameColumnOperation;
  }
  public putRenameColumnOperation(value: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation) {
    this._renameColumnOperation.internalValue = value;
  }
  public resetRenameColumnOperation() {
    this._renameColumnOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameColumnOperationInput() {
    return this._renameColumnOperation.internalValue;
  }

  // tag_column_operation - computed: false, optional: true, required: false
  private _tagColumnOperation = new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(this, "tag_column_operation");
  public get tagColumnOperation() {
    return this._tagColumnOperation;
  }
  public putTagColumnOperation(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation) {
    this._tagColumnOperation.internalValue = value;
  }
  public resetTagColumnOperation() {
    this._tagColumnOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagColumnOperationInput() {
    return this._tagColumnOperation.internalValue;
  }

  // untag_column_operation - computed: false, optional: true, required: false
  private _untagColumnOperation = new QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference(this, "untag_column_operation");
  public get untagColumnOperation() {
    return this._untagColumnOperation;
  }
  public putUntagColumnOperation(value: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation) {
    this._untagColumnOperation.internalValue = value;
  }
  public resetUntagColumnOperation() {
    this._untagColumnOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untagColumnOperationInput() {
    return this._untagColumnOperation.internalValue;
  }
}

export class QuicksightDataSetLogicalTableMapDataTransformsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetLogicalTableMapDataTransforms[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetLogicalTableMapDataTransformsOutputReference {
    return new QuicksightDataSetLogicalTableMapDataTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}
  */
  readonly uniqueKey?: boolean | cdktf.IResolvable;
}

export function quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unique_key: cdktf.booleanToTerraform(struct!.uniqueKey),
  }
}

export class QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uniqueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKey = this._uniqueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uniqueKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uniqueKey = value.uniqueKey;
    }
  }

  // unique_key - computed: true, optional: true, required: false
  private _uniqueKey?: boolean | cdktf.IResolvable; 
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
  public set uniqueKey(value: boolean | cdktf.IResolvable) {
    this._uniqueKey = value;
  }
  public resetUniqueKey() {
    this._uniqueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey;
  }
}
export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}
  */
  readonly uniqueKey?: boolean | cdktf.IResolvable;
}

export function quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unique_key: cdktf.booleanToTerraform(struct!.uniqueKey),
  }
}

export class QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uniqueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKey = this._uniqueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uniqueKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uniqueKey = value.uniqueKey;
    }
  }

  // unique_key - computed: true, optional: true, required: false
  private _uniqueKey?: boolean | cdktf.IResolvable; 
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
  public set uniqueKey(value: boolean | cdktf.IResolvable) {
    this._uniqueKey = value;
  }
  public resetUniqueKey() {
    this._uniqueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey;
  }
}
export interface QuicksightDataSetLogicalTableMapSourceJoinInstruction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}
  */
  readonly leftOperand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}
  */
  readonly onClause: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}
  */
  readonly rightOperand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
  */
  readonly type: string;
  /**
  * left_join_key_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}
  */
  readonly leftJoinKeyProperties?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;
  /**
  * right_join_key_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}
  */
  readonly rightJoinKeyProperties?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;
}

export function quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstruction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left_operand: cdktf.stringToTerraform(struct!.leftOperand),
    on_clause: cdktf.stringToTerraform(struct!.onClause),
    right_operand: cdktf.stringToTerraform(struct!.rightOperand),
    type: cdktf.stringToTerraform(struct!.type),
    left_join_key_properties: quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct!.leftJoinKeyProperties),
    right_join_key_properties: quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct!.rightJoinKeyProperties),
  }
}

export class QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftOperand !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftOperand = this._leftOperand;
    }
    if (this._onClause !== undefined) {
      hasAnyValues = true;
      internalValueResult.onClause = this._onClause;
    }
    if (this._rightOperand !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightOperand = this._rightOperand;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._leftJoinKeyProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftJoinKeyProperties = this._leftJoinKeyProperties?.internalValue;
    }
    if (this._rightJoinKeyProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightJoinKeyProperties = this._rightJoinKeyProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leftOperand = undefined;
      this._onClause = undefined;
      this._rightOperand = undefined;
      this._type = undefined;
      this._leftJoinKeyProperties.internalValue = undefined;
      this._rightJoinKeyProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leftOperand = value.leftOperand;
      this._onClause = value.onClause;
      this._rightOperand = value.rightOperand;
      this._type = value.type;
      this._leftJoinKeyProperties.internalValue = value.leftJoinKeyProperties;
      this._rightJoinKeyProperties.internalValue = value.rightJoinKeyProperties;
    }
  }

  // left_operand - computed: false, optional: false, required: true
  private _leftOperand?: string; 
  public get leftOperand() {
    return this.getStringAttribute('left_operand');
  }
  public set leftOperand(value: string) {
    this._leftOperand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftOperandInput() {
    return this._leftOperand;
  }

  // on_clause - computed: false, optional: false, required: true
  private _onClause?: string; 
  public get onClause() {
    return this.getStringAttribute('on_clause');
  }
  public set onClause(value: string) {
    this._onClause = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onClauseInput() {
    return this._onClause;
  }

  // right_operand - computed: false, optional: false, required: true
  private _rightOperand?: string; 
  public get rightOperand() {
    return this.getStringAttribute('right_operand');
  }
  public set rightOperand(value: string) {
    this._rightOperand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightOperandInput() {
    return this._rightOperand;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // left_join_key_properties - computed: false, optional: true, required: false
  private _leftJoinKeyProperties = new QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(this, "left_join_key_properties");
  public get leftJoinKeyProperties() {
    return this._leftJoinKeyProperties;
  }
  public putLeftJoinKeyProperties(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties) {
    this._leftJoinKeyProperties.internalValue = value;
  }
  public resetLeftJoinKeyProperties() {
    this._leftJoinKeyProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftJoinKeyPropertiesInput() {
    return this._leftJoinKeyProperties.internalValue;
  }

  // right_join_key_properties - computed: false, optional: true, required: false
  private _rightJoinKeyProperties = new QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(this, "right_join_key_properties");
  public get rightJoinKeyProperties() {
    return this._rightJoinKeyProperties;
  }
  public putRightJoinKeyProperties(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties) {
    this._rightJoinKeyProperties.internalValue = value;
  }
  public resetRightJoinKeyProperties() {
    this._rightJoinKeyProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightJoinKeyPropertiesInput() {
    return this._rightJoinKeyProperties.internalValue;
  }
}
export interface QuicksightDataSetLogicalTableMapSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}
  */
  readonly dataSetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}
  */
  readonly physicalTableId?: string;
  /**
  * join_instruction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}
  */
  readonly joinInstruction?: QuicksightDataSetLogicalTableMapSourceJoinInstruction;
}

export function quicksightDataSetLogicalTableMapSourceToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceOutputReference | QuicksightDataSetLogicalTableMapSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    physical_table_id: cdktf.stringToTerraform(struct!.physicalTableId),
    join_instruction: quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct!.joinInstruction),
  }
}

export class QuicksightDataSetLogicalTableMapSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetLogicalTableMapSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._physicalTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalTableId = this._physicalTableId;
    }
    if (this._joinInstruction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinInstruction = this._joinInstruction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMapSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetArn = undefined;
      this._physicalTableId = undefined;
      this._joinInstruction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetArn = value.dataSetArn;
      this._physicalTableId = value.physicalTableId;
      this._joinInstruction.internalValue = value.joinInstruction;
    }
  }

  // data_set_arn - computed: true, optional: true, required: false
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  public resetDataSetArn() {
    this._dataSetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // physical_table_id - computed: true, optional: true, required: false
  private _physicalTableId?: string; 
  public get physicalTableId() {
    return this.getStringAttribute('physical_table_id');
  }
  public set physicalTableId(value: string) {
    this._physicalTableId = value;
  }
  public resetPhysicalTableId() {
    this._physicalTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableIdInput() {
    return this._physicalTableId;
  }

  // join_instruction - computed: false, optional: true, required: false
  private _joinInstruction = new QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(this, "join_instruction");
  public get joinInstruction() {
    return this._joinInstruction;
  }
  public putJoinInstruction(value: QuicksightDataSetLogicalTableMapSourceJoinInstruction) {
    this._joinInstruction.internalValue = value;
  }
  public resetJoinInstruction() {
    this._joinInstruction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinInstructionInput() {
    return this._joinInstruction.internalValue;
  }
}
export interface QuicksightDataSetLogicalTableMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#alias QuicksightDataSet#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#logical_table_map_id QuicksightDataSet#logical_table_map_id}
  */
  readonly logicalTableMapId: string;
  /**
  * data_transforms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_transforms QuicksightDataSet#data_transforms}
  */
  readonly dataTransforms?: QuicksightDataSetLogicalTableMapDataTransforms[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#source QuicksightDataSet#source}
  */
  readonly source: QuicksightDataSetLogicalTableMapSource;
}

export function quicksightDataSetLogicalTableMapToTerraform(struct?: QuicksightDataSetLogicalTableMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    logical_table_map_id: cdktf.stringToTerraform(struct!.logicalTableMapId),
    data_transforms: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsToTerraform, true)(struct!.dataTransforms),
    source: quicksightDataSetLogicalTableMapSourceToTerraform(struct!.source),
  }
}

export class QuicksightDataSetLogicalTableMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetLogicalTableMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._logicalTableMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalTableMapId = this._logicalTableMapId;
    }
    if (this._dataTransforms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransforms = this._dataTransforms?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetLogicalTableMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._logicalTableMapId = undefined;
      this._dataTransforms.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._logicalTableMapId = value.logicalTableMapId;
      this._dataTransforms.internalValue = value.dataTransforms;
      this._source.internalValue = value.source;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // logical_table_map_id - computed: false, optional: false, required: true
  private _logicalTableMapId?: string; 
  public get logicalTableMapId() {
    return this.getStringAttribute('logical_table_map_id');
  }
  public set logicalTableMapId(value: string) {
    this._logicalTableMapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalTableMapIdInput() {
    return this._logicalTableMapId;
  }

  // data_transforms - computed: false, optional: true, required: false
  private _dataTransforms = new QuicksightDataSetLogicalTableMapDataTransformsList(this, "data_transforms", false);
  public get dataTransforms() {
    return this._dataTransforms;
  }
  public putDataTransforms(value: QuicksightDataSetLogicalTableMapDataTransforms[] | cdktf.IResolvable) {
    this._dataTransforms.internalValue = value;
  }
  public resetDataTransforms() {
    this._dataTransforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransformsInput() {
    return this._dataTransforms.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new QuicksightDataSetLogicalTableMapSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: QuicksightDataSetLogicalTableMapSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class QuicksightDataSetLogicalTableMapList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetLogicalTableMap[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetLogicalTableMapOutputReference {
    return new QuicksightDataSetLogicalTableMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#actions QuicksightDataSet#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#principal QuicksightDataSet#principal}
  */
  readonly principal: string;
}

export function quicksightDataSetPermissionsToTerraform(struct?: QuicksightDataSetPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class QuicksightDataSetPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
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
    return this._principal;
  }
}

export class QuicksightDataSetPermissionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetPermissions[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetPermissionsOutputReference {
    return new QuicksightDataSetPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetPhysicalTableMapCustomSqlColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class QuicksightDataSetPhysicalTableMapCustomSqlColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference {
    return new QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetPhysicalTableMapCustomSql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}
  */
  readonly sqlQuery: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
  */
  readonly columns?: QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | cdktf.IResolvable;
}

export function quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlOutputReference | QuicksightDataSetPhysicalTableMapCustomSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    name: cdktf.stringToTerraform(struct!.name),
    sql_query: cdktf.stringToTerraform(struct!.sqlQuery),
    columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform, true)(struct!.columns),
  }
}

export class QuicksightDataSetPhysicalTableMapCustomSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetPhysicalTableMapCustomSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapCustomSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceArn = undefined;
      this._name = undefined;
      this._sqlQuery = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceArn = value.dataSourceArn;
      this._name = value.name;
      this._sqlQuery = value.sqlQuery;
      this._columns.internalValue = value.columns;
    }
  }

  // data_source_arn - computed: false, optional: false, required: true
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
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
    return this._name;
  }

  // sql_query - computed: false, optional: false, required: true
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new QuicksightDataSetPhysicalTableMapCustomSqlColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface QuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference {
    return new QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetPhysicalTableMapRelationalTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}
  */
  readonly schema?: string;
  /**
  * input_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}
  */
  readonly inputColumns: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | cdktf.IResolvable;
}

export function quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableOutputReference | QuicksightDataSetPhysicalTableMapRelationalTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    input_columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform, true)(struct!.inputColumns),
  }
}

export class QuicksightDataSetPhysicalTableMapRelationalTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetPhysicalTableMapRelationalTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._inputColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumns = this._inputColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapRelationalTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._dataSourceArn = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._inputColumns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._dataSourceArn = value.dataSourceArn;
      this._name = value.name;
      this._schema = value.schema;
      this._inputColumns.internalValue = value.inputColumns;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // data_source_arn - computed: false, optional: false, required: true
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
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
    return this._name;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // input_columns - computed: false, optional: false, required: true
  private _inputColumns = new QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(this, "input_columns", false);
  public get inputColumns() {
    return this._inputColumns;
  }
  public putInputColumns(value: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | cdktf.IResolvable) {
    this._inputColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnsInput() {
    return this._inputColumns.internalValue;
  }
}
export interface QuicksightDataSetPhysicalTableMapS3SourceInputColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference {
    return new QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}
  */
  readonly containsHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#format QuicksightDataSet#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}
  */
  readonly startFromRow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}
  */
  readonly textQualifier?: string;
}

export function quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference | QuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains_header: cdktf.booleanToTerraform(struct!.containsHeader),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    format: cdktf.stringToTerraform(struct!.format),
    start_from_row: cdktf.numberToTerraform(struct!.startFromRow),
    text_qualifier: cdktf.stringToTerraform(struct!.textQualifier),
  }
}

export class QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.containsHeader = this._containsHeader;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._startFromRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.startFromRow = this._startFromRow;
    }
    if (this._textQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.textQualifier = this._textQualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containsHeader = undefined;
      this._delimiter = undefined;
      this._format = undefined;
      this._startFromRow = undefined;
      this._textQualifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containsHeader = value.containsHeader;
      this._delimiter = value.delimiter;
      this._format = value.format;
      this._startFromRow = value.startFromRow;
      this._textQualifier = value.textQualifier;
    }
  }

  // contains_header - computed: true, optional: true, required: false
  private _containsHeader?: boolean | cdktf.IResolvable; 
  public get containsHeader() {
    return this.getBooleanAttribute('contains_header');
  }
  public set containsHeader(value: boolean | cdktf.IResolvable) {
    this._containsHeader = value;
  }
  public resetContainsHeader() {
    this._containsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsHeaderInput() {
    return this._containsHeader;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // start_from_row - computed: true, optional: true, required: false
  private _startFromRow?: number; 
  public get startFromRow() {
    return this.getNumberAttribute('start_from_row');
  }
  public set startFromRow(value: number) {
    this._startFromRow = value;
  }
  public resetStartFromRow() {
    this._startFromRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startFromRowInput() {
    return this._startFromRow;
  }

  // text_qualifier - computed: true, optional: true, required: false
  private _textQualifier?: string; 
  public get textQualifier() {
    return this.getStringAttribute('text_qualifier');
  }
  public set textQualifier(value: string) {
    this._textQualifier = value;
  }
  public resetTextQualifier() {
    this._textQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textQualifierInput() {
    return this._textQualifier;
  }
}
export interface QuicksightDataSetPhysicalTableMapS3Source {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * input_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}
  */
  readonly inputColumns: QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | cdktf.IResolvable;
  /**
  * upload_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}
  */
  readonly uploadSettings: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings;
}

export function quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceOutputReference | QuicksightDataSetPhysicalTableMapS3Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    input_columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform, true)(struct!.inputColumns),
    upload_settings: quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct!.uploadSettings),
  }
}

export class QuicksightDataSetPhysicalTableMapS3SourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetPhysicalTableMapS3Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._inputColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumns = this._inputColumns?.internalValue;
    }
    if (this._uploadSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadSettings = this._uploadSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMapS3Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceArn = undefined;
      this._inputColumns.internalValue = undefined;
      this._uploadSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceArn = value.dataSourceArn;
      this._inputColumns.internalValue = value.inputColumns;
      this._uploadSettings.internalValue = value.uploadSettings;
    }
  }

  // data_source_arn - computed: false, optional: false, required: true
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
  }

  // input_columns - computed: false, optional: false, required: true
  private _inputColumns = new QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(this, "input_columns", false);
  public get inputColumns() {
    return this._inputColumns;
  }
  public putInputColumns(value: QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | cdktf.IResolvable) {
    this._inputColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnsInput() {
    return this._inputColumns.internalValue;
  }

  // upload_settings - computed: false, optional: false, required: true
  private _uploadSettings = new QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(this, "upload_settings");
  public get uploadSettings() {
    return this._uploadSettings;
  }
  public putUploadSettings(value: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings) {
    this._uploadSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSettingsInput() {
    return this._uploadSettings.internalValue;
  }
}
export interface QuicksightDataSetPhysicalTableMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#physical_table_map_id QuicksightDataSet#physical_table_map_id}
  */
  readonly physicalTableMapId: string;
  /**
  * custom_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#custom_sql QuicksightDataSet#custom_sql}
  */
  readonly customSql?: QuicksightDataSetPhysicalTableMapCustomSql;
  /**
  * relational_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#relational_table QuicksightDataSet#relational_table}
  */
  readonly relationalTable?: QuicksightDataSetPhysicalTableMapRelationalTable;
  /**
  * s3_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#s3_source QuicksightDataSet#s3_source}
  */
  readonly s3Source?: QuicksightDataSetPhysicalTableMapS3Source;
}

export function quicksightDataSetPhysicalTableMapToTerraform(struct?: QuicksightDataSetPhysicalTableMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    physical_table_map_id: cdktf.stringToTerraform(struct!.physicalTableMapId),
    custom_sql: quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct!.customSql),
    relational_table: quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct!.relationalTable),
    s3_source: quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct!.s3Source),
  }
}

export class QuicksightDataSetPhysicalTableMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetPhysicalTableMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._physicalTableMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalTableMapId = this._physicalTableMapId;
    }
    if (this._customSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSql = this._customSql?.internalValue;
    }
    if (this._relationalTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationalTable = this._relationalTable?.internalValue;
    }
    if (this._s3Source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Source = this._s3Source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetPhysicalTableMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._physicalTableMapId = undefined;
      this._customSql.internalValue = undefined;
      this._relationalTable.internalValue = undefined;
      this._s3Source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._physicalTableMapId = value.physicalTableMapId;
      this._customSql.internalValue = value.customSql;
      this._relationalTable.internalValue = value.relationalTable;
      this._s3Source.internalValue = value.s3Source;
    }
  }

  // physical_table_map_id - computed: false, optional: false, required: true
  private _physicalTableMapId?: string; 
  public get physicalTableMapId() {
    return this.getStringAttribute('physical_table_map_id');
  }
  public set physicalTableMapId(value: string) {
    this._physicalTableMapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableMapIdInput() {
    return this._physicalTableMapId;
  }

  // custom_sql - computed: false, optional: true, required: false
  private _customSql = new QuicksightDataSetPhysicalTableMapCustomSqlOutputReference(this, "custom_sql");
  public get customSql() {
    return this._customSql;
  }
  public putCustomSql(value: QuicksightDataSetPhysicalTableMapCustomSql) {
    this._customSql.internalValue = value;
  }
  public resetCustomSql() {
    this._customSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSqlInput() {
    return this._customSql.internalValue;
  }

  // relational_table - computed: false, optional: true, required: false
  private _relationalTable = new QuicksightDataSetPhysicalTableMapRelationalTableOutputReference(this, "relational_table");
  public get relationalTable() {
    return this._relationalTable;
  }
  public putRelationalTable(value: QuicksightDataSetPhysicalTableMapRelationalTable) {
    this._relationalTable.internalValue = value;
  }
  public resetRelationalTable() {
    this._relationalTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalTableInput() {
    return this._relationalTable.internalValue;
  }

  // s3_source - computed: false, optional: true, required: false
  private _s3Source = new QuicksightDataSetPhysicalTableMapS3SourceOutputReference(this, "s3_source");
  public get s3Source() {
    return this._s3Source;
  }
  public putS3Source(value: QuicksightDataSetPhysicalTableMapS3Source) {
    this._s3Source.internalValue = value;
  }
  public resetS3Source() {
    this._s3Source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SourceInput() {
    return this._s3Source.internalValue;
  }
}

export class QuicksightDataSetPhysicalTableMapList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetPhysicalTableMap[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetPhysicalTableMapOutputReference {
    return new QuicksightDataSetPhysicalTableMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#size QuicksightDataSet#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#size_unit QuicksightDataSet#size_unit}
  */
  readonly sizeUnit: string;
}

export function quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowToTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    size: cdktf.numberToTerraform(struct!.size),
    size_unit: cdktf.stringToTerraform(struct!.sizeUnit),
  }
}

export class QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeUnit = this._sizeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._size = undefined;
      this._sizeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._size = value.size;
      this._sizeUnit = value.sizeUnit;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: false, optional: false, required: true
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }
}
export interface QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh {
  /**
  * lookback_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#lookback_window QuicksightDataSet#lookback_window}
  */
  readonly lookbackWindow: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow;
}

export function quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshToTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lookback_window: quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowToTerraform(struct!.lookbackWindow),
  }
}

export class QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookbackWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookbackWindow = this._lookbackWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookbackWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookbackWindow.internalValue = value.lookbackWindow;
    }
  }

  // lookback_window - computed: false, optional: false, required: true
  private _lookbackWindow = new QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference(this, "lookback_window");
  public get lookbackWindow() {
    return this._lookbackWindow;
  }
  public putLookbackWindow(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow) {
    this._lookbackWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackWindowInput() {
    return this._lookbackWindow.internalValue;
  }
}
export interface QuicksightDataSetRefreshPropertiesRefreshConfiguration {
  /**
  * incremental_refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#incremental_refresh QuicksightDataSet#incremental_refresh}
  */
  readonly incrementalRefresh: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh;
}

export function quicksightDataSetRefreshPropertiesRefreshConfigurationToTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    incremental_refresh: quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshToTerraform(struct!.incrementalRefresh),
  }
}

export class QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetRefreshPropertiesRefreshConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incrementalRefresh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalRefresh = this._incrementalRefresh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRefreshPropertiesRefreshConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._incrementalRefresh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._incrementalRefresh.internalValue = value.incrementalRefresh;
    }
  }

  // incremental_refresh - computed: false, optional: false, required: true
  private _incrementalRefresh = new QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference(this, "incremental_refresh");
  public get incrementalRefresh() {
    return this._incrementalRefresh;
  }
  public putIncrementalRefresh(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh) {
    this._incrementalRefresh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalRefreshInput() {
    return this._incrementalRefresh.internalValue;
  }
}
export interface QuicksightDataSetRefreshProperties {
  /**
  * refresh_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#refresh_configuration QuicksightDataSet#refresh_configuration}
  */
  readonly refreshConfiguration: QuicksightDataSetRefreshPropertiesRefreshConfiguration;
}

export function quicksightDataSetRefreshPropertiesToTerraform(struct?: QuicksightDataSetRefreshPropertiesOutputReference | QuicksightDataSetRefreshProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_configuration: quicksightDataSetRefreshPropertiesRefreshConfigurationToTerraform(struct!.refreshConfiguration),
  }
}

export class QuicksightDataSetRefreshPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetRefreshProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshConfiguration = this._refreshConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRefreshProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshConfiguration.internalValue = value.refreshConfiguration;
    }
  }

  // refresh_configuration - computed: false, optional: false, required: true
  private _refreshConfiguration = new QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference(this, "refresh_configuration");
  public get refreshConfiguration() {
    return this._refreshConfiguration;
  }
  public putRefreshConfiguration(value: QuicksightDataSetRefreshPropertiesRefreshConfiguration) {
    this._refreshConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshConfigurationInput() {
    return this._refreshConfiguration.internalValue;
  }
}
export interface QuicksightDataSetRowLevelPermissionDataSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}
  */
  readonly permissionPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#status QuicksightDataSet#status}
  */
  readonly status?: string;
}

export function quicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: QuicksightDataSetRowLevelPermissionDataSetOutputReference | QuicksightDataSetRowLevelPermissionDataSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    permission_policy: cdktf.stringToTerraform(struct!.permissionPolicy),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class QuicksightDataSetRowLevelPermissionDataSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetRowLevelPermissionDataSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._permissionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicy = this._permissionPolicy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRowLevelPermissionDataSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._formatVersion = undefined;
      this._namespace = undefined;
      this._permissionPolicy = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._formatVersion = value.formatVersion;
      this._namespace = value.namespace;
      this._permissionPolicy = value.permissionPolicy;
      this._status = value.status;
    }
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
    return this._arn;
  }

  // format_version - computed: false, optional: true, required: false
  private _formatVersion?: string; 
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }
  public set formatVersion(value: string) {
    this._formatVersion = value;
  }
  public resetFormatVersion() {
    this._formatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // permission_policy - computed: false, optional: false, required: true
  private _permissionPolicy?: string; 
  public get permissionPolicy() {
    return this.getStringAttribute('permission_policy');
  }
  public set permissionPolicy(value: string) {
    this._permissionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyInput() {
    return this._permissionPolicy;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface QuicksightDataSetRowLevelPermissionTagConfigurationTagRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#match_all_value QuicksightDataSet#match_all_value}
  */
  readonly matchAllValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tag_key QuicksightDataSet#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tag_multi_value_delimiter QuicksightDataSet#tag_multi_value_delimiter}
  */
  readonly tagMultiValueDelimiter?: string;
}

export function quicksightDataSetRowLevelPermissionTagConfigurationTagRulesToTerraform(struct?: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    match_all_value: cdktf.stringToTerraform(struct!.matchAllValue),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_multi_value_delimiter: cdktf.stringToTerraform(struct!.tagMultiValueDelimiter),
  }
}

export class QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._matchAllValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllValue = this._matchAllValue;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagMultiValueDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMultiValueDelimiter = this._tagMultiValueDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._matchAllValue = undefined;
      this._tagKey = undefined;
      this._tagMultiValueDelimiter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._matchAllValue = value.matchAllValue;
      this._tagKey = value.tagKey;
      this._tagMultiValueDelimiter = value.tagMultiValueDelimiter;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // match_all_value - computed: false, optional: true, required: false
  private _matchAllValue?: string; 
  public get matchAllValue() {
    return this.getStringAttribute('match_all_value');
  }
  public set matchAllValue(value: string) {
    this._matchAllValue = value;
  }
  public resetMatchAllValue() {
    this._matchAllValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllValueInput() {
    return this._matchAllValue;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_multi_value_delimiter - computed: false, optional: true, required: false
  private _tagMultiValueDelimiter?: string; 
  public get tagMultiValueDelimiter() {
    return this.getStringAttribute('tag_multi_value_delimiter');
  }
  public set tagMultiValueDelimiter(value: string) {
    this._tagMultiValueDelimiter = value;
  }
  public resetTagMultiValueDelimiter() {
    this._tagMultiValueDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMultiValueDelimiterInput() {
    return this._tagMultiValueDelimiter;
  }
}

export class QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | cdktf.IResolvable

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
  public get(index: number): QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference {
    return new QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSetRowLevelPermissionTagConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#status QuicksightDataSet#status}
  */
  readonly status?: string;
  /**
  * tag_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set#tag_rules QuicksightDataSet#tag_rules}
  */
  readonly tagRules: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | cdktf.IResolvable;
}

export function quicksightDataSetRowLevelPermissionTagConfigurationToTerraform(struct?: QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference | QuicksightDataSetRowLevelPermissionTagConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    tag_rules: cdktf.listMapper(quicksightDataSetRowLevelPermissionTagConfigurationTagRulesToTerraform, true)(struct!.tagRules),
  }
}

export class QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSetRowLevelPermissionTagConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagRules = this._tagRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSetRowLevelPermissionTagConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
      this._tagRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
      this._tagRules.internalValue = value.tagRules;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_rules - computed: false, optional: false, required: true
  private _tagRules = new QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList(this, "tag_rules", false);
  public get tagRules() {
    return this._tagRules;
  }
  public putTagRules(value: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | cdktf.IResolvable) {
    this._tagRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRulesInput() {
    return this._tagRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set aws_quicksight_data_set}
*/
export class QuicksightDataSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_data_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_data_set aws_quicksight_data_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDataSetConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDataSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_data_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._awsAccountId = config.awsAccountId;
    this._dataSetId = config.dataSetId;
    this._id = config.id;
    this._importMode = config.importMode;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._columnGroups.internalValue = config.columnGroups;
    this._columnLevelPermissionRules.internalValue = config.columnLevelPermissionRules;
    this._dataSetUsageConfiguration.internalValue = config.dataSetUsageConfiguration;
    this._fieldFolders.internalValue = config.fieldFolders;
    this._logicalTableMap.internalValue = config.logicalTableMap;
    this._permissions.internalValue = config.permissions;
    this._physicalTableMap.internalValue = config.physicalTableMap;
    this._refreshProperties.internalValue = config.refreshProperties;
    this._rowLevelPermissionDataSet.internalValue = config.rowLevelPermissionDataSet;
    this._rowLevelPermissionTagConfiguration.internalValue = config.rowLevelPermissionTagConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
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

  // import_mode - computed: false, optional: false, required: true
  private _importMode?: string; 
  public get importMode() {
    return this.getStringAttribute('import_mode');
  }
  public set importMode(value: string) {
    this._importMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importModeInput() {
    return this._importMode;
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
    return this._name;
  }

  // output_columns - computed: true, optional: false, required: false
  private _outputColumns = new QuicksightDataSetOutputColumnsList(this, "output_columns", false);
  public get outputColumns() {
    return this._outputColumns;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // column_groups - computed: false, optional: true, required: false
  private _columnGroups = new QuicksightDataSetColumnGroupsList(this, "column_groups", false);
  public get columnGroups() {
    return this._columnGroups;
  }
  public putColumnGroups(value: QuicksightDataSetColumnGroups[] | cdktf.IResolvable) {
    this._columnGroups.internalValue = value;
  }
  public resetColumnGroups() {
    this._columnGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupsInput() {
    return this._columnGroups.internalValue;
  }

  // column_level_permission_rules - computed: false, optional: true, required: false
  private _columnLevelPermissionRules = new QuicksightDataSetColumnLevelPermissionRulesList(this, "column_level_permission_rules", false);
  public get columnLevelPermissionRules() {
    return this._columnLevelPermissionRules;
  }
  public putColumnLevelPermissionRules(value: QuicksightDataSetColumnLevelPermissionRules[] | cdktf.IResolvable) {
    this._columnLevelPermissionRules.internalValue = value;
  }
  public resetColumnLevelPermissionRules() {
    this._columnLevelPermissionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnLevelPermissionRulesInput() {
    return this._columnLevelPermissionRules.internalValue;
  }

  // data_set_usage_configuration - computed: false, optional: true, required: false
  private _dataSetUsageConfiguration = new QuicksightDataSetDataSetUsageConfigurationOutputReference(this, "data_set_usage_configuration");
  public get dataSetUsageConfiguration() {
    return this._dataSetUsageConfiguration;
  }
  public putDataSetUsageConfiguration(value: QuicksightDataSetDataSetUsageConfiguration) {
    this._dataSetUsageConfiguration.internalValue = value;
  }
  public resetDataSetUsageConfiguration() {
    this._dataSetUsageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetUsageConfigurationInput() {
    return this._dataSetUsageConfiguration.internalValue;
  }

  // field_folders - computed: false, optional: true, required: false
  private _fieldFolders = new QuicksightDataSetFieldFoldersList(this, "field_folders", true);
  public get fieldFolders() {
    return this._fieldFolders;
  }
  public putFieldFolders(value: QuicksightDataSetFieldFolders[] | cdktf.IResolvable) {
    this._fieldFolders.internalValue = value;
  }
  public resetFieldFolders() {
    this._fieldFolders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFoldersInput() {
    return this._fieldFolders.internalValue;
  }

  // logical_table_map - computed: false, optional: true, required: false
  private _logicalTableMap = new QuicksightDataSetLogicalTableMapList(this, "logical_table_map", true);
  public get logicalTableMap() {
    return this._logicalTableMap;
  }
  public putLogicalTableMap(value: QuicksightDataSetLogicalTableMap[] | cdktf.IResolvable) {
    this._logicalTableMap.internalValue = value;
  }
  public resetLogicalTableMap() {
    this._logicalTableMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalTableMapInput() {
    return this._logicalTableMap.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new QuicksightDataSetPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightDataSetPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // physical_table_map - computed: false, optional: true, required: false
  private _physicalTableMap = new QuicksightDataSetPhysicalTableMapList(this, "physical_table_map", true);
  public get physicalTableMap() {
    return this._physicalTableMap;
  }
  public putPhysicalTableMap(value: QuicksightDataSetPhysicalTableMap[] | cdktf.IResolvable) {
    this._physicalTableMap.internalValue = value;
  }
  public resetPhysicalTableMap() {
    this._physicalTableMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableMapInput() {
    return this._physicalTableMap.internalValue;
  }

  // refresh_properties - computed: false, optional: true, required: false
  private _refreshProperties = new QuicksightDataSetRefreshPropertiesOutputReference(this, "refresh_properties");
  public get refreshProperties() {
    return this._refreshProperties;
  }
  public putRefreshProperties(value: QuicksightDataSetRefreshProperties) {
    this._refreshProperties.internalValue = value;
  }
  public resetRefreshProperties() {
    this._refreshProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPropertiesInput() {
    return this._refreshProperties.internalValue;
  }

  // row_level_permission_data_set - computed: false, optional: true, required: false
  private _rowLevelPermissionDataSet = new QuicksightDataSetRowLevelPermissionDataSetOutputReference(this, "row_level_permission_data_set");
  public get rowLevelPermissionDataSet() {
    return this._rowLevelPermissionDataSet;
  }
  public putRowLevelPermissionDataSet(value: QuicksightDataSetRowLevelPermissionDataSet) {
    this._rowLevelPermissionDataSet.internalValue = value;
  }
  public resetRowLevelPermissionDataSet() {
    this._rowLevelPermissionDataSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLevelPermissionDataSetInput() {
    return this._rowLevelPermissionDataSet.internalValue;
  }

  // row_level_permission_tag_configuration - computed: false, optional: true, required: false
  private _rowLevelPermissionTagConfiguration = new QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference(this, "row_level_permission_tag_configuration");
  public get rowLevelPermissionTagConfiguration() {
    return this._rowLevelPermissionTagConfiguration;
  }
  public putRowLevelPermissionTagConfiguration(value: QuicksightDataSetRowLevelPermissionTagConfiguration) {
    this._rowLevelPermissionTagConfiguration.internalValue = value;
  }
  public resetRowLevelPermissionTagConfiguration() {
    this._rowLevelPermissionTagConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLevelPermissionTagConfigurationInput() {
    return this._rowLevelPermissionTagConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      data_set_id: cdktf.stringToTerraform(this._dataSetId),
      id: cdktf.stringToTerraform(this._id),
      import_mode: cdktf.stringToTerraform(this._importMode),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      column_groups: cdktf.listMapper(quicksightDataSetColumnGroupsToTerraform, true)(this._columnGroups.internalValue),
      column_level_permission_rules: cdktf.listMapper(quicksightDataSetColumnLevelPermissionRulesToTerraform, true)(this._columnLevelPermissionRules.internalValue),
      data_set_usage_configuration: quicksightDataSetDataSetUsageConfigurationToTerraform(this._dataSetUsageConfiguration.internalValue),
      field_folders: cdktf.listMapper(quicksightDataSetFieldFoldersToTerraform, true)(this._fieldFolders.internalValue),
      logical_table_map: cdktf.listMapper(quicksightDataSetLogicalTableMapToTerraform, true)(this._logicalTableMap.internalValue),
      permissions: cdktf.listMapper(quicksightDataSetPermissionsToTerraform, true)(this._permissions.internalValue),
      physical_table_map: cdktf.listMapper(quicksightDataSetPhysicalTableMapToTerraform, true)(this._physicalTableMap.internalValue),
      refresh_properties: quicksightDataSetRefreshPropertiesToTerraform(this._refreshProperties.internalValue),
      row_level_permission_data_set: quicksightDataSetRowLevelPermissionDataSetToTerraform(this._rowLevelPermissionDataSet.internalValue),
      row_level_permission_tag_configuration: quicksightDataSetRowLevelPermissionTagConfigurationToTerraform(this._rowLevelPermissionTagConfiguration.internalValue),
    };
  }
}
