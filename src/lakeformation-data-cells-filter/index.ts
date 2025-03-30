// https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationDataCellsFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * table_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}
  */
  readonly tableData?: LakeformationDataCellsFilterTableData[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}
  */
  readonly timeouts?: LakeformationDataCellsFilterTimeouts;
}
export interface LakeformationDataCellsFilterTableDataColumnWildcard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}
  */
  readonly excludedColumnNames?: string[];
}

export function lakeformationDataCellsFilterTableDataColumnWildcardToTerraform(struct?: LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedColumnNames),
  }
}


export function lakeformationDataCellsFilterTableDataColumnWildcardToHclTerraform(struct?: LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationDataCellsFilterTableDataColumnWildcardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedColumnNames = this._excludedColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedColumnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedColumnNames = value.excludedColumnNames;
    }
  }

  // excluded_column_names - computed: false, optional: true, required: false
  private _excludedColumnNames?: string[]; 
  public get excludedColumnNames() {
    return this.getListAttribute('excluded_column_names');
  }
  public set excludedColumnNames(value: string[]) {
    this._excludedColumnNames = value;
  }
  public resetExcludedColumnNames() {
    this._excludedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedColumnNamesInput() {
    return this._excludedColumnNames;
  }
}

export class LakeformationDataCellsFilterTableDataColumnWildcardList extends cdktf.ComplexList {
  public internalValue? : LakeformationDataCellsFilterTableDataColumnWildcard[] | cdktf.IResolvable

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
  public get(index: number): LakeformationDataCellsFilterTableDataColumnWildcardOutputReference {
    return new LakeformationDataCellsFilterTableDataColumnWildcardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard {
}

export function lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardToTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardToHclTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList extends cdktf.ComplexList {
  public internalValue? : LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | cdktf.IResolvable

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
  public get(index: number): LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference {
    return new LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationDataCellsFilterTableDataRowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * all_rows_wildcard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}
  */
  readonly allRowsWildcard?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | cdktf.IResolvable;
}

export function lakeformationDataCellsFilterTableDataRowFilterToTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_expression: cdktf.stringToTerraform(struct!.filterExpression),
    all_rows_wildcard: cdktf.listMapper(lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardToTerraform, true)(struct!.allRowsWildcard),
  }
}


export function lakeformationDataCellsFilterTableDataRowFilterToHclTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.filterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_rows_wildcard: {
      value: cdktf.listMapperHcl(lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardToHclTerraform, true)(struct!.allRowsWildcard),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationDataCellsFilterTableDataRowFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpression = this._filterExpression;
    }
    if (this._allRowsWildcard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRowsWildcard = this._allRowsWildcard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterExpression = undefined;
      this._allRowsWildcard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterExpression = value.filterExpression;
      this._allRowsWildcard.internalValue = value.allRowsWildcard;
    }
  }

  // filter_expression - computed: true, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
  }

  // all_rows_wildcard - computed: false, optional: true, required: false
  private _allRowsWildcard = new LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList(this, "all_rows_wildcard", false);
  public get allRowsWildcard() {
    return this._allRowsWildcard;
  }
  public putAllRowsWildcard(value: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | cdktf.IResolvable) {
    this._allRowsWildcard.internalValue = value;
  }
  public resetAllRowsWildcard() {
    this._allRowsWildcard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRowsWildcardInput() {
    return this._allRowsWildcard.internalValue;
  }
}

export class LakeformationDataCellsFilterTableDataRowFilterList extends cdktf.ComplexList {
  public internalValue? : LakeformationDataCellsFilterTableDataRowFilter[] | cdktf.IResolvable

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
  public get(index: number): LakeformationDataCellsFilterTableDataRowFilterOutputReference {
    return new LakeformationDataCellsFilterTableDataRowFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationDataCellsFilterTableData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}
  */
  readonly tableCatalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}
  */
  readonly versionId?: string;
  /**
  * column_wildcard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}
  */
  readonly columnWildcard?: LakeformationDataCellsFilterTableDataColumnWildcard[] | cdktf.IResolvable;
  /**
  * row_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}
  */
  readonly rowFilter?: LakeformationDataCellsFilterTableDataRowFilter[] | cdktf.IResolvable;
}

export function lakeformationDataCellsFilterTableDataToTerraform(struct?: LakeformationDataCellsFilterTableData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    table_catalog_id: cdktf.stringToTerraform(struct!.tableCatalogId),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    version_id: cdktf.stringToTerraform(struct!.versionId),
    column_wildcard: cdktf.listMapper(lakeformationDataCellsFilterTableDataColumnWildcardToTerraform, true)(struct!.columnWildcard),
    row_filter: cdktf.listMapper(lakeformationDataCellsFilterTableDataRowFilterToTerraform, true)(struct!.rowFilter),
  }
}


