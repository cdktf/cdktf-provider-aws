/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction,
quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy,
quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit,
quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells,
quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsOutputReference } from './structs25600'
import { QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptions,
quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualActions,
quicksightTemplateDefinitionSheetsVisualsWordCloudVisualActionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualActionsList,
QuicksightTemplateDefinitionSheetsVisualsWaterfallVisual,
quicksightTemplateDefinitionSheetsVisualsWaterfallVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsWaterfallVisualOutputReference } from './structs25200'
import { QuicksightTemplateDefinitionSheetsVisualsBarChartVisual,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualOutputReference } from './structs2400'
import { QuicksightTemplateDefinitionSheetsVisualsBoxPlotVisual,
quicksightTemplateDefinitionSheetsVisualsBoxPlotVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBoxPlotVisualOutputReference } from './structs3200'
import { QuicksightTemplateDefinitionSheetsVisualsComboChartVisual,
quicksightTemplateDefinitionSheetsVisualsComboChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsComboChartVisualOutputReference,
QuicksightTemplateDefinitionSheetsVisualsCustomContentVisual,
quicksightTemplateDefinitionSheetsVisualsCustomContentVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsCustomContentVisualOutputReference,
QuicksightTemplateDefinitionSheetsVisualsEmptyVisual,
quicksightTemplateDefinitionSheetsVisualsEmptyVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsEmptyVisualOutputReference } from './structs4800'
import { QuicksightTemplateDefinitionSheetsVisualsFilledMapVisual,
quicksightTemplateDefinitionSheetsVisualsFilledMapVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsFilledMapVisualOutputReference } from './structs5600'
import { QuicksightTemplateDefinitionSheetsVisualsFunnelChartVisual,
quicksightTemplateDefinitionSheetsVisualsFunnelChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsFunnelChartVisualOutputReference } from './structs6400'
import { QuicksightTemplateDefinitionSheetsVisualsGaugeChartVisual,
quicksightTemplateDefinitionSheetsVisualsGaugeChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsGaugeChartVisualOutputReference } from './structs6800'
import { QuicksightTemplateDefinitionSheetsVisualsGeospatialMapVisual,
quicksightTemplateDefinitionSheetsVisualsGeospatialMapVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsGeospatialMapVisualOutputReference } from './structs8000'
import { QuicksightTemplateDefinitionSheetsVisualsHeatMapVisual,
quicksightTemplateDefinitionSheetsVisualsHeatMapVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHeatMapVisualOutputReference } from './structs8800'
import { QuicksightTemplateDefinitionSheetsVisualsHistogramVisual,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualOutputReference } from './structs9200'
import { QuicksightTemplateDefinitionSheetsVisualsInsightVisual,
quicksightTemplateDefinitionSheetsVisualsInsightVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsInsightVisualOutputReference } from './structs13600'
import { QuicksightTemplateDefinitionSheetsVisualsKpiVisual,
quicksightTemplateDefinitionSheetsVisualsKpiVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsKpiVisualOutputReference } from './structs14400'
import { QuicksightTemplateDefinitionSheetsVisualsLineChartVisual,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualOutputReference } from './structs16000'
import { QuicksightTemplateDefinitionSheetsVisualsPieChartVisual,
quicksightTemplateDefinitionSheetsVisualsPieChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualOutputReference } from './structs17200'
import { QuicksightTemplateDefinitionSheetsVisualsPivotTableVisual,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualOutputReference } from './structs18800'
import { QuicksightTemplateDefinitionSheetsVisualsRadarChartVisual,
quicksightTemplateDefinitionSheetsVisualsRadarChartVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsRadarChartVisualOutputReference } from './structs19600'
import { QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualOutputReference } from './structs20400'
import { QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisual,
quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualOutputReference } from './structs22400'
import { QuicksightTemplateDefinitionSheetsVisualsTableVisual,
quicksightTemplateDefinitionSheetsVisualsTableVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTableVisualOutputReference } from './structs23200'
import { QuicksightTemplateDefinitionSheetsVisualsTreeMapVisual,
quicksightTemplateDefinitionSheetsVisualsTreeMapVisualToTerraform,
QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualOutputReference } from './structs24400'
import { QuicksightTemplateDefinitionSheetsFilterControls,
quicksightTemplateDefinitionSheetsFilterControlsToTerraform,
QuicksightTemplateDefinitionSheetsFilterControlsList,
QuicksightTemplateDefinitionParametersDeclarations,
quicksightTemplateDefinitionParametersDeclarationsToTerraform,
QuicksightTemplateDefinitionParametersDeclarationsList } from './structs400'
import { QuicksightTemplateDefinitionSheetsLayouts,
quicksightTemplateDefinitionSheetsLayoutsToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsOutputReference,
QuicksightTemplateDefinitionSheetsParameterControls,
quicksightTemplateDefinitionSheetsParameterControlsToTerraform,
QuicksightTemplateDefinitionSheetsParameterControlsList,
QuicksightTemplateDefinitionSheetsSheetControlLayouts,
quicksightTemplateDefinitionSheetsSheetControlLayoutsToTerraform,
QuicksightTemplateDefinitionSheetsSheetControlLayoutsOutputReference,
QuicksightTemplateDefinitionSheetsTextBoxes,
quicksightTemplateDefinitionSheetsTextBoxesToTerraform,
QuicksightTemplateDefinitionSheetsTextBoxesList } from './structs800'
import { QuicksightTemplateDefinitionAnalysisDefaults,
quicksightTemplateDefinitionAnalysisDefaultsToTerraform,
QuicksightTemplateDefinitionAnalysisDefaultsOutputReference,
QuicksightTemplateDefinitionCalculatedFields,
quicksightTemplateDefinitionCalculatedFieldsToTerraform,
QuicksightTemplateDefinitionCalculatedFieldsList,
QuicksightTemplateDefinitionColumnConfigurations,
quicksightTemplateDefinitionColumnConfigurationsToTerraform,
QuicksightTemplateDefinitionColumnConfigurationsList,
QuicksightTemplateDefinitionDataSetConfiguration,
quicksightTemplateDefinitionDataSetConfigurationToTerraform,
QuicksightTemplateDefinitionDataSetConfigurationList,
QuicksightTemplateDefinitionFilterGroups,
quicksightTemplateDefinitionFilterGroupsToTerraform,
QuicksightTemplateDefinitionFilterGroupsList } from './structs0'
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration {
  /**
  * category_items_limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_items_limit QuicksightTemplate#category_items_limit}
  */
  readonly categoryItemsLimit?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit;
  /**
  * category_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_sort QuicksightTemplate#category_sort}
  */
  readonly categorySort?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_items_limit: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct!.categoryItemsLimit),
    category_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortToTerraform, true)(struct!.categorySort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryItemsLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryItemsLimit = this._categoryItemsLimit?.internalValue;
    }
    if (this._categorySort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorySort = this._categorySort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryItemsLimit.internalValue = undefined;
      this._categorySort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryItemsLimit.internalValue = value.categoryItemsLimit;
      this._categorySort.internalValue = value.categorySort;
    }
  }

  // category_items_limit - computed: false, optional: true, required: false
  private _categoryItemsLimit = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference(this, "category_items_limit");
  public get categoryItemsLimit() {
    return this._categoryItemsLimit;
  }
  public putCategoryItemsLimit(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit) {
    this._categoryItemsLimit.internalValue = value;
  }
  public resetCategoryItemsLimit() {
    this._categoryItemsLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryItemsLimitInput() {
    return this._categoryItemsLimit.internalValue;
  }

  // category_sort - computed: false, optional: true, required: false
  private _categorySort = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortList(this, "category_sort", false);
  public get categorySort() {
    return this._categorySort;
  }
  public putCategorySort(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable) {
    this._categorySort.internalValue = value;
  }
  public resetCategorySort() {
    this._categorySort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySortInput() {
    return this._categorySort.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cloud_layout QuicksightTemplate#cloud_layout}
  */
  readonly cloudLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum_string_length QuicksightTemplate#maximum_string_length}
  */
  readonly maximumStringLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#word_casing QuicksightTemplate#word_casing}
  */
  readonly wordCasing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#word_orientation QuicksightTemplate#word_orientation}
  */
  readonly wordOrientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#word_padding QuicksightTemplate#word_padding}
  */
  readonly wordPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#word_scaling QuicksightTemplate#word_scaling}
  */
  readonly wordScaling?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_layout: cdktf.stringToTerraform(struct!.cloudLayout),
    maximum_string_length: cdktf.numberToTerraform(struct!.maximumStringLength),
    word_casing: cdktf.stringToTerraform(struct!.wordCasing),
    word_orientation: cdktf.stringToTerraform(struct!.wordOrientation),
    word_padding: cdktf.stringToTerraform(struct!.wordPadding),
    word_scaling: cdktf.stringToTerraform(struct!.wordScaling),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLayout = this._cloudLayout;
    }
    if (this._maximumStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumStringLength = this._maximumStringLength;
    }
    if (this._wordCasing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordCasing = this._wordCasing;
    }
    if (this._wordOrientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordOrientation = this._wordOrientation;
    }
    if (this._wordPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordPadding = this._wordPadding;
    }
    if (this._wordScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordScaling = this._wordScaling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudLayout = undefined;
      this._maximumStringLength = undefined;
      this._wordCasing = undefined;
      this._wordOrientation = undefined;
      this._wordPadding = undefined;
      this._wordScaling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudLayout = value.cloudLayout;
      this._maximumStringLength = value.maximumStringLength;
      this._wordCasing = value.wordCasing;
      this._wordOrientation = value.wordOrientation;
      this._wordPadding = value.wordPadding;
      this._wordScaling = value.wordScaling;
    }
  }

  // cloud_layout - computed: false, optional: true, required: false
  private _cloudLayout?: string; 
  public get cloudLayout() {
    return this.getStringAttribute('cloud_layout');
  }
  public set cloudLayout(value: string) {
    this._cloudLayout = value;
  }
  public resetCloudLayout() {
    this._cloudLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLayoutInput() {
    return this._cloudLayout;
  }

  // maximum_string_length - computed: false, optional: true, required: false
  private _maximumStringLength?: number; 
  public get maximumStringLength() {
    return this.getNumberAttribute('maximum_string_length');
  }
  public set maximumStringLength(value: number) {
    this._maximumStringLength = value;
  }
  public resetMaximumStringLength() {
    this._maximumStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumStringLengthInput() {
    return this._maximumStringLength;
  }

  // word_casing - computed: false, optional: true, required: false
  private _wordCasing?: string; 
  public get wordCasing() {
    return this.getStringAttribute('word_casing');
  }
  public set wordCasing(value: string) {
    this._wordCasing = value;
  }
  public resetWordCasing() {
    this._wordCasing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordCasingInput() {
    return this._wordCasing;
  }

  // word_orientation - computed: false, optional: true, required: false
  private _wordOrientation?: string; 
  public get wordOrientation() {
    return this.getStringAttribute('word_orientation');
  }
  public set wordOrientation(value: string) {
    this._wordOrientation = value;
  }
  public resetWordOrientation() {
    this._wordOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordOrientationInput() {
    return this._wordOrientation;
  }

  // word_padding - computed: false, optional: true, required: false
  private _wordPadding?: string; 
  public get wordPadding() {
    return this.getStringAttribute('word_padding');
  }
  public set wordPadding(value: string) {
    this._wordPadding = value;
  }
  public resetWordPadding() {
    this._wordPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordPaddingInput() {
    return this._wordPadding;
  }

  // word_scaling - computed: false, optional: true, required: false
  private _wordScaling?: string; 
  public get wordScaling() {
    return this.getStringAttribute('word_scaling');
  }
  public set wordScaling(value: string) {
    this._wordScaling = value;
  }
  public resetWordScaling() {
    this._wordScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordScalingInput() {
    return this._wordScaling;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfiguration {
  /**
  * category_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_label_options QuicksightTemplate#category_label_options}
  */
  readonly categoryLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptions;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells;
  /**
  * sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_configuration QuicksightTemplate#sort_configuration}
  */
  readonly sortConfiguration?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration;
  /**
  * word_cloud_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#word_cloud_options QuicksightTemplate#word_cloud_options}
  */
  readonly wordCloudOptions?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_label_options: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptionsToTerraform(struct!.categoryLabelOptions),
    field_wells: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    sort_configuration: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationToTerraform(struct!.sortConfiguration),
    word_cloud_options: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsToTerraform(struct!.wordCloudOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryLabelOptions = this._categoryLabelOptions?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._sortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortConfiguration = this._sortConfiguration?.internalValue;
    }
    if (this._wordCloudOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordCloudOptions = this._wordCloudOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryLabelOptions.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._sortConfiguration.internalValue = undefined;
      this._wordCloudOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryLabelOptions.internalValue = value.categoryLabelOptions;
      this._fieldWells.internalValue = value.fieldWells;
      this._sortConfiguration.internalValue = value.sortConfiguration;
      this._wordCloudOptions.internalValue = value.wordCloudOptions;
    }
  }

  // category_label_options - computed: false, optional: true, required: false
  private _categoryLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptionsOutputReference(this, "category_label_options");
  public get categoryLabelOptions() {
    return this._categoryLabelOptions;
  }
  public putCategoryLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptions) {
    this._categoryLabelOptions.internalValue = value;
  }
  public resetCategoryLabelOptions() {
    this._categoryLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryLabelOptionsInput() {
    return this._categoryLabelOptions.internalValue;
  }

  // field_wells - computed: false, optional: true, required: false
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells) {
    this._fieldWells.internalValue = value;
  }
  public resetFieldWells() {
    this._fieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldWellsInput() {
    return this._fieldWells.internalValue;
  }

  // sort_configuration - computed: false, optional: true, required: false
  private _sortConfiguration = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationOutputReference(this, "sort_configuration");
  public get sortConfiguration() {
    return this._sortConfiguration;
  }
  public putSortConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration) {
    this._sortConfiguration.internalValue = value;
  }
  public resetSortConfiguration() {
    this._sortConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortConfigurationInput() {
    return this._sortConfiguration.internalValue;
  }

  // word_cloud_options - computed: false, optional: true, required: false
  private _wordCloudOptions = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsOutputReference(this, "word_cloud_options");
  public get wordCloudOptions() {
    return this._wordCloudOptions;
  }
  public putWordCloudOptions(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions) {
    this._wordCloudOptions.internalValue = value;
  }
  public resetWordCloudOptions() {
    this._wordCloudOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordCloudOptionsInput() {
    return this._wordCloudOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._column.internalValue = value.column;
    }
  }

  // category_values - computed: false, optional: false, required: true
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_maximum: cdktf.stringToTerraform(struct!.rangeMaximum),
    range_minimum: cdktf.stringToTerraform(struct!.rangeMinimum),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum;
    }
    if (this._rangeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeMaximum = undefined;
      this._rangeMinimum = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeMaximum = value.rangeMaximum;
      this._rangeMinimum = value.rangeMinimum;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
    }
  }

  // range_maximum - computed: false, optional: false, required: true
  private _rangeMaximum?: string; 
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }
  public set rangeMaximum(value: string) {
    this._rangeMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum;
  }

  // range_minimum - computed: false, optional: false, required: true
  private _rangeMinimum?: string; 
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }
  public set rangeMinimum(value: string) {
    this._rangeMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilter = this._categoryFilter?.internalValue;
    }
    if (this._numericEqualityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericEqualityFilter = this._numericEqualityFilter?.internalValue;
    }
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = value.categoryFilter;
      this._numericEqualityFilter.internalValue = value.numericEqualityFilter;
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter) {
    this._categoryFilter.internalValue = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter.internalValue;
  }

  // numeric_equality_filter - computed: false, optional: true, required: false
  private _numericEqualityFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId: string;
  /**
  * drill_down_filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#drill_down_filters QuicksightTemplate#drill_down_filters}
  */
  readonly drillDownFilters?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    drill_down_filters: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform, true)(struct!.drillDownFilters),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._drillDownFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownFilters = this._drillDownFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hierarchyId = undefined;
      this._drillDownFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hierarchyId = value.hierarchyId;
      this._drillDownFilters.internalValue = value.drillDownFilters;
    }
  }

  // hierarchy_id - computed: false, optional: false, required: true
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // drill_down_filters - computed: false, optional: true, required: false
  private _drillDownFilters = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }
  public putDrillDownFilters(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters[] | cdktf.IResolvable) {
    this._drillDownFilters.internalValue = value;
  }
  public resetDrillDownFilters() {
    this._drillDownFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownFiltersInput() {
    return this._drillDownFilters.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._column.internalValue = value.column;
    }
  }

  // category_values - computed: false, optional: false, required: true
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_maximum: cdktf.stringToTerraform(struct!.rangeMaximum),
    range_minimum: cdktf.stringToTerraform(struct!.rangeMinimum),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum;
    }
    if (this._rangeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeMaximum = undefined;
      this._rangeMinimum = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeMaximum = value.rangeMaximum;
      this._rangeMinimum = value.rangeMinimum;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
    }
  }

  // range_maximum - computed: false, optional: false, required: true
  private _rangeMaximum?: string; 
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }
  public set rangeMaximum(value: string) {
    this._rangeMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum;
  }

  // range_minimum - computed: false, optional: false, required: true
  private _rangeMinimum?: string; 
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }
  public set rangeMinimum(value: string) {
    this._rangeMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilter = this._categoryFilter?.internalValue;
    }
    if (this._numericEqualityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericEqualityFilter = this._numericEqualityFilter?.internalValue;
    }
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = value.categoryFilter;
      this._numericEqualityFilter.internalValue = value.numericEqualityFilter;
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter) {
    this._categoryFilter.internalValue = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter.internalValue;
  }

  // numeric_equality_filter - computed: false, optional: true, required: false
  private _numericEqualityFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId: string;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#columns QuicksightTemplate#columns}
  */
  readonly columns: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns[] | cdktf.IResolvable;
  /**
  * drill_down_filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#drill_down_filters QuicksightTemplate#drill_down_filters}
  */
  readonly drillDownFilters?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    columns: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform, true)(struct!.columns),
    drill_down_filters: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform, true)(struct!.drillDownFilters),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._drillDownFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownFilters = this._drillDownFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hierarchyId = undefined;
      this._columns.internalValue = undefined;
      this._drillDownFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hierarchyId = value.hierarchyId;
      this._columns.internalValue = value.columns;
      this._drillDownFilters.internalValue = value.drillDownFilters;
    }
  }

  // hierarchy_id - computed: false, optional: false, required: true
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // drill_down_filters - computed: false, optional: true, required: false
  private _drillDownFilters = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }
  public putDrillDownFilters(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters[] | cdktf.IResolvable) {
    this._drillDownFilters.internalValue = value;
  }
  public resetDrillDownFilters() {
    this._drillDownFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownFiltersInput() {
    return this._drillDownFilters.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._column.internalValue = value.column;
    }
  }

  // category_values - computed: false, optional: false, required: true
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_maximum: cdktf.stringToTerraform(struct!.rangeMaximum),
    range_minimum: cdktf.stringToTerraform(struct!.rangeMinimum),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum;
    }
    if (this._rangeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeMaximum = undefined;
      this._rangeMinimum = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeMaximum = value.rangeMaximum;
      this._rangeMinimum = value.rangeMinimum;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
    }
  }

  // range_maximum - computed: false, optional: false, required: true
  private _rangeMaximum?: string; 
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }
  public set rangeMaximum(value: string) {
    this._rangeMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum;
  }

  // range_minimum - computed: false, optional: false, required: true
  private _rangeMinimum?: string; 
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }
  public set rangeMinimum(value: string) {
    this._rangeMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilter = this._categoryFilter?.internalValue;
    }
    if (this._numericEqualityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericEqualityFilter = this._numericEqualityFilter?.internalValue;
    }
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = value.categoryFilter;
      this._numericEqualityFilter.internalValue = value.numericEqualityFilter;
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter) {
    this._categoryFilter.internalValue = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter.internalValue;
  }

  // numeric_equality_filter - computed: false, optional: true, required: false
  private _numericEqualityFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId: string;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#columns QuicksightTemplate#columns}
  */
  readonly columns: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns[] | cdktf.IResolvable;
  /**
  * drill_down_filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#drill_down_filters QuicksightTemplate#drill_down_filters}
  */
  readonly drillDownFilters?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    columns: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsToTerraform, true)(struct!.columns),
    drill_down_filters: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersToTerraform, true)(struct!.drillDownFilters),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._drillDownFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownFilters = this._drillDownFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hierarchyId = undefined;
      this._columns.internalValue = undefined;
      this._drillDownFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hierarchyId = value.hierarchyId;
      this._columns.internalValue = value.columns;
      this._drillDownFilters.internalValue = value.drillDownFilters;
    }
  }

  // hierarchy_id - computed: false, optional: false, required: true
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // drill_down_filters - computed: false, optional: true, required: false
  private _drillDownFilters = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }
  public putDrillDownFilters(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters[] | cdktf.IResolvable) {
    this._drillDownFilters.internalValue = value;
  }
  public resetDrillDownFilters() {
    this._drillDownFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownFiltersInput() {
    return this._drillDownFilters.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies {
  /**
  * date_time_hierarchy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_hierarchy QuicksightTemplate#date_time_hierarchy}
  */
  readonly dateTimeHierarchy?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy;
  /**
  * explicit_hierarchy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#explicit_hierarchy QuicksightTemplate#explicit_hierarchy}
  */
  readonly explicitHierarchy?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy;
  /**
  * predefined_hierarchy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#predefined_hierarchy QuicksightTemplate#predefined_hierarchy}
  */
  readonly predefinedHierarchy?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_hierarchy: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct!.dateTimeHierarchy),
    explicit_hierarchy: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyToTerraform(struct!.explicitHierarchy),
    predefined_hierarchy: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyToTerraform(struct!.predefinedHierarchy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeHierarchy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeHierarchy = this._dateTimeHierarchy?.internalValue;
    }
    if (this._explicitHierarchy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitHierarchy = this._explicitHierarchy?.internalValue;
    }
    if (this._predefinedHierarchy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedHierarchy = this._predefinedHierarchy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateTimeHierarchy.internalValue = undefined;
      this._explicitHierarchy.internalValue = undefined;
      this._predefinedHierarchy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateTimeHierarchy.internalValue = value.dateTimeHierarchy;
      this._explicitHierarchy.internalValue = value.explicitHierarchy;
      this._predefinedHierarchy.internalValue = value.predefinedHierarchy;
    }
  }

  // date_time_hierarchy - computed: false, optional: true, required: false
  private _dateTimeHierarchy = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyOutputReference(this, "date_time_hierarchy");
  public get dateTimeHierarchy() {
    return this._dateTimeHierarchy;
  }
  public putDateTimeHierarchy(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy) {
    this._dateTimeHierarchy.internalValue = value;
  }
  public resetDateTimeHierarchy() {
    this._dateTimeHierarchy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeHierarchyInput() {
    return this._dateTimeHierarchy.internalValue;
  }

  // explicit_hierarchy - computed: false, optional: true, required: false
  private _explicitHierarchy = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyOutputReference(this, "explicit_hierarchy");
  public get explicitHierarchy() {
    return this._explicitHierarchy;
  }
  public putExplicitHierarchy(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy) {
    this._explicitHierarchy.internalValue = value;
  }
  public resetExplicitHierarchy() {
    this._explicitHierarchy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitHierarchyInput() {
    return this._explicitHierarchy.internalValue;
  }

  // predefined_hierarchy - computed: false, optional: true, required: false
  private _predefinedHierarchy = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyOutputReference(this, "predefined_hierarchy");
  public get predefinedHierarchy() {
    return this._predefinedHierarchy;
  }
  public putPredefinedHierarchy(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy) {
    this._predefinedHierarchy.internalValue = value;
  }
  public resetPredefinedHierarchy() {
    this._predefinedHierarchy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedHierarchyInput() {
    return this._predefinedHierarchy.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsWordCloudVisual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_id QuicksightTemplate#visual_id}
  */
  readonly visualId: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
  */
  readonly actions?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualActions[] | cdktf.IResolvable;
  /**
  * chart_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_configuration QuicksightTemplate#chart_configuration}
  */
  readonly chartConfiguration?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfiguration;
  /**
  * column_hierarchies block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_hierarchies QuicksightTemplate#column_hierarchies}
  */
  readonly columnHierarchies?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies[] | cdktf.IResolvable;
  /**
  * subtitle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#subtitle QuicksightTemplate#subtitle}
  */
  readonly subtitle?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitle;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsWordCloudVisualToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualOutputReference | QuicksightTemplateDefinitionSheetsVisualsWordCloudVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visual_id: cdktf.stringToTerraform(struct!.visualId),
    actions: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualActionsToTerraform, true)(struct!.actions),
    chart_configuration: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationToTerraform(struct!.chartConfiguration),
    column_hierarchies: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesToTerraform, true)(struct!.columnHierarchies),
    subtitle: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleToTerraform(struct!.subtitle),
    title: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsWordCloudVisual | undefined {
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
    if (this._columnHierarchies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnHierarchies = this._columnHierarchies?.internalValue;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visualId = undefined;
      this._actions.internalValue = undefined;
      this._chartConfiguration.internalValue = undefined;
      this._columnHierarchies.internalValue = undefined;
      this._subtitle.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visualId = value.visualId;
      this._actions.internalValue = value.actions;
      this._chartConfiguration.internalValue = value.chartConfiguration;
      this._columnHierarchies.internalValue = value.columnHierarchies;
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
  private _actions = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualActions[] | cdktf.IResolvable) {
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
  private _chartConfiguration = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfigurationOutputReference(this, "chart_configuration");
  public get chartConfiguration() {
    return this._chartConfiguration;
  }
  public putChartConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualChartConfiguration) {
    this._chartConfiguration.internalValue = value;
  }
  public resetChartConfiguration() {
    this._chartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartConfigurationInput() {
    return this._chartConfiguration.internalValue;
  }

  // column_hierarchies - computed: false, optional: true, required: false
  private _columnHierarchies = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesList(this, "column_hierarchies", false);
  public get columnHierarchies() {
    return this._columnHierarchies;
  }
  public putColumnHierarchies(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualColumnHierarchies[] | cdktf.IResolvable) {
    this._columnHierarchies.internalValue = value;
  }
  public resetColumnHierarchies() {
    this._columnHierarchies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnHierarchiesInput() {
    return this._columnHierarchies.internalValue;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualSubtitle) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisuals {
  /**
  * bar_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bar_chart_visual QuicksightTemplate#bar_chart_visual}
  */
  readonly barChartVisual?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisual;
  /**
  * box_plot_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#box_plot_visual QuicksightTemplate#box_plot_visual}
  */
  readonly boxPlotVisual?: QuicksightTemplateDefinitionSheetsVisualsBoxPlotVisual;
  /**
  * combo_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#combo_chart_visual QuicksightTemplate#combo_chart_visual}
  */
  readonly comboChartVisual?: QuicksightTemplateDefinitionSheetsVisualsComboChartVisual;
  /**
  * custom_content_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_content_visual QuicksightTemplate#custom_content_visual}
  */
  readonly customContentVisual?: QuicksightTemplateDefinitionSheetsVisualsCustomContentVisual;
  /**
  * empty_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#empty_visual QuicksightTemplate#empty_visual}
  */
  readonly emptyVisual?: QuicksightTemplateDefinitionSheetsVisualsEmptyVisual;
  /**
  * filled_map_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filled_map_visual QuicksightTemplate#filled_map_visual}
  */
  readonly filledMapVisual?: QuicksightTemplateDefinitionSheetsVisualsFilledMapVisual;
  /**
  * funnel_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#funnel_chart_visual QuicksightTemplate#funnel_chart_visual}
  */
  readonly funnelChartVisual?: QuicksightTemplateDefinitionSheetsVisualsFunnelChartVisual;
  /**
  * gauge_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gauge_chart_visual QuicksightTemplate#gauge_chart_visual}
  */
  readonly gaugeChartVisual?: QuicksightTemplateDefinitionSheetsVisualsGaugeChartVisual;
  /**
  * geospatial_map_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#geospatial_map_visual QuicksightTemplate#geospatial_map_visual}
  */
  readonly geospatialMapVisual?: QuicksightTemplateDefinitionSheetsVisualsGeospatialMapVisual;
  /**
  * heat_map_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#heat_map_visual QuicksightTemplate#heat_map_visual}
  */
  readonly heatMapVisual?: QuicksightTemplateDefinitionSheetsVisualsHeatMapVisual;
  /**
  * histogram_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#histogram_visual QuicksightTemplate#histogram_visual}
  */
  readonly histogramVisual?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisual;
  /**
  * insight_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#insight_visual QuicksightTemplate#insight_visual}
  */
  readonly insightVisual?: QuicksightTemplateDefinitionSheetsVisualsInsightVisual;
  /**
  * kpi_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#kpi_visual QuicksightTemplate#kpi_visual}
  */
  readonly kpiVisual?: QuicksightTemplateDefinitionSheetsVisualsKpiVisual;
  /**
  * line_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_chart_visual QuicksightTemplate#line_chart_visual}
  */
  readonly lineChartVisual?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisual;
  /**
  * pie_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#pie_chart_visual QuicksightTemplate#pie_chart_visual}
  */
  readonly pieChartVisual?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisual;
  /**
  * pivot_table_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#pivot_table_visual QuicksightTemplate#pivot_table_visual}
  */
  readonly pivotTableVisual?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisual;
  /**
  * radar_chart_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#radar_chart_visual QuicksightTemplate#radar_chart_visual}
  */
  readonly radarChartVisual?: QuicksightTemplateDefinitionSheetsVisualsRadarChartVisual;
  /**
  * sankey_diagram_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sankey_diagram_visual QuicksightTemplate#sankey_diagram_visual}
  */
  readonly sankeyDiagramVisual?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual;
  /**
  * scatter_plot_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scatter_plot_visual QuicksightTemplate#scatter_plot_visual}
  */
  readonly scatterPlotVisual?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisual;
  /**
  * table_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#table_visual QuicksightTemplate#table_visual}
  */
  readonly tableVisual?: QuicksightTemplateDefinitionSheetsVisualsTableVisual;
  /**
  * tree_map_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tree_map_visual QuicksightTemplate#tree_map_visual}
  */
  readonly treeMapVisual?: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisual;
  /**
  * waterfall_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#waterfall_visual QuicksightTemplate#waterfall_visual}
  */
  readonly waterfallVisual?: QuicksightTemplateDefinitionSheetsVisualsWaterfallVisual;
  /**
  * word_cloud_visual block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#word_cloud_visual QuicksightTemplate#word_cloud_visual}
  */
  readonly wordCloudVisual?: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisual;
}

export function quicksightTemplateDefinitionSheetsVisualsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisuals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bar_chart_visual: quicksightTemplateDefinitionSheetsVisualsBarChartVisualToTerraform(struct!.barChartVisual),
    box_plot_visual: quicksightTemplateDefinitionSheetsVisualsBoxPlotVisualToTerraform(struct!.boxPlotVisual),
    combo_chart_visual: quicksightTemplateDefinitionSheetsVisualsComboChartVisualToTerraform(struct!.comboChartVisual),
    custom_content_visual: quicksightTemplateDefinitionSheetsVisualsCustomContentVisualToTerraform(struct!.customContentVisual),
    empty_visual: quicksightTemplateDefinitionSheetsVisualsEmptyVisualToTerraform(struct!.emptyVisual),
    filled_map_visual: quicksightTemplateDefinitionSheetsVisualsFilledMapVisualToTerraform(struct!.filledMapVisual),
    funnel_chart_visual: quicksightTemplateDefinitionSheetsVisualsFunnelChartVisualToTerraform(struct!.funnelChartVisual),
    gauge_chart_visual: quicksightTemplateDefinitionSheetsVisualsGaugeChartVisualToTerraform(struct!.gaugeChartVisual),
    geospatial_map_visual: quicksightTemplateDefinitionSheetsVisualsGeospatialMapVisualToTerraform(struct!.geospatialMapVisual),
    heat_map_visual: quicksightTemplateDefinitionSheetsVisualsHeatMapVisualToTerraform(struct!.heatMapVisual),
    histogram_visual: quicksightTemplateDefinitionSheetsVisualsHistogramVisualToTerraform(struct!.histogramVisual),
    insight_visual: quicksightTemplateDefinitionSheetsVisualsInsightVisualToTerraform(struct!.insightVisual),
    kpi_visual: quicksightTemplateDefinitionSheetsVisualsKpiVisualToTerraform(struct!.kpiVisual),
    line_chart_visual: quicksightTemplateDefinitionSheetsVisualsLineChartVisualToTerraform(struct!.lineChartVisual),
    pie_chart_visual: quicksightTemplateDefinitionSheetsVisualsPieChartVisualToTerraform(struct!.pieChartVisual),
    pivot_table_visual: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualToTerraform(struct!.pivotTableVisual),
    radar_chart_visual: quicksightTemplateDefinitionSheetsVisualsRadarChartVisualToTerraform(struct!.radarChartVisual),
    sankey_diagram_visual: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualToTerraform(struct!.sankeyDiagramVisual),
    scatter_plot_visual: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualToTerraform(struct!.scatterPlotVisual),
    table_visual: quicksightTemplateDefinitionSheetsVisualsTableVisualToTerraform(struct!.tableVisual),
    tree_map_visual: quicksightTemplateDefinitionSheetsVisualsTreeMapVisualToTerraform(struct!.treeMapVisual),
    waterfall_visual: quicksightTemplateDefinitionSheetsVisualsWaterfallVisualToTerraform(struct!.waterfallVisual),
    word_cloud_visual: quicksightTemplateDefinitionSheetsVisualsWordCloudVisualToTerraform(struct!.wordCloudVisual),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisuals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._barChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.barChartVisual = this._barChartVisual?.internalValue;
    }
    if (this._boxPlotVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boxPlotVisual = this._boxPlotVisual?.internalValue;
    }
    if (this._comboChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comboChartVisual = this._comboChartVisual?.internalValue;
    }
    if (this._customContentVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customContentVisual = this._customContentVisual?.internalValue;
    }
    if (this._emptyVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyVisual = this._emptyVisual?.internalValue;
    }
    if (this._filledMapVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filledMapVisual = this._filledMapVisual?.internalValue;
    }
    if (this._funnelChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funnelChartVisual = this._funnelChartVisual?.internalValue;
    }
    if (this._gaugeChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeChartVisual = this._gaugeChartVisual?.internalValue;
    }
    if (this._geospatialMapVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geospatialMapVisual = this._geospatialMapVisual?.internalValue;
    }
    if (this._heatMapVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.heatMapVisual = this._heatMapVisual?.internalValue;
    }
    if (this._histogramVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramVisual = this._histogramVisual?.internalValue;
    }
    if (this._insightVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightVisual = this._insightVisual?.internalValue;
    }
    if (this._kpiVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpiVisual = this._kpiVisual?.internalValue;
    }
    if (this._lineChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineChartVisual = this._lineChartVisual?.internalValue;
    }
    if (this._pieChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pieChartVisual = this._pieChartVisual?.internalValue;
    }
    if (this._pivotTableVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pivotTableVisual = this._pivotTableVisual?.internalValue;
    }
    if (this._radarChartVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radarChartVisual = this._radarChartVisual?.internalValue;
    }
    if (this._sankeyDiagramVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sankeyDiagramVisual = this._sankeyDiagramVisual?.internalValue;
    }
    if (this._scatterPlotVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scatterPlotVisual = this._scatterPlotVisual?.internalValue;
    }
    if (this._tableVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableVisual = this._tableVisual?.internalValue;
    }
    if (this._treeMapVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeMapVisual = this._treeMapVisual?.internalValue;
    }
    if (this._waterfallVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waterfallVisual = this._waterfallVisual?.internalValue;
    }
    if (this._wordCloudVisual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordCloudVisual = this._wordCloudVisual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisuals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._barChartVisual.internalValue = undefined;
      this._boxPlotVisual.internalValue = undefined;
      this._comboChartVisual.internalValue = undefined;
      this._customContentVisual.internalValue = undefined;
      this._emptyVisual.internalValue = undefined;
      this._filledMapVisual.internalValue = undefined;
      this._funnelChartVisual.internalValue = undefined;
      this._gaugeChartVisual.internalValue = undefined;
      this._geospatialMapVisual.internalValue = undefined;
      this._heatMapVisual.internalValue = undefined;
      this._histogramVisual.internalValue = undefined;
      this._insightVisual.internalValue = undefined;
      this._kpiVisual.internalValue = undefined;
      this._lineChartVisual.internalValue = undefined;
      this._pieChartVisual.internalValue = undefined;
      this._pivotTableVisual.internalValue = undefined;
      this._radarChartVisual.internalValue = undefined;
      this._sankeyDiagramVisual.internalValue = undefined;
      this._scatterPlotVisual.internalValue = undefined;
      this._tableVisual.internalValue = undefined;
      this._treeMapVisual.internalValue = undefined;
      this._waterfallVisual.internalValue = undefined;
      this._wordCloudVisual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._barChartVisual.internalValue = value.barChartVisual;
      this._boxPlotVisual.internalValue = value.boxPlotVisual;
      this._comboChartVisual.internalValue = value.comboChartVisual;
      this._customContentVisual.internalValue = value.customContentVisual;
      this._emptyVisual.internalValue = value.emptyVisual;
      this._filledMapVisual.internalValue = value.filledMapVisual;
      this._funnelChartVisual.internalValue = value.funnelChartVisual;
      this._gaugeChartVisual.internalValue = value.gaugeChartVisual;
      this._geospatialMapVisual.internalValue = value.geospatialMapVisual;
      this._heatMapVisual.internalValue = value.heatMapVisual;
      this._histogramVisual.internalValue = value.histogramVisual;
      this._insightVisual.internalValue = value.insightVisual;
      this._kpiVisual.internalValue = value.kpiVisual;
      this._lineChartVisual.internalValue = value.lineChartVisual;
      this._pieChartVisual.internalValue = value.pieChartVisual;
      this._pivotTableVisual.internalValue = value.pivotTableVisual;
      this._radarChartVisual.internalValue = value.radarChartVisual;
      this._sankeyDiagramVisual.internalValue = value.sankeyDiagramVisual;
      this._scatterPlotVisual.internalValue = value.scatterPlotVisual;
      this._tableVisual.internalValue = value.tableVisual;
      this._treeMapVisual.internalValue = value.treeMapVisual;
      this._waterfallVisual.internalValue = value.waterfallVisual;
      this._wordCloudVisual.internalValue = value.wordCloudVisual;
    }
  }

  // bar_chart_visual - computed: false, optional: true, required: false
  private _barChartVisual = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualOutputReference(this, "bar_chart_visual");
  public get barChartVisual() {
    return this._barChartVisual;
  }
  public putBarChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisual) {
    this._barChartVisual.internalValue = value;
  }
  public resetBarChartVisual() {
    this._barChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barChartVisualInput() {
    return this._barChartVisual.internalValue;
  }

  // box_plot_visual - computed: false, optional: true, required: false
  private _boxPlotVisual = new QuicksightTemplateDefinitionSheetsVisualsBoxPlotVisualOutputReference(this, "box_plot_visual");
  public get boxPlotVisual() {
    return this._boxPlotVisual;
  }
  public putBoxPlotVisual(value: QuicksightTemplateDefinitionSheetsVisualsBoxPlotVisual) {
    this._boxPlotVisual.internalValue = value;
  }
  public resetBoxPlotVisual() {
    this._boxPlotVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boxPlotVisualInput() {
    return this._boxPlotVisual.internalValue;
  }

  // combo_chart_visual - computed: false, optional: true, required: false
  private _comboChartVisual = new QuicksightTemplateDefinitionSheetsVisualsComboChartVisualOutputReference(this, "combo_chart_visual");
  public get comboChartVisual() {
    return this._comboChartVisual;
  }
  public putComboChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsComboChartVisual) {
    this._comboChartVisual.internalValue = value;
  }
  public resetComboChartVisual() {
    this._comboChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comboChartVisualInput() {
    return this._comboChartVisual.internalValue;
  }

  // custom_content_visual - computed: false, optional: true, required: false
  private _customContentVisual = new QuicksightTemplateDefinitionSheetsVisualsCustomContentVisualOutputReference(this, "custom_content_visual");
  public get customContentVisual() {
    return this._customContentVisual;
  }
  public putCustomContentVisual(value: QuicksightTemplateDefinitionSheetsVisualsCustomContentVisual) {
    this._customContentVisual.internalValue = value;
  }
  public resetCustomContentVisual() {
    this._customContentVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customContentVisualInput() {
    return this._customContentVisual.internalValue;
  }

  // empty_visual - computed: false, optional: true, required: false
  private _emptyVisual = new QuicksightTemplateDefinitionSheetsVisualsEmptyVisualOutputReference(this, "empty_visual");
  public get emptyVisual() {
    return this._emptyVisual;
  }
  public putEmptyVisual(value: QuicksightTemplateDefinitionSheetsVisualsEmptyVisual) {
    this._emptyVisual.internalValue = value;
  }
  public resetEmptyVisual() {
    this._emptyVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyVisualInput() {
    return this._emptyVisual.internalValue;
  }

  // filled_map_visual - computed: false, optional: true, required: false
  private _filledMapVisual = new QuicksightTemplateDefinitionSheetsVisualsFilledMapVisualOutputReference(this, "filled_map_visual");
  public get filledMapVisual() {
    return this._filledMapVisual;
  }
  public putFilledMapVisual(value: QuicksightTemplateDefinitionSheetsVisualsFilledMapVisual) {
    this._filledMapVisual.internalValue = value;
  }
  public resetFilledMapVisual() {
    this._filledMapVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filledMapVisualInput() {
    return this._filledMapVisual.internalValue;
  }

  // funnel_chart_visual - computed: false, optional: true, required: false
  private _funnelChartVisual = new QuicksightTemplateDefinitionSheetsVisualsFunnelChartVisualOutputReference(this, "funnel_chart_visual");
  public get funnelChartVisual() {
    return this._funnelChartVisual;
  }
  public putFunnelChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsFunnelChartVisual) {
    this._funnelChartVisual.internalValue = value;
  }
  public resetFunnelChartVisual() {
    this._funnelChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funnelChartVisualInput() {
    return this._funnelChartVisual.internalValue;
  }

  // gauge_chart_visual - computed: false, optional: true, required: false
  private _gaugeChartVisual = new QuicksightTemplateDefinitionSheetsVisualsGaugeChartVisualOutputReference(this, "gauge_chart_visual");
  public get gaugeChartVisual() {
    return this._gaugeChartVisual;
  }
  public putGaugeChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsGaugeChartVisual) {
    this._gaugeChartVisual.internalValue = value;
  }
  public resetGaugeChartVisual() {
    this._gaugeChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeChartVisualInput() {
    return this._gaugeChartVisual.internalValue;
  }

  // geospatial_map_visual - computed: false, optional: true, required: false
  private _geospatialMapVisual = new QuicksightTemplateDefinitionSheetsVisualsGeospatialMapVisualOutputReference(this, "geospatial_map_visual");
  public get geospatialMapVisual() {
    return this._geospatialMapVisual;
  }
  public putGeospatialMapVisual(value: QuicksightTemplateDefinitionSheetsVisualsGeospatialMapVisual) {
    this._geospatialMapVisual.internalValue = value;
  }
  public resetGeospatialMapVisual() {
    this._geospatialMapVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geospatialMapVisualInput() {
    return this._geospatialMapVisual.internalValue;
  }

  // heat_map_visual - computed: false, optional: true, required: false
  private _heatMapVisual = new QuicksightTemplateDefinitionSheetsVisualsHeatMapVisualOutputReference(this, "heat_map_visual");
  public get heatMapVisual() {
    return this._heatMapVisual;
  }
  public putHeatMapVisual(value: QuicksightTemplateDefinitionSheetsVisualsHeatMapVisual) {
    this._heatMapVisual.internalValue = value;
  }
  public resetHeatMapVisual() {
    this._heatMapVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heatMapVisualInput() {
    return this._heatMapVisual.internalValue;
  }

  // histogram_visual - computed: false, optional: true, required: false
  private _histogramVisual = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualOutputReference(this, "histogram_visual");
  public get histogramVisual() {
    return this._histogramVisual;
  }
  public putHistogramVisual(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisual) {
    this._histogramVisual.internalValue = value;
  }
  public resetHistogramVisual() {
    this._histogramVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramVisualInput() {
    return this._histogramVisual.internalValue;
  }

  // insight_visual - computed: false, optional: true, required: false
  private _insightVisual = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualOutputReference(this, "insight_visual");
  public get insightVisual() {
    return this._insightVisual;
  }
  public putInsightVisual(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisual) {
    this._insightVisual.internalValue = value;
  }
  public resetInsightVisual() {
    this._insightVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightVisualInput() {
    return this._insightVisual.internalValue;
  }

  // kpi_visual - computed: false, optional: true, required: false
  private _kpiVisual = new QuicksightTemplateDefinitionSheetsVisualsKpiVisualOutputReference(this, "kpi_visual");
  public get kpiVisual() {
    return this._kpiVisual;
  }
  public putKpiVisual(value: QuicksightTemplateDefinitionSheetsVisualsKpiVisual) {
    this._kpiVisual.internalValue = value;
  }
  public resetKpiVisual() {
    this._kpiVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpiVisualInput() {
    return this._kpiVisual.internalValue;
  }

  // line_chart_visual - computed: false, optional: true, required: false
  private _lineChartVisual = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualOutputReference(this, "line_chart_visual");
  public get lineChartVisual() {
    return this._lineChartVisual;
  }
  public putLineChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisual) {
    this._lineChartVisual.internalValue = value;
  }
  public resetLineChartVisual() {
    this._lineChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineChartVisualInput() {
    return this._lineChartVisual.internalValue;
  }

  // pie_chart_visual - computed: false, optional: true, required: false
  private _pieChartVisual = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualOutputReference(this, "pie_chart_visual");
  public get pieChartVisual() {
    return this._pieChartVisual;
  }
  public putPieChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisual) {
    this._pieChartVisual.internalValue = value;
  }
  public resetPieChartVisual() {
    this._pieChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pieChartVisualInput() {
    return this._pieChartVisual.internalValue;
  }

  // pivot_table_visual - computed: false, optional: true, required: false
  private _pivotTableVisual = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualOutputReference(this, "pivot_table_visual");
  public get pivotTableVisual() {
    return this._pivotTableVisual;
  }
  public putPivotTableVisual(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisual) {
    this._pivotTableVisual.internalValue = value;
  }
  public resetPivotTableVisual() {
    this._pivotTableVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotTableVisualInput() {
    return this._pivotTableVisual.internalValue;
  }

  // radar_chart_visual - computed: false, optional: true, required: false
  private _radarChartVisual = new QuicksightTemplateDefinitionSheetsVisualsRadarChartVisualOutputReference(this, "radar_chart_visual");
  public get radarChartVisual() {
    return this._radarChartVisual;
  }
  public putRadarChartVisual(value: QuicksightTemplateDefinitionSheetsVisualsRadarChartVisual) {
    this._radarChartVisual.internalValue = value;
  }
  public resetRadarChartVisual() {
    this._radarChartVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radarChartVisualInput() {
    return this._radarChartVisual.internalValue;
  }

  // sankey_diagram_visual - computed: false, optional: true, required: false
  private _sankeyDiagramVisual = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualOutputReference(this, "sankey_diagram_visual");
  public get sankeyDiagramVisual() {
    return this._sankeyDiagramVisual;
  }
  public putSankeyDiagramVisual(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual) {
    this._sankeyDiagramVisual.internalValue = value;
  }
  public resetSankeyDiagramVisual() {
    this._sankeyDiagramVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sankeyDiagramVisualInput() {
    return this._sankeyDiagramVisual.internalValue;
  }

  // scatter_plot_visual - computed: false, optional: true, required: false
  private _scatterPlotVisual = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualOutputReference(this, "scatter_plot_visual");
  public get scatterPlotVisual() {
    return this._scatterPlotVisual;
  }
  public putScatterPlotVisual(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisual) {
    this._scatterPlotVisual.internalValue = value;
  }
  public resetScatterPlotVisual() {
    this._scatterPlotVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scatterPlotVisualInput() {
    return this._scatterPlotVisual.internalValue;
  }

  // table_visual - computed: false, optional: true, required: false
  private _tableVisual = new QuicksightTemplateDefinitionSheetsVisualsTableVisualOutputReference(this, "table_visual");
  public get tableVisual() {
    return this._tableVisual;
  }
  public putTableVisual(value: QuicksightTemplateDefinitionSheetsVisualsTableVisual) {
    this._tableVisual.internalValue = value;
  }
  public resetTableVisual() {
    this._tableVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableVisualInput() {
    return this._tableVisual.internalValue;
  }

  // tree_map_visual - computed: false, optional: true, required: false
  private _treeMapVisual = new QuicksightTemplateDefinitionSheetsVisualsTreeMapVisualOutputReference(this, "tree_map_visual");
  public get treeMapVisual() {
    return this._treeMapVisual;
  }
  public putTreeMapVisual(value: QuicksightTemplateDefinitionSheetsVisualsTreeMapVisual) {
    this._treeMapVisual.internalValue = value;
  }
  public resetTreeMapVisual() {
    this._treeMapVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeMapVisualInput() {
    return this._treeMapVisual.internalValue;
  }

  // waterfall_visual - computed: false, optional: true, required: false
  private _waterfallVisual = new QuicksightTemplateDefinitionSheetsVisualsWaterfallVisualOutputReference(this, "waterfall_visual");
  public get waterfallVisual() {
    return this._waterfallVisual;
  }
  public putWaterfallVisual(value: QuicksightTemplateDefinitionSheetsVisualsWaterfallVisual) {
    this._waterfallVisual.internalValue = value;
  }
  public resetWaterfallVisual() {
    this._waterfallVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waterfallVisualInput() {
    return this._waterfallVisual.internalValue;
  }

  // word_cloud_visual - computed: false, optional: true, required: false
  private _wordCloudVisual = new QuicksightTemplateDefinitionSheetsVisualsWordCloudVisualOutputReference(this, "word_cloud_visual");
  public get wordCloudVisual() {
    return this._wordCloudVisual;
  }
  public putWordCloudVisual(value: QuicksightTemplateDefinitionSheetsVisualsWordCloudVisual) {
    this._wordCloudVisual.internalValue = value;
  }
  public resetWordCloudVisual() {
    this._wordCloudVisual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordCloudVisualInput() {
    return this._wordCloudVisual.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisuals[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#content_type QuicksightTemplate#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#description QuicksightTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheet_id QuicksightTemplate#sheet_id}
  */
  readonly sheetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: string;
  /**
  * filter_controls block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_controls QuicksightTemplate#filter_controls}
  */
  readonly filterControls?: QuicksightTemplateDefinitionSheetsFilterControls[] | cdktf.IResolvable;
  /**
  * layouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#layouts QuicksightTemplate#layouts}
  */
  readonly layouts?: QuicksightTemplateDefinitionSheetsLayouts;
  /**
  * parameter_controls block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_controls QuicksightTemplate#parameter_controls}
  */
  readonly parameterControls?: QuicksightTemplateDefinitionSheetsParameterControls[] | cdktf.IResolvable;
  /**
  * sheet_control_layouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheet_control_layouts QuicksightTemplate#sheet_control_layouts}
  */
  readonly sheetControlLayouts?: QuicksightTemplateDefinitionSheetsSheetControlLayouts;
  /**
  * text_boxes block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_boxes QuicksightTemplate#text_boxes}
  */
  readonly textBoxes?: QuicksightTemplateDefinitionSheetsTextBoxes[] | cdktf.IResolvable;
  /**
  * visuals block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visuals QuicksightTemplate#visuals}
  */
  readonly visuals?: QuicksightTemplateDefinitionSheetsVisuals[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsToTerraform(struct?: QuicksightTemplateDefinitionSheets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
    title: cdktf.stringToTerraform(struct!.title),
    filter_controls: cdktf.listMapper(quicksightTemplateDefinitionSheetsFilterControlsToTerraform, true)(struct!.filterControls),
    layouts: quicksightTemplateDefinitionSheetsLayoutsToTerraform(struct!.layouts),
    parameter_controls: cdktf.listMapper(quicksightTemplateDefinitionSheetsParameterControlsToTerraform, true)(struct!.parameterControls),
    sheet_control_layouts: quicksightTemplateDefinitionSheetsSheetControlLayoutsToTerraform(struct!.sheetControlLayouts),
    text_boxes: cdktf.listMapper(quicksightTemplateDefinitionSheetsTextBoxesToTerraform, true)(struct!.textBoxes),
    visuals: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsToTerraform, true)(struct!.visuals),
  }
}

export class QuicksightTemplateDefinitionSheetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetId = this._sheetId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._filterControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControls = this._filterControls?.internalValue;
    }
    if (this._layouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layouts = this._layouts?.internalValue;
    }
    if (this._parameterControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControls = this._parameterControls?.internalValue;
    }
    if (this._sheetControlLayouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetControlLayouts = this._sheetControlLayouts?.internalValue;
    }
    if (this._textBoxes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBoxes = this._textBoxes?.internalValue;
    }
    if (this._visuals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visuals = this._visuals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._description = undefined;
      this._name = undefined;
      this._sheetId = undefined;
      this._title = undefined;
      this._filterControls.internalValue = undefined;
      this._layouts.internalValue = undefined;
      this._parameterControls.internalValue = undefined;
      this._sheetControlLayouts.internalValue = undefined;
      this._textBoxes.internalValue = undefined;
      this._visuals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._description = value.description;
      this._name = value.name;
      this._sheetId = value.sheetId;
      this._title = value.title;
      this._filterControls.internalValue = value.filterControls;
      this._layouts.internalValue = value.layouts;
      this._parameterControls.internalValue = value.parameterControls;
      this._sheetControlLayouts.internalValue = value.sheetControlLayouts;
      this._textBoxes.internalValue = value.textBoxes;
      this._visuals.internalValue = value.visuals;
    }
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

  // sheet_id - computed: false, optional: false, required: true
  private _sheetId?: string; 
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
  public set sheetId(value: string) {
    this._sheetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetIdInput() {
    return this._sheetId;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // filter_controls - computed: false, optional: true, required: false
  private _filterControls = new QuicksightTemplateDefinitionSheetsFilterControlsList(this, "filter_controls", false);
  public get filterControls() {
    return this._filterControls;
  }
  public putFilterControls(value: QuicksightTemplateDefinitionSheetsFilterControls[] | cdktf.IResolvable) {
    this._filterControls.internalValue = value;
  }
  public resetFilterControls() {
    this._filterControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlsInput() {
    return this._filterControls.internalValue;
  }

  // layouts - computed: false, optional: true, required: false
  private _layouts = new QuicksightTemplateDefinitionSheetsLayoutsOutputReference(this, "layouts");
  public get layouts() {
    return this._layouts;
  }
  public putLayouts(value: QuicksightTemplateDefinitionSheetsLayouts) {
    this._layouts.internalValue = value;
  }
  public resetLayouts() {
    this._layouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutsInput() {
    return this._layouts.internalValue;
  }

  // parameter_controls - computed: false, optional: true, required: false
  private _parameterControls = new QuicksightTemplateDefinitionSheetsParameterControlsList(this, "parameter_controls", false);
  public get parameterControls() {
    return this._parameterControls;
  }
  public putParameterControls(value: QuicksightTemplateDefinitionSheetsParameterControls[] | cdktf.IResolvable) {
    this._parameterControls.internalValue = value;
  }
  public resetParameterControls() {
    this._parameterControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlsInput() {
    return this._parameterControls.internalValue;
  }

  // sheet_control_layouts - computed: false, optional: true, required: false
  private _sheetControlLayouts = new QuicksightTemplateDefinitionSheetsSheetControlLayoutsOutputReference(this, "sheet_control_layouts");
  public get sheetControlLayouts() {
    return this._sheetControlLayouts;
  }
  public putSheetControlLayouts(value: QuicksightTemplateDefinitionSheetsSheetControlLayouts) {
    this._sheetControlLayouts.internalValue = value;
  }
  public resetSheetControlLayouts() {
    this._sheetControlLayouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetControlLayoutsInput() {
    return this._sheetControlLayouts.internalValue;
  }

  // text_boxes - computed: false, optional: true, required: false
  private _textBoxes = new QuicksightTemplateDefinitionSheetsTextBoxesList(this, "text_boxes", false);
  public get textBoxes() {
    return this._textBoxes;
  }
  public putTextBoxes(value: QuicksightTemplateDefinitionSheetsTextBoxes[] | cdktf.IResolvable) {
    this._textBoxes.internalValue = value;
  }
  public resetTextBoxes() {
    this._textBoxes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textBoxesInput() {
    return this._textBoxes.internalValue;
  }

  // visuals - computed: false, optional: true, required: false
  private _visuals = new QuicksightTemplateDefinitionSheetsVisualsList(this, "visuals", false);
  public get visuals() {
    return this._visuals;
  }
  public putVisuals(value: QuicksightTemplateDefinitionSheetsVisuals[] | cdktf.IResolvable) {
    this._visuals.internalValue = value;
  }
  public resetVisuals() {
    this._visuals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualsInput() {
    return this._visuals.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheets[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateDefinitionSheetsOutputReference {
    return new QuicksightTemplateDefinitionSheetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinition {
  /**
  * analysis_defaults block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#analysis_defaults QuicksightTemplate#analysis_defaults}
  */
  readonly analysisDefaults?: QuicksightTemplateDefinitionAnalysisDefaults;
  /**
  * calculated_fields block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculated_fields QuicksightTemplate#calculated_fields}
  */
  readonly calculatedFields?: QuicksightTemplateDefinitionCalculatedFields[] | cdktf.IResolvable;
  /**
  * column_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_configurations QuicksightTemplate#column_configurations}
  */
  readonly columnConfigurations?: QuicksightTemplateDefinitionColumnConfigurations[] | cdktf.IResolvable;
  /**
  * data_set_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_configuration QuicksightTemplate#data_set_configuration}
  */
  readonly dataSetConfiguration: QuicksightTemplateDefinitionDataSetConfiguration[] | cdktf.IResolvable;
  /**
  * filter_groups block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_groups QuicksightTemplate#filter_groups}
  */
  readonly filterGroups?: QuicksightTemplateDefinitionFilterGroups[] | cdktf.IResolvable;
  /**
  * parameters_declarations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameters_declarations QuicksightTemplate#parameters_declarations}
  */
  readonly parametersDeclarations?: QuicksightTemplateDefinitionParametersDeclarations[] | cdktf.IResolvable;
  /**
  * sheets block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheets QuicksightTemplate#sheets}
  */
  readonly sheets?: QuicksightTemplateDefinitionSheets[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionToTerraform(struct?: QuicksightTemplateDefinitionOutputReference | QuicksightTemplateDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis_defaults: quicksightTemplateDefinitionAnalysisDefaultsToTerraform(struct!.analysisDefaults),
    calculated_fields: cdktf.listMapper(quicksightTemplateDefinitionCalculatedFieldsToTerraform, true)(struct!.calculatedFields),
    column_configurations: cdktf.listMapper(quicksightTemplateDefinitionColumnConfigurationsToTerraform, true)(struct!.columnConfigurations),
    data_set_configuration: cdktf.listMapper(quicksightTemplateDefinitionDataSetConfigurationToTerraform, true)(struct!.dataSetConfiguration),
    filter_groups: cdktf.listMapper(quicksightTemplateDefinitionFilterGroupsToTerraform, true)(struct!.filterGroups),
    parameters_declarations: cdktf.listMapper(quicksightTemplateDefinitionParametersDeclarationsToTerraform, true)(struct!.parametersDeclarations),
    sheets: cdktf.listMapper(quicksightTemplateDefinitionSheetsToTerraform, true)(struct!.sheets),
  }
}

export class QuicksightTemplateDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysisDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisDefaults = this._analysisDefaults?.internalValue;
    }
    if (this._calculatedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedFields = this._calculatedFields?.internalValue;
    }
    if (this._columnConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnConfigurations = this._columnConfigurations?.internalValue;
    }
    if (this._dataSetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetConfiguration = this._dataSetConfiguration?.internalValue;
    }
    if (this._filterGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterGroups = this._filterGroups?.internalValue;
    }
    if (this._parametersDeclarations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersDeclarations = this._parametersDeclarations?.internalValue;
    }
    if (this._sheets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheets = this._sheets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analysisDefaults.internalValue = undefined;
      this._calculatedFields.internalValue = undefined;
      this._columnConfigurations.internalValue = undefined;
      this._dataSetConfiguration.internalValue = undefined;
      this._filterGroups.internalValue = undefined;
      this._parametersDeclarations.internalValue = undefined;
      this._sheets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysisDefaults.internalValue = value.analysisDefaults;
      this._calculatedFields.internalValue = value.calculatedFields;
      this._columnConfigurations.internalValue = value.columnConfigurations;
      this._dataSetConfiguration.internalValue = value.dataSetConfiguration;
      this._filterGroups.internalValue = value.filterGroups;
      this._parametersDeclarations.internalValue = value.parametersDeclarations;
      this._sheets.internalValue = value.sheets;
    }
  }

  // analysis_defaults - computed: false, optional: true, required: false
  private _analysisDefaults = new QuicksightTemplateDefinitionAnalysisDefaultsOutputReference(this, "analysis_defaults");
  public get analysisDefaults() {
    return this._analysisDefaults;
  }
  public putAnalysisDefaults(value: QuicksightTemplateDefinitionAnalysisDefaults) {
    this._analysisDefaults.internalValue = value;
  }
  public resetAnalysisDefaults() {
    this._analysisDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisDefaultsInput() {
    return this._analysisDefaults.internalValue;
  }

  // calculated_fields - computed: false, optional: true, required: false
  private _calculatedFields = new QuicksightTemplateDefinitionCalculatedFieldsList(this, "calculated_fields", false);
  public get calculatedFields() {
    return this._calculatedFields;
  }
  public putCalculatedFields(value: QuicksightTemplateDefinitionCalculatedFields[] | cdktf.IResolvable) {
    this._calculatedFields.internalValue = value;
  }
  public resetCalculatedFields() {
    this._calculatedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldsInput() {
    return this._calculatedFields.internalValue;
  }

  // column_configurations - computed: false, optional: true, required: false
  private _columnConfigurations = new QuicksightTemplateDefinitionColumnConfigurationsList(this, "column_configurations", false);
  public get columnConfigurations() {
    return this._columnConfigurations;
  }
  public putColumnConfigurations(value: QuicksightTemplateDefinitionColumnConfigurations[] | cdktf.IResolvable) {
    this._columnConfigurations.internalValue = value;
  }
  public resetColumnConfigurations() {
    this._columnConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnConfigurationsInput() {
    return this._columnConfigurations.internalValue;
  }

  // data_set_configuration - computed: false, optional: false, required: true
  private _dataSetConfiguration = new QuicksightTemplateDefinitionDataSetConfigurationList(this, "data_set_configuration", false);
  public get dataSetConfiguration() {
    return this._dataSetConfiguration;
  }
  public putDataSetConfiguration(value: QuicksightTemplateDefinitionDataSetConfiguration[] | cdktf.IResolvable) {
    this._dataSetConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetConfigurationInput() {
    return this._dataSetConfiguration.internalValue;
  }

  // filter_groups - computed: false, optional: true, required: false
  private _filterGroups = new QuicksightTemplateDefinitionFilterGroupsList(this, "filter_groups", false);
  public get filterGroups() {
    return this._filterGroups;
  }
  public putFilterGroups(value: QuicksightTemplateDefinitionFilterGroups[] | cdktf.IResolvable) {
    this._filterGroups.internalValue = value;
  }
  public resetFilterGroups() {
    this._filterGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupsInput() {
    return this._filterGroups.internalValue;
  }

  // parameters_declarations - computed: false, optional: true, required: false
  private _parametersDeclarations = new QuicksightTemplateDefinitionParametersDeclarationsList(this, "parameters_declarations", false);
  public get parametersDeclarations() {
    return this._parametersDeclarations;
  }
  public putParametersDeclarations(value: QuicksightTemplateDefinitionParametersDeclarations[] | cdktf.IResolvable) {
    this._parametersDeclarations.internalValue = value;
  }
  public resetParametersDeclarations() {
    this._parametersDeclarations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersDeclarationsInput() {
    return this._parametersDeclarations.internalValue;
  }

  // sheets - computed: false, optional: true, required: false
  private _sheets = new QuicksightTemplateDefinitionSheetsList(this, "sheets", false);
  public get sheets() {
    return this._sheets;
  }
  public putSheets(value: QuicksightTemplateDefinitionSheets[] | cdktf.IResolvable) {
    this._sheets.internalValue = value;
  }
  public resetSheets() {
    this._sheets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetsInput() {
    return this._sheets.internalValue;
  }
}
export interface QuicksightTemplatePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}
  */
  readonly principal: string;
}

export function quicksightTemplatePermissionsToTerraform(struct?: QuicksightTemplatePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class QuicksightTemplatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplatePermissions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplatePermissions | cdktf.IResolvable | undefined) {
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

export class QuicksightTemplatePermissionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplatePermissions[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplatePermissionsOutputReference {
    return new QuicksightTemplatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}
  */
  readonly dataSetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}
  */
  readonly dataSetPlaceholder: string;
}

export function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

export class QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._dataSetPlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetPlaceholder = this._dataSetPlaceholder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetArn = undefined;
      this._dataSetPlaceholder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetArn = value.dataSetArn;
      this._dataSetPlaceholder = value.dataSetPlaceholder;
    }
  }

  // data_set_arn - computed: false, optional: false, required: true
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // data_set_placeholder - computed: false, optional: false, required: true
  private _dataSetPlaceholder?: string; 
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
  public set dataSetPlaceholder(value: string) {
    this._dataSetPlaceholder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetPlaceholderInput() {
    return this._dataSetPlaceholder;
  }
}

export class QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktf.IResolvable

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
  public get(index: number): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference {
    return new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateSourceEntitySourceAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}
  */
  readonly arn: string;
  /**
  * data_set_references block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_references QuicksightTemplate#data_set_references}
  */
  readonly dataSetReferences: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktf.IResolvable;
}

export function quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisOutputReference | QuicksightTemplateSourceEntitySourceAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform, true)(struct!.dataSetReferences),
  }
}

export class QuicksightTemplateSourceEntitySourceAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateSourceEntitySourceAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._dataSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetReferences = this._dataSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateSourceEntitySourceAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._dataSetReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._dataSetReferences.internalValue = value.dataSetReferences;
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

  // data_set_references - computed: false, optional: false, required: true
  private _dataSetReferences = new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList(this, "data_set_references", false);
  public get dataSetReferences() {
    return this._dataSetReferences;
  }
  public putDataSetReferences(value: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktf.IResolvable) {
    this._dataSetReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetReferencesInput() {
    return this._dataSetReferences.internalValue;
  }
}
export interface QuicksightTemplateSourceEntitySourceTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}
  */
  readonly arn: string;
}

export function quicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplateOutputReference | QuicksightTemplateSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class QuicksightTemplateSourceEntitySourceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateSourceEntitySourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateSourceEntitySourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
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
}
export interface QuicksightTemplateSourceEntity {
  /**
  * source_analysis block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_analysis QuicksightTemplate#source_analysis}
  */
  readonly sourceAnalysis?: QuicksightTemplateSourceEntitySourceAnalysis;
  /**
  * source_template block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_template QuicksightTemplate#source_template}
  */
  readonly sourceTemplate?: QuicksightTemplateSourceEntitySourceTemplate;
}

export function quicksightTemplateSourceEntityToTerraform(struct?: QuicksightTemplateSourceEntityOutputReference | QuicksightTemplateSourceEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_analysis: quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct!.sourceAnalysis),
    source_template: quicksightTemplateSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

export class QuicksightTemplateSourceEntityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateSourceEntity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAnalysis = this._sourceAnalysis?.internalValue;
    }
    if (this._sourceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTemplate = this._sourceTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateSourceEntity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceAnalysis.internalValue = undefined;
      this._sourceTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceAnalysis.internalValue = value.sourceAnalysis;
      this._sourceTemplate.internalValue = value.sourceTemplate;
    }
  }

  // source_analysis - computed: false, optional: true, required: false
  private _sourceAnalysis = new QuicksightTemplateSourceEntitySourceAnalysisOutputReference(this, "source_analysis");
  public get sourceAnalysis() {
    return this._sourceAnalysis;
  }
  public putSourceAnalysis(value: QuicksightTemplateSourceEntitySourceAnalysis) {
    this._sourceAnalysis.internalValue = value;
  }
  public resetSourceAnalysis() {
    this._sourceAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAnalysisInput() {
    return this._sourceAnalysis.internalValue;
  }

  // source_template - computed: false, optional: true, required: false
  private _sourceTemplate = new QuicksightTemplateSourceEntitySourceTemplateOutputReference(this, "source_template");
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: QuicksightTemplateSourceEntitySourceTemplate) {
    this._sourceTemplate.internalValue = value;
  }
  public resetSourceTemplate() {
    this._sourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTemplateInput() {
    return this._sourceTemplate.internalValue;
  }
}
export interface QuicksightTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#create QuicksightTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#delete QuicksightTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#update QuicksightTemplate#update}
  */
  readonly update?: string;
}

export function quicksightTemplateTimeoutsToTerraform(struct?: QuicksightTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class QuicksightTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
