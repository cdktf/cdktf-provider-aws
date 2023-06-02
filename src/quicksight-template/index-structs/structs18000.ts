import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumn,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureField,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureField,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureField,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumns,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumnsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumnsList,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRows,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRowsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRowsList } from './structs17600'
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureField | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues {
  /**
  * calculated_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculated_measure_field QuicksightTemplate#calculated_measure_field}
  */
  readonly calculatedMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureField;
  /**
  * categorical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_measure_field QuicksightTemplate#categorical_measure_field}
  */
  readonly categoricalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureField;
  /**
  * date_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_measure_field QuicksightTemplate#date_measure_field}
  */
  readonly dateMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureField;
  /**
  * numerical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_measure_field QuicksightTemplate#numerical_measure_field}
  */
  readonly numericalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureField;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculated_measure_field: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform(struct!.calculatedMeasureField),
    categorical_measure_field: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform(struct!.categoricalMeasureField),
    date_measure_field: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct!.dateMeasureField),
    numerical_measure_field: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct!.numericalMeasureField),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues | cdktf.IResolvable | undefined) {
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
  private _calculatedMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference(this, "calculated_measure_field");
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }
  public putCalculatedMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCalculatedMeasureField) {
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
  private _categoricalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference(this, "categorical_measure_field");
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }
  public putCategoricalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesCategoricalMeasureField) {
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
  private _dateMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureFieldOutputReference(this, "date_measure_field");
  public get dateMeasureField() {
    return this._dateMeasureField;
  }
  public putDateMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesDateMeasureField) {
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
  private _numericalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference(this, "numerical_measure_field");
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
  public putNumericalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesNumericalMeasureField) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWells {
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#columns QuicksightTemplate#columns}
  */
  readonly columns?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumns[] | cdktf.IResolvable;
  /**
  * rows block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rows QuicksightTemplate#rows}
  */
  readonly rows?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRows[] | cdktf.IResolvable;
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumnsToTerraform, true)(struct!.columns),
    rows: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRowsToTerraform, true)(struct!.rows),
    values: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesToTerraform, true)(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns.internalValue = undefined;
      this._rows.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns.internalValue = value.columns;
      this._rows.internalValue = value.rows;
      this._values.internalValue = value.values;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // rows - computed: false, optional: true, required: false
  private _rows = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsValues[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells {
  /**
  * pivot_table_aggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#pivot_table_aggregated_field_wells QuicksightTemplate#pivot_table_aggregated_field_wells}
  */
  readonly pivotTableAggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWells;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pivot_table_aggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsToTerraform(struct!.pivotTableAggregatedFieldWells),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pivotTableAggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pivotTableAggregatedFieldWells = this._pivotTableAggregatedFieldWells?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pivotTableAggregatedFieldWells.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pivotTableAggregatedFieldWells.internalValue = value.pivotTableAggregatedFieldWells;
    }
  }

  // pivot_table_aggregated_field_wells - computed: false, optional: true, required: false
  private _pivotTableAggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWellsOutputReference(this, "pivot_table_aggregated_field_wells");
  public get pivotTableAggregatedFieldWells() {
    return this._pivotTableAggregatedFieldWells;
  }
  public putPivotTableAggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsPivotTableAggregatedFieldWells) {
    this._pivotTableAggregatedFieldWells.internalValue = value;
  }
  public resetPivotTableAggregatedFieldWells() {
    this._pivotTableAggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotTableAggregatedFieldWellsInput() {
    return this._pivotTableAggregatedFieldWells.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#overflow_column_header_visibility QuicksightTemplate#overflow_column_header_visibility}
  */
  readonly overflowColumnHeaderVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#vertical_overflow_visibility QuicksightTemplate#vertical_overflow_visibility}
  */
  readonly verticalOverflowVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overflow_column_header_visibility: cdktf.stringToTerraform(struct!.overflowColumnHeaderVisibility),
    vertical_overflow_visibility: cdktf.stringToTerraform(struct!.verticalOverflowVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumn | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_value QuicksightTemplate#field_value}
  */
  readonly fieldValue: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._fieldValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * sort_paths block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_paths QuicksightTemplate#sort_paths}
  */
  readonly sortPaths: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    sort_paths: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsToTerraform, true)(struct!.sortPaths),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._sortPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortPaths = this._sortPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._sortPaths.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._sortPaths.internalValue = value.sortPaths;
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

  // sort_paths - computed: false, optional: false, required: true
  private _sortPaths = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPathsList(this, "sort_paths", false);
  public get sortPaths() {
    return this._sortPaths;
  }
  public putSortPaths(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathSortPaths[] | cdktf.IResolvable) {
    this._sortPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortPathsInput() {
    return this._sortPaths.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByField | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortBy {
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumn;
  /**
  * data_path block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_path QuicksightTemplate#data_path}
  */
  readonly dataPath?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPath;
  /**
  * field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field QuicksightTemplate#field}
  */
  readonly field?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByField;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnToTerraform(struct!.column),
    data_path: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathToTerraform(struct!.dataPath),
    field: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByFieldToTerraform(struct!.field),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._dataPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPath = this._dataPath?.internalValue;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column.internalValue = undefined;
      this._dataPath.internalValue = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column.internalValue = value.column;
      this._dataPath.internalValue = value.dataPath;
      this._field.internalValue = value.field;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByColumn) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // data_path - computed: false, optional: true, required: false
  private _dataPath = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPathOutputReference(this, "data_path");
  public get dataPath() {
    return this._dataPath;
  }
  public putDataPath(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByDataPath) {
    this._dataPath.internalValue = value;
  }
  public resetDataPath() {
    this._dataPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPathInput() {
    return this._dataPath.internalValue;
  }

  // field - computed: false, optional: true, required: false
  private _field = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    sort_by: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._sortBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._sortBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
      this._sortBy.internalValue = value.sortBy;
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

  // sort_by - computed: false, optional: false, required: true
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration {
  /**
  * field_sort_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort_options QuicksightTemplate#field_sort_options}
  */
  readonly fieldSortOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_sort_options: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsToTerraform, true)(struct!.fieldSortOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSortOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSortOptions = this._fieldSortOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldSortOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldSortOptions.internalValue = value.fieldSortOptions;
    }
  }

  // field_sort_options - computed: false, optional: true, required: false
  private _fieldSortOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptionsList(this, "field_sort_options", false);
  public get fieldSortOptions() {
    return this._fieldSortOptions;
  }
  public putFieldSortOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationFieldSortOptions[] | cdktf.IResolvable) {
    this._fieldSortOptions.internalValue = value;
  }
  public resetFieldSortOptions() {
    this._fieldSortOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSortOptionsInput() {
    return this._fieldSortOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_alternate_colors QuicksightTemplate#row_alternate_colors}
  */
  readonly rowAlternateColors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_alternate_colors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rowAlternateColors),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#collapsed_row_dimensions_visibility QuicksightTemplate#collapsed_row_dimensions_visibility}
  */
  readonly collapsedRowDimensionsVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_names_visibility QuicksightTemplate#column_names_visibility}
  */
  readonly columnNamesVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#metric_placement QuicksightTemplate#metric_placement}
  */
  readonly metricPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#single_metric_visibility QuicksightTemplate#single_metric_visibility}
  */
  readonly singleMetricVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#toggle_buttons_visibility QuicksightTemplate#toggle_buttons_visibility}
  */
  readonly toggleButtonsVisibility?: string;
  /**
  * cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cell_style QuicksightTemplate#cell_style}
  */
  readonly cellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyle;
  /**
  * column_header_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_header_style QuicksightTemplate#column_header_style}
  */
  readonly columnHeaderStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyle;
  /**
  * row_alternate_color_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_alternate_color_options QuicksightTemplate#row_alternate_color_options}
  */
  readonly rowAlternateColorOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptions;
  /**
  * row_field_names_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_field_names_style QuicksightTemplate#row_field_names_style}
  */
  readonly rowFieldNamesStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyle;
  /**
  * row_header_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_header_style QuicksightTemplate#row_header_style}
  */
  readonly rowHeaderStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyle;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collapsed_row_dimensions_visibility: cdktf.stringToTerraform(struct!.collapsedRowDimensionsVisibility),
    column_names_visibility: cdktf.stringToTerraform(struct!.columnNamesVisibility),
    metric_placement: cdktf.stringToTerraform(struct!.metricPlacement),
    single_metric_visibility: cdktf.stringToTerraform(struct!.singleMetricVisibility),
    toggle_buttons_visibility: cdktf.stringToTerraform(struct!.toggleButtonsVisibility),
    cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleToTerraform(struct!.cellStyle),
    column_header_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleToTerraform(struct!.columnHeaderStyle),
    row_alternate_color_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsToTerraform(struct!.rowAlternateColorOptions),
    row_field_names_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleToTerraform(struct!.rowFieldNamesStyle),
    row_header_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleToTerraform(struct!.rowHeaderStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collapsedRowDimensionsVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.collapsedRowDimensionsVisibility = this._collapsedRowDimensionsVisibility;
    }
    if (this._columnNamesVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNamesVisibility = this._columnNamesVisibility;
    }
    if (this._metricPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPlacement = this._metricPlacement;
    }
    if (this._singleMetricVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleMetricVisibility = this._singleMetricVisibility;
    }
    if (this._toggleButtonsVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggleButtonsVisibility = this._toggleButtonsVisibility;
    }
    if (this._cellStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellStyle = this._cellStyle?.internalValue;
    }
    if (this._columnHeaderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnHeaderStyle = this._columnHeaderStyle?.internalValue;
    }
    if (this._rowAlternateColorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowAlternateColorOptions = this._rowAlternateColorOptions?.internalValue;
    }
    if (this._rowFieldNamesStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFieldNamesStyle = this._rowFieldNamesStyle?.internalValue;
    }
    if (this._rowHeaderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowHeaderStyle = this._rowHeaderStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collapsedRowDimensionsVisibility = undefined;
      this._columnNamesVisibility = undefined;
      this._metricPlacement = undefined;
      this._singleMetricVisibility = undefined;
      this._toggleButtonsVisibility = undefined;
      this._cellStyle.internalValue = undefined;
      this._columnHeaderStyle.internalValue = undefined;
      this._rowAlternateColorOptions.internalValue = undefined;
      this._rowFieldNamesStyle.internalValue = undefined;
      this._rowHeaderStyle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collapsedRowDimensionsVisibility = value.collapsedRowDimensionsVisibility;
      this._columnNamesVisibility = value.columnNamesVisibility;
      this._metricPlacement = value.metricPlacement;
      this._singleMetricVisibility = value.singleMetricVisibility;
      this._toggleButtonsVisibility = value.toggleButtonsVisibility;
      this._cellStyle.internalValue = value.cellStyle;
      this._columnHeaderStyle.internalValue = value.columnHeaderStyle;
      this._rowAlternateColorOptions.internalValue = value.rowAlternateColorOptions;
      this._rowFieldNamesStyle.internalValue = value.rowFieldNamesStyle;
      this._rowHeaderStyle.internalValue = value.rowHeaderStyle;
    }
  }

  // collapsed_row_dimensions_visibility - computed: false, optional: true, required: false
  private _collapsedRowDimensionsVisibility?: string; 
  public get collapsedRowDimensionsVisibility() {
    return this.getStringAttribute('collapsed_row_dimensions_visibility');
  }
  public set collapsedRowDimensionsVisibility(value: string) {
    this._collapsedRowDimensionsVisibility = value;
  }
  public resetCollapsedRowDimensionsVisibility() {
    this._collapsedRowDimensionsVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collapsedRowDimensionsVisibilityInput() {
    return this._collapsedRowDimensionsVisibility;
  }

  // column_names_visibility - computed: false, optional: true, required: false
  private _columnNamesVisibility?: string; 
  public get columnNamesVisibility() {
    return this.getStringAttribute('column_names_visibility');
  }
  public set columnNamesVisibility(value: string) {
    this._columnNamesVisibility = value;
  }
  public resetColumnNamesVisibility() {
    this._columnNamesVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesVisibilityInput() {
    return this._columnNamesVisibility;
  }

  // metric_placement - computed: false, optional: true, required: false
  private _metricPlacement?: string; 
  public get metricPlacement() {
    return this.getStringAttribute('metric_placement');
  }
  public set metricPlacement(value: string) {
    this._metricPlacement = value;
  }
  public resetMetricPlacement() {
    this._metricPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPlacementInput() {
    return this._metricPlacement;
  }

  // single_metric_visibility - computed: false, optional: true, required: false
  private _singleMetricVisibility?: string; 
  public get singleMetricVisibility() {
    return this.getStringAttribute('single_metric_visibility');
  }
  public set singleMetricVisibility(value: string) {
    this._singleMetricVisibility = value;
  }
  public resetSingleMetricVisibility() {
    this._singleMetricVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleMetricVisibilityInput() {
    return this._singleMetricVisibility;
  }

  // toggle_buttons_visibility - computed: false, optional: true, required: false
  private _toggleButtonsVisibility?: string; 
  public get toggleButtonsVisibility() {
    return this.getStringAttribute('toggle_buttons_visibility');
  }
  public set toggleButtonsVisibility(value: string) {
    this._toggleButtonsVisibility = value;
  }
  public resetToggleButtonsVisibility() {
    this._toggleButtonsVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleButtonsVisibilityInput() {
    return this._toggleButtonsVisibility;
  }

  // cell_style - computed: false, optional: true, required: false
  private _cellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyleOutputReference(this, "cell_style");
  public get cellStyle() {
    return this._cellStyle;
  }
  public putCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsCellStyle) {
    this._cellStyle.internalValue = value;
  }
  public resetCellStyle() {
    this._cellStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellStyleInput() {
    return this._cellStyle.internalValue;
  }

  // column_header_style - computed: false, optional: true, required: false
  private _columnHeaderStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyleOutputReference(this, "column_header_style");
  public get columnHeaderStyle() {
    return this._columnHeaderStyle;
  }
  public putColumnHeaderStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsColumnHeaderStyle) {
    this._columnHeaderStyle.internalValue = value;
  }
  public resetColumnHeaderStyle() {
    this._columnHeaderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnHeaderStyleInput() {
    return this._columnHeaderStyle.internalValue;
  }

  // row_alternate_color_options - computed: false, optional: true, required: false
  private _rowAlternateColorOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference(this, "row_alternate_color_options");
  public get rowAlternateColorOptions() {
    return this._rowAlternateColorOptions;
  }
  public putRowAlternateColorOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowAlternateColorOptions) {
    this._rowAlternateColorOptions.internalValue = value;
  }
  public resetRowAlternateColorOptions() {
    this._rowAlternateColorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAlternateColorOptionsInput() {
    return this._rowAlternateColorOptions.internalValue;
  }

  // row_field_names_style - computed: false, optional: true, required: false
  private _rowFieldNamesStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyleOutputReference(this, "row_field_names_style");
  public get rowFieldNamesStyle() {
    return this._rowFieldNamesStyle;
  }
  public putRowFieldNamesStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowFieldNamesStyle) {
    this._rowFieldNamesStyle.internalValue = value;
  }
  public resetRowFieldNamesStyle() {
    this._rowFieldNamesStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFieldNamesStyleInput() {
    return this._rowFieldNamesStyle.internalValue;
  }

  // row_header_style - computed: false, optional: true, required: false
  private _rowHeaderStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyleOutputReference(this, "row_header_style");
  public get rowHeaderStyle() {
    return this._rowHeaderStyle;
  }
  public putRowHeaderStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsRowHeaderStyle) {
    this._rowHeaderStyle.internalValue = value;
  }
  public resetRowHeaderStyle() {
    this._rowHeaderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowHeaderStyleInput() {
    return this._rowHeaderStyle.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
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
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_level QuicksightTemplate#field_level}
  */
  readonly fieldLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#totals_visibility QuicksightTemplate#totals_visibility}
  */
  readonly totalsVisibility?: string;
  /**
  * field_level_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_level_options QuicksightTemplate#field_level_options}
  */
  readonly fieldLevelOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions[] | cdktf.IResolvable;
  /**
  * metric_header_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#metric_header_cell_style QuicksightTemplate#metric_header_cell_style}
  */
  readonly metricHeaderCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyle;
  /**
  * total_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_cell_style QuicksightTemplate#total_cell_style}
  */
  readonly totalCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyle;
  /**
  * value_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_cell_style QuicksightTemplate#value_cell_style}
  */
  readonly valueCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyle;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    field_level: cdktf.stringToTerraform(struct!.fieldLevel),
    totals_visibility: cdktf.stringToTerraform(struct!.totalsVisibility),
    field_level_options: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsToTerraform, true)(struct!.fieldLevelOptions),
    metric_header_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleToTerraform(struct!.metricHeaderCellStyle),
    total_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleToTerraform(struct!.totalCellStyle),
    value_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleToTerraform(struct!.valueCellStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._fieldLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevel = this._fieldLevel;
    }
    if (this._totalsVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalsVisibility = this._totalsVisibility;
    }
    if (this._fieldLevelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelOptions = this._fieldLevelOptions?.internalValue;
    }
    if (this._metricHeaderCellStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricHeaderCellStyle = this._metricHeaderCellStyle?.internalValue;
    }
    if (this._totalCellStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCellStyle = this._totalCellStyle?.internalValue;
    }
    if (this._valueCellStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueCellStyle = this._valueCellStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._fieldLevel = undefined;
      this._totalsVisibility = undefined;
      this._fieldLevelOptions.internalValue = undefined;
      this._metricHeaderCellStyle.internalValue = undefined;
      this._totalCellStyle.internalValue = undefined;
      this._valueCellStyle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._fieldLevel = value.fieldLevel;
      this._totalsVisibility = value.totalsVisibility;
      this._fieldLevelOptions.internalValue = value.fieldLevelOptions;
      this._metricHeaderCellStyle.internalValue = value.metricHeaderCellStyle;
      this._totalCellStyle.internalValue = value.totalCellStyle;
      this._valueCellStyle.internalValue = value.valueCellStyle;
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

  // field_level - computed: false, optional: true, required: false
  private _fieldLevel?: string; 
  public get fieldLevel() {
    return this.getStringAttribute('field_level');
  }
  public set fieldLevel(value: string) {
    this._fieldLevel = value;
  }
  public resetFieldLevel() {
    this._fieldLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelInput() {
    return this._fieldLevel;
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

  // field_level_options - computed: false, optional: true, required: false
  private _fieldLevelOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptionsList(this, "field_level_options", false);
  public get fieldLevelOptions() {
    return this._fieldLevelOptions;
  }
  public putFieldLevelOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsFieldLevelOptions[] | cdktf.IResolvable) {
    this._fieldLevelOptions.internalValue = value;
  }
  public resetFieldLevelOptions() {
    this._fieldLevelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelOptionsInput() {
    return this._fieldLevelOptions.internalValue;
  }

  // metric_header_cell_style - computed: false, optional: true, required: false
  private _metricHeaderCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyleOutputReference(this, "metric_header_cell_style");
  public get metricHeaderCellStyle() {
    return this._metricHeaderCellStyle;
  }
  public putMetricHeaderCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsMetricHeaderCellStyle) {
    this._metricHeaderCellStyle.internalValue = value;
  }
  public resetMetricHeaderCellStyle() {
    this._metricHeaderCellStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricHeaderCellStyleInput() {
    return this._metricHeaderCellStyle.internalValue;
  }

  // total_cell_style - computed: false, optional: true, required: false
  private _totalCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyleOutputReference(this, "total_cell_style");
  public get totalCellStyle() {
    return this._totalCellStyle;
  }
  public putTotalCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsTotalCellStyle) {
    this._totalCellStyle.internalValue = value;
  }
  public resetTotalCellStyle() {
    this._totalCellStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCellStyleInput() {
    return this._totalCellStyle.internalValue;
  }

  // value_cell_style - computed: false, optional: true, required: false
  private _valueCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyleOutputReference(this, "value_cell_style");
  public get valueCellStyle() {
    return this._valueCellStyle;
  }
  public putValueCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsValueCellStyle) {
    this._valueCellStyle.internalValue = value;
  }
  public resetValueCellStyle() {
    this._valueCellStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueCellStyleInput() {
    return this._valueCellStyle.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleFontConfiguration) {
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