export function lakeformationDataCellsFilterTableDataToHclTerraform(struct?: LakeformationDataCellsFilterTableData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.tableCatalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_wildcard: {
      value: cdktf.listMapperHcl(lakeformationDataCellsFilterTableDataColumnWildcardToHclTerraform, true)(struct!.columnWildcard),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationDataCellsFilterTableDataColumnWildcardList",
    },
    row_filter: {
      value: cdktf.listMapperHcl(lakeformationDataCellsFilterTableDataRowFilterToHclTerraform, true)(struct!.rowFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationDataCellsFilterTableDataRowFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationDataCellsFilterTableDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationDataCellsFilterTableData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tableCatalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableCatalogId = this._tableCatalogId;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._columnWildcard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnWildcard = this._columnWildcard?.internalValue;
    }
    if (this._rowFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataCellsFilterTableData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._tableCatalogId = undefined;
      this._tableName = undefined;
      this._versionId = undefined;
      this._columnWildcard.internalValue = undefined;
      this._rowFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._tableCatalogId = value.tableCatalogId;
      this._tableName = value.tableName;
      this._versionId = value.versionId;
      this._columnWildcard.internalValue = value.columnWildcard;
      this._rowFilter.internalValue = value.rowFilter;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
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
    return this._databaseName;
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

  // table_catalog_id - computed: false, optional: false, required: true
  private _tableCatalogId?: string; 
  public get tableCatalogId() {
    return this.getStringAttribute('table_catalog_id');
  }
  public set tableCatalogId(value: string) {
    this._tableCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCatalogIdInput() {
    return this._tableCatalogId;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // column_wildcard - computed: false, optional: true, required: false
  private _columnWildcard = new LakeformationDataCellsFilterTableDataColumnWildcardList(this, "column_wildcard", false);
  public get columnWildcard() {
    return this._columnWildcard;
  }
  public putColumnWildcard(value: LakeformationDataCellsFilterTableDataColumnWildcard[] | cdktf.IResolvable) {
    this._columnWildcard.internalValue = value;
  }
  public resetColumnWildcard() {
    this._columnWildcard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnWildcardInput() {
    return this._columnWildcard.internalValue;
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter = new LakeformationDataCellsFilterTableDataRowFilterList(this, "row_filter", false);
  public get rowFilter() {
    return this._rowFilter;
  }
  public putRowFilter(value: LakeformationDataCellsFilterTableDataRowFilter[] | cdktf.IResolvable) {
    this._rowFilter.internalValue = value;
  }
  public resetRowFilter() {
    this._rowFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter.internalValue;
  }
}

export class LakeformationDataCellsFilterTableDataList extends cdktf.ComplexList {
  public internalValue? : LakeformationDataCellsFilterTableData[] | cdktf.IResolvable

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
  public get(index: number): LakeformationDataCellsFilterTableDataOutputReference {
    return new LakeformationDataCellsFilterTableDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationDataCellsFilterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}
  */
  readonly create?: string;
}

export function lakeformationDataCellsFilterTimeoutsToTerraform(struct?: LakeformationDataCellsFilterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function lakeformationDataCellsFilterTimeoutsToHclTerraform(struct?: LakeformationDataCellsFilterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationDataCellsFilterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakeformationDataCellsFilterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationDataCellsFilterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter}
*/
export class LakeformationDataCellsFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_data_cells_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationDataCellsFilter to import
  * @param importFromId The id of the existing LakeformationDataCellsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationDataCellsFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lakeformation_data_cells_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationDataCellsFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LakeformationDataCellsFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_data_cells_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.93.0',
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
    this._tableData.internalValue = config.tableData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // table_data - computed: false, optional: true, required: false
  private _tableData = new LakeformationDataCellsFilterTableDataList(this, "table_data", false);
  public get tableData() {
    return this._tableData;
  }
  public putTableData(value: LakeformationDataCellsFilterTableData[] | cdktf.IResolvable) {
    this._tableData.internalValue = value;
  }
  public resetTableData() {
    this._tableData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableDataInput() {
    return this._tableData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LakeformationDataCellsFilterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LakeformationDataCellsFilterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      table_data: cdktf.listMapper(lakeformationDataCellsFilterTableDataToTerraform, true)(this._tableData.internalValue),
      timeouts: lakeformationDataCellsFilterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      table_data: {
        value: cdktf.listMapperHcl(lakeformationDataCellsFilterTableDataToHclTerraform, true)(this._tableData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationDataCellsFilterTableDataList",
      },
      timeouts: {
        value: lakeformationDataCellsFilterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakeformationDataCellsFilterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
