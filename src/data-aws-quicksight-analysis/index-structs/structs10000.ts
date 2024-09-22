/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldColumnList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCalculatedMeasureFieldList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsColorsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsGeospatialList } from './structs9600'
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureField | undefined) {
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
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureField | undefined) {
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
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  private _aggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionList(this, "aggregation_function", false);
  public get aggregationFunction() {
    return this._aggregationFunction;
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValues {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculated_measure_field - computed: true, optional: false, required: false
  private _calculatedMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCalculatedMeasureFieldList(this, "calculated_measure_field", false);
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }

  // categorical_measure_field - computed: true, optional: false, required: false
  private _categoricalMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesCategoricalMeasureFieldList(this, "categorical_measure_field", false);
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }

  // date_measure_field - computed: true, optional: false, required: false
  private _dateMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesDateMeasureFieldList(this, "date_measure_field", false);
  public get dateMeasureField() {
    return this._dateMeasureField;
  }

  // numerical_measure_field - computed: true, optional: false, required: false
  private _numericalMeasureField = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesNumericalMeasureFieldList(this, "numerical_measure_field", false);
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWells {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // colors - computed: true, optional: false, required: false
  private _colors = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }

  // geospatial - computed: true, optional: false, required: false
  private _geospatial = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsGeospatialList(this, "geospatial", false);
  public get geospatial() {
    return this._geospatial;
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWells {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geospatial_map_aggregated_field_wells - computed: true, optional: false, required: false
  private _geospatialMapAggregatedFieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsGeospatialMapAggregatedFieldWellsList(this, "geospatial_map_aggregated_field_wells", false);
  public get geospatialMapAggregatedFieldWells() {
    return this._geospatialMapAggregatedFieldWells;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // relative - computed: true, optional: false, required: false
  public get relative() {
    return this.getStringAttribute('relative');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_decoration - computed: true, optional: false, required: false
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }

  // font_size - computed: true, optional: false, required: false
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_label - computed: true, optional: false, required: false
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegend {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendTitleList(this, "title", false);
  public get title() {
    return this._title;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_map_style - computed: true, optional: false, required: false
  public get baseMapStyle() {
    return this.getStringAttribute('base_map_style');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarker {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarker {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_cluster_marker - computed: true, optional: false, required: false
  private _simpleClusterMarker = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerSimpleClusterMarkerList(this, "simple_cluster_marker", false);
  public get simpleClusterMarker() {
    return this._simpleClusterMarker;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_marker - computed: true, optional: false, required: false
  private _clusterMarker = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationClusterMarkerList(this, "cluster_marker", false);
  public get clusterMarker() {
    return this._clusterMarker;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_marker_configuration - computed: true, optional: false, required: false
  private _clusterMarkerConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsClusterMarkerConfigurationList(this, "cluster_marker_configuration", false);
  public get clusterMarkerConfiguration() {
    return this._clusterMarkerConfiguration;
  }

  // selected_point_style - computed: true, optional: false, required: false
  public get selectedPointStyle() {
    return this.getStringAttribute('selected_point_style');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined) {
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
  private _numericalAggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionList(this, "numerical_aggregation_function", false);
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationList(this, "aggregation", false);
  public get aggregation() {
    return this._aggregation;
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_tooltip_item - computed: true, optional: false, required: false
  private _columnTooltipItem = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemList(this, "column_tooltip_item", false);
  public get columnTooltipItem() {
    return this._columnTooltipItem;
  }

  // field_tooltip_item - computed: true, optional: false, required: false
  private _fieldTooltipItem = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemList(this, "field_tooltip_item", false);
  public get fieldTooltipItem() {
    return this._fieldTooltipItem;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltip {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_visibility - computed: true, optional: false, required: false
  public get aggregationVisibility() {
    return this.getStringAttribute('aggregation_visibility');
  }

  // tooltip_fields - computed: true, optional: false, required: false
  private _tooltipFields = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList(this, "tooltip_fields", false);
  public get tooltipFields() {
    return this._tooltipFields;
  }

  // tooltip_title_type - computed: true, optional: false, required: false
  public get tooltipTitleType() {
    return this.getStringAttribute('tooltip_title_type');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltip {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_base_tooltip - computed: true, optional: false, required: false
  private _fieldBaseTooltip = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipFieldBaseTooltipList(this, "field_base_tooltip", false);
  public get fieldBaseTooltip() {
    return this._fieldBaseTooltip;
  }

  // selected_tooltip_type - computed: true, optional: false, required: false
  public get selectedTooltipType() {
    return this.getStringAttribute('selected_tooltip_type');
  }

  // tooltip_visibility - computed: true, optional: false, required: false
  public get tooltipVisibility() {
    return this.getStringAttribute('tooltip_visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElement {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // field_value - computed: true, optional: false, required: false
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMap {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // element - computed: true, optional: false, required: false
  private _element = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapElementList(this, "element", false);
  public get element() {
    return this._element;
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPalette {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chart_color - computed: true, optional: false, required: false
  public get chartColor() {
    return this.getStringAttribute('chart_color');
  }

  // color_map - computed: true, optional: false, required: false
  private _colorMap = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteColorMapList(this, "color_map", false);
  public get colorMap() {
    return this._colorMap;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBounds {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBounds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBounds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBounds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBounds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // east - computed: true, optional: false, required: false
  public get east() {
    return this.getNumberAttribute('east');
  }

  // north - computed: true, optional: false, required: false
  public get north() {
    return this.getNumberAttribute('north');
  }

  // south - computed: true, optional: false, required: false
  public get south() {
    return this.getNumberAttribute('south');
  }

  // west - computed: true, optional: false, required: false
  public get west() {
    return this.getNumberAttribute('west');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bounds - computed: true, optional: false, required: false
  private _bounds = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsBoundsList(this, "bounds", false);
  public get bounds() {
    return this._bounds;
  }

  // map_zoom_mode - computed: true, optional: false, required: false
  public get mapZoomMode() {
    return this.getStringAttribute('map_zoom_mode');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_wells - computed: true, optional: false, required: false
  private _fieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationFieldWellsList(this, "field_wells", false);
  public get fieldWells() {
    return this._fieldWells;
  }

  // legend - computed: true, optional: false, required: false
  private _legend = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationLegendList(this, "legend", false);
  public get legend() {
    return this._legend;
  }

  // map_style_options - computed: true, optional: false, required: false
  private _mapStyleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationMapStyleOptionsList(this, "map_style_options", false);
  public get mapStyleOptions() {
    return this._mapStyleOptions;
  }

  // point_style_options - computed: true, optional: false, required: false
  private _pointStyleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationPointStyleOptionsList(this, "point_style_options", false);
  public get pointStyleOptions() {
    return this._pointStyleOptions;
  }

  // tooltip - computed: true, optional: false, required: false
  private _tooltip = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationTooltipList(this, "tooltip", false);
  public get tooltip() {
    return this._tooltip;
  }

  // visual_palette - computed: true, optional: false, required: false
  private _visualPalette = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationVisualPaletteList(this, "visual_palette", false);
  public get visualPalette() {
    return this._visualPalette;
  }

  // window_options - computed: true, optional: false, required: false
  private _windowOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationWindowOptionsList(this, "window_options", false);
  public get windowOptions() {
    return this._windowOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualChartConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined) {
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
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drill_down_filters - computed: true, optional: false, required: false
  private _drillDownFilters = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesDateTimeHierarchyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumns {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumns | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined) {
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
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // drill_down_filters - computed: true, optional: false, required: false
  private _drillDownFilters = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesExplicitHierarchyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumns {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumnsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumnsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumns | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsGeospatialMapVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
