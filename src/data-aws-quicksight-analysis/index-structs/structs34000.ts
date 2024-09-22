/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldColumnList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCalculatedMeasureFieldList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsGroupByList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualActionsList } from './structs33600'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsBarChartVisualList } from './structs3200'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsBoxPlotVisualList } from './structs4400'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsCustomContentVisualList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsEmptyVisualList } from './structs6400'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsFilledMapVisualList } from './structs7200'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsFunnelChartVisualList } from './structs8400'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsGaugeChartVisualList } from './structs9200'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualList } from './structs10400'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsHeatMapVisualList } from './structs11600'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsHistogramVisualList } from './structs12000'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsInsightVisualList } from './structs18000'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsKpiVisualList } from './structs19200'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualList } from './structs21200'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsPieChartVisualList } from './structs22800'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualList } from './structs24400'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualList } from './structs26000'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsSankeyDiagramVisualList } from './structs26800'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsScatterPlotVisualList } from './structs29600'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualList } from './structs30800'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsTreeMapVisualList } from './structs32000'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsWaterfallVisualList } from './structs33200'
import { DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsList,
DataAwsQuicksightAnalysisDefinitionSheetsLayoutsList } from './structs800'
import { DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsList,
DataAwsQuicksightAnalysisDefinitionSheetsSheetControlLayoutsList,
DataAwsQuicksightAnalysisDefinitionSheetsTextBoxesList } from './structs1200'
import { DataAwsQuicksightAnalysisDefinitionAnalysisDefaultsList,
DataAwsQuicksightAnalysisDefinitionCalculatedFieldsList,
DataAwsQuicksightAnalysisDefinitionColumnConfigurationsList,
DataAwsQuicksightAnalysisDefinitionDataSetIdentifiersDeclarationsList } from './structs0'
import { DataAwsQuicksightAnalysisDefinitionFilterGroupsList,
DataAwsQuicksightAnalysisDefinitionParameterDeclarationsList } from './structs400'
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  public get aggregationFunction() {
    return this.getStringAttribute('aggregation_function');
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places - computed: true, optional: false, required: false
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_mode - computed: true, optional: false, required: false
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // thousands_separator - computed: true, optional: false, required: false
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // number_scale - computed: true, optional: false, required: false
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places - computed: true, optional: false, required: false
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_mode - computed: true, optional: false, required: false
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // thousands_separator - computed: true, optional: false, required: false
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // number_scale - computed: true, optional: false, required: false
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places - computed: true, optional: false, required: false
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_mode - computed: true, optional: false, required: false
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // thousands_separator - computed: true, optional: false, required: false
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_time_format - computed: true, optional: false, required: false
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  public get aggregationFunction() {
    return this.getStringAttribute('aggregation_function');
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_value - computed: true, optional: false, required: false
  public get percentileValue() {
    return this.getNumberAttribute('percentile_value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places - computed: true, optional: false, required: false
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_mode - computed: true, optional: false, required: false
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // thousands_separator - computed: true, optional: false, required: false
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // number_scale - computed: true, optional: false, required: false
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places - computed: true, optional: false, required: false
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_mode - computed: true, optional: false, required: false
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // thousands_separator - computed: true, optional: false, required: false
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // number_scale - computed: true, optional: false, required: false
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places - computed: true, optional: false, required: false
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_mode - computed: true, optional: false, required: false
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_string - computed: true, optional: false, required: false
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_separator - computed: true, optional: false, required: false
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }

  // thousands_separator - computed: true, optional: false, required: false
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  private _aggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldAggregationFunctionList(this, "aggregation_function", false);
  public get aggregationFunction() {
    return this._aggregationFunction;
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculated_measure_field - computed: true, optional: false, required: false
  private _calculatedMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCalculatedMeasureFieldList(this, "calculated_measure_field", false);
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }

  // categorical_measure_field - computed: true, optional: false, required: false
  private _categoricalMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeCategoricalMeasureFieldList(this, "categorical_measure_field", false);
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }

  // date_measure_field - computed: true, optional: false, required: false
  private _dateMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeDateMeasureFieldList(this, "date_measure_field", false);
  public get dateMeasureField() {
    return this._dateMeasureField;
  }

  // numerical_measure_field - computed: true, optional: false, required: false
  private _numericalMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeNumericalMeasureFieldList(this, "numerical_measure_field", false);
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWells {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_by - computed: true, optional: false, required: false
  private _groupBy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }

  // size - computed: true, optional: false, required: false
  private _size = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsSizeList(this, "size", false);
  public get size() {
    return this._size;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // word_cloud_aggregated_field_wells - computed: true, optional: false, required: false
  private _wordCloudAggregatedFieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsWordCloudAggregatedFieldWellsList(this, "word_cloud_aggregated_field_wells", false);
  public get wordCloudAggregatedFieldWells() {
    return this._wordCloudAggregatedFieldWells;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items_limit - computed: true, optional: false, required: false
  public get itemsLimit() {
    return this.getNumberAttribute('items_limit');
  }

  // other_categories - computed: true, optional: false, required: false
  public get otherCategories() {
    return this.getStringAttribute('other_categories');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_value - computed: true, optional: false, required: false
  public get percentileValue() {
    return this.getNumberAttribute('percentile_value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categorical_aggregation_function - computed: true, optional: false, required: false
  public get categoricalAggregationFunction() {
    return this.getStringAttribute('categorical_aggregation_function');
  }

  // date_aggregation_function - computed: true, optional: false, required: false
  public get dateAggregationFunction() {
    return this.getStringAttribute('date_aggregation_function');
  }

  // numerical_aggregation_function - computed: true, optional: false, required: false
  private _numericalAggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionList(this, "numerical_aggregation_function", false);
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  private _aggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionList(this, "aggregation_function", false);
  public get aggregationFunction() {
    return this._aggregationFunction;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // sort_by - computed: true, optional: false, required: false
  private _sortBy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByList(this, "sort_by", false);
  public get sortBy() {
    return this._sortBy;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_sort - computed: true, optional: false, required: false
  private _columnSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortColumnSortList(this, "column_sort", false);
  public get columnSort() {
    return this._columnSort;
  }

  // field_sort - computed: true, optional: false, required: false
  private _fieldSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortFieldSortList(this, "field_sort", false);
  public get fieldSort() {
    return this._fieldSort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_items_limit - computed: true, optional: false, required: false
  private _categoryItemsLimit = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategoryItemsLimitList(this, "category_items_limit", false);
  public get categoryItemsLimit() {
    return this._categoryItemsLimit;
  }

  // category_sort - computed: true, optional: false, required: false
  private _categorySort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationCategorySortList(this, "category_sort", false);
  public get categorySort() {
    return this._categorySort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_layout - computed: true, optional: false, required: false
  public get cloudLayout() {
    return this.getStringAttribute('cloud_layout');
  }

  // maximum_string_length - computed: true, optional: false, required: false
  public get maximumStringLength() {
    return this.getNumberAttribute('maximum_string_length');
  }

  // word_casing - computed: true, optional: false, required: false
  public get wordCasing() {
    return this.getStringAttribute('word_casing');
  }

  // word_orientation - computed: true, optional: false, required: false
  public get wordOrientation() {
    return this.getStringAttribute('word_orientation');
  }

  // word_padding - computed: true, optional: false, required: false
  public get wordPadding() {
    return this.getStringAttribute('word_padding');
  }

  // word_scaling - computed: true, optional: false, required: false
  public get wordScaling() {
    return this.getStringAttribute('word_scaling');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_label_options - computed: true, optional: false, required: false
  private _categoryLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationCategoryLabelOptionsList(this, "category_label_options", false);
  public get categoryLabelOptions() {
    return this._categoryLabelOptions;
  }

  // field_wells - computed: true, optional: false, required: false
  private _fieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationFieldWellsList(this, "field_wells", false);
  public get fieldWells() {
    return this._fieldWells;
  }

  // sort_configuration - computed: true, optional: false, required: false
  private _sortConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationSortConfigurationList(this, "sort_configuration", false);
  public get sortConfiguration() {
    return this._sortConfiguration;
  }

  // word_cloud_options - computed: true, optional: false, required: false
  private _wordCloudOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationWordCloudOptionsList(this, "word_cloud_options", false);
  public get wordCloudOptions() {
    return this._wordCloudOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_values - computed: true, optional: false, required: false
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // range_maximum - computed: true, optional: false, required: false
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }

  // range_minimum - computed: true, optional: false, required: false
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drill_down_filters - computed: true, optional: false, required: false
  private _drillDownFilters = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_values - computed: true, optional: false, required: false
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // range_maximum - computed: true, optional: false, required: false
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }

  // range_minimum - computed: true, optional: false, required: false
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // drill_down_filters - computed: true, optional: false, required: false
  private _drillDownFilters = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_values - computed: true, optional: false, required: false
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_set_identifier - computed: true, optional: false, required: false
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // range_maximum - computed: true, optional: false, required: false
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }

  // range_minimum - computed: true, optional: false, required: false
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // drill_down_filters - computed: true, optional: false, required: false
  private _drillDownFilters = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchies {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_time_hierarchy - computed: true, optional: false, required: false
  private _dateTimeHierarchy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesDateTimeHierarchyList(this, "date_time_hierarchy", false);
  public get dateTimeHierarchy() {
    return this._dateTimeHierarchy;
  }

  // explicit_hierarchy - computed: true, optional: false, required: false
  private _explicitHierarchy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesExplicitHierarchyList(this, "explicit_hierarchy", false);
  public get explicitHierarchy() {
    return this._explicitHierarchy;
  }

  // predefined_hierarchy - computed: true, optional: false, required: false
  private _predefinedHierarchy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesPredefinedHierarchyList(this, "predefined_hierarchy", false);
  public get predefinedHierarchy() {
    return this._predefinedHierarchy;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plain_text - computed: true, optional: false, required: false
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }

  // rich_text - computed: true, optional: false, required: false
  public get richText() {
    return this.getStringAttribute('rich_text');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format_text - computed: true, optional: false, required: false
  private _formatText = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleFormatTextList(this, "format_text", false);
  public get formatText() {
    return this._formatText;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatText {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plain_text - computed: true, optional: false, required: false
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }

  // rich_text - computed: true, optional: false, required: false
  public get richText() {
    return this.getStringAttribute('rich_text');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format_text - computed: true, optional: false, required: false
  private _formatText = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleFormatTextList(this, "format_text", false);
  public get formatText() {
    return this._formatText;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisual {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // chart_configuration - computed: true, optional: false, required: false
  private _chartConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualChartConfigurationList(this, "chart_configuration", false);
  public get chartConfiguration() {
    return this._chartConfiguration;
  }

  // column_hierarchies - computed: true, optional: false, required: false
  private _columnHierarchies = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualColumnHierarchiesList(this, "column_hierarchies", false);
  public get columnHierarchies() {
    return this._columnHierarchies;
  }

  // subtitle - computed: true, optional: false, required: false
  private _subtitle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualSubtitleList(this, "subtitle", false);
  public get subtitle() {
    return this._subtitle;
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualTitleList(this, "title", false);
  public get title() {
    return this._title;
  }

  // visual_id - computed: true, optional: false, required: false
  public get visualId() {
    return this.getStringAttribute('visual_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisuals {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisuals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisuals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisuals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisuals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bar_chart_visual - computed: true, optional: false, required: false
  private _barChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsBarChartVisualList(this, "bar_chart_visual", false);
  public get barChartVisual() {
    return this._barChartVisual;
  }

  // box_plot_visual - computed: true, optional: false, required: false
  private _boxPlotVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsBoxPlotVisualList(this, "box_plot_visual", false);
  public get boxPlotVisual() {
    return this._boxPlotVisual;
  }

  // combo_chart_visual - computed: true, optional: false, required: false
  private _comboChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualList(this, "combo_chart_visual", false);
  public get comboChartVisual() {
    return this._comboChartVisual;
  }

  // custom_content_visual - computed: true, optional: false, required: false
  private _customContentVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsCustomContentVisualList(this, "custom_content_visual", false);
  public get customContentVisual() {
    return this._customContentVisual;
  }

  // empty_visual - computed: true, optional: false, required: false
  private _emptyVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsEmptyVisualList(this, "empty_visual", false);
  public get emptyVisual() {
    return this._emptyVisual;
  }

  // filled_map_visual - computed: true, optional: false, required: false
  private _filledMapVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsFilledMapVisualList(this, "filled_map_visual", false);
  public get filledMapVisual() {
    return this._filledMapVisual;
  }

  // funnel_chart_visual - computed: true, optional: false, required: false
  private _funnelChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsFunnelChartVisualList(this, "funnel_chart_visual", false);
  public get funnelChartVisual() {
    return this._funnelChartVisual;
  }

  // gauge_chart_visual - computed: true, optional: false, required: false
  private _gaugeChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGaugeChartVisualList(this, "gauge_chart_visual", false);
  public get gaugeChartVisual() {
    return this._gaugeChartVisual;
  }

  // geospatial_map_visual - computed: true, optional: false, required: false
  private _geospatialMapVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualList(this, "geospatial_map_visual", false);
  public get geospatialMapVisual() {
    return this._geospatialMapVisual;
  }

  // heat_map_visual - computed: true, optional: false, required: false
  private _heatMapVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsHeatMapVisualList(this, "heat_map_visual", false);
  public get heatMapVisual() {
    return this._heatMapVisual;
  }

  // histogram_visual - computed: true, optional: false, required: false
  private _histogramVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsHistogramVisualList(this, "histogram_visual", false);
  public get histogramVisual() {
    return this._histogramVisual;
  }

  // insight_visual - computed: true, optional: false, required: false
  private _insightVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsInsightVisualList(this, "insight_visual", false);
  public get insightVisual() {
    return this._insightVisual;
  }

  // kpi_visual - computed: true, optional: false, required: false
  private _kpiVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsKpiVisualList(this, "kpi_visual", false);
  public get kpiVisual() {
    return this._kpiVisual;
  }

  // line_chart_visual - computed: true, optional: false, required: false
  private _lineChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualList(this, "line_chart_visual", false);
  public get lineChartVisual() {
    return this._lineChartVisual;
  }

  // pie_chart_visual - computed: true, optional: false, required: false
  private _pieChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPieChartVisualList(this, "pie_chart_visual", false);
  public get pieChartVisual() {
    return this._pieChartVisual;
  }

  // pivot_table_visual - computed: true, optional: false, required: false
  private _pivotTableVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualList(this, "pivot_table_visual", false);
  public get pivotTableVisual() {
    return this._pivotTableVisual;
  }

  // radar_chart_visual - computed: true, optional: false, required: false
  private _radarChartVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualList(this, "radar_chart_visual", false);
  public get radarChartVisual() {
    return this._radarChartVisual;
  }

  // sankey_diagram_visual - computed: true, optional: false, required: false
  private _sankeyDiagramVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsSankeyDiagramVisualList(this, "sankey_diagram_visual", false);
  public get sankeyDiagramVisual() {
    return this._sankeyDiagramVisual;
  }

  // scatter_plot_visual - computed: true, optional: false, required: false
  private _scatterPlotVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsScatterPlotVisualList(this, "scatter_plot_visual", false);
  public get scatterPlotVisual() {
    return this._scatterPlotVisual;
  }

  // table_visual - computed: true, optional: false, required: false
  private _tableVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualList(this, "table_visual", false);
  public get tableVisual() {
    return this._tableVisual;
  }

  // tree_map_visual - computed: true, optional: false, required: false
  private _treeMapVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTreeMapVisualList(this, "tree_map_visual", false);
  public get treeMapVisual() {
    return this._treeMapVisual;
  }

  // waterfall_visual - computed: true, optional: false, required: false
  private _waterfallVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWaterfallVisualList(this, "waterfall_visual", false);
  public get waterfallVisual() {
    return this._waterfallVisual;
  }

  // word_cloud_visual - computed: true, optional: false, required: false
  private _wordCloudVisual = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsWordCloudVisualList(this, "word_cloud_visual", false);
  public get wordCloudVisual() {
    return this._wordCloudVisual;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheets {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_controls - computed: true, optional: false, required: false
  private _filterControls = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsList(this, "filter_controls", false);
  public get filterControls() {
    return this._filterControls;
  }

  // layouts - computed: true, optional: false, required: false
  private _layouts = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsList(this, "layouts", false);
  public get layouts() {
    return this._layouts;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameter_controls - computed: true, optional: false, required: false
  private _parameterControls = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsList(this, "parameter_controls", false);
  public get parameterControls() {
    return this._parameterControls;
  }

  // sheet_control_layouts - computed: true, optional: false, required: false
  private _sheetControlLayouts = new DataAwsQuicksightAnalysisDefinitionSheetsSheetControlLayoutsList(this, "sheet_control_layouts", false);
  public get sheetControlLayouts() {
    return this._sheetControlLayouts;
  }

  // sheet_id - computed: true, optional: false, required: false
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }

  // text_boxes - computed: true, optional: false, required: false
  private _textBoxes = new DataAwsQuicksightAnalysisDefinitionSheetsTextBoxesList(this, "text_boxes", false);
  public get textBoxes() {
    return this._textBoxes;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // visuals - computed: true, optional: false, required: false
  private _visuals = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsList(this, "visuals", false);
  public get visuals() {
    return this._visuals;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinition {
}

export function dataAwsQuicksightAnalysisDefinitionToTerraform(struct?: DataAwsQuicksightAnalysisDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis_defaults - computed: true, optional: false, required: false
  private _analysisDefaults = new DataAwsQuicksightAnalysisDefinitionAnalysisDefaultsList(this, "analysis_defaults", false);
  public get analysisDefaults() {
    return this._analysisDefaults;
  }

  // calculated_fields - computed: true, optional: false, required: false
  private _calculatedFields = new DataAwsQuicksightAnalysisDefinitionCalculatedFieldsList(this, "calculated_fields", true);
  public get calculatedFields() {
    return this._calculatedFields;
  }

  // column_configurations - computed: true, optional: false, required: false
  private _columnConfigurations = new DataAwsQuicksightAnalysisDefinitionColumnConfigurationsList(this, "column_configurations", false);
  public get columnConfigurations() {
    return this._columnConfigurations;
  }

  // data_set_identifiers_declarations - computed: true, optional: false, required: false
  private _dataSetIdentifiersDeclarations = new DataAwsQuicksightAnalysisDefinitionDataSetIdentifiersDeclarationsList(this, "data_set_identifiers_declarations", false);
  public get dataSetIdentifiersDeclarations() {
    return this._dataSetIdentifiersDeclarations;
  }

  // filter_groups - computed: true, optional: false, required: false
  private _filterGroups = new DataAwsQuicksightAnalysisDefinitionFilterGroupsList(this, "filter_groups", false);
  public get filterGroups() {
    return this._filterGroups;
  }

  // parameter_declarations - computed: true, optional: false, required: false
  private _parameterDeclarations = new DataAwsQuicksightAnalysisDefinitionParameterDeclarationsList(this, "parameter_declarations", true);
  public get parameterDeclarations() {
    return this._parameterDeclarations;
  }

  // sheets - computed: true, optional: false, required: false
  private _sheets = new DataAwsQuicksightAnalysisDefinitionSheetsList(this, "sheets", false);
  public get sheets() {
    return this._sheets;
  }
}

export class DataAwsQuicksightAnalysisDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisPermissions {
}

export function dataAwsQuicksightAnalysisPermissionsToTerraform(struct?: DataAwsQuicksightAnalysisPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisPermissionsToHclTerraform(struct?: DataAwsQuicksightAnalysisPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export class DataAwsQuicksightAnalysisPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisPermissionsOutputReference {
    return new DataAwsQuicksightAnalysisPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
