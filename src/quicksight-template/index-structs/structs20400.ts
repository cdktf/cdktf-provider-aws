/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureField,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureField,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestination,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestinationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestinationList,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSource,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSourceToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSourceList } from './structs20000'
import { QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabels,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabelsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabelsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActions,
quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActionsList } from './structs19600'
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format QuicksightTemplate#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format: cdktf.stringToTerraform(struct!.dateTimeFormat),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNullValueFormatConfiguration) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureField {
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
  readonly column: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_function: cdktf.stringToTerraform(struct!.aggregationFunction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureField | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfiguration | undefined) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureField | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldAggregationFunction) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight {
  /**
  * calculated_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculated_measure_field QuicksightTemplate#calculated_measure_field}
  */
  readonly calculatedMeasureField?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureField;
  /**
  * categorical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_measure_field QuicksightTemplate#categorical_measure_field}
  */
  readonly categoricalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureField;
  /**
  * date_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_measure_field QuicksightTemplate#date_measure_field}
  */
  readonly dateMeasureField?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureField;
  /**
  * numerical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_measure_field QuicksightTemplate#numerical_measure_field}
  */
  readonly numericalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureField;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculated_measure_field: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureFieldToTerraform(struct!.calculatedMeasureField),
    categorical_measure_field: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureFieldToTerraform(struct!.categoricalMeasureField),
    date_measure_field: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldToTerraform(struct!.dateMeasureField),
    numerical_measure_field: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldToTerraform(struct!.numericalMeasureField),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight | cdktf.IResolvable | undefined) {
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
  private _calculatedMeasureField = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureFieldOutputReference(this, "calculated_measure_field");
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }
  public putCalculatedMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCalculatedMeasureField) {
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
  private _categoricalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureFieldOutputReference(this, "categorical_measure_field");
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }
  public putCategoricalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightCategoricalMeasureField) {
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
  private _dateMeasureField = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureFieldOutputReference(this, "date_measure_field");
  public get dateMeasureField() {
    return this._dateMeasureField;
  }
  public putDateMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightDateMeasureField) {
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
  private _numericalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureFieldOutputReference(this, "numerical_measure_field");
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
  public putNumericalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightNumericalMeasureField) {
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

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWells {
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination QuicksightTemplate#destination}
  */
  readonly destination?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestination[] | cdktf.IResolvable;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source QuicksightTemplate#source}
  */
  readonly source?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSource[] | cdktf.IResolvable;
  /**
  * weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#weight QuicksightTemplate#weight}
  */
  readonly weight?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestinationToTerraform, true)(struct!.destination),
    source: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSourceToTerraform, true)(struct!.source),
    weight: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightToTerraform, true)(struct!.weight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._weight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._weight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._weight.internalValue = value.weight;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeightList(this, "weight", false);
  public get weight() {
    return this._weight;
  }
  public putWeight(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsWeight[] | cdktf.IResolvable) {
    this._weight.internalValue = value;
  }
  public resetWeight() {
    this._weight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWells {
  /**
  * sankey_diagram_aggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sankey_diagram_aggregated_field_wells QuicksightTemplate#sankey_diagram_aggregated_field_wells}
  */
  readonly sankeyDiagramAggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWells;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sankey_diagram_aggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsToTerraform(struct!.sankeyDiagramAggregatedFieldWells),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sankeyDiagramAggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sankeyDiagramAggregatedFieldWells = this._sankeyDiagramAggregatedFieldWells?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sankeyDiagramAggregatedFieldWells.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sankeyDiagramAggregatedFieldWells.internalValue = value.sankeyDiagramAggregatedFieldWells;
    }
  }

  // sankey_diagram_aggregated_field_wells - computed: false, optional: true, required: false
  private _sankeyDiagramAggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWellsOutputReference(this, "sankey_diagram_aggregated_field_wells");
  public get sankeyDiagramAggregatedFieldWells() {
    return this._sankeyDiagramAggregatedFieldWells;
  }
  public putSankeyDiagramAggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsSankeyDiagramAggregatedFieldWells) {
    this._sankeyDiagramAggregatedFieldWells.internalValue = value;
  }
  public resetSankeyDiagramAggregatedFieldWells() {
    this._sankeyDiagramAggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sankeyDiagramAggregatedFieldWellsInput() {
    return this._sankeyDiagramAggregatedFieldWells.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimitToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimitOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimit | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimit | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimitToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimitOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimit | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimit | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfiguration {
  /**
  * destination_items_limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination_items_limit QuicksightTemplate#destination_items_limit}
  */
  readonly destinationItemsLimit?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimit;
  /**
  * source_items_limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_items_limit QuicksightTemplate#source_items_limit}
  */
  readonly sourceItemsLimit?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimit;
  /**
  * weight_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#weight_sort QuicksightTemplate#weight_sort}
  */
  readonly weightSort?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_items_limit: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimitToTerraform(struct!.destinationItemsLimit),
    source_items_limit: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimitToTerraform(struct!.sourceItemsLimit),
    weight_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortToTerraform, true)(struct!.weightSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationItemsLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationItemsLimit = this._destinationItemsLimit?.internalValue;
    }
    if (this._sourceItemsLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceItemsLimit = this._sourceItemsLimit?.internalValue;
    }
    if (this._weightSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightSort = this._weightSort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationItemsLimit.internalValue = undefined;
      this._sourceItemsLimit.internalValue = undefined;
      this._weightSort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationItemsLimit.internalValue = value.destinationItemsLimit;
      this._sourceItemsLimit.internalValue = value.sourceItemsLimit;
      this._weightSort.internalValue = value.weightSort;
    }
  }

  // destination_items_limit - computed: false, optional: true, required: false
  private _destinationItemsLimit = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimitOutputReference(this, "destination_items_limit");
  public get destinationItemsLimit() {
    return this._destinationItemsLimit;
  }
  public putDestinationItemsLimit(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationDestinationItemsLimit) {
    this._destinationItemsLimit.internalValue = value;
  }
  public resetDestinationItemsLimit() {
    this._destinationItemsLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationItemsLimitInput() {
    return this._destinationItemsLimit.internalValue;
  }

  // source_items_limit - computed: false, optional: true, required: false
  private _sourceItemsLimit = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimitOutputReference(this, "source_items_limit");
  public get sourceItemsLimit() {
    return this._sourceItemsLimit;
  }
  public putSourceItemsLimit(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationSourceItemsLimit) {
    this._sourceItemsLimit.internalValue = value;
  }
  public resetSourceItemsLimit() {
    this._sourceItemsLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceItemsLimitInput() {
    return this._sourceItemsLimit.internalValue;
  }

  // weight_sort - computed: false, optional: true, required: false
  private _weightSort = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSortList(this, "weight_sort", false);
  public get weightSort() {
    return this._weightSort;
  }
  public putWeightSort(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationWeightSort[] | cdktf.IResolvable) {
    this._weightSort.internalValue = value;
  }
  public resetWeightSort() {
    this._weightSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightSortInput() {
    return this._weightSort.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfiguration {
  /**
  * data_labels block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_labels QuicksightTemplate#data_labels}
  */
  readonly dataLabels?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabels;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWells;
  /**
  * sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_configuration QuicksightTemplate#sort_configuration}
  */
  readonly sortConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_labels: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabelsToTerraform(struct!.dataLabels),
    field_wells: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    sort_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationToTerraform(struct!.sortConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabels = this._dataLabels?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._sortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortConfiguration = this._sortConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLabels.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._sortConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLabels.internalValue = value.dataLabels;
      this._fieldWells.internalValue = value.fieldWells;
      this._sortConfiguration.internalValue = value.sortConfiguration;
    }
  }

  // data_labels - computed: false, optional: true, required: false
  private _dataLabels = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabelsOutputReference(this, "data_labels");
  public get dataLabels() {
    return this._dataLabels;
  }
  public putDataLabels(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationDataLabels) {
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
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationFieldWells) {
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
  private _sortConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfigurationOutputReference(this, "sort_configuration");
  public get sortConfiguration() {
    return this._sortConfiguration;
  }
  public putSortConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationSortConfiguration) {
    this._sortConfiguration.internalValue = value;
  }
  public resetSortConfiguration() {
    this._sortConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortConfigurationInput() {
    return this._sortConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_id QuicksightTemplate#visual_id}
  */
  readonly visualId: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
  */
  readonly actions?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActions[] | cdktf.IResolvable;
  /**
  * chart_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_configuration QuicksightTemplate#chart_configuration}
  */
  readonly chartConfiguration?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfiguration;
  /**
  * subtitle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#subtitle QuicksightTemplate#subtitle}
  */
  readonly subtitle?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitle;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualOutputReference | QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visual_id: cdktf.stringToTerraform(struct!.visualId),
    actions: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActionsToTerraform, true)(struct!.actions),
    chart_configuration: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationToTerraform(struct!.chartConfiguration),
    subtitle: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleToTerraform(struct!.subtitle),
    title: quicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visualId = undefined;
      this._actions.internalValue = undefined;
      this._chartConfiguration.internalValue = undefined;
      this._subtitle.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visualId = value.visualId;
      this._actions.internalValue = value.actions;
      this._chartConfiguration.internalValue = value.chartConfiguration;
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
  private _actions = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualActions[] | cdktf.IResolvable) {
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
  private _chartConfiguration = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfigurationOutputReference(this, "chart_configuration");
  public get chartConfiguration() {
    return this._chartConfiguration;
  }
  public putChartConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualChartConfiguration) {
    this._chartConfiguration.internalValue = value;
  }
  public resetChartConfiguration() {
    this._chartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartConfigurationInput() {
    return this._chartConfiguration.internalValue;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualSubtitle) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsSankeyDiagramVisualTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_field_option QuicksightTemplate#selected_field_option}
  */
  readonly selectedFieldOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields QuicksightTemplate#selected_fields}
  */
  readonly selectedFields?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_field_option: cdktf.stringToTerraform(struct!.selectedFieldOption),
    selected_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visual_option QuicksightTemplate#target_visual_option}
  */
  readonly targetVisualOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals QuicksightTemplate#target_visuals}
  */
  readonly targetVisuals?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_visual_option: cdktf.stringToTerraform(struct!.targetVisualOption),
    target_visuals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVisuals),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration {
  /**
  * same_sheet_target_visual_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#same_sheet_target_visual_configuration QuicksightTemplate#same_sheet_target_visual_configuration}
  */
  readonly sameSheetTargetVisualConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    same_sheet_target_visual_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct!.sameSheetTargetVisualConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sameSheetTargetVisualConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSheetTargetVisualConfiguration = this._sameSheetTargetVisualConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined) {
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
  private _sameSheetTargetVisualConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference(this, "same_sheet_target_visual_configuration");
  public get sameSheetTargetVisualConfiguration() {
    return this._sameSheetTargetVisualConfiguration;
  }
  public putSameSheetTargetVisualConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperation {
  /**
  * selected_fields_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields_configuration QuicksightTemplate#selected_fields_configuration}
  */
  readonly selectedFieldsConfiguration: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration;
  /**
  * target_visuals_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals_configuration QuicksightTemplate#target_visuals_configuration}
  */
  readonly targetVisualsConfiguration: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_fields_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct!.selectedFieldsConfiguration),
    target_visuals_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct!.targetVisualsConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperation | undefined) {
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
  private _selectedFieldsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference(this, "selected_fields_configuration");
  public get selectedFieldsConfiguration() {
    return this._selectedFieldsConfiguration;
  }
  public putSelectedFieldsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration) {
    this._selectedFieldsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsConfigurationInput() {
    return this._selectedFieldsConfiguration.internalValue;
  }

  // target_visuals_configuration - computed: false, optional: false, required: true
  private _targetVisualsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference(this, "target_visuals_configuration");
  public get targetVisualsConfiguration() {
    return this._targetVisualsConfiguration;
  }
  public putTargetVisualsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration) {
    this._targetVisualsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualsConfigurationInput() {
    return this._targetVisualsConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_sheet_id QuicksightTemplate#target_sheet_id}
  */
  readonly targetSheetId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_sheet_id: cdktf.stringToTerraform(struct!.targetSheetId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetSheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSheetId = this._targetSheetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperation {
  /**
  * local_navigation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#local_navigation_configuration QuicksightTemplate#local_navigation_configuration}
  */
  readonly localNavigationConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_navigation_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct!.localNavigationConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localNavigationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNavigationConfiguration = this._localNavigationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperation | undefined) {
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
  private _localNavigationConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference(this, "local_navigation_configuration");
  public get localNavigationConfiguration() {
    return this._localNavigationConfiguration;
  }
  public putLocalNavigationConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues {
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

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_null_value QuicksightTemplate#include_null_value}
  */
  readonly includeNullValue?: boolean | cdktf.IResolvable;
  /**
  * custom_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_values QuicksightTemplate#custom_values}
  */
  readonly customValues: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_null_value: cdktf.booleanToTerraform(struct!.includeNullValue),
    custom_values: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct!.customValues),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined) {
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
  private _customValues = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference(this, "custom_values");
  public get customValues() {
    return this._customValues;
  }
  public putCustomValues(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues) {
    this._customValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue {
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
  readonly customValuesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_value_options: cdktf.stringToTerraform(struct!.selectAllValueOptions),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    custom_values_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct!.customValuesConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined) {
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
  private _customValuesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference(this, "custom_values_configuration");
  public get customValuesConfiguration() {
    return this._customValuesConfiguration;
  }
  public putCustomValuesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination_parameter_name QuicksightTemplate#destination_parameter_name}
  */
  readonly destinationParameterName: string;
  /**
  * value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_parameter_name: cdktf.stringToTerraform(struct!.destinationParameterName),
    value: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct!.value),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined) {
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
  private _value = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperation {
  /**
  * parameter_value_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_configurations QuicksightTemplate#parameter_value_configurations}
  */
  readonly parameterValueConfigurations: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value_configurations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform, true)(struct!.parameterValueConfigurations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueConfigurations = this._parameterValueConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperation | undefined) {
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
  private _parameterValueConfigurations = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList(this, "parameter_value_configurations", false);
  public get parameterValueConfigurations() {
    return this._parameterValueConfigurations;
  }
  public putParameterValueConfigurations(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable) {
    this._parameterValueConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueConfigurationsInput() {
    return this._parameterValueConfigurations.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_target QuicksightTemplate#url_target}
  */
  readonly urlTarget: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_template QuicksightTemplate#url_template}
  */
  readonly urlTemplate: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_target: cdktf.stringToTerraform(struct!.urlTarget),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations {
  /**
  * filter_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_operation QuicksightTemplate#filter_operation}
  */
  readonly filterOperation?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperation;
  /**
  * navigation_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#navigation_operation QuicksightTemplate#navigation_operation}
  */
  readonly navigationOperation?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperation;
  /**
  * set_parameters_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#set_parameters_operation QuicksightTemplate#set_parameters_operation}
  */
  readonly setParametersOperation?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperation;
  /**
  * url_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_operation QuicksightTemplate#url_operation}
  */
  readonly urlOperation?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperation;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_operation: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationToTerraform(struct!.filterOperation),
    navigation_operation: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationToTerraform(struct!.navigationOperation),
    set_parameters_operation: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationToTerraform(struct!.setParametersOperation),
    url_operation: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperationToTerraform(struct!.urlOperation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations | cdktf.IResolvable | undefined) {
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
  private _filterOperation = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsFilterOperation) {
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
  private _navigationOperation = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperationOutputReference(this, "navigation_operation");
  public get navigationOperation() {
    return this._navigationOperation;
  }
  public putNavigationOperation(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsNavigationOperation) {
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
  private _setParametersOperation = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperationOutputReference(this, "set_parameters_operation");
  public get setParametersOperation() {
    return this._setParametersOperation;
  }
  public putSetParametersOperation(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsSetParametersOperation) {
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
  private _urlOperation = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperationOutputReference(this, "url_operation");
  public get urlOperation() {
    return this._urlOperation;
  }
  public putUrlOperation(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsUrlOperation) {
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

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActions {
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
  readonly actionOperations: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_id: cdktf.stringToTerraform(struct!.customActionId),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    action_operations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsToTerraform, true)(struct!.actionOperations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActions | cdktf.IResolvable | undefined) {
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
  private _actionOperations = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperationsList(this, "action_operations", false);
  public get actionOperations() {
    return this._actionOperations;
  }
  public putActionOperations(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsActionOperations[] | cdktf.IResolvable) {
    this._actionOperations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOperationsInput() {
    return this._actionOperations.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType {
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

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes {
  /**
  * data_path_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_path_label_type QuicksightTemplate#data_path_label_type}
  */
  readonly dataPathLabelType?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType;
  /**
  * field_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_label_type QuicksightTemplate#field_label_type}
  */
  readonly fieldLabelType?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType;
  /**
  * maximum_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum_label_type QuicksightTemplate#maximum_label_type}
  */
  readonly maximumLabelType?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType;
  /**
  * minimum_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum_label_type QuicksightTemplate#minimum_label_type}
  */
  readonly minimumLabelType?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType;
  /**
  * range_ends_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_ends_label_type QuicksightTemplate#range_ends_label_type}
  */
  readonly rangeEndsLabelType?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_path_label_type: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeToTerraform(struct!.dataPathLabelType),
    field_label_type: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeToTerraform(struct!.fieldLabelType),
    maximum_label_type: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeToTerraform(struct!.maximumLabelType),
    minimum_label_type: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeToTerraform(struct!.minimumLabelType),
    range_ends_label_type: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeToTerraform(struct!.rangeEndsLabelType),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable | undefined) {
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
  private _dataPathLabelType = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference(this, "data_path_label_type");
  public get dataPathLabelType() {
    return this._dataPathLabelType;
  }
  public putDataPathLabelType(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType) {
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
  private _fieldLabelType = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference(this, "field_label_type");
  public get fieldLabelType() {
    return this._fieldLabelType;
  }
  public putFieldLabelType(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType) {
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
  private _maximumLabelType = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference(this, "maximum_label_type");
  public get maximumLabelType() {
    return this._maximumLabelType;
  }
  public putMaximumLabelType(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType) {
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
  private _minimumLabelType = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference(this, "minimum_label_type");
  public get minimumLabelType() {
    return this._minimumLabelType;
  }
  public putMinimumLabelType(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType) {
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
  private _rangeEndsLabelType = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference(this, "range_ends_label_type");
  public get rangeEndsLabelType() {
    return this._rangeEndsLabelType;
  }
  public putRangeEndsLabelType(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType) {
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

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabels {
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
  readonly dataLabelTypes?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable;
  /**
  * label_font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_font_configuration QuicksightTemplate#label_font_configuration}
  */
  readonly labelFontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabels): any {
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
    data_label_types: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesToTerraform, true)(struct!.dataLabelTypes),
    label_font_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationToTerraform(struct!.labelFontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabels | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabels | undefined) {
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
  private _dataLabelTypes = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypesList(this, "data_label_types", false);
  public get dataLabelTypes() {
    return this._dataLabelTypes;
  }
  public putDataLabelTypes(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable) {
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
  private _labelFontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfigurationOutputReference(this, "label_font_configuration");
  public get labelFontConfiguration() {
    return this._labelFontConfiguration;
  }
  public putLabelFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationDataLabelsLabelFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration {
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionField {
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
  readonly column: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    column: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionField | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryCategoricalDimensionFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsScatterPlotVisualChartConfigurationFieldWellsScatterPlotCategoricallyAggregatedFieldWellsCategoryDateDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
