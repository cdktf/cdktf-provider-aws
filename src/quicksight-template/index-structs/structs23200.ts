/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumn,
quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumnToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumnOutputReference,
QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration,
quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWells,
quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWellsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWellsOutputReference } from './structs22800'
import { QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptions,
quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsTableVisualActions,
quicksightTemplateDefinitionSheetsVisualsTableVisualActionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTableVisualActionsList } from './structs22400'
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._formatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatConfiguration = this._formatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._column.internalValue = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
      this._column.internalValue = value.column;
      this._formatConfiguration.internalValue = value.formatConfiguration;
    }
  }

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration) {
    this._formatConfiguration.internalValue = value;
  }
  public resetFormatConfiguration() {
    this._formatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatConfigurationInput() {
    return this._formatConfiguration.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells {
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesToTerraform, true)(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells {
  /**
  * table_aggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#table_aggregated_field_wells QuicksightTemplate#table_aggregated_field_wells}
  */
  readonly tableAggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWells;
  /**
  * table_unaggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#table_unaggregated_field_wells QuicksightTemplate#table_unaggregated_field_wells}
  */
  readonly tableUnaggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_aggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWellsToTerraform(struct!.tableAggregatedFieldWells),
    table_unaggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsToTerraform(struct!.tableUnaggregatedFieldWells),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableAggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableAggregatedFieldWells = this._tableAggregatedFieldWells?.internalValue;
    }
    if (this._tableUnaggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableUnaggregatedFieldWells = this._tableUnaggregatedFieldWells?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableAggregatedFieldWells.internalValue = undefined;
      this._tableUnaggregatedFieldWells.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableAggregatedFieldWells.internalValue = value.tableAggregatedFieldWells;
      this._tableUnaggregatedFieldWells.internalValue = value.tableUnaggregatedFieldWells;
    }
  }

  // table_aggregated_field_wells - computed: false, optional: true, required: false
  private _tableAggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWellsOutputReference(this, "table_aggregated_field_wells");
  public get tableAggregatedFieldWells() {
    return this._tableAggregatedFieldWells;
  }
  public putTableAggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWells) {
    this._tableAggregatedFieldWells.internalValue = value;
  }
  public resetTableAggregatedFieldWells() {
    this._tableAggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableAggregatedFieldWellsInput() {
    return this._tableAggregatedFieldWells.internalValue;
  }

  // table_unaggregated_field_wells - computed: false, optional: true, required: false
  private _tableUnaggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsOutputReference(this, "table_unaggregated_field_wells");
  public get tableUnaggregatedFieldWells() {
    return this._tableUnaggregatedFieldWells;
  }
  public putTableUnaggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells) {
    this._tableUnaggregatedFieldWells.internalValue = value;
  }
  public resetTableUnaggregatedFieldWells() {
    this._tableUnaggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableUnaggregatedFieldWellsInput() {
    return this._tableUnaggregatedFieldWells.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#overflow_column_header_visibility QuicksightTemplate#overflow_column_header_visibility}
  */
  readonly overflowColumnHeaderVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#vertical_overflow_visibility QuicksightTemplate#vertical_overflow_visibility}
  */
  readonly verticalOverflowVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overflow_column_header_visibility: cdktf.stringToTerraform(struct!.overflowColumnHeaderVisibility),
    vertical_overflow_visibility: cdktf.stringToTerraform(struct!.verticalOverflowVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overflowColumnHeaderVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowColumnHeaderVisibility = this._overflowColumnHeaderVisibility;
    }
    if (this._verticalOverflowVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalOverflowVisibility = this._verticalOverflowVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overflowColumnHeaderVisibility = undefined;
      this._verticalOverflowVisibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overflowColumnHeaderVisibility = value.overflowColumnHeaderVisibility;
      this._verticalOverflowVisibility = value.verticalOverflowVisibility;
    }
  }

  // overflow_column_header_visibility - computed: false, optional: true, required: false
  private _overflowColumnHeaderVisibility?: string; 
  public get overflowColumnHeaderVisibility() {
    return this.getStringAttribute('overflow_column_header_visibility');
  }
  public set overflowColumnHeaderVisibility(value: string) {
    this._overflowColumnHeaderVisibility = value;
  }
  public resetOverflowColumnHeaderVisibility() {
    this._overflowColumnHeaderVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowColumnHeaderVisibilityInput() {
    return this._overflowColumnHeaderVisibility;
  }

  // vertical_overflow_visibility - computed: false, optional: true, required: false
  private _verticalOverflowVisibility?: string; 
  public get verticalOverflowVisibility() {
    return this.getStringAttribute('vertical_overflow_visibility');
  }
  public set verticalOverflowVisibility(value: string) {
    this._verticalOverflowVisibility = value;
  }
  public resetVerticalOverflowVisibility() {
    this._verticalOverflowVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalOverflowVisibilityInput() {
    return this._verticalOverflowVisibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#page_number QuicksightTemplate#page_number}
  */
  readonly pageNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#page_size QuicksightTemplate#page_size}
  */
  readonly pageSize: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_number: cdktf.numberToTerraform(struct!.pageNumber),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageNumber = this._pageNumber;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageNumber = undefined;
      this._pageSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageNumber = value.pageNumber;
      this._pageSize = value.pageSize;
    }
  }

  // page_number - computed: false, optional: false, required: true
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: false, required: true
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentileValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentileValue = value.percentileValue;
    }
  }

  // percentile_value - computed: false, optional: true, required: false
  private _percentileValue?: number; 
  public get percentileValue() {
    return this.getNumberAttribute('percentile_value');
  }
  public set percentileValue(value: number) {
    this._percentileValue = value;
  }
  public resetPercentileValue() {
    this._percentileValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileValueInput() {
    return this._percentileValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleNumericalAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleNumericalAggregation = this._simpleNumericalAggregation;
    }
    if (this._percentileAggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileAggregation = this._percentileAggregation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simpleNumericalAggregation = undefined;
      this._percentileAggregation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simpleNumericalAggregation = value.simpleNumericalAggregation;
      this._percentileAggregation.internalValue = value.percentileAggregation;
    }
  }

  // simple_numerical_aggregation - computed: false, optional: true, required: false
  private _simpleNumericalAggregation?: string; 
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
  public set simpleNumericalAggregation(value: string) {
    this._simpleNumericalAggregation = value;
  }
  public resetSimpleNumericalAggregation() {
    this._simpleNumericalAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleNumericalAggregationInput() {
    return this._simpleNumericalAggregation;
  }

  // percentile_aggregation - computed: false, optional: true, required: false
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
    this._percentileAggregation.internalValue = value;
  }
  public resetPercentileAggregation() {
    this._percentileAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileAggregationInput() {
    return this._percentileAggregation.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_aggregation_function QuicksightTemplate#categorical_aggregation_function}
  */
  readonly categoricalAggregationFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_aggregation_function QuicksightTemplate#date_aggregation_function}
  */
  readonly dateAggregationFunction?: string;
  /**
  * numerical_aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_aggregation_function QuicksightTemplate#numerical_aggregation_function}
  */
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoricalAggregationFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalAggregationFunction = this._categoricalAggregationFunction;
    }
    if (this._dateAggregationFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateAggregationFunction = this._dateAggregationFunction;
    }
    if (this._numericalAggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericalAggregationFunction = this._numericalAggregationFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoricalAggregationFunction = undefined;
      this._dateAggregationFunction = undefined;
      this._numericalAggregationFunction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoricalAggregationFunction = value.categoricalAggregationFunction;
      this._dateAggregationFunction = value.dateAggregationFunction;
      this._numericalAggregationFunction.internalValue = value.numericalAggregationFunction;
    }
  }

  // categorical_aggregation_function - computed: false, optional: true, required: false
  private _categoricalAggregationFunction?: string; 
  public get categoricalAggregationFunction() {
    return this.getStringAttribute('categorical_aggregation_function');
  }
  public set categoricalAggregationFunction(value: string) {
    this._categoricalAggregationFunction = value;
  }
  public resetCategoricalAggregationFunction() {
    this._categoricalAggregationFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalAggregationFunctionInput() {
    return this._categoricalAggregationFunction;
  }

  // date_aggregation_function - computed: false, optional: true, required: false
  private _dateAggregationFunction?: string; 
  public get dateAggregationFunction() {
    return this.getStringAttribute('date_aggregation_function');
  }
  public set dateAggregationFunction(value: string) {
    this._dateAggregationFunction = value;
  }
  public resetDateAggregationFunction() {
    this._dateAggregationFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateAggregationFunctionInput() {
    return this._dateAggregationFunction;
  }

  // numerical_aggregation_function - computed: false, optional: true, required: false
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction) {
    this._numericalAggregationFunction.internalValue = value;
  }
  public resetNumericalAggregationFunction() {
    this._numericalAggregationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalAggregationFunctionInput() {
    return this._numericalAggregationFunction.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
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

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._aggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction?.internalValue;
    }
    if (this._sortBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._aggregationFunction.internalValue = undefined;
      this._sortBy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._aggregationFunction.internalValue = value.aggregationFunction;
      this._sortBy.internalValue = value.sortBy;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction) {
    this._aggregationFunction.internalValue = value;
  }
  public resetAggregationFunction() {
    this._aggregationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction.internalValue;
  }

  // sort_by - computed: false, optional: false, required: true
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._fieldId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._fieldId = value.fieldId;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSort = this._columnSort?.internalValue;
    }
    if (this._fieldSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSort = this._fieldSort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnSort.internalValue = undefined;
      this._fieldSort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnSort.internalValue = value.columnSort;
      this._fieldSort.internalValue = value.fieldSort;
    }
  }

  // column_sort - computed: false, optional: true, required: false
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort) {
    this._columnSort.internalValue = value;
  }
  public resetColumnSort() {
    this._columnSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSortInput() {
    return this._columnSort.internalValue;
  }

  // field_sort - computed: false, optional: true, required: false
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort) {
    this._fieldSort.internalValue = value;
  }
  public resetFieldSort() {
    this._fieldSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSortInput() {
    return this._fieldSort.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration {
  /**
  * pagination_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#pagination_configuration QuicksightTemplate#pagination_configuration}
  */
  readonly paginationConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration;
  /**
  * row_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_sort QuicksightTemplate#row_sort}
  */
  readonly rowSort?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pagination_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationToTerraform(struct!.paginationConfiguration),
    row_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortToTerraform, true)(struct!.rowSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paginationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginationConfiguration = this._paginationConfiguration?.internalValue;
    }
    if (this._rowSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowSort = this._rowSort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paginationConfiguration.internalValue = undefined;
      this._rowSort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paginationConfiguration.internalValue = value.paginationConfiguration;
      this._rowSort.internalValue = value.rowSort;
    }
  }

  // pagination_configuration - computed: false, optional: true, required: false
  private _paginationConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationOutputReference(this, "pagination_configuration");
  public get paginationConfiguration() {
    return this._paginationConfiguration;
  }
  public putPaginationConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration) {
    this._paginationConfiguration.internalValue = value;
  }
  public resetPaginationConfiguration() {
    this._paginationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigurationInput() {
    return this._paginationConfiguration.internalValue;
  }

  // row_sort - computed: false, optional: true, required: false
  private _rowSort = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortList(this, "row_sort", false);
  public get rowSort() {
    return this._rowSort;
  }
  public putRowSort(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort[] | cdktf.IResolvable) {
    this._rowSort.internalValue = value;
  }
  public resetRowSort() {
    this._rowSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowSortInput() {
    return this._rowSort.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_color QuicksightTemplate#negative_color}
  */
  readonly negativeColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#positive_color QuicksightTemplate#positive_color}
  */
  readonly positiveColor?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    negative_color: cdktf.stringToTerraform(struct!.negativeColor),
    positive_color: cdktf.stringToTerraform(struct!.positiveColor),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._negativeColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeColor = this._negativeColor;
    }
    if (this._positiveColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.positiveColor = this._positiveColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._negativeColor = undefined;
      this._positiveColor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._negativeColor = value.negativeColor;
      this._positiveColor = value.positiveColor;
    }
  }

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // negative_color - computed: false, optional: true, required: false
  private _negativeColor?: string; 
  public get negativeColor() {
    return this.getStringAttribute('negative_color');
  }
  public set negativeColor(value: string) {
    this._negativeColor = value;
  }
  public resetNegativeColor() {
    this._negativeColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeColorInput() {
    return this._negativeColor;
  }

  // positive_color - computed: false, optional: true, required: false
  private _positiveColor?: string; 
  public get positiveColor() {
    return this.getStringAttribute('positive_color');
  }
  public set positiveColor(value: string) {
    this._positiveColor = value;
  }
  public resetPositiveColor() {
    this._positiveColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveColorInput() {
    return this._positiveColor;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations {
  /**
  * data_bars block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_bars QuicksightTemplate#data_bars}
  */
  readonly dataBars?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_bars: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsToTerraform(struct!.dataBars),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataBars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBars = this._dataBars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataBars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataBars.internalValue = value.dataBars;
    }
  }

  // data_bars - computed: false, optional: true, required: false
  private _dataBars = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsOutputReference(this, "data_bars");
  public get dataBars() {
    return this._dataBars;
  }
  public putDataBars(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars) {
    this._dataBars.internalValue = value;
  }
  public resetDataBars() {
    this._dataBars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBarsInput() {
    return this._dataBars.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom?.internalValue;
    }
    if (this._innerHorizontal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerHorizontal = this._innerHorizontal?.internalValue;
    }
    if (this._innerVertical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerVertical = this._innerVertical?.internalValue;
    }
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    if (this._top?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom.internalValue = undefined;
      this._innerHorizontal.internalValue = undefined;
      this._innerVertical.internalValue = undefined;
      this._left.internalValue = undefined;
      this._right.internalValue = undefined;
      this._top.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom.internalValue = value.bottom;
      this._innerHorizontal.internalValue = value.innerHorizontal;
      this._innerVertical.internalValue = value.innerVertical;
      this._left.internalValue = value.left;
      this._right.internalValue = value.right;
      this._top.internalValue = value.top;
    }
  }

  // bottom - computed: false, optional: false, required: true
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sideSpecificBorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideSpecificBorder = this._sideSpecificBorder?.internalValue;
    }
    if (this._uniformBorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformBorder = this._uniformBorder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sideSpecificBorder.internalValue = undefined;
      this._uniformBorder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sideSpecificBorder.internalValue = value.sideSpecificBorder;
      this._uniformBorder.internalValue = value.uniformBorder;
    }
  }

  // side_specific_border - computed: false, optional: true, required: false
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder) {
    this._sideSpecificBorder.internalValue = value;
  }
  public resetSideSpecificBorder() {
    this._sideSpecificBorder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideSpecificBorderInput() {
    return this._sideSpecificBorder.internalValue;
  }

  // uniform_border - computed: false, optional: false, required: true
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#horizontal_text_alignment QuicksightTemplate#horizontal_text_alignment}
  */
  readonly horizontalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_wrap QuicksightTemplate#text_wrap}
  */
  readonly textWrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#vertical_text_alignment QuicksightTemplate#vertical_text_alignment}
  */
  readonly verticalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border QuicksightTemplate#border}
  */
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    height: cdktf.numberToTerraform(struct!.height),
    horizontal_text_alignment: cdktf.stringToTerraform(struct!.horizontalTextAlignment),
    text_wrap: cdktf.stringToTerraform(struct!.textWrap),
    vertical_text_alignment: cdktf.stringToTerraform(struct!.verticalTextAlignment),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._horizontalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalTextAlignment = this._horizontalTextAlignment;
    }
    if (this._textWrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.textWrap = this._textWrap;
    }
    if (this._verticalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalTextAlignment = this._verticalTextAlignment;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._border?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.border = this._border?.internalValue;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._height = undefined;
      this._horizontalTextAlignment = undefined;
      this._textWrap = undefined;
      this._verticalTextAlignment = undefined;
      this._visibility = undefined;
      this._border.internalValue = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._height = value.height;
      this._horizontalTextAlignment = value.horizontalTextAlignment;
      this._textWrap = value.textWrap;
      this._verticalTextAlignment = value.verticalTextAlignment;
      this._visibility = value.visibility;
      this._border.internalValue = value.border;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // horizontal_text_alignment - computed: false, optional: true, required: false
  private _horizontalTextAlignment?: string; 
  public get horizontalTextAlignment() {
    return this.getStringAttribute('horizontal_text_alignment');
  }
  public set horizontalTextAlignment(value: string) {
    this._horizontalTextAlignment = value;
  }
  public resetHorizontalTextAlignment() {
    this._horizontalTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalTextAlignmentInput() {
    return this._horizontalTextAlignment;
  }

  // text_wrap - computed: false, optional: true, required: false
  private _textWrap?: string; 
  public get textWrap() {
    return this.getStringAttribute('text_wrap');
  }
  public set textWrap(value: string) {
    this._textWrap = value;
  }
  public resetTextWrap() {
    this._textWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textWrapInput() {
    return this._textWrap;
  }

  // vertical_text_alignment - computed: false, optional: true, required: false
  private _verticalTextAlignment?: string; 
  public get verticalTextAlignment() {
    return this.getStringAttribute('vertical_text_alignment');
  }
  public set verticalTextAlignment(value: string) {
    this._verticalTextAlignment = value;
  }
  public resetVerticalTextAlignment() {
    this._verticalTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalTextAlignmentInput() {
    return this._verticalTextAlignment;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // border - computed: false, optional: true, required: false
  private _border = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder) {
    this._border.internalValue = value;
  }
  public resetBorder() {
    this._border.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border.internalValue;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom?.internalValue;
    }
    if (this._innerHorizontal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerHorizontal = this._innerHorizontal?.internalValue;
    }
    if (this._innerVertical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerVertical = this._innerVertical?.internalValue;
    }
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    if (this._top?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom.internalValue = undefined;
      this._innerHorizontal.internalValue = undefined;
      this._innerVertical.internalValue = undefined;
      this._left.internalValue = undefined;
      this._right.internalValue = undefined;
      this._top.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom.internalValue = value.bottom;
      this._innerHorizontal.internalValue = value.innerHorizontal;
      this._innerVertical.internalValue = value.innerVertical;
      this._left.internalValue = value.left;
      this._right.internalValue = value.right;
      this._top.internalValue = value.top;
    }
  }

  // bottom - computed: false, optional: false, required: true
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sideSpecificBorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideSpecificBorder = this._sideSpecificBorder?.internalValue;
    }
    if (this._uniformBorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformBorder = this._uniformBorder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sideSpecificBorder.internalValue = undefined;
      this._uniformBorder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sideSpecificBorder.internalValue = value.sideSpecificBorder;
      this._uniformBorder.internalValue = value.uniformBorder;
    }
  }

  // side_specific_border - computed: false, optional: true, required: false
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder) {
    this._sideSpecificBorder.internalValue = value;
  }
  public resetSideSpecificBorder() {
    this._sideSpecificBorder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideSpecificBorderInput() {
    return this._sideSpecificBorder.internalValue;
  }

  // uniform_border - computed: false, optional: false, required: true
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#horizontal_text_alignment QuicksightTemplate#horizontal_text_alignment}
  */
  readonly horizontalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_wrap QuicksightTemplate#text_wrap}
  */
  readonly textWrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#vertical_text_alignment QuicksightTemplate#vertical_text_alignment}
  */
  readonly verticalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border QuicksightTemplate#border}
  */
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    height: cdktf.numberToTerraform(struct!.height),
    horizontal_text_alignment: cdktf.stringToTerraform(struct!.horizontalTextAlignment),
    text_wrap: cdktf.stringToTerraform(struct!.textWrap),
    vertical_text_alignment: cdktf.stringToTerraform(struct!.verticalTextAlignment),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._horizontalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalTextAlignment = this._horizontalTextAlignment;
    }
    if (this._textWrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.textWrap = this._textWrap;
    }
    if (this._verticalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalTextAlignment = this._verticalTextAlignment;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._border?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.border = this._border?.internalValue;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._height = undefined;
      this._horizontalTextAlignment = undefined;
      this._textWrap = undefined;
      this._verticalTextAlignment = undefined;
      this._visibility = undefined;
      this._border.internalValue = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._height = value.height;
      this._horizontalTextAlignment = value.horizontalTextAlignment;
      this._textWrap = value.textWrap;
      this._verticalTextAlignment = value.verticalTextAlignment;
      this._visibility = value.visibility;
      this._border.internalValue = value.border;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // horizontal_text_alignment - computed: false, optional: true, required: false
  private _horizontalTextAlignment?: string; 
  public get horizontalTextAlignment() {
    return this.getStringAttribute('horizontal_text_alignment');
  }
  public set horizontalTextAlignment(value: string) {
    this._horizontalTextAlignment = value;
  }
  public resetHorizontalTextAlignment() {
    this._horizontalTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalTextAlignmentInput() {
    return this._horizontalTextAlignment;
  }

  // text_wrap - computed: false, optional: true, required: false
  private _textWrap?: string; 
  public get textWrap() {
    return this.getStringAttribute('text_wrap');
  }
  public set textWrap(value: string) {
    this._textWrap = value;
  }
  public resetTextWrap() {
    this._textWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textWrapInput() {
    return this._textWrap;
  }

  // vertical_text_alignment - computed: false, optional: true, required: false
  private _verticalTextAlignment?: string; 
  public get verticalTextAlignment() {
    return this.getStringAttribute('vertical_text_alignment');
  }
  public set verticalTextAlignment(value: string) {
    this._verticalTextAlignment = value;
  }
  public resetVerticalTextAlignment() {
    this._verticalTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalTextAlignmentInput() {
    return this._verticalTextAlignment;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // border - computed: false, optional: true, required: false
  private _border = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder) {
    this._border.internalValue = value;
  }
  public resetBorder() {
    this._border.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border.internalValue;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_alternate_colors QuicksightTemplate#row_alternate_colors}
  */
  readonly rowAlternateColors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_alternate_colors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rowAlternateColors),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowAlternateColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowAlternateColors = this._rowAlternateColors;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowAlternateColors = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowAlternateColors = value.rowAlternateColors;
      this._status = value.status;
    }
  }

  // row_alternate_colors - computed: false, optional: true, required: false
  private _rowAlternateColors?: string[]; 
  public get rowAlternateColors() {
    return this.getListAttribute('row_alternate_colors');
  }
  public set rowAlternateColors(value: string[]) {
    this._rowAlternateColors = value;
  }
  public resetRowAlternateColors() {
    this._rowAlternateColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAlternateColorsInput() {
    return this._rowAlternateColors;
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
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#orientation QuicksightTemplate#orientation}
  */
  readonly orientation?: string;
  /**
  * cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cell_style QuicksightTemplate#cell_style}
  */
  readonly cellStyle?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle;
  /**
  * header_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#header_style QuicksightTemplate#header_style}
  */
  readonly headerStyle?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle;
  /**
  * row_alternate_color_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_alternate_color_options QuicksightTemplate#row_alternate_color_options}
  */
  readonly rowAlternateColorOptions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orientation: cdktf.stringToTerraform(struct!.orientation),
    cell_style: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleToTerraform(struct!.cellStyle),
    header_style: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleToTerraform(struct!.headerStyle),
    row_alternate_color_options: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsToTerraform(struct!.rowAlternateColorOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.orientation = this._orientation;
    }
    if (this._cellStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellStyle = this._cellStyle?.internalValue;
    }
    if (this._headerStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerStyle = this._headerStyle?.internalValue;
    }
    if (this._rowAlternateColorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowAlternateColorOptions = this._rowAlternateColorOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orientation = undefined;
      this._cellStyle.internalValue = undefined;
      this._headerStyle.internalValue = undefined;
      this._rowAlternateColorOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orientation = value.orientation;
      this._cellStyle.internalValue = value.cellStyle;
      this._headerStyle.internalValue = value.headerStyle;
      this._rowAlternateColorOptions.internalValue = value.rowAlternateColorOptions;
    }
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // cell_style - computed: false, optional: true, required: false
  private _cellStyle = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleOutputReference(this, "cell_style");
  public get cellStyle() {
    return this._cellStyle;
  }
  public putCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle) {
    this._cellStyle.internalValue = value;
  }
  public resetCellStyle() {
    this._cellStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellStyleInput() {
    return this._cellStyle.internalValue;
  }

  // header_style - computed: false, optional: true, required: false
  private _headerStyle = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleOutputReference(this, "header_style");
  public get headerStyle() {
    return this._headerStyle;
  }
  public putHeaderStyle(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle) {
    this._headerStyle.internalValue = value;
  }
  public resetHeaderStyle() {
    this._headerStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerStyleInput() {
    return this._headerStyle.internalValue;
  }

  // row_alternate_color_options - computed: false, optional: true, required: false
  private _rowAlternateColorOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference(this, "row_alternate_color_options");
  public get rowAlternateColorOptions() {
    return this._rowAlternateColorOptions;
  }
  public putRowAlternateColorOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions) {
    this._rowAlternateColorOptions.internalValue = value;
  }
  public resetRowAlternateColorOptions() {
    this._rowAlternateColorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAlternateColorOptionsInput() {
    return this._rowAlternateColorOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom?.internalValue;
    }
    if (this._innerHorizontal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerHorizontal = this._innerHorizontal?.internalValue;
    }
    if (this._innerVertical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerVertical = this._innerVertical?.internalValue;
    }
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    if (this._top?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom.internalValue = undefined;
      this._innerHorizontal.internalValue = undefined;
      this._innerVertical.internalValue = undefined;
      this._left.internalValue = undefined;
      this._right.internalValue = undefined;
      this._top.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom.internalValue = value.bottom;
      this._innerHorizontal.internalValue = value.innerHorizontal;
      this._innerVertical.internalValue = value.innerVertical;
      this._left.internalValue = value.left;
      this._right.internalValue = value.right;
      this._top.internalValue = value.top;
    }
  }

  // bottom - computed: false, optional: false, required: true
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thickness QuicksightTemplate#thickness}
  */
  readonly thickness?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    style: cdktf.stringToTerraform(struct!.style),
    thickness: cdktf.numberToTerraform(struct!.thickness),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._thickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.thickness = this._thickness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._style = undefined;
      this._thickness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._style = value.style;
      this._thickness = value.thickness;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // thickness - computed: false, optional: true, required: false
  private _thickness?: number; 
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
  public set thickness(value: number) {
    this._thickness = value;
  }
  public resetThickness() {
    this._thickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thicknessInput() {
    return this._thickness;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sideSpecificBorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideSpecificBorder = this._sideSpecificBorder?.internalValue;
    }
    if (this._uniformBorder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformBorder = this._uniformBorder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sideSpecificBorder.internalValue = undefined;
      this._uniformBorder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sideSpecificBorder.internalValue = value.sideSpecificBorder;
      this._uniformBorder.internalValue = value.uniformBorder;
    }
  }

  // side_specific_border - computed: false, optional: true, required: false
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder) {
    this._sideSpecificBorder.internalValue = value;
  }
  public resetSideSpecificBorder() {
    this._sideSpecificBorder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideSpecificBorderInput() {
    return this._sideSpecificBorder.internalValue;
  }

  // uniform_border - computed: false, optional: false, required: true
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#horizontal_text_alignment QuicksightTemplate#horizontal_text_alignment}
  */
  readonly horizontalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_wrap QuicksightTemplate#text_wrap}
  */
  readonly textWrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#vertical_text_alignment QuicksightTemplate#vertical_text_alignment}
  */
  readonly verticalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border QuicksightTemplate#border}
  */
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    height: cdktf.numberToTerraform(struct!.height),
    horizontal_text_alignment: cdktf.stringToTerraform(struct!.horizontalTextAlignment),
    text_wrap: cdktf.stringToTerraform(struct!.textWrap),
    vertical_text_alignment: cdktf.stringToTerraform(struct!.verticalTextAlignment),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    border: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._horizontalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalTextAlignment = this._horizontalTextAlignment;
    }
    if (this._textWrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.textWrap = this._textWrap;
    }
    if (this._verticalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalTextAlignment = this._verticalTextAlignment;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._border?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.border = this._border?.internalValue;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._height = undefined;
      this._horizontalTextAlignment = undefined;
      this._textWrap = undefined;
      this._verticalTextAlignment = undefined;
      this._visibility = undefined;
      this._border.internalValue = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._height = value.height;
      this._horizontalTextAlignment = value.horizontalTextAlignment;
      this._textWrap = value.textWrap;
      this._verticalTextAlignment = value.verticalTextAlignment;
      this._visibility = value.visibility;
      this._border.internalValue = value.border;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // horizontal_text_alignment - computed: false, optional: true, required: false
  private _horizontalTextAlignment?: string; 
  public get horizontalTextAlignment() {
    return this.getStringAttribute('horizontal_text_alignment');
  }
  public set horizontalTextAlignment(value: string) {
    this._horizontalTextAlignment = value;
  }
  public resetHorizontalTextAlignment() {
    this._horizontalTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalTextAlignmentInput() {
    return this._horizontalTextAlignment;
  }

  // text_wrap - computed: false, optional: true, required: false
  private _textWrap?: string; 
  public get textWrap() {
    return this.getStringAttribute('text_wrap');
  }
  public set textWrap(value: string) {
    this._textWrap = value;
  }
  public resetTextWrap() {
    this._textWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textWrapInput() {
    return this._textWrap;
  }

  // vertical_text_alignment - computed: false, optional: true, required: false
  private _verticalTextAlignment?: string; 
  public get verticalTextAlignment() {
    return this.getStringAttribute('vertical_text_alignment');
  }
  public set verticalTextAlignment(value: string) {
    this._verticalTextAlignment = value;
  }
  public resetVerticalTextAlignment() {
    this._verticalTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalTextAlignmentInput() {
    return this._verticalTextAlignment;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // border - computed: false, optional: true, required: false
  private _border = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder) {
    this._border.internalValue = value;
  }
  public resetBorder() {
    this._border.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border.internalValue;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placement QuicksightTemplate#placement}
  */
  readonly placement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scroll_status QuicksightTemplate#scroll_status}
  */
  readonly scrollStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#totals_visibility QuicksightTemplate#totals_visibility}
  */
  readonly totalsVisibility?: string;
  /**
  * total_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_cell_style QuicksightTemplate#total_cell_style}
  */
  readonly totalCellStyle?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    placement: cdktf.stringToTerraform(struct!.placement),
    scroll_status: cdktf.stringToTerraform(struct!.scrollStatus),
    totals_visibility: cdktf.stringToTerraform(struct!.totalsVisibility),
    total_cell_style: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleToTerraform(struct!.totalCellStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._scrollStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrollStatus = this._scrollStatus;
    }
    if (this._totalsVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalsVisibility = this._totalsVisibility;
    }
    if (this._totalCellStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCellStyle = this._totalCellStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._placement = undefined;
      this._scrollStatus = undefined;
      this._totalsVisibility = undefined;
      this._totalCellStyle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._placement = value.placement;
      this._scrollStatus = value.scrollStatus;
      this._totalsVisibility = value.totalsVisibility;
      this._totalCellStyle.internalValue = value.totalCellStyle;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // scroll_status - computed: false, optional: true, required: false
  private _scrollStatus?: string; 
  public get scrollStatus() {
    return this.getStringAttribute('scroll_status');
  }
  public set scrollStatus(value: string) {
    this._scrollStatus = value;
  }
  public resetScrollStatus() {
    this._scrollStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollStatusInput() {
    return this._scrollStatus;
  }

  // totals_visibility - computed: false, optional: true, required: false
  private _totalsVisibility?: string; 
  public get totalsVisibility() {
    return this.getStringAttribute('totals_visibility');
  }
  public set totalsVisibility(value: string) {
    this._totalsVisibility = value;
  }
  public resetTotalsVisibility() {
    this._totalsVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalsVisibilityInput() {
    return this._totalsVisibility;
  }

  // total_cell_style - computed: false, optional: true, required: false
  private _totalCellStyle = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleOutputReference(this, "total_cell_style");
  public get totalCellStyle() {
    return this._totalCellStyle;
  }
  public putTotalCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle) {
    this._totalCellStyle.internalValue = value;
  }
  public resetTotalCellStyle() {
    this._totalCellStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCellStyleInput() {
    return this._totalCellStyle.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfiguration {
  /**
  * field_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_options QuicksightTemplate#field_options}
  */
  readonly fieldOptions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptions;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells;
  /**
  * paginated_report_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paginated_report_options QuicksightTemplate#paginated_report_options}
  */
  readonly paginatedReportOptions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions;
  /**
  * sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_configuration QuicksightTemplate#sort_configuration}
  */
  readonly sortConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration;
  /**
  * table_inline_visualizations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#table_inline_visualizations QuicksightTemplate#table_inline_visualizations}
  */
  readonly tableInlineVisualizations?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations[] | cdktf.IResolvable;
  /**
  * table_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#table_options QuicksightTemplate#table_options}
  */
  readonly tableOptions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions;
  /**
  * total_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_options QuicksightTemplate#total_options}
  */
  readonly totalOptions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_options: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptionsToTerraform(struct!.fieldOptions),
    field_wells: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    paginated_report_options: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsToTerraform(struct!.paginatedReportOptions),
    sort_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationToTerraform(struct!.sortConfiguration),
    table_inline_visualizations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsToTerraform, true)(struct!.tableInlineVisualizations),
    table_options: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsToTerraform(struct!.tableOptions),
    total_options: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsToTerraform(struct!.totalOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldOptions = this._fieldOptions?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._paginatedReportOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginatedReportOptions = this._paginatedReportOptions?.internalValue;
    }
    if (this._sortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortConfiguration = this._sortConfiguration?.internalValue;
    }
    if (this._tableInlineVisualizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableInlineVisualizations = this._tableInlineVisualizations?.internalValue;
    }
    if (this._tableOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableOptions = this._tableOptions?.internalValue;
    }
    if (this._totalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalOptions = this._totalOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldOptions.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._paginatedReportOptions.internalValue = undefined;
      this._sortConfiguration.internalValue = undefined;
      this._tableInlineVisualizations.internalValue = undefined;
      this._tableOptions.internalValue = undefined;
      this._totalOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldOptions.internalValue = value.fieldOptions;
      this._fieldWells.internalValue = value.fieldWells;
      this._paginatedReportOptions.internalValue = value.paginatedReportOptions;
      this._sortConfiguration.internalValue = value.sortConfiguration;
      this._tableInlineVisualizations.internalValue = value.tableInlineVisualizations;
      this._tableOptions.internalValue = value.tableOptions;
      this._totalOptions.internalValue = value.totalOptions;
    }
  }

  // field_options - computed: false, optional: true, required: false
  private _fieldOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptionsOutputReference(this, "field_options");
  public get fieldOptions() {
    return this._fieldOptions;
  }
  public putFieldOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptions) {
    this._fieldOptions.internalValue = value;
  }
  public resetFieldOptions() {
    this._fieldOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionsInput() {
    return this._fieldOptions.internalValue;
  }

  // field_wells - computed: false, optional: true, required: false
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells) {
    this._fieldWells.internalValue = value;
  }
  public resetFieldWells() {
    this._fieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldWellsInput() {
    return this._fieldWells.internalValue;
  }

  // paginated_report_options - computed: false, optional: true, required: false
  private _paginatedReportOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsOutputReference(this, "paginated_report_options");
  public get paginatedReportOptions() {
    return this._paginatedReportOptions;
  }
  public putPaginatedReportOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions) {
    this._paginatedReportOptions.internalValue = value;
  }
  public resetPaginatedReportOptions() {
    this._paginatedReportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginatedReportOptionsInput() {
    return this._paginatedReportOptions.internalValue;
  }

  // sort_configuration - computed: false, optional: true, required: false
  private _sortConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationOutputReference(this, "sort_configuration");
  public get sortConfiguration() {
    return this._sortConfiguration;
  }
  public putSortConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration) {
    this._sortConfiguration.internalValue = value;
  }
  public resetSortConfiguration() {
    this._sortConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortConfigurationInput() {
    return this._sortConfiguration.internalValue;
  }

  // table_inline_visualizations - computed: false, optional: true, required: false
  private _tableInlineVisualizations = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsList(this, "table_inline_visualizations", false);
  public get tableInlineVisualizations() {
    return this._tableInlineVisualizations;
  }
  public putTableInlineVisualizations(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations[] | cdktf.IResolvable) {
    this._tableInlineVisualizations.internalValue = value;
  }
  public resetTableInlineVisualizations() {
    this._tableInlineVisualizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInlineVisualizationsInput() {
    return this._tableInlineVisualizations.internalValue;
  }

  // table_options - computed: false, optional: true, required: false
  private _tableOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsOutputReference(this, "table_options");
  public get tableOptions() {
    return this._tableOptions;
  }
  public putTableOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions) {
    this._tableOptions.internalValue = value;
  }
  public resetTableOptions() {
    this._tableOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableOptionsInput() {
    return this._tableOptions.internalValue;
  }

  // total_options - computed: false, optional: true, required: false
  private _totalOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsOutputReference(this, "total_options");
  public get totalOptions() {
    return this._totalOptions;
  }
  public putTotalOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions) {
    this._totalOptions.internalValue = value;
  }
  public resetTotalOptions() {
    this._totalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOptionsInput() {
    return this._totalOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient_offset QuicksightTemplate#gradient_offset}
  */
  readonly gradientOffset: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
    gradient_offset: cdktf.numberToTerraform(struct!.gradientOffset),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    if (this._gradientOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientOffset = this._gradientOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
      this._gradientOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
      this._gradientOffset = value.gradientOffset;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }

  // gradient_offset - computed: false, optional: false, required: true
  private _gradientOffset?: number; 
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
  public set gradientOffset(value: number) {
    this._gradientOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientOffsetInput() {
    return this._gradientOffset;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor {
  /**
  * stops block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#stops QuicksightTemplate#stops}
  */
  readonly stops?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stops: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToTerraform, true)(struct!.stops),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stops = this._stops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stops.internalValue = value.stops;
    }
  }

  // stops - computed: false, optional: true, required: false
  private _stops = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
  public putStops(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops[] | cdktf.IResolvable) {
    this._stops.internalValue = value;
  }
  public resetStops() {
    this._stops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopsInput() {
    return this._stops.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToTerraform(struct!.color),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._color.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._color.internalValue = value.color;
    }
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

  // color - computed: false, optional: false, required: true
  private _color = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor) {
    this._color.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor {
  /**
  * gradient block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient QuicksightTemplate#gradient}
  */
  readonly gradient?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient;
  /**
  * solid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#solid QuicksightTemplate#solid}
  */
  readonly solid?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gradient: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientToTerraform(struct!.gradient),
    solid: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidToTerraform(struct!.solid),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._solid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solid = this._solid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gradient.internalValue = undefined;
      this._solid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gradient.internalValue = value.gradient;
      this._solid.internalValue = value.solid;
    }
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // solid - computed: false, optional: true, required: false
  private _solid = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference(this, "solid");
  public get solid() {
    return this._solid;
  }
  public putSolid(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid) {
    this._solid.internalValue = value;
  }
  public resetSolid() {
    this._solid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidInput() {
    return this._solid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_display_option QuicksightTemplate#icon_display_option}
  */
  readonly iconDisplayOption?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon_display_option: cdktf.stringToTerraform(struct!.iconDisplayOption),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iconDisplayOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconDisplayOption = this._iconDisplayOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iconDisplayOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iconDisplayOption = value.iconDisplayOption;
    }
  }

  // icon_display_option - computed: false, optional: true, required: false
  private _iconDisplayOption?: string; 
  public get iconDisplayOption() {
    return this.getStringAttribute('icon_display_option');
  }
  public set iconDisplayOption(value: string) {
    this._iconDisplayOption = value;
  }
  public resetIconDisplayOption() {
    this._iconDisplayOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconDisplayOptionInput() {
    return this._iconDisplayOption;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon QuicksightTemplate#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#unicode_icon QuicksightTemplate#unicode_icon}
  */
  readonly unicodeIcon?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    unicode_icon: cdktf.stringToTerraform(struct!.unicodeIcon),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._unicodeIcon !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicodeIcon = this._unicodeIcon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icon = undefined;
      this._unicodeIcon = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icon = value.icon;
      this._unicodeIcon = value.unicodeIcon;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // unicode_icon - computed: false, optional: true, required: false
  private _unicodeIcon?: string; 
  public get unicodeIcon() {
    return this.getStringAttribute('unicode_icon');
  }
  public set unicodeIcon(value: string) {
    this._unicodeIcon = value;
  }
  public resetUnicodeIcon() {
    this._unicodeIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicodeIconInput() {
    return this._unicodeIcon;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * display_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_configuration QuicksightTemplate#display_configuration}
  */
  readonly displayConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration;
  /**
  * icon_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_options QuicksightTemplate#icon_options}
  */
  readonly iconOptions: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
    display_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationToTerraform(struct!.displayConfiguration),
    icon_options: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsToTerraform(struct!.iconOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._displayConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayConfiguration = this._displayConfiguration?.internalValue;
    }
    if (this._iconOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconOptions = this._iconOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
      this._displayConfiguration.internalValue = undefined;
      this._iconOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
      this._displayConfiguration.internalValue = value.displayConfiguration;
      this._iconOptions.internalValue = value.iconOptions;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // display_configuration - computed: false, optional: true, required: false
  private _displayConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference(this, "display_configuration");
  public get displayConfiguration() {
    return this._displayConfiguration;
  }
  public putDisplayConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration) {
    this._displayConfiguration.internalValue = value;
  }
  public resetDisplayConfiguration() {
    this._displayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayConfigurationInput() {
    return this._displayConfiguration.internalValue;
  }

  // icon_options - computed: false, optional: false, required: true
  private _iconOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference(this, "icon_options");
  public get iconOptions() {
    return this._iconOptions;
  }
  public putIconOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions) {
    this._iconOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconOptionsInput() {
    return this._iconOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_set_type QuicksightTemplate#icon_set_type}
  */
  readonly iconSetType?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    icon_set_type: cdktf.stringToTerraform(struct!.iconSetType),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._iconSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconSetType = this._iconSetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._iconSetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._iconSetType = value.iconSetType;
    }
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

  // icon_set_type - computed: false, optional: true, required: false
  private _iconSetType?: string; 
  public get iconSetType() {
    return this.getStringAttribute('icon_set_type');
  }
  public set iconSetType(value: string) {
    this._iconSetType = value;
  }
  public resetIconSetType() {
    this._iconSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconSetTypeInput() {
    return this._iconSetType;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon {
  /**
  * custom_condition block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_condition QuicksightTemplate#custom_condition}
  */
  readonly customCondition?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition;
  /**
  * icon_set block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_set QuicksightTemplate#icon_set}
  */
  readonly iconSet?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_condition: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionToTerraform(struct!.customCondition),
    icon_set: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetToTerraform(struct!.iconSet),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCondition = this._customCondition?.internalValue;
    }
    if (this._iconSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconSet = this._iconSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCondition.internalValue = undefined;
      this._iconSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCondition.internalValue = value.customCondition;
      this._iconSet.internalValue = value.iconSet;
    }
  }

  // custom_condition - computed: false, optional: true, required: false
  private _customCondition = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference(this, "custom_condition");
  public get customCondition() {
    return this._customCondition;
  }
  public putCustomCondition(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition) {
    this._customCondition.internalValue = value;
  }
  public resetCustomCondition() {
    this._customCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConditionInput() {
    return this._customCondition.internalValue;
  }

  // icon_set - computed: false, optional: true, required: false
  private _iconSet = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference(this, "icon_set");
  public get iconSet() {
    return this._iconSet;
  }
  public putIconSet(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet) {
    this._iconSet.internalValue = value;
  }
  public resetIconSet() {
    this._iconSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconSetInput() {
    return this._iconSet.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient_offset QuicksightTemplate#gradient_offset}
  */
  readonly gradientOffset: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
    gradient_offset: cdktf.numberToTerraform(struct!.gradientOffset),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    if (this._gradientOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientOffset = this._gradientOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
      this._gradientOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
      this._gradientOffset = value.gradientOffset;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }

  // gradient_offset - computed: false, optional: false, required: true
  private _gradientOffset?: number; 
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
  public set gradientOffset(value: number) {
    this._gradientOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientOffsetInput() {
    return this._gradientOffset;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor {
  /**
  * stops block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#stops QuicksightTemplate#stops}
  */
  readonly stops?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stops: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsToTerraform, true)(struct!.stops),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stops = this._stops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stops.internalValue = value.stops;
    }
  }

  // stops - computed: false, optional: true, required: false
  private _stops = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
  public putStops(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops[] | cdktf.IResolvable) {
    this._stops.internalValue = value;
  }
  public resetStops() {
    this._stops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopsInput() {
    return this._stops.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorToTerraform(struct!.color),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._color.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._color.internalValue = value.color;
    }
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

  // color - computed: false, optional: false, required: true
  private _color = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor) {
    this._color.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor {
  /**
  * gradient block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient QuicksightTemplate#gradient}
  */
  readonly gradient?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient;
  /**
  * solid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#solid QuicksightTemplate#solid}
  */
  readonly solid?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gradient: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientToTerraform(struct!.gradient),
    solid: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidToTerraform(struct!.solid),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._solid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solid = this._solid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gradient.internalValue = undefined;
      this._solid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gradient.internalValue = value.gradient;
      this._solid.internalValue = value.solid;
    }
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // solid - computed: false, optional: true, required: false
  private _solid = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference(this, "solid");
  public get solid() {
    return this._solid;
  }
  public putSolid(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid) {
    this._solid.internalValue = value;
  }
  public resetSolid() {
    this._solid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidInput() {
    return this._solid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat {
  /**
  * background_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor;
  /**
  * icon block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon QuicksightTemplate#icon}
  */
  readonly icon: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon;
  /**
  * text_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_color QuicksightTemplate#text_color}
  */
  readonly textColor: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorToTerraform(struct!.backgroundColor),
    icon: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconToTerraform(struct!.icon),
    text_color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorToTerraform(struct!.textColor),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor?.internalValue;
    }
    if (this._icon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon?.internalValue;
    }
    if (this._textColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor.internalValue = undefined;
      this._icon.internalValue = undefined;
      this._textColor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor.internalValue = value.backgroundColor;
      this._icon.internalValue = value.icon;
      this._textColor.internalValue = value.textColor;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference(this, "background_color");
  public get backgroundColor() {
    return this._backgroundColor;
  }
  public putBackgroundColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor) {
    this._backgroundColor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor.internalValue;
  }

  // icon - computed: false, optional: false, required: true
  private _icon = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon) {
    this._icon.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // text_color - computed: false, optional: false, required: true
  private _textColor = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference(this, "text_color");
  public get textColor() {
    return this._textColor;
  }
  public putTextColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor) {
    this._textColor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCell {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * text_format block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_format QuicksightTemplate#text_format}
  */
  readonly textFormat?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    text_format: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatToTerraform(struct!.textFormat),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCell | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCell | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._textFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._textFormat.internalValue = value.textFormat;
    }
  }

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference(this, "text_format");
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient_offset QuicksightTemplate#gradient_offset}
  */
  readonly gradientOffset: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
    gradient_offset: cdktf.numberToTerraform(struct!.gradientOffset),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    if (this._gradientOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientOffset = this._gradientOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
      this._gradientOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
      this._gradientOffset = value.gradientOffset;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }

  // gradient_offset - computed: false, optional: false, required: true
  private _gradientOffset?: number; 
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
  public set gradientOffset(value: number) {
    this._gradientOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientOffsetInput() {
    return this._gradientOffset;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColor {
  /**
  * stops block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#stops QuicksightTemplate#stops}
  */
  readonly stops?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stops: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsToTerraform, true)(struct!.stops),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stops = this._stops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stops.internalValue = value.stops;
    }
  }

  // stops - computed: false, optional: true, required: false
  private _stops = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
  public putStops(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorStops[] | cdktf.IResolvable) {
    this._stops.internalValue = value;
  }
  public resetStops() {
    this._stops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopsInput() {
    return this._stops.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorToTerraform(struct!.color),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._color.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._color.internalValue = value.color;
    }
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

  // color - computed: false, optional: false, required: true
  private _color = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientColor) {
    this._color.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolidToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolidOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColor {
  /**
  * gradient block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient QuicksightTemplate#gradient}
  */
  readonly gradient?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradient;
  /**
  * solid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#solid QuicksightTemplate#solid}
  */
  readonly solid?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolid;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gradient: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientToTerraform(struct!.gradient),
    solid: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolidToTerraform(struct!.solid),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._solid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solid = this._solid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gradient.internalValue = undefined;
      this._solid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gradient.internalValue = value.gradient;
      this._solid.internalValue = value.solid;
    }
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // solid - computed: false, optional: true, required: false
  private _solid = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolidOutputReference(this, "solid");
  public get solid() {
    return this._solid;
  }
  public putSolid(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorSolid) {
    this._solid.internalValue = value;
  }
  public resetSolid() {
    this._solid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidInput() {
    return this._solid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient_offset QuicksightTemplate#gradient_offset}
  */
  readonly gradientOffset: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
    gradient_offset: cdktf.numberToTerraform(struct!.gradientOffset),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    if (this._gradientOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientOffset = this._gradientOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
      this._gradientOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
      this._gradientOffset = value.gradientOffset;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }

  // gradient_offset - computed: false, optional: false, required: true
  private _gradientOffset?: number; 
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
  public set gradientOffset(value: number) {
    this._gradientOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientOffsetInput() {
    return this._gradientOffset;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColor {
  /**
  * stops block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#stops QuicksightTemplate#stops}
  */
  readonly stops?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stops: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsToTerraform, true)(struct!.stops),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stops = this._stops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stops.internalValue = value.stops;
    }
  }

  // stops - computed: false, optional: true, required: false
  private _stops = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
  public putStops(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorStops[] | cdktf.IResolvable) {
    this._stops.internalValue = value;
  }
  public resetStops() {
    this._stops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopsInput() {
    return this._stops.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorToTerraform(struct!.color),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._color.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._color.internalValue = value.color;
    }
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

  // color - computed: false, optional: false, required: true
  private _color = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientColor) {
    this._color.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolidToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolidOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColor {
  /**
  * gradient block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient QuicksightTemplate#gradient}
  */
  readonly gradient?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradient;
  /**
  * solid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#solid QuicksightTemplate#solid}
  */
  readonly solid?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolid;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gradient: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientToTerraform(struct!.gradient),
    solid: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolidToTerraform(struct!.solid),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._solid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solid = this._solid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gradient.internalValue = undefined;
      this._solid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gradient.internalValue = value.gradient;
      this._solid.internalValue = value.solid;
    }
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // solid - computed: false, optional: true, required: false
  private _solid = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolidOutputReference(this, "solid");
  public get solid() {
    return this._solid;
  }
  public putSolid(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorSolid) {
    this._solid.internalValue = value;
  }
  public resetSolid() {
    this._solid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidInput() {
    return this._solid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRow {
  /**
  * background_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColor;
  /**
  * text_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_color QuicksightTemplate#text_color}
  */
  readonly textColor: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorToTerraform(struct!.backgroundColor),
    text_color: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorToTerraform(struct!.textColor),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor?.internalValue;
    }
    if (this._textColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor.internalValue = undefined;
      this._textColor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor.internalValue = value.backgroundColor;
      this._textColor.internalValue = value.textColor;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColorOutputReference(this, "background_color");
  public get backgroundColor() {
    return this._backgroundColor;
  }
  public putBackgroundColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowBackgroundColor) {
    this._backgroundColor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor.internalValue;
  }

  // text_color - computed: false, optional: false, required: true
  private _textColor = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColorOutputReference(this, "text_color");
  public get textColor() {
    return this._textColor;
  }
  public putTextColor(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowTextColor) {
    this._textColor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions {
  /**
  * cell block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cell QuicksightTemplate#cell}
  */
  readonly cell?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCell;
  /**
  * row block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row QuicksightTemplate#row}
  */
  readonly row?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRow;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cell: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellToTerraform(struct!.cell),
    row: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowToTerraform(struct!.row),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cell?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cell = this._cell?.internalValue;
    }
    if (this._row?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cell.internalValue = undefined;
      this._row.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cell.internalValue = value.cell;
      this._row.internalValue = value.row;
    }
  }

  // cell - computed: false, optional: true, required: false
  private _cell = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference(this, "cell");
  public get cell() {
    return this._cell;
  }
  public putCell(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCell) {
    this._cell.internalValue = value;
  }
  public resetCell() {
    this._cell.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellInput() {
    return this._cell.internalValue;
  }

  // row - computed: false, optional: true, required: false
  private _row = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRowOutputReference(this, "row");
  public get row() {
    return this._row;
  }
  public putRow(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsRow) {
    this._row.internalValue = value;
  }
  public resetRow() {
    this._row.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormatting {
  /**
  * conditional_formatting_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#conditional_formatting_options QuicksightTemplate#conditional_formatting_options}
  */
  readonly conditionalFormattingOptions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormatting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_formatting_options: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsToTerraform, true)(struct!.conditionalFormattingOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormatting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalFormattingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormattingOptions = this._conditionalFormattingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormatting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionalFormattingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionalFormattingOptions.internalValue = value.conditionalFormattingOptions;
    }
  }

  // conditional_formatting_options - computed: false, optional: true, required: false
  private _conditionalFormattingOptions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsList(this, "conditional_formatting_options", false);
  public get conditionalFormattingOptions() {
    return this._conditionalFormattingOptions;
  }
  public putConditionalFormattingOptions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptions[] | cdktf.IResolvable) {
    this._conditionalFormattingOptions.internalValue = value;
  }
  public resetConditionalFormattingOptions() {
    this._conditionalFormattingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormattingOptionsInput() {
    return this._conditionalFormattingOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainText = this._plainText;
    }
    if (this._richText !== undefined) {
      hasAnyValues = true;
      internalValueResult.richText = this._richText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plainText = undefined;
      this._richText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plainText = value.plainText;
      this._richText = value.richText;
    }
  }

  // plain_text - computed: false, optional: true, required: false
  private _plainText?: string; 
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }
  public set plainText(value: string) {
    this._plainText = value;
  }
  public resetPlainText() {
    this._plainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextInput() {
    return this._plainText;
  }

  // rich_text - computed: false, optional: true, required: false
  private _richText?: string; 
  public get richText() {
    return this.getStringAttribute('rich_text');
  }
  public set richText(value: string) {
    this._richText = value;
  }
  public resetRichText() {
    this._richText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get richTextInput() {
    return this._richText;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._formatText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatText = this._formatText?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
      this._formatText.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
      this._formatText.internalValue = value.formatText;
    }
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // format_text - computed: false, optional: true, required: false
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleFormatText) {
    this._formatText.internalValue = value;
  }
  public resetFormatText() {
    this._formatText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTextInput() {
    return this._formatText.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainText = this._plainText;
    }
    if (this._richText !== undefined) {
      hasAnyValues = true;
      internalValueResult.richText = this._richText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plainText = undefined;
      this._richText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plainText = value.plainText;
      this._richText = value.richText;
    }
  }

  // plain_text - computed: false, optional: true, required: false
  private _plainText?: string; 
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }
  public set plainText(value: string) {
    this._plainText = value;
  }
  public resetPlainText() {
    this._plainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextInput() {
    return this._plainText;
  }

  // rich_text - computed: false, optional: true, required: false
  private _richText?: string; 
  public get richText() {
    return this.getStringAttribute('rich_text');
  }
  public set richText(value: string) {
    this._richText = value;
  }
  public resetRichText() {
    this._richText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get richTextInput() {
    return this._richText;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisualTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisualTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._formatText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatText = this._formatText?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
      this._formatText.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
      this._formatText.internalValue = value.formatText;
    }
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // format_text - computed: false, optional: true, required: false
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleFormatText) {
    this._formatText.internalValue = value;
  }
  public resetFormatText() {
    this._formatText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTextInput() {
    return this._formatText.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTableVisual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_id QuicksightTemplate#visual_id}
  */
  readonly visualId: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
  */
  readonly actions?: QuicksightTemplateDefinitionSheetsVisualsTableVisualActions[] | cdktf.IResolvable;
  /**
  * chart_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_configuration QuicksightTemplate#chart_configuration}
  */
  readonly chartConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfiguration;
  /**
  * conditional_formatting block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#conditional_formatting QuicksightTemplate#conditional_formatting}
  */
  readonly conditionalFormatting?: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormatting;
  /**
  * subtitle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#subtitle QuicksightTemplate#subtitle}
  */
  readonly subtitle?: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitle;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsTableVisualToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTableVisualOutputReference | QuicksightTemplateDefinitionSheetsVisualsTableVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visual_id: cdktf.stringToTerraform(struct!.visualId),
    actions: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTableVisualActionsToTerraform, true)(struct!.actions),
    chart_configuration: quicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationToTerraform(struct!.chartConfiguration),
    conditional_formatting: quicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingToTerraform(struct!.conditionalFormatting),
    subtitle: quicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleToTerraform(struct!.subtitle),
    title: quicksightTemplateDefinitionSheetsVisualsTableVisualTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTableVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTableVisual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualId !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualId = this._visualId;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._chartConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartConfiguration = this._chartConfiguration?.internalValue;
    }
    if (this._conditionalFormatting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormatting = this._conditionalFormatting?.internalValue;
    }
    if (this._subtitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTableVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visualId = undefined;
      this._actions.internalValue = undefined;
      this._chartConfiguration.internalValue = undefined;
      this._conditionalFormatting.internalValue = undefined;
      this._subtitle.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visualId = value.visualId;
      this._actions.internalValue = value.actions;
      this._chartConfiguration.internalValue = value.chartConfiguration;
      this._conditionalFormatting.internalValue = value.conditionalFormatting;
      this._subtitle.internalValue = value.subtitle;
      this._title.internalValue = value.title;
    }
  }

  // visual_id - computed: false, optional: false, required: true
  private _visualId?: string; 
  public get visualId() {
    return this.getStringAttribute('visual_id');
  }
  public set visualId(value: string) {
    this._visualId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualIdInput() {
    return this._visualId;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new QuicksightTemplateDefinitionSheetsVisualsTableVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // chart_configuration - computed: false, optional: true, required: false
  private _chartConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfigurationOutputReference(this, "chart_configuration");
  public get chartConfiguration() {
    return this._chartConfiguration;
  }
  public putChartConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualChartConfiguration) {
    this._chartConfiguration.internalValue = value;
  }
  public resetChartConfiguration() {
    this._chartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartConfigurationInput() {
    return this._chartConfiguration.internalValue;
  }

  // conditional_formatting - computed: false, optional: true, required: false
  private _conditionalFormatting = new QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormattingOutputReference(this, "conditional_formatting");
  public get conditionalFormatting() {
    return this._conditionalFormatting;
  }
  public putConditionalFormatting(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualConditionalFormatting) {
    this._conditionalFormatting.internalValue = value;
  }
  public resetConditionalFormatting() {
    this._conditionalFormatting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormattingInput() {
    return this._conditionalFormatting.internalValue;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle = new QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualSubtitle) {
    this._subtitle.internalValue = value;
  }
  public resetSubtitle() {
    this._subtitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new QuicksightTemplateDefinitionSheetsVisualsTableVisualTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsTableVisualTitle) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_field_option QuicksightTemplate#selected_field_option}
  */
  readonly selectedFieldOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields QuicksightTemplate#selected_fields}
  */
  readonly selectedFields?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_field_option: cdktf.stringToTerraform(struct!.selectedFieldOption),
    selected_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedFieldOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedFieldOption = this._selectedFieldOption;
    }
    if (this._selectedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedFields = this._selectedFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedFieldOption = undefined;
      this._selectedFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedFieldOption = value.selectedFieldOption;
      this._selectedFields = value.selectedFields;
    }
  }

  // selected_field_option - computed: false, optional: true, required: false
  private _selectedFieldOption?: string; 
  public get selectedFieldOption() {
    return this.getStringAttribute('selected_field_option');
  }
  public set selectedFieldOption(value: string) {
    this._selectedFieldOption = value;
  }
  public resetSelectedFieldOption() {
    this._selectedFieldOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldOptionInput() {
    return this._selectedFieldOption;
  }

  // selected_fields - computed: false, optional: true, required: false
  private _selectedFields?: string[]; 
  public get selectedFields() {
    return this.getListAttribute('selected_fields');
  }
  public set selectedFields(value: string[]) {
    this._selectedFields = value;
  }
  public resetSelectedFields() {
    this._selectedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsInput() {
    return this._selectedFields;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visual_option QuicksightTemplate#target_visual_option}
  */
  readonly targetVisualOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals QuicksightTemplate#target_visuals}
  */
  readonly targetVisuals?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_visual_option: cdktf.stringToTerraform(struct!.targetVisualOption),
    target_visuals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVisuals),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetVisualOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVisualOption = this._targetVisualOption;
    }
    if (this._targetVisuals !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVisuals = this._targetVisuals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetVisualOption = undefined;
      this._targetVisuals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetVisualOption = value.targetVisualOption;
      this._targetVisuals = value.targetVisuals;
    }
  }

  // target_visual_option - computed: false, optional: true, required: false
  private _targetVisualOption?: string; 
  public get targetVisualOption() {
    return this.getStringAttribute('target_visual_option');
  }
  public set targetVisualOption(value: string) {
    this._targetVisualOption = value;
  }
  public resetTargetVisualOption() {
    this._targetVisualOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualOptionInput() {
    return this._targetVisualOption;
  }

  // target_visuals - computed: false, optional: true, required: false
  private _targetVisuals?: string[]; 
  public get targetVisuals() {
    return cdktf.Fn.tolist(this.getListAttribute('target_visuals'));
  }
  public set targetVisuals(value: string[]) {
    this._targetVisuals = value;
  }
  public resetTargetVisuals() {
    this._targetVisuals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualsInput() {
    return this._targetVisuals;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration {
  /**
  * same_sheet_target_visual_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#same_sheet_target_visual_configuration QuicksightTemplate#same_sheet_target_visual_configuration}
  */
  readonly sameSheetTargetVisualConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    same_sheet_target_visual_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct!.sameSheetTargetVisualConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sameSheetTargetVisualConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSheetTargetVisualConfiguration = this._sameSheetTargetVisualConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sameSheetTargetVisualConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sameSheetTargetVisualConfiguration.internalValue = value.sameSheetTargetVisualConfiguration;
    }
  }

  // same_sheet_target_visual_configuration - computed: false, optional: true, required: false
  private _sameSheetTargetVisualConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference(this, "same_sheet_target_visual_configuration");
  public get sameSheetTargetVisualConfiguration() {
    return this._sameSheetTargetVisualConfiguration;
  }
  public putSameSheetTargetVisualConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration) {
    this._sameSheetTargetVisualConfiguration.internalValue = value;
  }
  public resetSameSheetTargetVisualConfiguration() {
    this._sameSheetTargetVisualConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSheetTargetVisualConfigurationInput() {
    return this._sameSheetTargetVisualConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperation {
  /**
  * selected_fields_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields_configuration QuicksightTemplate#selected_fields_configuration}
  */
  readonly selectedFieldsConfiguration: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration;
  /**
  * target_visuals_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals_configuration QuicksightTemplate#target_visuals_configuration}
  */
  readonly targetVisualsConfiguration: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_fields_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct!.selectedFieldsConfiguration),
    target_visuals_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct!.targetVisualsConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedFieldsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedFieldsConfiguration = this._selectedFieldsConfiguration?.internalValue;
    }
    if (this._targetVisualsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVisualsConfiguration = this._targetVisualsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedFieldsConfiguration.internalValue = undefined;
      this._targetVisualsConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedFieldsConfiguration.internalValue = value.selectedFieldsConfiguration;
      this._targetVisualsConfiguration.internalValue = value.targetVisualsConfiguration;
    }
  }

  // selected_fields_configuration - computed: false, optional: false, required: true
  private _selectedFieldsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference(this, "selected_fields_configuration");
  public get selectedFieldsConfiguration() {
    return this._selectedFieldsConfiguration;
  }
  public putSelectedFieldsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration) {
    this._selectedFieldsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsConfigurationInput() {
    return this._selectedFieldsConfiguration.internalValue;
  }

  // target_visuals_configuration - computed: false, optional: false, required: true
  private _targetVisualsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference(this, "target_visuals_configuration");
  public get targetVisualsConfiguration() {
    return this._targetVisualsConfiguration;
  }
  public putTargetVisualsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration) {
    this._targetVisualsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualsConfigurationInput() {
    return this._targetVisualsConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_sheet_id QuicksightTemplate#target_sheet_id}
  */
  readonly targetSheetId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_sheet_id: cdktf.stringToTerraform(struct!.targetSheetId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetSheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSheetId = this._targetSheetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetSheetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetSheetId = value.targetSheetId;
    }
  }

  // target_sheet_id - computed: false, optional: false, required: true
  private _targetSheetId?: string; 
  public get targetSheetId() {
    return this.getStringAttribute('target_sheet_id');
  }
  public set targetSheetId(value: string) {
    this._targetSheetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSheetIdInput() {
    return this._targetSheetId;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperation {
  /**
  * local_navigation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#local_navigation_configuration QuicksightTemplate#local_navigation_configuration}
  */
  readonly localNavigationConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_navigation_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct!.localNavigationConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localNavigationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNavigationConfiguration = this._localNavigationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localNavigationConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localNavigationConfiguration.internalValue = value.localNavigationConfiguration;
    }
  }

  // local_navigation_configuration - computed: false, optional: true, required: false
  private _localNavigationConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference(this, "local_navigation_configuration");
  public get localNavigationConfiguration() {
    return this._localNavigationConfiguration;
  }
  public putLocalNavigationConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration) {
    this._localNavigationConfiguration.internalValue = value;
  }
  public resetLocalNavigationConfiguration() {
    this._localNavigationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNavigationConfigurationInput() {
    return this._localNavigationConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_values QuicksightTemplate#date_time_values}
  */
  readonly dateTimeValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_values QuicksightTemplate#decimal_values}
  */
  readonly decimalValues?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#integer_values QuicksightTemplate#integer_values}
  */
  readonly integerValues?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#string_values QuicksightTemplate#string_values}
  */
  readonly stringValues?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dateTimeValues),
    decimal_values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.decimalValues),
    integer_values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerValues),
    string_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringValues),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeValues = this._dateTimeValues;
    }
    if (this._decimalValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalValues = this._decimalValues;
    }
    if (this._integerValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValues = this._integerValues;
    }
    if (this._stringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValues = this._stringValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeValues = undefined;
      this._decimalValues = undefined;
      this._integerValues = undefined;
      this._stringValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeValues = value.dateTimeValues;
      this._decimalValues = value.decimalValues;
      this._integerValues = value.integerValues;
      this._stringValues = value.stringValues;
    }
  }

  // date_time_values - computed: false, optional: true, required: false
  private _dateTimeValues?: string[]; 
  public get dateTimeValues() {
    return this.getListAttribute('date_time_values');
  }
  public set dateTimeValues(value: string[]) {
    this._dateTimeValues = value;
  }
  public resetDateTimeValues() {
    this._dateTimeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeValuesInput() {
    return this._dateTimeValues;
  }

  // decimal_values - computed: false, optional: true, required: false
  private _decimalValues?: number[]; 
  public get decimalValues() {
    return this.getNumberListAttribute('decimal_values');
  }
  public set decimalValues(value: number[]) {
    this._decimalValues = value;
  }
  public resetDecimalValues() {
    this._decimalValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalValuesInput() {
    return this._decimalValues;
  }

  // integer_values - computed: false, optional: true, required: false
  private _integerValues?: number[]; 
  public get integerValues() {
    return this.getNumberListAttribute('integer_values');
  }
  public set integerValues(value: number[]) {
    this._integerValues = value;
  }
  public resetIntegerValues() {
    this._integerValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValuesInput() {
    return this._integerValues;
  }

  // string_values - computed: false, optional: true, required: false
  private _stringValues?: string[]; 
  public get stringValues() {
    return this.getListAttribute('string_values');
  }
  public set stringValues(value: string[]) {
    this._stringValues = value;
  }
  public resetStringValues() {
    this._stringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValuesInput() {
    return this._stringValues;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_null_value QuicksightTemplate#include_null_value}
  */
  readonly includeNullValue?: boolean | cdktf.IResolvable;
  /**
  * custom_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_values QuicksightTemplate#custom_values}
  */
  readonly customValues: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_null_value: cdktf.booleanToTerraform(struct!.includeNullValue),
    custom_values: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct!.customValues),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNullValue = this._includeNullValue;
    }
    if (this._customValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValues = this._customValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNullValue = undefined;
      this._customValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNullValue = value.includeNullValue;
      this._customValues.internalValue = value.customValues;
    }
  }

  // include_null_value - computed: false, optional: true, required: false
  private _includeNullValue?: boolean | cdktf.IResolvable; 
  public get includeNullValue() {
    return this.getBooleanAttribute('include_null_value');
  }
  public set includeNullValue(value: boolean | cdktf.IResolvable) {
    this._includeNullValue = value;
  }
  public resetIncludeNullValue() {
    this._includeNullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNullValueInput() {
    return this._includeNullValue;
  }

  // custom_values - computed: false, optional: false, required: true
  private _customValues = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference(this, "custom_values");
  public get customValues() {
    return this._customValues;
  }
  public putCustomValues(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues) {
    this._customValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_value_options QuicksightTemplate#select_all_value_options}
  */
  readonly selectAllValueOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_field QuicksightTemplate#source_field}
  */
  readonly sourceField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName?: string;
  /**
  * custom_values_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_values_configuration QuicksightTemplate#custom_values_configuration}
  */
  readonly customValuesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_value_options: cdktf.stringToTerraform(struct!.selectAllValueOptions),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    custom_values_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct!.customValuesConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectAllValueOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllValueOptions = this._selectAllValueOptions;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._customValuesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValuesConfiguration = this._customValuesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectAllValueOptions = undefined;
      this._sourceField = undefined;
      this._sourceParameterName = undefined;
      this._customValuesConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectAllValueOptions = value.selectAllValueOptions;
      this._sourceField = value.sourceField;
      this._sourceParameterName = value.sourceParameterName;
      this._customValuesConfiguration.internalValue = value.customValuesConfiguration;
    }
  }

  // select_all_value_options - computed: false, optional: true, required: false
  private _selectAllValueOptions?: string; 
  public get selectAllValueOptions() {
    return this.getStringAttribute('select_all_value_options');
  }
  public set selectAllValueOptions(value: string) {
    this._selectAllValueOptions = value;
  }
  public resetSelectAllValueOptions() {
    this._selectAllValueOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllValueOptionsInput() {
    return this._selectAllValueOptions;
  }

  // source_field - computed: false, optional: true, required: false
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  public resetSourceField() {
    this._sourceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }

  // source_parameter_name - computed: false, optional: true, required: false
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  public resetSourceParameterName() {
    this._sourceParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // custom_values_configuration - computed: false, optional: true, required: false
  private _customValuesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference(this, "custom_values_configuration");
  public get customValuesConfiguration() {
    return this._customValuesConfiguration;
  }
  public putCustomValuesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration) {
    this._customValuesConfiguration.internalValue = value;
  }
  public resetCustomValuesConfiguration() {
    this._customValuesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesConfigurationInput() {
    return this._customValuesConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination_parameter_name QuicksightTemplate#destination_parameter_name}
  */
  readonly destinationParameterName: string;
  /**
  * value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_parameter_name: cdktf.stringToTerraform(struct!.destinationParameterName),
    value: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct!.value),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationParameterName = this._destinationParameterName;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationParameterName = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationParameterName = value.destinationParameterName;
      this._value.internalValue = value.value;
    }
  }

  // destination_parameter_name - computed: false, optional: false, required: true
  private _destinationParameterName?: string; 
  public get destinationParameterName() {
    return this.getStringAttribute('destination_parameter_name');
  }
  public set destinationParameterName(value: string) {
    this._destinationParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationParameterNameInput() {
    return this._destinationParameterName;
  }

  // value - computed: false, optional: false, required: true
  private _value = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperation {
  /**
  * parameter_value_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_configurations QuicksightTemplate#parameter_value_configurations}
  */
  readonly parameterValueConfigurations: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value_configurations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform, true)(struct!.parameterValueConfigurations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueConfigurations = this._parameterValueConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterValueConfigurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterValueConfigurations.internalValue = value.parameterValueConfigurations;
    }
  }

  // parameter_value_configurations - computed: false, optional: false, required: true
  private _parameterValueConfigurations = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList(this, "parameter_value_configurations", false);
  public get parameterValueConfigurations() {
    return this._parameterValueConfigurations;
  }
  public putParameterValueConfigurations(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable) {
    this._parameterValueConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueConfigurationsInput() {
    return this._parameterValueConfigurations.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_target QuicksightTemplate#url_target}
  */
  readonly urlTarget: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_template QuicksightTemplate#url_template}
  */
  readonly urlTemplate: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_target: cdktf.stringToTerraform(struct!.urlTarget),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlTarget = this._urlTarget;
    }
    if (this._urlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlTemplate = this._urlTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlTarget = undefined;
      this._urlTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlTarget = value.urlTarget;
      this._urlTemplate = value.urlTemplate;
    }
  }

  // url_target - computed: false, optional: false, required: true
  private _urlTarget?: string; 
  public get urlTarget() {
    return this.getStringAttribute('url_target');
  }
  public set urlTarget(value: string) {
    this._urlTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTargetInput() {
    return this._urlTarget;
  }

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate?: string; 
  public get urlTemplate() {
    return this.getStringAttribute('url_template');
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTemplateInput() {
    return this._urlTemplate;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations {
  /**
  * filter_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_operation QuicksightTemplate#filter_operation}
  */
  readonly filterOperation?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperation;
  /**
  * navigation_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#navigation_operation QuicksightTemplate#navigation_operation}
  */
  readonly navigationOperation?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperation;
  /**
  * set_parameters_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#set_parameters_operation QuicksightTemplate#set_parameters_operation}
  */
  readonly setParametersOperation?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperation;
  /**
  * url_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_operation QuicksightTemplate#url_operation}
  */
  readonly urlOperation?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperation;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_operation: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationToTerraform(struct!.filterOperation),
    navigation_operation: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationToTerraform(struct!.navigationOperation),
    set_parameters_operation: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationToTerraform(struct!.setParametersOperation),
    url_operation: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperationToTerraform(struct!.urlOperation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperation = this._filterOperation?.internalValue;
    }
    if (this._navigationOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.navigationOperation = this._navigationOperation?.internalValue;
    }
    if (this._setParametersOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParametersOperation = this._setParametersOperation?.internalValue;
    }
    if (this._urlOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlOperation = this._urlOperation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterOperation.internalValue = undefined;
      this._navigationOperation.internalValue = undefined;
      this._setParametersOperation.internalValue = undefined;
      this._urlOperation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterOperation.internalValue = value.filterOperation;
      this._navigationOperation.internalValue = value.navigationOperation;
      this._setParametersOperation.internalValue = value.setParametersOperation;
      this._urlOperation.internalValue = value.urlOperation;
    }
  }

  // filter_operation - computed: false, optional: true, required: false
  private _filterOperation = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsFilterOperation) {
    this._filterOperation.internalValue = value;
  }
  public resetFilterOperation() {
    this._filterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperationInput() {
    return this._filterOperation.internalValue;
  }

  // navigation_operation - computed: false, optional: true, required: false
  private _navigationOperation = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperationOutputReference(this, "navigation_operation");
  public get navigationOperation() {
    return this._navigationOperation;
  }
  public putNavigationOperation(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsNavigationOperation) {
    this._navigationOperation.internalValue = value;
  }
  public resetNavigationOperation() {
    this._navigationOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navigationOperationInput() {
    return this._navigationOperation.internalValue;
  }

  // set_parameters_operation - computed: false, optional: true, required: false
  private _setParametersOperation = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperationOutputReference(this, "set_parameters_operation");
  public get setParametersOperation() {
    return this._setParametersOperation;
  }
  public putSetParametersOperation(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsSetParametersOperation) {
    this._setParametersOperation.internalValue = value;
  }
  public resetSetParametersOperation() {
    this._setParametersOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParametersOperationInput() {
    return this._setParametersOperation.internalValue;
  }

  // url_operation - computed: false, optional: true, required: false
  private _urlOperation = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperationOutputReference(this, "url_operation");
  public get urlOperation() {
    return this._urlOperation;
  }
  public putUrlOperation(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsUrlOperation) {
    this._urlOperation.internalValue = value;
  }
  public resetUrlOperation() {
    this._urlOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlOperationInput() {
    return this._urlOperation.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_action_id QuicksightTemplate#custom_action_id}
  */
  readonly customActionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#trigger QuicksightTemplate#trigger}
  */
  readonly trigger: string;
  /**
  * action_operations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#action_operations QuicksightTemplate#action_operations}
  */
  readonly actionOperations: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_id: cdktf.stringToTerraform(struct!.customActionId),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    action_operations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsToTerraform, true)(struct!.actionOperations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionId = this._customActionId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._actionOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOperations = this._actionOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customActionId = undefined;
      this._name = undefined;
      this._status = undefined;
      this._trigger = undefined;
      this._actionOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customActionId = value.customActionId;
      this._name = value.name;
      this._status = value.status;
      this._trigger = value.trigger;
      this._actionOperations.internalValue = value.actionOperations;
    }
  }

  // custom_action_id - computed: false, optional: false, required: true
  private _customActionId?: string; 
  public get customActionId() {
    return this.getStringAttribute('custom_action_id');
  }
  public set customActionId(value: string) {
    this._customActionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionIdInput() {
    return this._customActionId;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // action_operations - computed: false, optional: false, required: true
  private _actionOperations = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperationsList(this, "action_operations", false);
  public get actionOperations() {
    return this._actionOperations;
  }
  public putActionOperations(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsActionOperations[] | cdktf.IResolvable) {
    this._actionOperations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOperationsInput() {
    return this._actionOperations.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActions[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
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

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._column.internalValue = value.column;
    }
  }

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._applyTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyTo = this._applyTo?.internalValue;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._applyTo.internalValue = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._applyTo.internalValue = value.applyTo;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // apply_to - computed: false, optional: true, required: false
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo) {
    this._applyTo.internalValue = value;
  }
  public resetApplyTo() {
    this._applyTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToInput() {
    return this._applyTo.internalValue;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_icon_visibility QuicksightTemplate#sort_icon_visibility}
  */
  readonly sortIconVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * axis_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#axis_label_options QuicksightTemplate#axis_label_options}
  */
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sortIconVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortIconVisibility = this._sortIconVisibility;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._axisLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLabelOptions = this._axisLabelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sortIconVisibility = undefined;
      this._visibility = undefined;
      this._axisLabelOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sortIconVisibility = value.sortIconVisibility;
      this._visibility = value.visibility;
      this._axisLabelOptions.internalValue = value.axisLabelOptions;
    }
  }

  // sort_icon_visibility - computed: false, optional: true, required: false
  private _sortIconVisibility?: string; 
  public get sortIconVisibility() {
    return this.getStringAttribute('sort_icon_visibility');
  }
  public set sortIconVisibility(value: string) {
    this._sortIconVisibility = value;
  }
  public resetSortIconVisibility() {
    this._sortIconVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortIconVisibilityInput() {
    return this._sortIconVisibility;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // axis_label_options - computed: false, optional: true, required: false
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorLabelOptionsAxisLabelOptions) {
    this._axisLabelOptions.internalValue = value;
  }
  public resetAxisLabelOptions() {
    this._axisLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLabelOptionsInput() {
    return this._axisLabelOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._dataValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._dataValue = value.dataValue;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_fill_type QuicksightTemplate#color_fill_type}
  */
  readonly colorFillType: string;
  /**
  * colors block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#colors QuicksightTemplate#colors}
  */
  readonly colors: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors[] | cdktf.IResolvable;
  /**
  * null_value_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_color QuicksightTemplate#null_value_color}
  */
  readonly nullValueColor?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColor;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color_fill_type: cdktf.stringToTerraform(struct!.colorFillType),
    colors: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsToTerraform, true)(struct!.colors),
    null_value_color: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColorToTerraform(struct!.nullValueColor),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colorFillType !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorFillType = this._colorFillType;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._nullValueColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueColor = this._nullValueColor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colorFillType = undefined;
      this._colors.internalValue = undefined;
      this._nullValueColor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colorFillType = value.colorFillType;
      this._colors.internalValue = value.colors;
      this._nullValueColor.internalValue = value.nullValueColor;
    }
  }

  // color_fill_type - computed: false, optional: false, required: true
  private _colorFillType?: string; 
  public get colorFillType() {
    return this.getStringAttribute('color_fill_type');
  }
  public set colorFillType(value: string) {
    this._colorFillType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorFillTypeInput() {
    return this._colorFillType;
  }

  // colors - computed: false, optional: false, required: true
  private _colors = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // null_value_color - computed: false, optional: true, required: false
  private _nullValueColor = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColorOutputReference(this, "null_value_color");
  public get nullValueColor() {
    return this._nullValueColor;
  }
  public putNullValueColor(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationColorScaleNullValueColor) {
    this._nullValueColor.internalValue = value;
  }
  public resetNullValueColor() {
    this._nullValueColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueColorInput() {
    return this._nullValueColor.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_value QuicksightTemplate#field_value}
  */
  readonly fieldValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._fieldValue = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._fieldValue = value.fieldValue;
      this._visibility = value.visibility;
    }
  }

  // field_id - computed: false, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._visibility = value.visibility;
    }
  }

  // field_id - computed: false, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes {
  /**
  * data_path_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_path_label_type QuicksightTemplate#data_path_label_type}
  */
  readonly dataPathLabelType?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType;
  /**
  * field_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_label_type QuicksightTemplate#field_label_type}
  */
  readonly fieldLabelType?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType;
  /**
  * maximum_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum_label_type QuicksightTemplate#maximum_label_type}
  */
  readonly maximumLabelType?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType;
  /**
  * minimum_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum_label_type QuicksightTemplate#minimum_label_type}
  */
  readonly minimumLabelType?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType;
  /**
  * range_ends_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_ends_label_type QuicksightTemplate#range_ends_label_type}
  */
  readonly rangeEndsLabelType?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_path_label_type: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeToTerraform(struct!.dataPathLabelType),
    field_label_type: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeToTerraform(struct!.fieldLabelType),
    maximum_label_type: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeToTerraform(struct!.maximumLabelType),
    minimum_label_type: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeToTerraform(struct!.minimumLabelType),
    range_ends_label_type: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeToTerraform(struct!.rangeEndsLabelType),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPathLabelType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPathLabelType = this._dataPathLabelType?.internalValue;
    }
    if (this._fieldLabelType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLabelType = this._fieldLabelType?.internalValue;
    }
    if (this._maximumLabelType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLabelType = this._maximumLabelType?.internalValue;
    }
    if (this._minimumLabelType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLabelType = this._minimumLabelType?.internalValue;
    }
    if (this._rangeEndsLabelType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEndsLabelType = this._rangeEndsLabelType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPathLabelType.internalValue = undefined;
      this._fieldLabelType.internalValue = undefined;
      this._maximumLabelType.internalValue = undefined;
      this._minimumLabelType.internalValue = undefined;
      this._rangeEndsLabelType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPathLabelType.internalValue = value.dataPathLabelType;
      this._fieldLabelType.internalValue = value.fieldLabelType;
      this._maximumLabelType.internalValue = value.maximumLabelType;
      this._minimumLabelType.internalValue = value.minimumLabelType;
      this._rangeEndsLabelType.internalValue = value.rangeEndsLabelType;
    }
  }

  // data_path_label_type - computed: false, optional: true, required: false
  private _dataPathLabelType = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference(this, "data_path_label_type");
  public get dataPathLabelType() {
    return this._dataPathLabelType;
  }
  public putDataPathLabelType(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType) {
    this._dataPathLabelType.internalValue = value;
  }
  public resetDataPathLabelType() {
    this._dataPathLabelType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPathLabelTypeInput() {
    return this._dataPathLabelType.internalValue;
  }

  // field_label_type - computed: false, optional: true, required: false
  private _fieldLabelType = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference(this, "field_label_type");
  public get fieldLabelType() {
    return this._fieldLabelType;
  }
  public putFieldLabelType(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType) {
    this._fieldLabelType.internalValue = value;
  }
  public resetFieldLabelType() {
    this._fieldLabelType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLabelTypeInput() {
    return this._fieldLabelType.internalValue;
  }

  // maximum_label_type - computed: false, optional: true, required: false
  private _maximumLabelType = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference(this, "maximum_label_type");
  public get maximumLabelType() {
    return this._maximumLabelType;
  }
  public putMaximumLabelType(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType) {
    this._maximumLabelType.internalValue = value;
  }
  public resetMaximumLabelType() {
    this._maximumLabelType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLabelTypeInput() {
    return this._maximumLabelType.internalValue;
  }

  // minimum_label_type - computed: false, optional: true, required: false
  private _minimumLabelType = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference(this, "minimum_label_type");
  public get minimumLabelType() {
    return this._minimumLabelType;
  }
  public putMinimumLabelType(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType) {
    this._minimumLabelType.internalValue = value;
  }
  public resetMinimumLabelType() {
    this._minimumLabelType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLabelTypeInput() {
    return this._minimumLabelType.internalValue;
  }

  // range_ends_label_type - computed: false, optional: true, required: false
  private _rangeEndsLabelType = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference(this, "range_ends_label_type");
  public get rangeEndsLabelType() {
    return this._rangeEndsLabelType;
  }
  public putRangeEndsLabelType(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType) {
    this._rangeEndsLabelType.internalValue = value;
  }
  public resetRangeEndsLabelType() {
    this._rangeEndsLabelType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndsLabelTypeInput() {
    return this._rangeEndsLabelType.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_label_visibility QuicksightTemplate#category_label_visibility}
  */
  readonly categoryLabelVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_color QuicksightTemplate#label_color}
  */
  readonly labelColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_content QuicksightTemplate#label_content}
  */
  readonly labelContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#measure_label_visibility QuicksightTemplate#measure_label_visibility}
  */
  readonly measureLabelVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#overlap QuicksightTemplate#overlap}
  */
  readonly overlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#position QuicksightTemplate#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * data_label_types block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_label_types QuicksightTemplate#data_label_types}
  */
  readonly dataLabelTypes?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable;
  /**
  * label_font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_font_configuration QuicksightTemplate#label_font_configuration}
  */
  readonly labelFontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_label_visibility: cdktf.stringToTerraform(struct!.categoryLabelVisibility),
    label_color: cdktf.stringToTerraform(struct!.labelColor),
    label_content: cdktf.stringToTerraform(struct!.labelContent),
    measure_label_visibility: cdktf.stringToTerraform(struct!.measureLabelVisibility),
    overlap: cdktf.stringToTerraform(struct!.overlap),
    position: cdktf.stringToTerraform(struct!.position),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    data_label_types: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesToTerraform, true)(struct!.dataLabelTypes),
    label_font_configuration: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationToTerraform(struct!.labelFontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryLabelVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryLabelVisibility = this._categoryLabelVisibility;
    }
    if (this._labelColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelColor = this._labelColor;
    }
    if (this._labelContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelContent = this._labelContent;
    }
    if (this._measureLabelVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureLabelVisibility = this._measureLabelVisibility;
    }
    if (this._overlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlap = this._overlap;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._dataLabelTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabelTypes = this._dataLabelTypes?.internalValue;
    }
    if (this._labelFontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFontConfiguration = this._labelFontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryLabelVisibility = undefined;
      this._labelColor = undefined;
      this._labelContent = undefined;
      this._measureLabelVisibility = undefined;
      this._overlap = undefined;
      this._position = undefined;
      this._visibility = undefined;
      this._dataLabelTypes.internalValue = undefined;
      this._labelFontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryLabelVisibility = value.categoryLabelVisibility;
      this._labelColor = value.labelColor;
      this._labelContent = value.labelContent;
      this._measureLabelVisibility = value.measureLabelVisibility;
      this._overlap = value.overlap;
      this._position = value.position;
      this._visibility = value.visibility;
      this._dataLabelTypes.internalValue = value.dataLabelTypes;
      this._labelFontConfiguration.internalValue = value.labelFontConfiguration;
    }
  }

  // category_label_visibility - computed: false, optional: true, required: false
  private _categoryLabelVisibility?: string; 
  public get categoryLabelVisibility() {
    return this.getStringAttribute('category_label_visibility');
  }
  public set categoryLabelVisibility(value: string) {
    this._categoryLabelVisibility = value;
  }
  public resetCategoryLabelVisibility() {
    this._categoryLabelVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryLabelVisibilityInput() {
    return this._categoryLabelVisibility;
  }

  // label_color - computed: false, optional: true, required: false
  private _labelColor?: string; 
  public get labelColor() {
    return this.getStringAttribute('label_color');
  }
  public set labelColor(value: string) {
    this._labelColor = value;
  }
  public resetLabelColor() {
    this._labelColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelColorInput() {
    return this._labelColor;
  }

  // label_content - computed: false, optional: true, required: false
  private _labelContent?: string; 
  public get labelContent() {
    return this.getStringAttribute('label_content');
  }
  public set labelContent(value: string) {
    this._labelContent = value;
  }
  public resetLabelContent() {
    this._labelContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelContentInput() {
    return this._labelContent;
  }

  // measure_label_visibility - computed: false, optional: true, required: false
  private _measureLabelVisibility?: string; 
  public get measureLabelVisibility() {
    return this.getStringAttribute('measure_label_visibility');
  }
  public set measureLabelVisibility(value: string) {
    this._measureLabelVisibility = value;
  }
  public resetMeasureLabelVisibility() {
    this._measureLabelVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureLabelVisibilityInput() {
    return this._measureLabelVisibility;
  }

  // overlap - computed: false, optional: true, required: false
  private _overlap?: string; 
  public get overlap() {
    return this.getStringAttribute('overlap');
  }
  public set overlap(value: string) {
    this._overlap = value;
  }
  public resetOverlap() {
    this._overlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapInput() {
    return this._overlap;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // data_label_types - computed: false, optional: true, required: false
  private _dataLabelTypes = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypesList(this, "data_label_types", false);
  public get dataLabelTypes() {
    return this._dataLabelTypes;
  }
  public putDataLabelTypes(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable) {
    this._dataLabelTypes.internalValue = value;
  }
  public resetDataLabelTypes() {
    this._dataLabelTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLabelTypesInput() {
    return this._dataLabelTypes.internalValue;
  }

  // label_font_configuration - computed: false, optional: true, required: false
  private _labelFontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfigurationOutputReference(this, "label_font_configuration");
  public get labelFontConfiguration() {
    return this._labelFontConfiguration;
  }
  public putLabelFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationDataLabelsLabelFontConfiguration) {
    this._labelFontConfiguration.internalValue = value;
  }
  public resetLabelFontConfiguration() {
    this._labelFontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFontConfigurationInput() {
    return this._labelFontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCalculatedMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._fieldId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._fieldId = value.fieldId;
    }
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

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualChartConfigurationFieldWellsTreeMapAggregatedFieldWellsColorsCategoricalMeasureFieldColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
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

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
