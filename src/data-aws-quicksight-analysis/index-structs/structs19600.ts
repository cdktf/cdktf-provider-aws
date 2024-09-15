/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsLineStyleSettingsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsMarkerStyleSettingsList } from './structs19200'
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // axis_binding - computed: true, optional: false, required: false
  public get axisBinding() {
    return this.getStringAttribute('axis_binding');
  }

  // line_style_settings - computed: true, optional: false, required: false
  private _lineStyleSettings = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsLineStyleSettingsList(this, "line_style_settings", false);
  public get lineStyleSettings() {
    return this._lineStyleSettings;
  }

  // marker_style_settings - computed: true, optional: false, required: false
  private _markerStyleSettings = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsMarkerStyleSettingsList(this, "marker_style_settings", false);
  public get markerStyleSettings() {
    return this._markerStyleSettings;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // date_granularity - computed: true, optional: false, required: false
  public get dateGranularity() {
    return this.getStringAttribute('date_granularity');
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategory {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categorical_dimension_field - computed: true, optional: false, required: false
  private _categoricalDimensionField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryCategoricalDimensionFieldList(this, "categorical_dimension_field", false);
  public get categoricalDimensionField() {
    return this._categoricalDimensionField;
  }

  // date_dimension_field - computed: true, optional: false, required: false
  private _dateDimensionField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryDateDimensionFieldList(this, "date_dimension_field", false);
  public get dateDimensionField() {
    return this._dateDimensionField;
  }

  // numerical_dimension_field - computed: true, optional: false, required: false
  private _numericalDimensionField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryNumericalDimensionFieldList(this, "numerical_dimension_field", false);
  public get numericalDimensionField() {
    return this._numericalDimensionField;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsCategoricalDimensionFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsLineChartAggregatedFieldWellsColorsDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
