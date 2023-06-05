/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration,
quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumn,
quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumnToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumnOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionField,
quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionField,
quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategory,
quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategoryToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategoryList } from './structs16400'
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfiguration | undefined) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId?: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    column: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._hierarchyId = undefined;
      this._column.internalValue = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._hierarchyId = value.hierarchyId;
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

  // hierarchy_id - computed: false, optional: true, required: false
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  public resetHierarchyId() {
    this._hierarchyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiples {
  /**
  * categorical_dimension_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_dimension_field QuicksightTemplate#categorical_dimension_field}
  */
  readonly categoricalDimensionField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionField;
  /**
  * date_dimension_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_dimension_field QuicksightTemplate#date_dimension_field}
  */
  readonly dateDimensionField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionField;
  /**
  * numerical_dimension_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_dimension_field QuicksightTemplate#numerical_dimension_field}
  */
  readonly numericalDimensionField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionField;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_dimension_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionFieldToTerraform(struct!.categoricalDimensionField),
    date_dimension_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionFieldToTerraform(struct!.dateDimensionField),
    numerical_dimension_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldToTerraform(struct!.numericalDimensionField),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoricalDimensionField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalDimensionField = this._categoricalDimensionField?.internalValue;
    }
    if (this._dateDimensionField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateDimensionField = this._dateDimensionField?.internalValue;
    }
    if (this._numericalDimensionField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericalDimensionField = this._numericalDimensionField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoricalDimensionField.internalValue = undefined;
      this._dateDimensionField.internalValue = undefined;
      this._numericalDimensionField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoricalDimensionField.internalValue = value.categoricalDimensionField;
      this._dateDimensionField.internalValue = value.dateDimensionField;
      this._numericalDimensionField.internalValue = value.numericalDimensionField;
    }
  }

  // categorical_dimension_field - computed: false, optional: true, required: false
  private _categoricalDimensionField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionFieldOutputReference(this, "categorical_dimension_field");
  public get categoricalDimensionField() {
    return this._categoricalDimensionField;
  }
  public putCategoricalDimensionField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesCategoricalDimensionField) {
    this._categoricalDimensionField.internalValue = value;
  }
  public resetCategoricalDimensionField() {
    this._categoricalDimensionField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalDimensionFieldInput() {
    return this._categoricalDimensionField.internalValue;
  }

  // date_dimension_field - computed: false, optional: true, required: false
  private _dateDimensionField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionFieldOutputReference(this, "date_dimension_field");
  public get dateDimensionField() {
    return this._dateDimensionField;
  }
  public putDateDimensionField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesDateDimensionField) {
    this._dateDimensionField.internalValue = value;
  }
  public resetDateDimensionField() {
    this._dateDimensionField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateDimensionFieldInput() {
    return this._dateDimensionField.internalValue;
  }

  // numerical_dimension_field - computed: false, optional: true, required: false
  private _numericalDimensionField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionFieldOutputReference(this, "numerical_dimension_field");
  public get numericalDimensionField() {
    return this._numericalDimensionField;
  }
  public putNumericalDimensionField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesNumericalDimensionField) {
    this._numericalDimensionField.internalValue = value;
  }
  public resetNumericalDimensionField() {
    this._numericalDimensionField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalDimensionFieldInput() {
    return this._numericalDimensionField.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureField | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration {
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._numericFormatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._numericFormatConfiguration.internalValue = value.numericFormatConfiguration;
    }
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // numeric_format_configuration - computed: false, optional: true, required: false
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_function: cdktf.stringToTerraform(struct!.aggregationFunction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationFunction = undefined;
      this._fieldId = undefined;
      this._column.internalValue = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationFunction = value.aggregationFunction;
      this._fieldId = value.fieldId;
      this._column.internalValue = value.column;
      this._formatConfiguration.internalValue = value.formatConfiguration;
    }
  }

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction?: string; 
  public get aggregationFunction() {
    return this.getStringAttribute('aggregation_function');
  }
  public set aggregationFunction(value: string) {
    this._aggregationFunction = value;
  }
  public resetAggregationFunction() {
    this._aggregationFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction;
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format QuicksightTemplate#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format: cdktf.stringToTerraform(struct!.dateTimeFormat),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._nullValueFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueFormatConfiguration = this._nullValueFormatConfiguration?.internalValue;
    }
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeFormat = undefined;
      this._nullValueFormatConfiguration.internalValue = undefined;
      this._numericFormatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeFormat = value.dateTimeFormat;
      this._nullValueFormatConfiguration.internalValue = value.nullValueFormatConfiguration;
      this._numericFormatConfiguration.internalValue = value.numericFormatConfiguration;
    }
  }

  // date_time_format - computed: false, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // null_value_format_configuration - computed: false, optional: true, required: false
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNullValueFormatConfiguration) {
    this._nullValueFormatConfiguration.internalValue = value;
  }
  public resetNullValueFormatConfiguration() {
    this._nullValueFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueFormatConfigurationInput() {
    return this._nullValueFormatConfiguration.internalValue;
  }

  // numeric_format_configuration - computed: false, optional: true, required: false
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_function: cdktf.stringToTerraform(struct!.aggregationFunction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationFunction = undefined;
      this._fieldId = undefined;
      this._column.internalValue = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationFunction = value.aggregationFunction;
      this._fieldId = value.fieldId;
      this._column.internalValue = value.column;
      this._formatConfiguration.internalValue = value.formatConfiguration;
    }
  }

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction?: string; 
  public get aggregationFunction() {
    return this.getStringAttribute('aggregation_function');
  }
  public set aggregationFunction(value: string) {
    this._aggregationFunction = value;
  }
  public resetAggregationFunction() {
    this._aggregationFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction;
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureField | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues {
  /**
  * calculated_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculated_measure_field QuicksightTemplate#calculated_measure_field}
  */
  readonly calculatedMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureField;
  /**
  * categorical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_measure_field QuicksightTemplate#categorical_measure_field}
  */
  readonly categoricalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureField;
  /**
  * date_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_measure_field QuicksightTemplate#date_measure_field}
  */
  readonly dateMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureField;
  /**
  * numerical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_measure_field QuicksightTemplate#numerical_measure_field}
  */
  readonly numericalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureField;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculated_measure_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform(struct!.calculatedMeasureField),
    categorical_measure_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform(struct!.categoricalMeasureField),
    date_measure_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct!.dateMeasureField),
    numerical_measure_field: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct!.numericalMeasureField),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues | cdktf.IResolvable | undefined) {
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
  private _calculatedMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference(this, "calculated_measure_field");
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }
  public putCalculatedMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCalculatedMeasureField) {
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
  private _categoricalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference(this, "categorical_measure_field");
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }
  public putCategoricalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesCategoricalMeasureField) {
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
  private _dateMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureFieldOutputReference(this, "date_measure_field");
  public get dateMeasureField() {
    return this._dateMeasureField;
  }
  public putDateMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesDateMeasureField) {
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
  private _numericalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference(this, "numerical_measure_field");
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
  public putNumericalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesNumericalMeasureField) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWells {
  /**
  * category block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category QuicksightTemplate#category}
  */
  readonly category?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategory[] | cdktf.IResolvable;
  /**
  * small_multiples block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples QuicksightTemplate#small_multiples}
  */
  readonly smallMultiples?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiples;
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategoryToTerraform, true)(struct!.category),
    small_multiples: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesToTerraform(struct!.smallMultiples),
    values: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesToTerraform, true)(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category.internalValue = undefined;
      this._smallMultiples.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category.internalValue = value.category;
      this._smallMultiples.internalValue = value.smallMultiples;
      this._values.internalValue = value.values;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // small_multiples - computed: false, optional: true, required: false
  private _smallMultiples = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiplesOutputReference(this, "small_multiples");
  public get smallMultiples() {
    return this._smallMultiples;
  }
  public putSmallMultiples(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsSmallMultiples) {
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
  private _values = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsValues[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWells {
  /**
  * pie_chart_aggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#pie_chart_aggregated_field_wells QuicksightTemplate#pie_chart_aggregated_field_wells}
  */
  readonly pieChartAggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWells;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pie_chart_aggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsToTerraform(struct!.pieChartAggregatedFieldWells),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pieChartAggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pieChartAggregatedFieldWells = this._pieChartAggregatedFieldWells?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pieChartAggregatedFieldWells.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pieChartAggregatedFieldWells.internalValue = value.pieChartAggregatedFieldWells;
    }
  }

  // pie_chart_aggregated_field_wells - computed: false, optional: true, required: false
  private _pieChartAggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWellsOutputReference(this, "pie_chart_aggregated_field_wells");
  public get pieChartAggregatedFieldWells() {
    return this._pieChartAggregatedFieldWells;
  }
  public putPieChartAggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationFieldWellsPieChartAggregatedFieldWells) {
    this._pieChartAggregatedFieldWells.internalValue = value;
  }
  public resetPieChartAggregatedFieldWells() {
    this._pieChartAggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pieChartAggregatedFieldWellsInput() {
    return this._pieChartAggregatedFieldWells.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitle {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitle | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegend {
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
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    position: cdktf.stringToTerraform(struct!.position),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    width: cdktf.stringToTerraform(struct!.width),
    title: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegend | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegend | undefined) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationLegendTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    horizontal_text_alignment: cdktf.stringToTerraform(struct!.horizontalTextAlignment),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration {
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
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration): any {
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
    title: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration | undefined) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptions {
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
  readonly panelConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_visible_columns: cdktf.numberToTerraform(struct!.maxVisibleColumns),
    max_visible_rows: cdktf.numberToTerraform(struct!.maxVisibleRows),
    panel_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationToTerraform(struct!.panelConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptions | undefined) {
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
  private _panelConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference(this, "panel_configuration");
  public get panelConfiguration() {
    return this._panelConfiguration;
  }
  public putPanelConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfiguration {
  /**
  * category_items_limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_items_limit QuicksightTemplate#category_items_limit}
  */
  readonly categoryItemsLimit?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimit;
  /**
  * category_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_sort QuicksightTemplate#category_sort}
  */
  readonly categorySort?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable;
  /**
  * small_multiples_limit_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_limit_configuration QuicksightTemplate#small_multiples_limit_configuration}
  */
  readonly smallMultiplesLimitConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration;
  /**
  * small_multiples_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_sort QuicksightTemplate#small_multiples_sort}
  */
  readonly smallMultiplesSort?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_items_limit: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct!.categoryItemsLimit),
    category_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortToTerraform, true)(struct!.categorySort),
    small_multiples_limit_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationToTerraform(struct!.smallMultiplesLimitConfiguration),
    small_multiples_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortToTerraform, true)(struct!.smallMultiplesSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryItemsLimit.internalValue = undefined;
      this._categorySort.internalValue = undefined;
      this._smallMultiplesLimitConfiguration.internalValue = undefined;
      this._smallMultiplesSort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryItemsLimit.internalValue = value.categoryItemsLimit;
      this._categorySort.internalValue = value.categorySort;
      this._smallMultiplesLimitConfiguration.internalValue = value.smallMultiplesLimitConfiguration;
      this._smallMultiplesSort.internalValue = value.smallMultiplesSort;
    }
  }

  // category_items_limit - computed: false, optional: true, required: false
  private _categoryItemsLimit = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference(this, "category_items_limit");
  public get categoryItemsLimit() {
    return this._categoryItemsLimit;
  }
  public putCategoryItemsLimit(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategoryItemsLimit) {
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
  private _categorySort = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySortList(this, "category_sort", false);
  public get categorySort() {
    return this._categorySort;
  }
  public putCategorySort(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable) {
    this._categorySort.internalValue = value;
  }
  public resetCategorySort() {
    this._categorySort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySortInput() {
    return this._categorySort.internalValue;
  }

  // small_multiples_limit_configuration - computed: false, optional: true, required: false
  private _smallMultiplesLimitConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference(this, "small_multiples_limit_configuration");
  public get smallMultiplesLimitConfiguration() {
    return this._smallMultiplesLimitConfiguration;
  }
  public putSmallMultiplesLimitConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration) {
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
  private _smallMultiplesSort = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSortList(this, "small_multiples_sort", false);
  public get smallMultiplesSort() {
    return this._smallMultiplesSort;
  }
  public putSmallMultiplesSort(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem {
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
  readonly aggregation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    aggregation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct!.aggregation),
    column: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined) {
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
  private _aggregation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem {
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

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields {
  /**
  * column_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_tooltip_item QuicksightTemplate#column_tooltip_item}
  */
  readonly columnTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem;
  /**
  * field_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_tooltip_item QuicksightTemplate#field_tooltip_item}
  */
  readonly fieldTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_tooltip_item: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct!.columnTooltipItem),
    field_tooltip_item: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct!.fieldTooltipItem),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined) {
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
  private _columnTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference(this, "column_tooltip_item");
  public get columnTooltipItem() {
    return this._columnTooltipItem;
  }
  public putColumnTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem) {
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
  private _fieldTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference(this, "field_tooltip_item");
  public get fieldTooltipItem() {
    return this._fieldTooltipItem;
  }
  public putFieldTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltip {
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
  readonly tooltipFields?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_visibility: cdktf.stringToTerraform(struct!.aggregationVisibility),
    tooltip_title_type: cdktf.stringToTerraform(struct!.tooltipTitleType),
    tooltip_fields: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform, true)(struct!.tooltipFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined) {
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
  private _tooltipFields = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList(this, "tooltip_fields", false);
  public get tooltipFields() {
    return this._tooltipFields;
  }
  public putTooltipFields(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltip {
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
  readonly fieldBaseTooltip?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltip;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_tooltip_type: cdktf.stringToTerraform(struct!.selectedTooltipType),
    tooltip_visibility: cdktf.stringToTerraform(struct!.tooltipVisibility),
    field_base_tooltip: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct!.fieldBaseTooltip),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltip | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltip | undefined) {
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
  private _fieldBaseTooltip = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference(this, "field_base_tooltip");
  public get fieldBaseTooltip() {
    return this._fieldBaseTooltip;
  }
  public putFieldBaseTooltip(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationTooltipFieldBaseTooltip) {
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
