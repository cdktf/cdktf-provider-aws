/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureField,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureField,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureField,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColors,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColorsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColorsList,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiples,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiplesToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiplesOutputReference } from './structs1600'
import { QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategory,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategoryToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategoryList,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabels,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsOutputReference } from './structs1200'
import { QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults,
quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsList } from './structs800'
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayMode = value.displayMode;
    }
  }

  // display_mode - computed: false, optional: false, required: true
  private _displayMode?: string; 
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
  public set displayMode(value: string) {
    this._displayMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModeInput() {
    return this._displayMode;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullString = value.nullString;
    }
  }

  // null_string - computed: false, optional: false, required: true
  private _nullString?: string; 
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
  public set nullString(value: string) {
    this._nullString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullStringInput() {
    return this._nullString;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symbol = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symbol = value.symbol;
      this._visibility = value.visibility;
    }
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._thousandsSeparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandsSeparator = this._thousandsSeparator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalSeparator = undefined;
      this._thousandsSeparator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalSeparator = value.decimalSeparator;
      this._thousandsSeparator.internalValue = value.thousandsSeparator;
    }
  }

  // decimal_separator - computed: false, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // thousands_separator - computed: false, optional: true, required: false
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
    this._thousandsSeparator.internalValue = value;
  }
  public resetThousandsSeparator() {
    this._thousandsSeparator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandsSeparatorInput() {
    return this._thousandsSeparator.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_scale QuicksightTemplate#number_scale}
  */
  readonly numberScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#prefix QuicksightTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#suffix QuicksightTemplate#suffix}
  */
  readonly suffix?: string;
  /**
  * decimal_places_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places_configuration QuicksightTemplate#decimal_places_configuration}
  */
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberScale = this._numberScale;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._decimalPlacesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlacesConfiguration = this._decimalPlacesConfiguration?.internalValue;
    }
    if (this._negativeValueConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeValueConfiguration = this._negativeValueConfiguration?.internalValue;
    }
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._separatorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatorConfiguration = this._separatorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberScale = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._decimalPlacesConfiguration.internalValue = undefined;
      this._negativeValueConfiguration.internalValue = undefined;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._separatorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberScale = value.numberScale;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._decimalPlacesConfiguration.internalValue = value.decimalPlacesConfiguration;
      this._negativeValueConfiguration.internalValue = value.negativeValueConfiguration;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._separatorConfiguration.internalValue = value.separatorConfiguration;
    }
  }

  // number_scale - computed: false, optional: true, required: false
  private _numberScale?: string; 
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }
  public set numberScale(value: string) {
    this._numberScale = value;
  }
  public resetNumberScale() {
    this._numberScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberScaleInput() {
    return this._numberScale;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // decimal_places_configuration - computed: false, optional: true, required: false
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
    this._decimalPlacesConfiguration.internalValue = value;
  }
  public resetDecimalPlacesConfiguration() {
    this._decimalPlacesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesConfigurationInput() {
    return this._decimalPlacesConfiguration.internalValue;
  }

  // negative_value_configuration - computed: false, optional: true, required: false
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
    this._negativeValueConfiguration.internalValue = value;
  }
  public resetNegativeValueConfiguration() {
    this._negativeValueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeValueConfigurationInput() {
    return this._negativeValueConfiguration.internalValue;
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // separator_configuration - computed: false, optional: true, required: false
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
    this._separatorConfiguration.internalValue = value;
  }
  public resetSeparatorConfiguration() {
    this._separatorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorConfigurationInput() {
    return this._separatorConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalPlaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalPlaces = value.decimalPlaces;
    }
  }

  // decimal_places - computed: false, optional: false, required: true
  private _decimalPlaces?: number; 
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
  public set decimalPlaces(value: number) {
    this._decimalPlaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesInput() {
    return this._decimalPlaces;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayMode = value.displayMode;
    }
  }

  // display_mode - computed: false, optional: false, required: true
  private _displayMode?: string; 
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
  public set displayMode(value: string) {
    this._displayMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModeInput() {
    return this._displayMode;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullString = value.nullString;
    }
  }

  // null_string - computed: false, optional: false, required: true
  private _nullString?: string; 
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
  public set nullString(value: string) {
    this._nullString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullStringInput() {
    return this._nullString;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symbol = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symbol = value.symbol;
      this._visibility = value.visibility;
    }
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._thousandsSeparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandsSeparator = this._thousandsSeparator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalSeparator = undefined;
      this._thousandsSeparator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalSeparator = value.decimalSeparator;
      this._thousandsSeparator.internalValue = value.thousandsSeparator;
    }
  }

  // decimal_separator - computed: false, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // thousands_separator - computed: false, optional: true, required: false
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
    this._thousandsSeparator.internalValue = value;
  }
  public resetThousandsSeparator() {
    this._thousandsSeparator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandsSeparatorInput() {
    return this._thousandsSeparator.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#prefix QuicksightTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#suffix QuicksightTemplate#suffix}
  */
  readonly suffix?: string;
  /**
  * decimal_places_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places_configuration QuicksightTemplate#decimal_places_configuration}
  */
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._decimalPlacesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlacesConfiguration = this._decimalPlacesConfiguration?.internalValue;
    }
    if (this._negativeValueConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeValueConfiguration = this._negativeValueConfiguration?.internalValue;
    }
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._separatorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatorConfiguration = this._separatorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._suffix = undefined;
      this._decimalPlacesConfiguration.internalValue = undefined;
      this._negativeValueConfiguration.internalValue = undefined;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._separatorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._decimalPlacesConfiguration.internalValue = value.decimalPlacesConfiguration;
      this._negativeValueConfiguration.internalValue = value.negativeValueConfiguration;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._separatorConfiguration.internalValue = value.separatorConfiguration;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // decimal_places_configuration - computed: false, optional: true, required: false
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
    this._decimalPlacesConfiguration.internalValue = value;
  }
  public resetDecimalPlacesConfiguration() {
    this._decimalPlacesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesConfigurationInput() {
    return this._decimalPlacesConfiguration.internalValue;
  }

  // negative_value_configuration - computed: false, optional: true, required: false
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
    this._negativeValueConfiguration.internalValue = value;
  }
  public resetNegativeValueConfiguration() {
    this._negativeValueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeValueConfigurationInput() {
    return this._negativeValueConfiguration.internalValue;
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // separator_configuration - computed: false, optional: true, required: false
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
    this._separatorConfiguration.internalValue = value;
  }
  public resetSeparatorConfiguration() {
    this._separatorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorConfigurationInput() {
    return this._separatorConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currencyDisplayFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyDisplayFormatConfiguration = this._currencyDisplayFormatConfiguration?.internalValue;
    }
    if (this._numberDisplayFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberDisplayFormatConfiguration = this._numberDisplayFormatConfiguration?.internalValue;
    }
    if (this._percentageDisplayFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageDisplayFormatConfiguration = this._percentageDisplayFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currencyDisplayFormatConfiguration.internalValue = undefined;
      this._numberDisplayFormatConfiguration.internalValue = undefined;
      this._percentageDisplayFormatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currencyDisplayFormatConfiguration.internalValue = value.currencyDisplayFormatConfiguration;
      this._numberDisplayFormatConfiguration.internalValue = value.numberDisplayFormatConfiguration;
      this._percentageDisplayFormatConfiguration.internalValue = value.percentageDisplayFormatConfiguration;
    }
  }

  // currency_display_format_configuration - computed: false, optional: true, required: false
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
    this._currencyDisplayFormatConfiguration.internalValue = value;
  }
  public resetCurrencyDisplayFormatConfiguration() {
    this._currencyDisplayFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyDisplayFormatConfigurationInput() {
    return this._currencyDisplayFormatConfiguration.internalValue;
  }

  // number_display_format_configuration - computed: false, optional: true, required: false
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
    this._numberDisplayFormatConfiguration.internalValue = value;
  }
  public resetNumberDisplayFormatConfiguration() {
    this._numberDisplayFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberDisplayFormatConfigurationInput() {
    return this._numberDisplayFormatConfiguration.internalValue;
  }

  // percentage_display_format_configuration - computed: false, optional: true, required: false
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
    this._percentageDisplayFormatConfiguration.internalValue = value;
  }
  public resetPercentageDisplayFormatConfiguration() {
    this._percentageDisplayFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageDisplayFormatConfigurationInput() {
    return this._percentageDisplayFormatConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numericFormatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numericFormatConfiguration.internalValue = value.numericFormatConfiguration;
    }
  }

  // numeric_format_configuration - computed: false, optional: true, required: false
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration) {
    this._numericFormatConfiguration.internalValue = value;
  }
  public resetNumericFormatConfiguration() {
    this._numericFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFormatConfigurationInput() {
    return this._numericFormatConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._aggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction?.internalValue;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._aggregationFunction.internalValue = undefined;
      this._column.internalValue = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._aggregationFunction.internalValue = value.aggregationFunction;
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

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction) {
    this._aggregationFunction.internalValue = value;
  }
  public resetAggregationFunction() {
    this._aggregationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues {
  /**
  * calculated_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculated_measure_field QuicksightTemplate#calculated_measure_field}
  */
  readonly calculatedMeasureField?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureField;
  /**
  * categorical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_measure_field QuicksightTemplate#categorical_measure_field}
  */
  readonly categoricalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureField;
  /**
  * date_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_measure_field QuicksightTemplate#date_measure_field}
  */
  readonly dateMeasureField?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureField;
  /**
  * numerical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_measure_field QuicksightTemplate#numerical_measure_field}
  */
  readonly numericalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureField;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculated_measure_field: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform(struct!.calculatedMeasureField),
    categorical_measure_field: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform(struct!.categoricalMeasureField),
    date_measure_field: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct!.dateMeasureField),
    numerical_measure_field: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct!.numericalMeasureField),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculatedMeasureField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculatedMeasureField = this._calculatedMeasureField?.internalValue;
    }
    if (this._categoricalMeasureField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalMeasureField = this._categoricalMeasureField?.internalValue;
    }
    if (this._dateMeasureField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateMeasureField = this._dateMeasureField?.internalValue;
    }
    if (this._numericalMeasureField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericalMeasureField = this._numericalMeasureField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calculatedMeasureField.internalValue = undefined;
      this._categoricalMeasureField.internalValue = undefined;
      this._dateMeasureField.internalValue = undefined;
      this._numericalMeasureField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calculatedMeasureField.internalValue = value.calculatedMeasureField;
      this._categoricalMeasureField.internalValue = value.categoricalMeasureField;
      this._dateMeasureField.internalValue = value.dateMeasureField;
      this._numericalMeasureField.internalValue = value.numericalMeasureField;
    }
  }

  // calculated_measure_field - computed: false, optional: true, required: false
  private _calculatedMeasureField = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference(this, "calculated_measure_field");
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }
  public putCalculatedMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCalculatedMeasureField) {
    this._calculatedMeasureField.internalValue = value;
  }
  public resetCalculatedMeasureField() {
    this._calculatedMeasureField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedMeasureFieldInput() {
    return this._calculatedMeasureField.internalValue;
  }

  // categorical_measure_field - computed: false, optional: true, required: false
  private _categoricalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference(this, "categorical_measure_field");
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }
  public putCategoricalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesCategoricalMeasureField) {
    this._categoricalMeasureField.internalValue = value;
  }
  public resetCategoricalMeasureField() {
    this._categoricalMeasureField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalMeasureFieldInput() {
    return this._categoricalMeasureField.internalValue;
  }

  // date_measure_field - computed: false, optional: true, required: false
  private _dateMeasureField = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureFieldOutputReference(this, "date_measure_field");
  public get dateMeasureField() {
    return this._dateMeasureField;
  }
  public putDateMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesDateMeasureField) {
    this._dateMeasureField.internalValue = value;
  }
  public resetDateMeasureField() {
    this._dateMeasureField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateMeasureFieldInput() {
    return this._dateMeasureField.internalValue;
  }

  // numerical_measure_field - computed: false, optional: true, required: false
  private _numericalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference(this, "numerical_measure_field");
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
  public putNumericalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesNumericalMeasureField) {
    this._numericalMeasureField.internalValue = value;
  }
  public resetNumericalMeasureField() {
    this._numericalMeasureField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalMeasureFieldInput() {
    return this._numericalMeasureField.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWells {
  /**
  * category block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category QuicksightTemplate#category}
  */
  readonly category?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategory[] | cdktf.IResolvable;
  /**
  * colors block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#colors QuicksightTemplate#colors}
  */
  readonly colors?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColors[] | cdktf.IResolvable;
  /**
  * small_multiples block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples QuicksightTemplate#small_multiples}
  */
  readonly smallMultiples?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiples;
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategoryToTerraform, true)(struct!.category),
    colors: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColorsToTerraform, true)(struct!.colors),
    small_multiples: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiplesToTerraform(struct!.smallMultiples),
    values: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesToTerraform, true)(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._smallMultiples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallMultiples = this._smallMultiples?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._smallMultiples.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category.internalValue = value.category;
      this._colors.internalValue = value.colors;
      this._smallMultiples.internalValue = value.smallMultiples;
      this._values.internalValue = value.values;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // small_multiples - computed: false, optional: true, required: false
  private _smallMultiples = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiplesOutputReference(this, "small_multiples");
  public get smallMultiples() {
    return this._smallMultiples;
  }
  public putSmallMultiples(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsSmallMultiples) {
    this._smallMultiples.internalValue = value;
  }
  public resetSmallMultiples() {
    this._smallMultiples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallMultiplesInput() {
    return this._smallMultiples.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsValues[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWells {
  /**
  * bar_chart_aggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bar_chart_aggregated_field_wells QuicksightTemplate#bar_chart_aggregated_field_wells}
  */
  readonly barChartAggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWells;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bar_chart_aggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsToTerraform(struct!.barChartAggregatedFieldWells),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._barChartAggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.barChartAggregatedFieldWells = this._barChartAggregatedFieldWells?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._barChartAggregatedFieldWells.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._barChartAggregatedFieldWells.internalValue = value.barChartAggregatedFieldWells;
    }
  }

  // bar_chart_aggregated_field_wells - computed: false, optional: true, required: false
  private _barChartAggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWellsOutputReference(this, "bar_chart_aggregated_field_wells");
  public get barChartAggregatedFieldWells() {
    return this._barChartAggregatedFieldWells;
  }
  public putBarChartAggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsBarChartAggregatedFieldWells) {
    this._barChartAggregatedFieldWells.internalValue = value;
  }
  public resetBarChartAggregatedFieldWells() {
    this._barChartAggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barChartAggregatedFieldWellsInput() {
    return this._barChartAggregatedFieldWells.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
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

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#position QuicksightTemplate#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#width QuicksightTemplate#width}
  */
  readonly width?: string;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    position: cdktf.stringToTerraform(struct!.position),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    width: cdktf.stringToTerraform(struct!.width),
    title: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._position = undefined;
      this._visibility = undefined;
      this._width = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._position = value.position;
      this._visibility = value.visibility;
      this._width = value.width;
      this._title.internalValue = value.title;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // title - computed: false, optional: true, required: false
  private _title = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculation | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfiguration {
  /**
  * calculation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculation QuicksightTemplate#calculation}
  */
  readonly calculation: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculation;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumn;
  /**
  * measure_aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#measure_aggregation_function QuicksightTemplate#measure_aggregation_function}
  */
  readonly measureAggregationFunction: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationToTerraform(struct!.calculation),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumnToTerraform(struct!.column),
    measure_aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionToTerraform(struct!.measureAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculation = this._calculation?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._measureAggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureAggregationFunction = this._measureAggregationFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calculation.internalValue = undefined;
      this._column.internalValue = undefined;
      this._measureAggregationFunction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calculation.internalValue = value.calculation;
      this._column.internalValue = value.column;
      this._measureAggregationFunction.internalValue = value.measureAggregationFunction;
    }
  }

  // calculation - computed: false, optional: false, required: true
  private _calculation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculationOutputReference(this, "calculation");
  public get calculation() {
    return this._calculation;
  }
  public putCalculation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationCalculation) {
    this._calculation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationInput() {
    return this._calculation.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // measure_aggregation_function - computed: false, optional: false, required: true
  private _measureAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunctionOutputReference(this, "measure_aggregation_function");
  public get measureAggregationFunction() {
    return this._measureAggregationFunction;
  }
  public putMeasureAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationMeasureAggregationFunction) {
    this._measureAggregationFunction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureAggregationFunctionInput() {
    return this._measureAggregationFunction.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
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
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#axis_binding QuicksightTemplate#axis_binding}
  */
  readonly axisBinding?: string;
  /**
  * dynamic_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dynamic_configuration QuicksightTemplate#dynamic_configuration}
  */
  readonly dynamicConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfiguration;
  /**
  * static_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_configuration QuicksightTemplate#static_configuration}
  */
  readonly staticConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_binding: cdktf.stringToTerraform(struct!.axisBinding),
    dynamic_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationToTerraform(struct!.dynamicConfiguration),
    static_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationToTerraform(struct!.staticConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisBinding = this._axisBinding;
    }
    if (this._dynamicConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicConfiguration = this._dynamicConfiguration?.internalValue;
    }
    if (this._staticConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticConfiguration = this._staticConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axisBinding = undefined;
      this._dynamicConfiguration.internalValue = undefined;
      this._staticConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axisBinding = value.axisBinding;
      this._dynamicConfiguration.internalValue = value.dynamicConfiguration;
      this._staticConfiguration.internalValue = value.staticConfiguration;
    }
  }

  // axis_binding - computed: false, optional: true, required: false
  private _axisBinding?: string; 
  public get axisBinding() {
    return this.getStringAttribute('axis_binding');
  }
  public set axisBinding(value: string) {
    this._axisBinding = value;
  }
  public resetAxisBinding() {
    this._axisBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisBindingInput() {
    return this._axisBinding;
  }

  // dynamic_configuration - computed: false, optional: true, required: false
  private _dynamicConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationOutputReference(this, "dynamic_configuration");
  public get dynamicConfiguration() {
    return this._dynamicConfiguration;
  }
  public putDynamicConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfiguration) {
    this._dynamicConfiguration.internalValue = value;
  }
  public resetDynamicConfiguration() {
    this._dynamicConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicConfigurationInput() {
    return this._dynamicConfiguration.internalValue;
  }

  // static_configuration - computed: false, optional: true, required: false
  private _staticConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationOutputReference(this, "static_configuration");
  public get staticConfiguration() {
    return this._staticConfiguration;
  }
  public putStaticConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration) {
    this._staticConfiguration.internalValue = value;
  }
  public resetStaticConfiguration() {
    this._staticConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticConfigurationInput() {
    return this._staticConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
    }
  }

  // custom_label - computed: false, optional: false, required: true
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalPlaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalPlaces = value.decimalPlaces;
    }
  }

  // decimal_places - computed: false, optional: false, required: true
  private _decimalPlaces?: number; 
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
  public set decimalPlaces(value: number) {
    this._decimalPlaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesInput() {
    return this._decimalPlaces;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayMode = value.displayMode;
    }
  }

  // display_mode - computed: false, optional: false, required: true
  private _displayMode?: string; 
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
  public set displayMode(value: string) {
    this._displayMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModeInput() {
    return this._displayMode;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullString = value.nullString;
    }
  }

  // null_string - computed: false, optional: false, required: true
  private _nullString?: string; 
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
  public set nullString(value: string) {
    this._nullString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullStringInput() {
    return this._nullString;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symbol = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symbol = value.symbol;
      this._visibility = value.visibility;
    }
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._thousandsSeparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandsSeparator = this._thousandsSeparator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalSeparator = undefined;
      this._thousandsSeparator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalSeparator = value.decimalSeparator;
      this._thousandsSeparator.internalValue = value.thousandsSeparator;
    }
  }

  // decimal_separator - computed: false, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // thousands_separator - computed: false, optional: true, required: false
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
    this._thousandsSeparator.internalValue = value;
  }
  public resetThousandsSeparator() {
    this._thousandsSeparator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandsSeparatorInput() {
    return this._thousandsSeparator.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_scale QuicksightTemplate#number_scale}
  */
  readonly numberScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#prefix QuicksightTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#suffix QuicksightTemplate#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * decimal_places_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places_configuration QuicksightTemplate#decimal_places_configuration}
  */
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberScale = this._numberScale;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._decimalPlacesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlacesConfiguration = this._decimalPlacesConfiguration?.internalValue;
    }
    if (this._negativeValueConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeValueConfiguration = this._negativeValueConfiguration?.internalValue;
    }
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._separatorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatorConfiguration = this._separatorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberScale = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._symbol = undefined;
      this._decimalPlacesConfiguration.internalValue = undefined;
      this._negativeValueConfiguration.internalValue = undefined;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._separatorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberScale = value.numberScale;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._symbol = value.symbol;
      this._decimalPlacesConfiguration.internalValue = value.decimalPlacesConfiguration;
      this._negativeValueConfiguration.internalValue = value.negativeValueConfiguration;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._separatorConfiguration.internalValue = value.separatorConfiguration;
    }
  }

  // number_scale - computed: false, optional: true, required: false
  private _numberScale?: string; 
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }
  public set numberScale(value: string) {
    this._numberScale = value;
  }
  public resetNumberScale() {
    this._numberScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberScaleInput() {
    return this._numberScale;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
  }

  // decimal_places_configuration - computed: false, optional: true, required: false
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
    this._decimalPlacesConfiguration.internalValue = value;
  }
  public resetDecimalPlacesConfiguration() {
    this._decimalPlacesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesConfigurationInput() {
    return this._decimalPlacesConfiguration.internalValue;
  }

  // negative_value_configuration - computed: false, optional: true, required: false
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
    this._negativeValueConfiguration.internalValue = value;
  }
  public resetNegativeValueConfiguration() {
    this._negativeValueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeValueConfigurationInput() {
    return this._negativeValueConfiguration.internalValue;
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // separator_configuration - computed: false, optional: true, required: false
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
    this._separatorConfiguration.internalValue = value;
  }
  public resetSeparatorConfiguration() {
    this._separatorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorConfigurationInput() {
    return this._separatorConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalPlaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalPlaces = value.decimalPlaces;
    }
  }

  // decimal_places - computed: false, optional: false, required: true
  private _decimalPlaces?: number; 
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
  public set decimalPlaces(value: number) {
    this._decimalPlaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesInput() {
    return this._decimalPlaces;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayMode = value.displayMode;
    }
  }

  // display_mode - computed: false, optional: false, required: true
  private _displayMode?: string; 
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
  public set displayMode(value: string) {
    this._displayMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModeInput() {
    return this._displayMode;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullString = value.nullString;
    }
  }

  // null_string - computed: false, optional: false, required: true
  private _nullString?: string; 
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
  public set nullString(value: string) {
    this._nullString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullStringInput() {
    return this._nullString;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symbol = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symbol = value.symbol;
      this._visibility = value.visibility;
    }
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._thousandsSeparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandsSeparator = this._thousandsSeparator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalSeparator = undefined;
      this._thousandsSeparator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalSeparator = value.decimalSeparator;
      this._thousandsSeparator.internalValue = value.thousandsSeparator;
    }
  }

  // decimal_separator - computed: false, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // thousands_separator - computed: false, optional: true, required: false
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
    this._thousandsSeparator.internalValue = value;
  }
  public resetThousandsSeparator() {
    this._thousandsSeparator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandsSeparatorInput() {
    return this._thousandsSeparator.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_scale QuicksightTemplate#number_scale}
  */
  readonly numberScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#prefix QuicksightTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#suffix QuicksightTemplate#suffix}
  */
  readonly suffix?: string;
  /**
  * decimal_places_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places_configuration QuicksightTemplate#decimal_places_configuration}
  */
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberScale = this._numberScale;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._decimalPlacesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlacesConfiguration = this._decimalPlacesConfiguration?.internalValue;
    }
    if (this._negativeValueConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeValueConfiguration = this._negativeValueConfiguration?.internalValue;
    }
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._separatorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatorConfiguration = this._separatorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberScale = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
      this._decimalPlacesConfiguration.internalValue = undefined;
      this._negativeValueConfiguration.internalValue = undefined;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._separatorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberScale = value.numberScale;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._decimalPlacesConfiguration.internalValue = value.decimalPlacesConfiguration;
      this._negativeValueConfiguration.internalValue = value.negativeValueConfiguration;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._separatorConfiguration.internalValue = value.separatorConfiguration;
    }
  }

  // number_scale - computed: false, optional: true, required: false
  private _numberScale?: string; 
  public get numberScale() {
    return this.getStringAttribute('number_scale');
  }
  public set numberScale(value: string) {
    this._numberScale = value;
  }
  public resetNumberScale() {
    this._numberScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberScaleInput() {
    return this._numberScale;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // decimal_places_configuration - computed: false, optional: true, required: false
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
    this._decimalPlacesConfiguration.internalValue = value;
  }
  public resetDecimalPlacesConfiguration() {
    this._decimalPlacesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesConfigurationInput() {
    return this._decimalPlacesConfiguration.internalValue;
  }

  // negative_value_configuration - computed: false, optional: true, required: false
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
    this._negativeValueConfiguration.internalValue = value;
  }
  public resetNegativeValueConfiguration() {
    this._negativeValueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeValueConfigurationInput() {
    return this._negativeValueConfiguration.internalValue;
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // separator_configuration - computed: false, optional: true, required: false
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
    this._separatorConfiguration.internalValue = value;
  }
  public resetSeparatorConfiguration() {
    this._separatorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorConfigurationInput() {
    return this._separatorConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalPlaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalPlaces = value.decimalPlaces;
    }
  }

  // decimal_places - computed: false, optional: false, required: true
  private _decimalPlaces?: number; 
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
  public set decimalPlaces(value: number) {
    this._decimalPlaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesInput() {
    return this._decimalPlaces;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayMode = value.displayMode;
    }
  }

  // display_mode - computed: false, optional: false, required: true
  private _displayMode?: string; 
  public get displayMode() {
    return this.getStringAttribute('display_mode');
  }
  public set displayMode(value: string) {
    this._displayMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayModeInput() {
    return this._displayMode;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullString = value.nullString;
    }
  }

  // null_string - computed: false, optional: false, required: true
  private _nullString?: string; 
  public get nullString() {
    return this.getStringAttribute('null_string');
  }
  public set nullString(value: string) {
    this._nullString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullStringInput() {
    return this._nullString;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symbol = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symbol = value.symbol;
      this._visibility = value.visibility;
    }
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalSeparator = this._decimalSeparator;
    }
    if (this._thousandsSeparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandsSeparator = this._thousandsSeparator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimalSeparator = undefined;
      this._thousandsSeparator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimalSeparator = value.decimalSeparator;
      this._thousandsSeparator.internalValue = value.thousandsSeparator;
    }
  }

  // decimal_separator - computed: false, optional: true, required: false
  private _decimalSeparator?: string; 
  public get decimalSeparator() {
    return this.getStringAttribute('decimal_separator');
  }
  public set decimalSeparator(value: string) {
    this._decimalSeparator = value;
  }
  public resetDecimalSeparator() {
    this._decimalSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalSeparatorInput() {
    return this._decimalSeparator;
  }

  // thousands_separator - computed: false, optional: true, required: false
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
    this._thousandsSeparator.internalValue = value;
  }
  public resetThousandsSeparator() {
    this._thousandsSeparator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandsSeparatorInput() {
    return this._thousandsSeparator.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#prefix QuicksightTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#suffix QuicksightTemplate#suffix}
  */
  readonly suffix?: string;
  /**
  * decimal_places_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places_configuration QuicksightTemplate#decimal_places_configuration}
  */
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._decimalPlacesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlacesConfiguration = this._decimalPlacesConfiguration?.internalValue;
    }
    if (this._negativeValueConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeValueConfiguration = this._negativeValueConfiguration?.internalValue;
    }
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._separatorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatorConfiguration = this._separatorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._suffix = undefined;
      this._decimalPlacesConfiguration.internalValue = undefined;
      this._negativeValueConfiguration.internalValue = undefined;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._separatorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
      this._decimalPlacesConfiguration.internalValue = value.decimalPlacesConfiguration;
      this._negativeValueConfiguration.internalValue = value.negativeValueConfiguration;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._separatorConfiguration.internalValue = value.separatorConfiguration;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // decimal_places_configuration - computed: false, optional: true, required: false
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
    this._decimalPlacesConfiguration.internalValue = value;
  }
  public resetDecimalPlacesConfiguration() {
    this._decimalPlacesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesConfigurationInput() {
    return this._decimalPlacesConfiguration.internalValue;
  }

  // negative_value_configuration - computed: false, optional: true, required: false
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
    this._negativeValueConfiguration.internalValue = value;
  }
  public resetNegativeValueConfiguration() {
    this._negativeValueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeValueConfigurationInput() {
    return this._negativeValueConfiguration.internalValue;
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // separator_configuration - computed: false, optional: true, required: false
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
    this._separatorConfiguration.internalValue = value;
  }
  public resetSeparatorConfiguration() {
    this._separatorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorConfigurationInput() {
    return this._separatorConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currencyDisplayFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyDisplayFormatConfiguration = this._currencyDisplayFormatConfiguration?.internalValue;
    }
    if (this._numberDisplayFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberDisplayFormatConfiguration = this._numberDisplayFormatConfiguration?.internalValue;
    }
    if (this._percentageDisplayFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageDisplayFormatConfiguration = this._percentageDisplayFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currencyDisplayFormatConfiguration.internalValue = undefined;
      this._numberDisplayFormatConfiguration.internalValue = undefined;
      this._percentageDisplayFormatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currencyDisplayFormatConfiguration.internalValue = value.currencyDisplayFormatConfiguration;
      this._numberDisplayFormatConfiguration.internalValue = value.numberDisplayFormatConfiguration;
      this._percentageDisplayFormatConfiguration.internalValue = value.percentageDisplayFormatConfiguration;
    }
  }

  // currency_display_format_configuration - computed: false, optional: true, required: false
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration) {
    this._currencyDisplayFormatConfiguration.internalValue = value;
  }
  public resetCurrencyDisplayFormatConfiguration() {
    this._currencyDisplayFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyDisplayFormatConfigurationInput() {
    return this._currencyDisplayFormatConfiguration.internalValue;
  }

  // number_display_format_configuration - computed: false, optional: true, required: false
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration) {
    this._numberDisplayFormatConfiguration.internalValue = value;
  }
  public resetNumberDisplayFormatConfiguration() {
    this._numberDisplayFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberDisplayFormatConfigurationInput() {
    return this._numberDisplayFormatConfiguration.internalValue;
  }

  // percentage_display_format_configuration - computed: false, optional: true, required: false
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration) {
    this._percentageDisplayFormatConfiguration.internalValue = value;
  }
  public resetPercentageDisplayFormatConfiguration() {
    this._percentageDisplayFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageDisplayFormatConfigurationInput() {
    return this._percentageDisplayFormatConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative_position QuicksightTemplate#relative_position}
  */
  readonly relativePosition?: string;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_position: cdktf.stringToTerraform(struct!.relativePosition),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativePosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePosition = this._relativePosition;
    }
    if (this._formatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatConfiguration = this._formatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativePosition = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativePosition = value.relativePosition;
      this._formatConfiguration.internalValue = value.formatConfiguration;
    }
  }

  // relative_position - computed: false, optional: true, required: false
  private _relativePosition?: string; 
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }
  public set relativePosition(value: string) {
    this._relativePosition = value;
  }
  public resetRelativePosition() {
    this._relativePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePositionInput() {
    return this._relativePosition;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#horizontal_position QuicksightTemplate#horizontal_position}
  */
  readonly horizontalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#vertical_position QuicksightTemplate#vertical_position}
  */
  readonly verticalPosition?: string;
  /**
  * custom_label_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label_configuration QuicksightTemplate#custom_label_configuration}
  */
  readonly customLabelConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration;
  /**
  * value_label_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_label_configuration QuicksightTemplate#value_label_configuration}
  */
  readonly valueLabelConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    horizontal_position: cdktf.stringToTerraform(struct!.horizontalPosition),
    vertical_position: cdktf.stringToTerraform(struct!.verticalPosition),
    custom_label_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationToTerraform(struct!.customLabelConfiguration),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationToTerraform(struct!.fontConfiguration),
    value_label_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationToTerraform(struct!.valueLabelConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._horizontalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPosition = this._horizontalPosition;
    }
    if (this._verticalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalPosition = this._verticalPosition;
    }
    if (this._customLabelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabelConfiguration = this._customLabelConfiguration?.internalValue;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    if (this._valueLabelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueLabelConfiguration = this._valueLabelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._horizontalPosition = undefined;
      this._verticalPosition = undefined;
      this._customLabelConfiguration.internalValue = undefined;
      this._fontConfiguration.internalValue = undefined;
      this._valueLabelConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._horizontalPosition = value.horizontalPosition;
      this._verticalPosition = value.verticalPosition;
      this._customLabelConfiguration.internalValue = value.customLabelConfiguration;
      this._fontConfiguration.internalValue = value.fontConfiguration;
      this._valueLabelConfiguration.internalValue = value.valueLabelConfiguration;
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

  // horizontal_position - computed: false, optional: true, required: false
  private _horizontalPosition?: string; 
  public get horizontalPosition() {
    return this.getStringAttribute('horizontal_position');
  }
  public set horizontalPosition(value: string) {
    this._horizontalPosition = value;
  }
  public resetHorizontalPosition() {
    this._horizontalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPositionInput() {
    return this._horizontalPosition;
  }

  // vertical_position - computed: false, optional: true, required: false
  private _verticalPosition?: string; 
  public get verticalPosition() {
    return this.getStringAttribute('vertical_position');
  }
  public set verticalPosition(value: string) {
    this._verticalPosition = value;
  }
  public resetVerticalPosition() {
    this._verticalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPositionInput() {
    return this._verticalPosition;
  }

  // custom_label_configuration - computed: false, optional: true, required: false
  private _customLabelConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationOutputReference(this, "custom_label_configuration");
  public get customLabelConfiguration() {
    return this._customLabelConfiguration;
  }
  public putCustomLabelConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration) {
    this._customLabelConfiguration.internalValue = value;
  }
  public resetCustomLabelConfiguration() {
    this._customLabelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelConfigurationInput() {
    return this._customLabelConfiguration.internalValue;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }

  // value_label_configuration - computed: false, optional: true, required: false
  private _valueLabelConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationOutputReference(this, "value_label_configuration");
  public get valueLabelConfiguration() {
    return this._valueLabelConfiguration;
  }
  public putValueLabelConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration) {
    this._valueLabelConfiguration.internalValue = value;
  }
  public resetValueLabelConfiguration() {
    this._valueLabelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueLabelConfigurationInput() {
    return this._valueLabelConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#pattern QuicksightTemplate#pattern}
  */
  readonly pattern?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
  /**
  * data_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_configuration QuicksightTemplate#data_configuration}
  */
  readonly dataConfiguration: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfiguration;
  /**
  * label_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_configuration QuicksightTemplate#label_configuration}
  */
  readonly labelConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfiguration;
  /**
  * style_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style_configuration QuicksightTemplate#style_configuration}
  */
  readonly styleConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    data_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationToTerraform(struct!.dataConfiguration),
    label_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationToTerraform(struct!.labelConfiguration),
    style_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfigurationToTerraform(struct!.styleConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._dataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConfiguration = this._dataConfiguration?.internalValue;
    }
    if (this._labelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelConfiguration = this._labelConfiguration?.internalValue;
    }
    if (this._styleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.styleConfiguration = this._styleConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._dataConfiguration.internalValue = undefined;
      this._labelConfiguration.internalValue = undefined;
      this._styleConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._dataConfiguration.internalValue = value.dataConfiguration;
      this._labelConfiguration.internalValue = value.labelConfiguration;
      this._styleConfiguration.internalValue = value.styleConfiguration;
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

  // data_configuration - computed: false, optional: false, required: true
  private _dataConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfigurationOutputReference(this, "data_configuration");
  public get dataConfiguration() {
    return this._dataConfiguration;
  }
  public putDataConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesDataConfiguration) {
    this._dataConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConfigurationInput() {
    return this._dataConfiguration.internalValue;
  }

  // label_configuration - computed: false, optional: true, required: false
  private _labelConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfigurationOutputReference(this, "label_configuration");
  public get labelConfiguration() {
    return this._labelConfiguration;
  }
  public putLabelConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesLabelConfiguration) {
    this._labelConfiguration.internalValue = value;
  }
  public resetLabelConfiguration() {
    this._labelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelConfigurationInput() {
    return this._labelConfiguration.internalValue;
  }

  // style_configuration - computed: false, optional: true, required: false
  private _styleConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfigurationOutputReference(this, "style_configuration");
  public get styleConfiguration() {
    return this._styleConfiguration;
  }
  public putStyleConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesStyleConfiguration) {
    this._styleConfiguration.internalValue = value;
  }
  public resetStyleConfiguration() {
    this._styleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleConfigurationInput() {
    return this._styleConfiguration.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#horizontal_text_alignment QuicksightTemplate#horizontal_text_alignment}
  */
  readonly horizontalTextAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    horizontal_text_alignment: cdktf.stringToTerraform(struct!.horizontalTextAlignment),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._horizontalTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalTextAlignment = this._horizontalTextAlignment;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._horizontalTextAlignment = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._horizontalTextAlignment = value.horizontalTextAlignment;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
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

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_visibility QuicksightTemplate#background_visibility}
  */
  readonly backgroundVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_color QuicksightTemplate#border_color}
  */
  readonly borderColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_style QuicksightTemplate#border_style}
  */
  readonly borderStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_thickness QuicksightTemplate#border_thickness}
  */
  readonly borderThickness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_visibility QuicksightTemplate#border_visibility}
  */
  readonly borderVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gutter_spacing QuicksightTemplate#gutter_spacing}
  */
  readonly gutterSpacing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gutter_visibility QuicksightTemplate#gutter_visibility}
  */
  readonly gutterVisibility?: string;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    background_visibility: cdktf.stringToTerraform(struct!.backgroundVisibility),
    border_color: cdktf.stringToTerraform(struct!.borderColor),
    border_style: cdktf.stringToTerraform(struct!.borderStyle),
    border_thickness: cdktf.stringToTerraform(struct!.borderThickness),
    border_visibility: cdktf.stringToTerraform(struct!.borderVisibility),
    gutter_spacing: cdktf.stringToTerraform(struct!.gutterSpacing),
    gutter_visibility: cdktf.stringToTerraform(struct!.gutterVisibility),
    title: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._backgroundVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundVisibility = this._backgroundVisibility;
    }
    if (this._borderColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderColor = this._borderColor;
    }
    if (this._borderStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderStyle = this._borderStyle;
    }
    if (this._borderThickness !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderThickness = this._borderThickness;
    }
    if (this._borderVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderVisibility = this._borderVisibility;
    }
    if (this._gutterSpacing !== undefined) {
      hasAnyValues = true;
      internalValueResult.gutterSpacing = this._gutterSpacing;
    }
    if (this._gutterVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.gutterVisibility = this._gutterVisibility;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._backgroundVisibility = undefined;
      this._borderColor = undefined;
      this._borderStyle = undefined;
      this._borderThickness = undefined;
      this._borderVisibility = undefined;
      this._gutterSpacing = undefined;
      this._gutterVisibility = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._backgroundVisibility = value.backgroundVisibility;
      this._borderColor = value.borderColor;
      this._borderStyle = value.borderStyle;
      this._borderThickness = value.borderThickness;
      this._borderVisibility = value.borderVisibility;
      this._gutterSpacing = value.gutterSpacing;
      this._gutterVisibility = value.gutterVisibility;
      this._title.internalValue = value.title;
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

  // background_visibility - computed: false, optional: true, required: false
  private _backgroundVisibility?: string; 
  public get backgroundVisibility() {
    return this.getStringAttribute('background_visibility');
  }
  public set backgroundVisibility(value: string) {
    this._backgroundVisibility = value;
  }
  public resetBackgroundVisibility() {
    this._backgroundVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundVisibilityInput() {
    return this._backgroundVisibility;
  }

  // border_color - computed: false, optional: true, required: false
  private _borderColor?: string; 
  public get borderColor() {
    return this.getStringAttribute('border_color');
  }
  public set borderColor(value: string) {
    this._borderColor = value;
  }
  public resetBorderColor() {
    this._borderColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderColorInput() {
    return this._borderColor;
  }

  // border_style - computed: false, optional: true, required: false
  private _borderStyle?: string; 
  public get borderStyle() {
    return this.getStringAttribute('border_style');
  }
  public set borderStyle(value: string) {
    this._borderStyle = value;
  }
  public resetBorderStyle() {
    this._borderStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderStyleInput() {
    return this._borderStyle;
  }

  // border_thickness - computed: false, optional: true, required: false
  private _borderThickness?: string; 
  public get borderThickness() {
    return this.getStringAttribute('border_thickness');
  }
  public set borderThickness(value: string) {
    this._borderThickness = value;
  }
  public resetBorderThickness() {
    this._borderThickness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderThicknessInput() {
    return this._borderThickness;
  }

  // border_visibility - computed: false, optional: true, required: false
  private _borderVisibility?: string; 
  public get borderVisibility() {
    return this.getStringAttribute('border_visibility');
  }
  public set borderVisibility(value: string) {
    this._borderVisibility = value;
  }
  public resetBorderVisibility() {
    this._borderVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderVisibilityInput() {
    return this._borderVisibility;
  }

  // gutter_spacing - computed: false, optional: true, required: false
  private _gutterSpacing?: string; 
  public get gutterSpacing() {
    return this.getStringAttribute('gutter_spacing');
  }
  public set gutterSpacing(value: string) {
    this._gutterSpacing = value;
  }
  public resetGutterSpacing() {
    this._gutterSpacing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gutterSpacingInput() {
    return this._gutterSpacing;
  }

  // gutter_visibility - computed: false, optional: true, required: false
  private _gutterVisibility?: string; 
  public get gutterVisibility() {
    return this.getStringAttribute('gutter_visibility');
  }
  public set gutterVisibility(value: string) {
    this._gutterVisibility = value;
  }
  public resetGutterVisibility() {
    this._gutterVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gutterVisibilityInput() {
    return this._gutterVisibility;
  }

  // title - computed: false, optional: true, required: false
  private _title = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#max_visible_columns QuicksightTemplate#max_visible_columns}
  */
  readonly maxVisibleColumns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#max_visible_rows QuicksightTemplate#max_visible_rows}
  */
  readonly maxVisibleRows?: number;
  /**
  * panel_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#panel_configuration QuicksightTemplate#panel_configuration}
  */
  readonly panelConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_visible_columns: cdktf.numberToTerraform(struct!.maxVisibleColumns),
    max_visible_rows: cdktf.numberToTerraform(struct!.maxVisibleRows),
    panel_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationToTerraform(struct!.panelConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVisibleColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVisibleColumns = this._maxVisibleColumns;
    }
    if (this._maxVisibleRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVisibleRows = this._maxVisibleRows;
    }
    if (this._panelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelConfiguration = this._panelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxVisibleColumns = undefined;
      this._maxVisibleRows = undefined;
      this._panelConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxVisibleColumns = value.maxVisibleColumns;
      this._maxVisibleRows = value.maxVisibleRows;
      this._panelConfiguration.internalValue = value.panelConfiguration;
    }
  }

  // max_visible_columns - computed: false, optional: true, required: false
  private _maxVisibleColumns?: number; 
  public get maxVisibleColumns() {
    return this.getNumberAttribute('max_visible_columns');
  }
  public set maxVisibleColumns(value: number) {
    this._maxVisibleColumns = value;
  }
  public resetMaxVisibleColumns() {
    this._maxVisibleColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVisibleColumnsInput() {
    return this._maxVisibleColumns;
  }

  // max_visible_rows - computed: false, optional: true, required: false
  private _maxVisibleRows?: number; 
  public get maxVisibleRows() {
    return this.getNumberAttribute('max_visible_rows');
  }
  public set maxVisibleRows(value: number) {
    this._maxVisibleRows = value;
  }
  public resetMaxVisibleRows() {
    this._maxVisibleRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVisibleRowsInput() {
    return this._maxVisibleRows;
  }

  // panel_configuration - computed: false, optional: true, required: false
  private _panelConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference(this, "panel_configuration");
  public get panelConfiguration() {
    return this._panelConfiguration;
  }
  public putPanelConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration) {
    this._panelConfiguration.internalValue = value;
  }
  public resetPanelConfiguration() {
    this._panelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelConfigurationInput() {
    return this._panelConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsLimit = this._itemsLimit;
    }
    if (this._otherCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCategories = this._otherCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._itemsLimit = undefined;
      this._otherCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._itemsLimit = value.itemsLimit;
      this._otherCategories = value.otherCategories;
    }
  }

  // items_limit - computed: false, optional: true, required: false
  private _itemsLimit?: number; 
  public get itemsLimit() {
    return this.getNumberAttribute('items_limit');
  }
  public set itemsLimit(value: number) {
    this._itemsLimit = value;
  }
  public resetItemsLimit() {
    this._itemsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsLimitInput() {
    return this._itemsLimit;
  }

  // other_categories - computed: false, optional: false, required: true
  private _otherCategories?: string; 
  public get otherCategories() {
    return this.getStringAttribute('other_categories');
  }
  public set otherCategories(value: string) {
    this._otherCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otherCategoriesInput() {
    return this._otherCategories;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimitToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimitOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsLimit = this._itemsLimit;
    }
    if (this._otherCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCategories = this._otherCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._itemsLimit = undefined;
      this._otherCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._itemsLimit = value.itemsLimit;
      this._otherCategories = value.otherCategories;
    }
  }

  // items_limit - computed: false, optional: true, required: false
  private _itemsLimit?: number; 
  public get itemsLimit() {
    return this.getNumberAttribute('items_limit');
  }
  public set itemsLimit(value: number) {
    this._itemsLimit = value;
  }
  public resetItemsLimit() {
    this._itemsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsLimitInput() {
    return this._itemsLimit;
  }

  // other_categories - computed: false, optional: false, required: true
  private _otherCategories?: string; 
  public get otherCategories() {
    return this.getStringAttribute('other_categories');
  }
  public set otherCategories(value: string) {
    this._otherCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otherCategoriesInput() {
    return this._otherCategories;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsLimit = this._itemsLimit;
    }
    if (this._otherCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCategories = this._otherCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._itemsLimit = undefined;
      this._otherCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._itemsLimit = value.itemsLimit;
      this._otherCategories = value.otherCategories;
    }
  }

  // items_limit - computed: false, optional: true, required: false
  private _itemsLimit?: number; 
  public get itemsLimit() {
    return this.getNumberAttribute('items_limit');
  }
  public set itemsLimit(value: number) {
    this._itemsLimit = value;
  }
  public resetItemsLimit() {
    this._itemsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsLimitInput() {
    return this._itemsLimit;
  }

  // other_categories - computed: false, optional: false, required: true
  private _otherCategories?: string; 
  public get otherCategories() {
    return this.getStringAttribute('other_categories');
  }
  public set otherCategories(value: string) {
    this._otherCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otherCategoriesInput() {
    return this._otherCategories;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfiguration {
  /**
  * category_items_limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_items_limit QuicksightTemplate#category_items_limit}
  */
  readonly categoryItemsLimit?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimit;
  /**
  * category_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_sort QuicksightTemplate#category_sort}
  */
  readonly categorySort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable;
  /**
  * color_items_limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_items_limit QuicksightTemplate#color_items_limit}
  */
  readonly colorItemsLimit?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimit;
  /**
  * color_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_sort QuicksightTemplate#color_sort}
  */
  readonly colorSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort[] | cdktf.IResolvable;
  /**
  * small_multiples_limit_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_limit_configuration QuicksightTemplate#small_multiples_limit_configuration}
  */
  readonly smallMultiplesLimitConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration;
  /**
  * small_multiples_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_sort QuicksightTemplate#small_multiples_sort}
  */
  readonly smallMultiplesSort?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_items_limit: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct!.categoryItemsLimit),
    category_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortToTerraform, true)(struct!.categorySort),
    color_items_limit: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimitToTerraform(struct!.colorItemsLimit),
    color_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortToTerraform, true)(struct!.colorSort),
    small_multiples_limit_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationToTerraform(struct!.smallMultiplesLimitConfiguration),
    small_multiples_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortToTerraform, true)(struct!.smallMultiplesSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfiguration | undefined {
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
    if (this._colorItemsLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorItemsLimit = this._colorItemsLimit?.internalValue;
    }
    if (this._colorSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorSort = this._colorSort?.internalValue;
    }
    if (this._smallMultiplesLimitConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallMultiplesLimitConfiguration = this._smallMultiplesLimitConfiguration?.internalValue;
    }
    if (this._smallMultiplesSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallMultiplesSort = this._smallMultiplesSort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryItemsLimit.internalValue = undefined;
      this._categorySort.internalValue = undefined;
      this._colorItemsLimit.internalValue = undefined;
      this._colorSort.internalValue = undefined;
      this._smallMultiplesLimitConfiguration.internalValue = undefined;
      this._smallMultiplesSort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryItemsLimit.internalValue = value.categoryItemsLimit;
      this._categorySort.internalValue = value.categorySort;
      this._colorItemsLimit.internalValue = value.colorItemsLimit;
      this._colorSort.internalValue = value.colorSort;
      this._smallMultiplesLimitConfiguration.internalValue = value.smallMultiplesLimitConfiguration;
      this._smallMultiplesSort.internalValue = value.smallMultiplesSort;
    }
  }

  // category_items_limit - computed: false, optional: true, required: false
  private _categoryItemsLimit = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference(this, "category_items_limit");
  public get categoryItemsLimit() {
    return this._categoryItemsLimit;
  }
  public putCategoryItemsLimit(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategoryItemsLimit) {
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
  private _categorySort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySortList(this, "category_sort", false);
  public get categorySort() {
    return this._categorySort;
  }
  public putCategorySort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable) {
    this._categorySort.internalValue = value;
  }
  public resetCategorySort() {
    this._categorySort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySortInput() {
    return this._categorySort.internalValue;
  }

  // color_items_limit - computed: false, optional: true, required: false
  private _colorItemsLimit = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimitOutputReference(this, "color_items_limit");
  public get colorItemsLimit() {
    return this._colorItemsLimit;
  }
  public putColorItemsLimit(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorItemsLimit) {
    this._colorItemsLimit.internalValue = value;
  }
  public resetColorItemsLimit() {
    this._colorItemsLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorItemsLimitInput() {
    return this._colorItemsLimit.internalValue;
  }

  // color_sort - computed: false, optional: true, required: false
  private _colorSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSortList(this, "color_sort", false);
  public get colorSort() {
    return this._colorSort;
  }
  public putColorSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationColorSort[] | cdktf.IResolvable) {
    this._colorSort.internalValue = value;
  }
  public resetColorSort() {
    this._colorSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSortInput() {
    return this._colorSort.internalValue;
  }

  // small_multiples_limit_configuration - computed: false, optional: true, required: false
  private _smallMultiplesLimitConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference(this, "small_multiples_limit_configuration");
  public get smallMultiplesLimitConfiguration() {
    return this._smallMultiplesLimitConfiguration;
  }
  public putSmallMultiplesLimitConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration) {
    this._smallMultiplesLimitConfiguration.internalValue = value;
  }
  public resetSmallMultiplesLimitConfiguration() {
    this._smallMultiplesLimitConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallMultiplesLimitConfigurationInput() {
    return this._smallMultiplesLimitConfiguration.internalValue;
  }

  // small_multiples_sort - computed: false, optional: true, required: false
  private _smallMultiplesSort = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSortList(this, "small_multiples_sort", false);
  public get smallMultiplesSort() {
    return this._smallMultiplesSort;
  }
  public putSmallMultiplesSort(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable) {
    this._smallMultiplesSort.internalValue = value;
  }
  public resetSmallMultiplesSort() {
    this._smallMultiplesSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallMultiplesSortInput() {
    return this._smallMultiplesSort.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label QuicksightTemplate#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation QuicksightTemplate#aggregation}
  */
  readonly aggregation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    aggregation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct!.aggregation),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._aggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._visibility = undefined;
      this._aggregation.internalValue = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._visibility = value.visibility;
      this._aggregation.internalValue = value.aggregation;
      this._column.internalValue = value.column;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // aggregation - computed: false, optional: true, required: false
  private _aggregation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation) {
    this._aggregation.internalValue = value;
  }
  public resetAggregation() {
    this._aggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label QuicksightTemplate#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    label: cdktf.stringToTerraform(struct!.label),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._label = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._label = value.label;
      this._visibility = value.visibility;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields {
  /**
  * column_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_tooltip_item QuicksightTemplate#column_tooltip_item}
  */
  readonly columnTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem;
  /**
  * field_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_tooltip_item QuicksightTemplate#field_tooltip_item}
  */
  readonly fieldTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_tooltip_item: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct!.columnTooltipItem),
    field_tooltip_item: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct!.fieldTooltipItem),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnTooltipItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTooltipItem = this._columnTooltipItem?.internalValue;
    }
    if (this._fieldTooltipItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTooltipItem = this._fieldTooltipItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnTooltipItem.internalValue = undefined;
      this._fieldTooltipItem.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnTooltipItem.internalValue = value.columnTooltipItem;
      this._fieldTooltipItem.internalValue = value.fieldTooltipItem;
    }
  }

  // column_tooltip_item - computed: false, optional: true, required: false
  private _columnTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference(this, "column_tooltip_item");
  public get columnTooltipItem() {
    return this._columnTooltipItem;
  }
  public putColumnTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem) {
    this._columnTooltipItem.internalValue = value;
  }
  public resetColumnTooltipItem() {
    this._columnTooltipItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTooltipItemInput() {
    return this._columnTooltipItem.internalValue;
  }

  // field_tooltip_item - computed: false, optional: true, required: false
  private _fieldTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference(this, "field_tooltip_item");
  public get fieldTooltipItem() {
    return this._fieldTooltipItem;
  }
  public putFieldTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem) {
    this._fieldTooltipItem.internalValue = value;
  }
  public resetFieldTooltipItem() {
    this._fieldTooltipItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTooltipItemInput() {
    return this._fieldTooltipItem.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_visibility QuicksightTemplate#aggregation_visibility}
  */
  readonly aggregationVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tooltip_title_type QuicksightTemplate#tooltip_title_type}
  */
  readonly tooltipTitleType?: string;
  /**
  * tooltip_fields block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tooltip_fields QuicksightTemplate#tooltip_fields}
  */
  readonly tooltipFields?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_visibility: cdktf.stringToTerraform(struct!.aggregationVisibility),
    tooltip_title_type: cdktf.stringToTerraform(struct!.tooltipTitleType),
    tooltip_fields: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform, true)(struct!.tooltipFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationVisibility = this._aggregationVisibility;
    }
    if (this._tooltipTitleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltipTitleType = this._tooltipTitleType;
    }
    if (this._tooltipFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltipFields = this._tooltipFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationVisibility = undefined;
      this._tooltipTitleType = undefined;
      this._tooltipFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationVisibility = value.aggregationVisibility;
      this._tooltipTitleType = value.tooltipTitleType;
      this._tooltipFields.internalValue = value.tooltipFields;
    }
  }

  // aggregation_visibility - computed: false, optional: true, required: false
  private _aggregationVisibility?: string; 
  public get aggregationVisibility() {
    return this.getStringAttribute('aggregation_visibility');
  }
  public set aggregationVisibility(value: string) {
    this._aggregationVisibility = value;
  }
  public resetAggregationVisibility() {
    this._aggregationVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationVisibilityInput() {
    return this._aggregationVisibility;
  }

  // tooltip_title_type - computed: false, optional: true, required: false
  private _tooltipTitleType?: string; 
  public get tooltipTitleType() {
    return this.getStringAttribute('tooltip_title_type');
  }
  public set tooltipTitleType(value: string) {
    this._tooltipTitleType = value;
  }
  public resetTooltipTitleType() {
    this._tooltipTitleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipTitleTypeInput() {
    return this._tooltipTitleType;
  }

  // tooltip_fields - computed: false, optional: true, required: false
  private _tooltipFields = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList(this, "tooltip_fields", false);
  public get tooltipFields() {
    return this._tooltipFields;
  }
  public putTooltipFields(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable) {
    this._tooltipFields.internalValue = value;
  }
  public resetTooltipFields() {
    this._tooltipFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipFieldsInput() {
    return this._tooltipFields.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_tooltip_type QuicksightTemplate#selected_tooltip_type}
  */
  readonly selectedTooltipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tooltip_visibility QuicksightTemplate#tooltip_visibility}
  */
  readonly tooltipVisibility?: string;
  /**
  * field_base_tooltip block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_base_tooltip QuicksightTemplate#field_base_tooltip}
  */
  readonly fieldBaseTooltip?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltip;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_tooltip_type: cdktf.stringToTerraform(struct!.selectedTooltipType),
    tooltip_visibility: cdktf.stringToTerraform(struct!.tooltipVisibility),
    field_base_tooltip: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct!.fieldBaseTooltip),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedTooltipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedTooltipType = this._selectedTooltipType;
    }
    if (this._tooltipVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltipVisibility = this._tooltipVisibility;
    }
    if (this._fieldBaseTooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldBaseTooltip = this._fieldBaseTooltip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedTooltipType = undefined;
      this._tooltipVisibility = undefined;
      this._fieldBaseTooltip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedTooltipType = value.selectedTooltipType;
      this._tooltipVisibility = value.tooltipVisibility;
      this._fieldBaseTooltip.internalValue = value.fieldBaseTooltip;
    }
  }

  // selected_tooltip_type - computed: false, optional: true, required: false
  private _selectedTooltipType?: string; 
  public get selectedTooltipType() {
    return this.getStringAttribute('selected_tooltip_type');
  }
  public set selectedTooltipType(value: string) {
    this._selectedTooltipType = value;
  }
  public resetSelectedTooltipType() {
    this._selectedTooltipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedTooltipTypeInput() {
    return this._selectedTooltipType;
  }

  // tooltip_visibility - computed: false, optional: true, required: false
  private _tooltipVisibility?: string; 
  public get tooltipVisibility() {
    return this.getStringAttribute('tooltip_visibility');
  }
  public set tooltipVisibility(value: string) {
    this._tooltipVisibility = value;
  }
  public resetTooltipVisibility() {
    this._tooltipVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipVisibilityInput() {
    return this._tooltipVisibility;
  }

  // field_base_tooltip - computed: false, optional: true, required: false
  private _fieldBaseTooltip = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference(this, "field_base_tooltip");
  public get fieldBaseTooltip() {
    return this._fieldBaseTooltip;
  }
  public putFieldBaseTooltip(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipFieldBaseTooltip) {
    this._fieldBaseTooltip.internalValue = value;
  }
  public resetFieldBaseTooltip() {
    this._fieldBaseTooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldBaseTooltipInput() {
    return this._fieldBaseTooltip.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#missing_date_visibility QuicksightTemplate#missing_date_visibility}
  */
  readonly missingDateVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing_date_visibility: cdktf.stringToTerraform(struct!.missingDateVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missingDateVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDateVisibility = this._missingDateVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._missingDateVisibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._missingDateVisibility = value.missingDateVisibility;
    }
  }

  // missing_date_visibility - computed: false, optional: true, required: false
  private _missingDateVisibility?: string; 
  public get missingDateVisibility() {
    return this.getStringAttribute('missing_date_visibility');
  }
  public set missingDateVisibility(value: string) {
    this._missingDateVisibility = value;
  }
  public resetMissingDateVisibility() {
    this._missingDateVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDateVisibilityInput() {
    return this._missingDateVisibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDriven {
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDriven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDriven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum QuicksightTemplate#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum QuicksightTemplate#minimum}
  */
  readonly minimum?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMaxOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRange {
  /**
  * data_driven block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_driven QuicksightTemplate#data_driven}
  */
  readonly dataDriven?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDriven;
  /**
  * min_max block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#min_max QuicksightTemplate#min_max}
  */
  readonly minMax?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMax;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_driven: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct!.dataDriven),
    min_max: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct!.minMax),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataDriven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDriven = this._dataDriven?.internalValue;
    }
    if (this._minMax?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMax = this._minMax?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataDriven.internalValue = undefined;
      this._minMax.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataDriven.internalValue = value.dataDriven;
      this._minMax.internalValue = value.minMax;
    }
  }

  // data_driven - computed: false, optional: true, required: false
  private _dataDriven = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference(this, "data_driven");
  public get dataDriven() {
    return this._dataDriven;
  }
  public putDataDriven(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeDataDriven) {
    this._dataDriven.internalValue = value;
  }
  public resetDataDriven() {
    this._dataDriven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDrivenInput() {
    return this._dataDriven.internalValue;
  }

  // min_max - computed: false, optional: true, required: false
  private _minMax = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMaxOutputReference(this, "min_max");
  public get minMax() {
    return this._minMax;
  }
  public putMinMax(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeMinMax) {
    this._minMax.internalValue = value;
  }
  public resetMinMax() {
    this._minMax.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMaxInput() {
    return this._minMax.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_count QuicksightTemplate#step_count}
  */
  readonly stepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinearOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_count: cdktf.numberToTerraform(struct!.stepCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinear | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepCount = this._stepCount;
    }
    if (this._stepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepSize = this._stepSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinear | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stepCount = undefined;
      this._stepSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stepCount = value.stepCount;
      this._stepSize = value.stepSize;
    }
  }

  // step_count - computed: false, optional: true, required: false
  private _stepCount?: number; 
  public get stepCount() {
    return this.getNumberAttribute('step_count');
  }
  public set stepCount(value: number) {
    this._stepCount = value;
  }
  public resetStepCount() {
    this._stepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepCountInput() {
    return this._stepCount;
  }

  // step_size - computed: false, optional: true, required: false
  private _stepSize?: number; 
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }
  public set stepSize(value: number) {
    this._stepSize = value;
  }
  public resetStepSize() {
    this._stepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepSizeInput() {
    return this._stepSize;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#base QuicksightTemplate#base}
  */
  readonly base?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base = value.base;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScale {
  /**
  * linear block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#linear QuicksightTemplate#linear}
  */
  readonly linear?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinear;
  /**
  * logarithmic block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#logarithmic QuicksightTemplate#logarithmic}
  */
  readonly logarithmic?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmic;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linear: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct!.linear),
    logarithmic: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct!.logarithmic),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linear?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linear = this._linear?.internalValue;
    }
    if (this._logarithmic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logarithmic = this._logarithmic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linear.internalValue = undefined;
      this._logarithmic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linear.internalValue = value.linear;
      this._logarithmic.internalValue = value.logarithmic;
    }
  }

  // linear - computed: false, optional: true, required: false
  private _linear = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinearOutputReference(this, "linear");
  public get linear() {
    return this._linear;
  }
  public putLinear(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLinear) {
    this._linear.internalValue = value;
  }
  public resetLinear() {
    this._linear.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearInput() {
    return this._linear.internalValue;
  }

  // logarithmic - computed: false, optional: true, required: false
  private _logarithmic = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference(this, "logarithmic");
  public get logarithmic() {
    return this._logarithmic;
  }
  public putLogarithmic(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleLogarithmic) {
    this._logarithmic.internalValue = value;
  }
  public resetLogarithmic() {
    this._logarithmic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logarithmicInput() {
    return this._logarithmic.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptions {
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range QuicksightTemplate#range}
  */
  readonly range?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRange;
  /**
  * scale block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scale QuicksightTemplate#scale}
  */
  readonly scale?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScale;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeToTerraform(struct!.range),
    scale: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleToTerraform(struct!.scale),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._scale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._range.internalValue = undefined;
      this._scale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._range.internalValue = value.range;
      this._scale.internalValue = value.scale;
    }
  }

  // range - computed: false, optional: true, required: false
  private _range = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // scale - computed: false, optional: true, required: false
  private _scale = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsScale) {
    this._scale.internalValue = value;
  }
  public resetScale() {
    this._scale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptions {
  /**
  * date_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_axis_options QuicksightTemplate#date_axis_options}
  */
  readonly dateAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptions;
  /**
  * numeric_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_axis_options QuicksightTemplate#numeric_axis_options}
  */
  readonly numericAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_axis_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptionsToTerraform(struct!.dateAxisOptions),
    numeric_axis_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsToTerraform(struct!.numericAxisOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateAxisOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateAxisOptions = this._dateAxisOptions?.internalValue;
    }
    if (this._numericAxisOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericAxisOptions = this._numericAxisOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateAxisOptions.internalValue = undefined;
      this._numericAxisOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateAxisOptions.internalValue = value.dateAxisOptions;
      this._numericAxisOptions.internalValue = value.numericAxisOptions;
    }
  }

  // date_axis_options - computed: false, optional: true, required: false
  private _dateAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptionsOutputReference(this, "date_axis_options");
  public get dateAxisOptions() {
    return this._dateAxisOptions;
  }
  public putDateAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsDateAxisOptions) {
    this._dateAxisOptions.internalValue = value;
  }
  public resetDateAxisOptions() {
    this._dateAxisOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateAxisOptionsInput() {
    return this._dateAxisOptions.internalValue;
  }

  // numeric_axis_options - computed: false, optional: true, required: false
  private _numericAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptionsOutputReference(this, "numeric_axis_options");
  public get numericAxisOptions() {
    return this._numericAxisOptions;
  }
  public putNumericAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsNumericAxisOptions) {
    this._numericAxisOptions.internalValue = value;
  }
  public resetNumericAxisOptions() {
    this._numericAxisOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericAxisOptionsInput() {
    return this._numericAxisOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#from QuicksightTemplate#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#to QuicksightTemplate#to}
  */
  readonly to?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRange {
  /**
  * percent_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percent_range QuicksightTemplate#percent_range}
  */
  readonly percentRange?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRange;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_range: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRangeToTerraform(struct!.percentRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentRange = this._percentRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentRange.internalValue = value.percentRange;
    }
  }

  // percent_range - computed: false, optional: true, required: false
  private _percentRange = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRangeOutputReference(this, "percent_range");
  public get percentRange() {
    return this._percentRange;
  }
  public putPercentRange(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangePercentRange) {
    this._percentRange.internalValue = value;
  }
  public resetPercentRange() {
    this._percentRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentRangeInput() {
    return this._percentRange.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * visible_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visible_range QuicksightTemplate#visible_range}
  */
  readonly visibleRange?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRange;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    visible_range: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangeToTerraform(struct!.visibleRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._visibleRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleRange = this._visibleRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
      this._visibleRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
      this._visibleRange.internalValue = value.visibleRange;
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

  // visible_range - computed: false, optional: true, required: false
  private _visibleRange = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRangeOutputReference(this, "visible_range");
  public get visibleRange() {
    return this._visibleRange;
  }
  public putVisibleRange(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsVisibleRange) {
    this._visibleRange.internalValue = value;
  }
  public resetVisibleRange() {
    this._visibleRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleRangeInput() {
    return this._visibleRange.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
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

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rotation_angle QuicksightTemplate#rotation_angle}
  */
  readonly rotationAngle?: number;
  /**
  * label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_options QuicksightTemplate#label_options}
  */
  readonly labelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rotation_angle: cdktf.numberToTerraform(struct!.rotationAngle),
    label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsToTerraform(struct!.labelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rotationAngle !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationAngle = this._rotationAngle;
    }
    if (this._labelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelOptions = this._labelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rotationAngle = undefined;
      this._labelOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rotationAngle = value.rotationAngle;
      this._labelOptions.internalValue = value.labelOptions;
    }
  }

  // rotation_angle - computed: false, optional: true, required: false
  private _rotationAngle?: number; 
  public get rotationAngle() {
    return this.getNumberAttribute('rotation_angle');
  }
  public set rotationAngle(value: number) {
    this._rotationAngle = value;
  }
  public resetRotationAngle() {
    this._rotationAngle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationAngleInput() {
    return this._rotationAngle;
  }

  // label_options - computed: false, optional: true, required: false
  private _labelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptionsOutputReference(this, "label_options");
  public get labelOptions() {
    return this._labelOptions;
  }
  public putLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsLabelOptions) {
    this._labelOptions.internalValue = value;
  }
  public resetLabelOptions() {
    this._labelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelOptionsInput() {
    return this._labelOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#axis_line_visibility QuicksightTemplate#axis_line_visibility}
  */
  readonly axisLineVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#axis_offset QuicksightTemplate#axis_offset}
  */
  readonly axisOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#grid_line_visibility QuicksightTemplate#grid_line_visibility}
  */
  readonly gridLineVisibility?: string;
  /**
  * data_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_options QuicksightTemplate#data_options}
  */
  readonly dataOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptions;
  /**
  * scrollbar_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scrollbar_options QuicksightTemplate#scrollbar_options}
  */
  readonly scrollbarOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptions;
  /**
  * tick_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tick_label_options QuicksightTemplate#tick_label_options}
  */
  readonly tickLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_line_visibility: cdktf.stringToTerraform(struct!.axisLineVisibility),
    axis_offset: cdktf.stringToTerraform(struct!.axisOffset),
    grid_line_visibility: cdktf.stringToTerraform(struct!.gridLineVisibility),
    data_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsToTerraform(struct!.dataOptions),
    scrollbar_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsToTerraform(struct!.scrollbarOptions),
    tick_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsToTerraform(struct!.tickLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisLineVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLineVisibility = this._axisLineVisibility;
    }
    if (this._axisOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisOffset = this._axisOffset;
    }
    if (this._gridLineVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridLineVisibility = this._gridLineVisibility;
    }
    if (this._dataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataOptions = this._dataOptions?.internalValue;
    }
    if (this._scrollbarOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrollbarOptions = this._scrollbarOptions?.internalValue;
    }
    if (this._tickLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickLabelOptions = this._tickLabelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axisLineVisibility = undefined;
      this._axisOffset = undefined;
      this._gridLineVisibility = undefined;
      this._dataOptions.internalValue = undefined;
      this._scrollbarOptions.internalValue = undefined;
      this._tickLabelOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axisLineVisibility = value.axisLineVisibility;
      this._axisOffset = value.axisOffset;
      this._gridLineVisibility = value.gridLineVisibility;
      this._dataOptions.internalValue = value.dataOptions;
      this._scrollbarOptions.internalValue = value.scrollbarOptions;
      this._tickLabelOptions.internalValue = value.tickLabelOptions;
    }
  }

  // axis_line_visibility - computed: false, optional: true, required: false
  private _axisLineVisibility?: string; 
  public get axisLineVisibility() {
    return this.getStringAttribute('axis_line_visibility');
  }
  public set axisLineVisibility(value: string) {
    this._axisLineVisibility = value;
  }
  public resetAxisLineVisibility() {
    this._axisLineVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLineVisibilityInput() {
    return this._axisLineVisibility;
  }

  // axis_offset - computed: false, optional: true, required: false
  private _axisOffset?: string; 
  public get axisOffset() {
    return this.getStringAttribute('axis_offset');
  }
  public set axisOffset(value: string) {
    this._axisOffset = value;
  }
  public resetAxisOffset() {
    this._axisOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisOffsetInput() {
    return this._axisOffset;
  }

  // grid_line_visibility - computed: false, optional: true, required: false
  private _gridLineVisibility?: string; 
  public get gridLineVisibility() {
    return this.getStringAttribute('grid_line_visibility');
  }
  public set gridLineVisibility(value: string) {
    this._gridLineVisibility = value;
  }
  public resetGridLineVisibility() {
    this._gridLineVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridLineVisibilityInput() {
    return this._gridLineVisibility;
  }

  // data_options - computed: false, optional: true, required: false
  private _dataOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptionsOutputReference(this, "data_options");
  public get dataOptions() {
    return this._dataOptions;
  }
  public putDataOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisDataOptions) {
    this._dataOptions.internalValue = value;
  }
  public resetDataOptions() {
    this._dataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOptionsInput() {
    return this._dataOptions.internalValue;
  }

  // scrollbar_options - computed: false, optional: true, required: false
  private _scrollbarOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptionsOutputReference(this, "scrollbar_options");
  public get scrollbarOptions() {
    return this._scrollbarOptions;
  }
  public putScrollbarOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisScrollbarOptions) {
    this._scrollbarOptions.internalValue = value;
  }
  public resetScrollbarOptions() {
    this._scrollbarOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollbarOptionsInput() {
    return this._scrollbarOptions.internalValue;
  }

  // tick_label_options - computed: false, optional: true, required: false
  private _tickLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptionsOutputReference(this, "tick_label_options");
  public get tickLabelOptions() {
    return this._tickLabelOptions;
  }
  public putTickLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisTickLabelOptions) {
    this._tickLabelOptions.internalValue = value;
  }
  public resetTickLabelOptions() {
    this._tickLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickLabelOptionsInput() {
    return this._tickLabelOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyTo | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyTo | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsAxisLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_value QuicksightTemplate#field_value}
  */
  readonly fieldValue: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElement | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._fieldValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._fieldValue = value.fieldValue;
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

  // field_value - computed: false, optional: false, required: true
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity?: string;
  /**
  * element block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element QuicksightTemplate#element}
  */
  readonly element: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElement;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    element: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct!.element),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._element?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._timeGranularity = undefined;
      this._element.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._timeGranularity = value.timeGranularity;
      this._element.internalValue = value.element;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // time_granularity - computed: false, optional: true, required: false
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  public resetTimeGranularity() {
    this._timeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // element - computed: false, optional: false, required: true
  private _element = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapElement) {
    this._element.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPalette {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_color QuicksightTemplate#chart_color}
  */
  readonly chartColor?: string;
  /**
  * color_map block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_map QuicksightTemplate#color_map}
  */
  readonly colorMap?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_color: cdktf.stringToTerraform(struct!.chartColor),
    color_map: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapToTerraform, true)(struct!.colorMap),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartColor = this._chartColor;
    }
    if (this._colorMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorMap = this._colorMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chartColor = undefined;
      this._colorMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chartColor = value.chartColor;
      this._colorMap.internalValue = value.colorMap;
    }
  }

  // chart_color - computed: false, optional: true, required: false
  private _chartColor?: string; 
  public get chartColor() {
    return this.getStringAttribute('chart_color');
  }
  public set chartColor(value: string) {
    this._chartColor = value;
  }
  public resetChartColor() {
    this._chartColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartColorInput() {
    return this._chartColor;
  }

  // color_map - computed: false, optional: true, required: false
  private _colorMap = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMapList(this, "color_map", false);
  public get colorMap() {
    return this._colorMap;
  }
  public putColorMap(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable) {
    this._colorMap.internalValue = value;
  }
  public resetColorMap() {
    this._colorMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorMapInput() {
    return this._colorMap.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bars_arrangement QuicksightTemplate#bars_arrangement}
  */
  readonly barsArrangement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#orientation QuicksightTemplate#orientation}
  */
  readonly orientation?: string;
  /**
  * category_axis block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_axis QuicksightTemplate#category_axis}
  */
  readonly categoryAxis?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis;
  /**
  * category_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_label_options QuicksightTemplate#category_label_options}
  */
  readonly categoryLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions;
  /**
  * color_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_label_options QuicksightTemplate#color_label_options}
  */
  readonly colorLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions;
  /**
  * contribution_analysis_defaults block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#contribution_analysis_defaults QuicksightTemplate#contribution_analysis_defaults}
  */
  readonly contributionAnalysisDefaults?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults[] | cdktf.IResolvable;
  /**
  * data_labels block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_labels QuicksightTemplate#data_labels}
  */
  readonly dataLabels?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabels;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWells;
  /**
  * legend block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#legend QuicksightTemplate#legend}
  */
  readonly legend?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegend;
  /**
  * reference_lines block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#reference_lines QuicksightTemplate#reference_lines}
  */
  readonly referenceLines?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines[] | cdktf.IResolvable;
  /**
  * small_multiples_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_options QuicksightTemplate#small_multiples_options}
  */
  readonly smallMultiplesOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptions;
  /**
  * sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_configuration QuicksightTemplate#sort_configuration}
  */
  readonly sortConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfiguration;
  /**
  * tooltip block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tooltip QuicksightTemplate#tooltip}
  */
  readonly tooltip?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltip;
  /**
  * value_axis block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_axis QuicksightTemplate#value_axis}
  */
  readonly valueAxis?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxis;
  /**
  * value_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_label_options QuicksightTemplate#value_label_options}
  */
  readonly valueLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptions;
  /**
  * visual_palette block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_palette QuicksightTemplate#visual_palette}
  */
  readonly visualPalette?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPalette;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bars_arrangement: cdktf.stringToTerraform(struct!.barsArrangement),
    orientation: cdktf.stringToTerraform(struct!.orientation),
    category_axis: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisToTerraform(struct!.categoryAxis),
    category_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsToTerraform(struct!.categoryLabelOptions),
    color_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsToTerraform(struct!.colorLabelOptions),
    contribution_analysis_defaults: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsToTerraform, true)(struct!.contributionAnalysisDefaults),
    data_labels: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsToTerraform(struct!.dataLabels),
    field_wells: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    legend: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendToTerraform(struct!.legend),
    reference_lines: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesToTerraform, true)(struct!.referenceLines),
    small_multiples_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsToTerraform(struct!.smallMultiplesOptions),
    sort_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationToTerraform(struct!.sortConfiguration),
    tooltip: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipToTerraform(struct!.tooltip),
    value_axis: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisToTerraform(struct!.valueAxis),
    value_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsToTerraform(struct!.valueLabelOptions),
    visual_palette: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteToTerraform(struct!.visualPalette),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._barsArrangement !== undefined) {
      hasAnyValues = true;
      internalValueResult.barsArrangement = this._barsArrangement;
    }
    if (this._orientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.orientation = this._orientation;
    }
    if (this._categoryAxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryAxis = this._categoryAxis?.internalValue;
    }
    if (this._categoryLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryLabelOptions = this._categoryLabelOptions?.internalValue;
    }
    if (this._colorLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorLabelOptions = this._colorLabelOptions?.internalValue;
    }
    if (this._contributionAnalysisDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributionAnalysisDefaults = this._contributionAnalysisDefaults?.internalValue;
    }
    if (this._dataLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabels = this._dataLabels?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._legend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend?.internalValue;
    }
    if (this._referenceLines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceLines = this._referenceLines?.internalValue;
    }
    if (this._smallMultiplesOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallMultiplesOptions = this._smallMultiplesOptions?.internalValue;
    }
    if (this._sortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortConfiguration = this._sortConfiguration?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._valueAxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueAxis = this._valueAxis?.internalValue;
    }
    if (this._valueLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueLabelOptions = this._valueLabelOptions?.internalValue;
    }
    if (this._visualPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualPalette = this._visualPalette?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._barsArrangement = undefined;
      this._orientation = undefined;
      this._categoryAxis.internalValue = undefined;
      this._categoryLabelOptions.internalValue = undefined;
      this._colorLabelOptions.internalValue = undefined;
      this._contributionAnalysisDefaults.internalValue = undefined;
      this._dataLabels.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._legend.internalValue = undefined;
      this._referenceLines.internalValue = undefined;
      this._smallMultiplesOptions.internalValue = undefined;
      this._sortConfiguration.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._valueAxis.internalValue = undefined;
      this._valueLabelOptions.internalValue = undefined;
      this._visualPalette.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._barsArrangement = value.barsArrangement;
      this._orientation = value.orientation;
      this._categoryAxis.internalValue = value.categoryAxis;
      this._categoryLabelOptions.internalValue = value.categoryLabelOptions;
      this._colorLabelOptions.internalValue = value.colorLabelOptions;
      this._contributionAnalysisDefaults.internalValue = value.contributionAnalysisDefaults;
      this._dataLabels.internalValue = value.dataLabels;
      this._fieldWells.internalValue = value.fieldWells;
      this._legend.internalValue = value.legend;
      this._referenceLines.internalValue = value.referenceLines;
      this._smallMultiplesOptions.internalValue = value.smallMultiplesOptions;
      this._sortConfiguration.internalValue = value.sortConfiguration;
      this._tooltip.internalValue = value.tooltip;
      this._valueAxis.internalValue = value.valueAxis;
      this._valueLabelOptions.internalValue = value.valueLabelOptions;
      this._visualPalette.internalValue = value.visualPalette;
    }
  }

  // bars_arrangement - computed: true, optional: true, required: false
  private _barsArrangement?: string; 
  public get barsArrangement() {
    return this.getStringAttribute('bars_arrangement');
  }
  public set barsArrangement(value: string) {
    this._barsArrangement = value;
  }
  public resetBarsArrangement() {
    this._barsArrangement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barsArrangementInput() {
    return this._barsArrangement;
  }

  // orientation - computed: true, optional: true, required: false
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

  // category_axis - computed: false, optional: true, required: false
  private _categoryAxis = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisOutputReference(this, "category_axis");
  public get categoryAxis() {
    return this._categoryAxis;
  }
  public putCategoryAxis(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis) {
    this._categoryAxis.internalValue = value;
  }
  public resetCategoryAxis() {
    this._categoryAxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryAxisInput() {
    return this._categoryAxis.internalValue;
  }

  // category_label_options - computed: false, optional: true, required: false
  private _categoryLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsOutputReference(this, "category_label_options");
  public get categoryLabelOptions() {
    return this._categoryLabelOptions;
  }
  public putCategoryLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions) {
    this._categoryLabelOptions.internalValue = value;
  }
  public resetCategoryLabelOptions() {
    this._categoryLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryLabelOptionsInput() {
    return this._categoryLabelOptions.internalValue;
  }

  // color_label_options - computed: false, optional: true, required: false
  private _colorLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsOutputReference(this, "color_label_options");
  public get colorLabelOptions() {
    return this._colorLabelOptions;
  }
  public putColorLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions) {
    this._colorLabelOptions.internalValue = value;
  }
  public resetColorLabelOptions() {
    this._colorLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorLabelOptionsInput() {
    return this._colorLabelOptions.internalValue;
  }

  // contribution_analysis_defaults - computed: false, optional: true, required: false
  private _contributionAnalysisDefaults = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsList(this, "contribution_analysis_defaults", false);
  public get contributionAnalysisDefaults() {
    return this._contributionAnalysisDefaults;
  }
  public putContributionAnalysisDefaults(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults[] | cdktf.IResolvable) {
    this._contributionAnalysisDefaults.internalValue = value;
  }
  public resetContributionAnalysisDefaults() {
    this._contributionAnalysisDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contributionAnalysisDefaultsInput() {
    return this._contributionAnalysisDefaults.internalValue;
  }

  // data_labels - computed: false, optional: true, required: false
  private _dataLabels = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsOutputReference(this, "data_labels");
  public get dataLabels() {
    return this._dataLabels;
  }
  public putDataLabels(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabels) {
    this._dataLabels.internalValue = value;
  }
  public resetDataLabels() {
    this._dataLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLabelsInput() {
    return this._dataLabels.internalValue;
  }

  // field_wells - computed: false, optional: true, required: false
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationFieldWells) {
    this._fieldWells.internalValue = value;
  }
  public resetFieldWells() {
    this._fieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldWellsInput() {
    return this._fieldWells.internalValue;
  }

  // legend - computed: false, optional: true, required: false
  private _legend = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }
  public putLegend(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationLegend) {
    this._legend.internalValue = value;
  }
  public resetLegend() {
    this._legend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend.internalValue;
  }

  // reference_lines - computed: false, optional: true, required: false
  private _referenceLines = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLinesList(this, "reference_lines", false);
  public get referenceLines() {
    return this._referenceLines;
  }
  public putReferenceLines(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationReferenceLines[] | cdktf.IResolvable) {
    this._referenceLines.internalValue = value;
  }
  public resetReferenceLines() {
    this._referenceLines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceLinesInput() {
    return this._referenceLines.internalValue;
  }

  // small_multiples_options - computed: false, optional: true, required: false
  private _smallMultiplesOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptionsOutputReference(this, "small_multiples_options");
  public get smallMultiplesOptions() {
    return this._smallMultiplesOptions;
  }
  public putSmallMultiplesOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSmallMultiplesOptions) {
    this._smallMultiplesOptions.internalValue = value;
  }
  public resetSmallMultiplesOptions() {
    this._smallMultiplesOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallMultiplesOptionsInput() {
    return this._smallMultiplesOptions.internalValue;
  }

  // sort_configuration - computed: false, optional: true, required: false
  private _sortConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfigurationOutputReference(this, "sort_configuration");
  public get sortConfiguration() {
    return this._sortConfiguration;
  }
  public putSortConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationSortConfiguration) {
    this._sortConfiguration.internalValue = value;
  }
  public resetSortConfiguration() {
    this._sortConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortConfigurationInput() {
    return this._sortConfiguration.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // value_axis - computed: false, optional: true, required: false
  private _valueAxis = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxisOutputReference(this, "value_axis");
  public get valueAxis() {
    return this._valueAxis;
  }
  public putValueAxis(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueAxis) {
    this._valueAxis.internalValue = value;
  }
  public resetValueAxis() {
    this._valueAxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueAxisInput() {
    return this._valueAxis.internalValue;
  }

  // value_label_options - computed: false, optional: true, required: false
  private _valueLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptionsOutputReference(this, "value_label_options");
  public get valueLabelOptions() {
    return this._valueLabelOptions;
  }
  public putValueLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationValueLabelOptions) {
    this._valueLabelOptions.internalValue = value;
  }
  public resetValueLabelOptions() {
    this._valueLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueLabelOptionsInput() {
    return this._valueLabelOptions.internalValue;
  }

  // visual_palette - computed: false, optional: true, required: false
  private _visualPalette = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPaletteOutputReference(this, "visual_palette");
  public get visualPalette() {
    return this._visualPalette;
  }
  public putVisualPalette(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationVisualPalette) {
    this._visualPalette.internalValue = value;
  }
  public resetVisualPalette() {
    this._visualPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualPaletteInput() {
    return this._visualPalette.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
