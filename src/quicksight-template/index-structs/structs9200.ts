import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumn,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumnToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureField,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureField,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptions,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabels,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabelsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabelsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualActions,
quicksightTemplateDefinitionSheetsVisualsHistogramVisualActionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsHistogramVisualActionsList } from './structs8800'
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureField {
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
  readonly column: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_function: cdktf.stringToTerraform(struct!.aggregationFunction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureField | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration | undefined) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureField | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldAggregationFunction) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValues {
  /**
  * calculated_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#calculated_measure_field QuicksightTemplate#calculated_measure_field}
  */
  readonly calculatedMeasureField?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureField;
  /**
  * categorical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#categorical_measure_field QuicksightTemplate#categorical_measure_field}
  */
  readonly categoricalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureField;
  /**
  * date_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_measure_field QuicksightTemplate#date_measure_field}
  */
  readonly dateMeasureField?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureField;
  /**
  * numerical_measure_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numerical_measure_field QuicksightTemplate#numerical_measure_field}
  */
  readonly numericalMeasureField?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureField;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculated_measure_field: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureFieldToTerraform(struct!.calculatedMeasureField),
    categorical_measure_field: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureFieldToTerraform(struct!.categoricalMeasureField),
    date_measure_field: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldToTerraform(struct!.dateMeasureField),
    numerical_measure_field: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldToTerraform(struct!.numericalMeasureField),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValues | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calculatedMeasureField.internalValue = undefined;
      this._categoricalMeasureField.internalValue = undefined;
      this._dateMeasureField.internalValue = undefined;
      this._numericalMeasureField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calculatedMeasureField.internalValue = value.calculatedMeasureField;
      this._categoricalMeasureField.internalValue = value.categoricalMeasureField;
      this._dateMeasureField.internalValue = value.dateMeasureField;
      this._numericalMeasureField.internalValue = value.numericalMeasureField;
    }
  }

  // calculated_measure_field - computed: false, optional: true, required: false
  private _calculatedMeasureField = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureFieldOutputReference(this, "calculated_measure_field");
  public get calculatedMeasureField() {
    return this._calculatedMeasureField;
  }
  public putCalculatedMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCalculatedMeasureField) {
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
  private _categoricalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureFieldOutputReference(this, "categorical_measure_field");
  public get categoricalMeasureField() {
    return this._categoricalMeasureField;
  }
  public putCategoricalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesCategoricalMeasureField) {
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
  private _dateMeasureField = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureFieldOutputReference(this, "date_measure_field");
  public get dateMeasureField() {
    return this._dateMeasureField;
  }
  public putDateMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesDateMeasureField) {
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
  private _numericalMeasureField = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureFieldOutputReference(this, "numerical_measure_field");
  public get numericalMeasureField() {
    return this._numericalMeasureField;
  }
  public putNumericalMeasureField(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesNumericalMeasureField) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWells {
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValues;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesToTerraform(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWells | undefined) {
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
  private _values = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsValues) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWells {
  /**
  * histogram_aggregated_field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#histogram_aggregated_field_wells QuicksightTemplate#histogram_aggregated_field_wells}
  */
  readonly histogramAggregatedFieldWells?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWells;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    histogram_aggregated_field_wells: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsToTerraform(struct!.histogramAggregatedFieldWells),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._histogramAggregatedFieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramAggregatedFieldWells = this._histogramAggregatedFieldWells?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._histogramAggregatedFieldWells.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._histogramAggregatedFieldWells.internalValue = value.histogramAggregatedFieldWells;
    }
  }

  // histogram_aggregated_field_wells - computed: false, optional: true, required: false
  private _histogramAggregatedFieldWells = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWellsOutputReference(this, "histogram_aggregated_field_wells");
  public get histogramAggregatedFieldWells() {
    return this._histogramAggregatedFieldWells;
  }
  public putHistogramAggregatedFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsHistogramAggregatedFieldWells) {
    this._histogramAggregatedFieldWells.internalValue = value;
  }
  public resetHistogramAggregatedFieldWells() {
    this._histogramAggregatedFieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramAggregatedFieldWellsInput() {
    return this._histogramAggregatedFieldWells.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem {
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
  readonly aggregation?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    aggregation: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct!.aggregation),
    column: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined) {
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
  private _aggregation = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem {
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

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields {
  /**
  * column_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_tooltip_item QuicksightTemplate#column_tooltip_item}
  */
  readonly columnTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem;
  /**
  * field_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_tooltip_item QuicksightTemplate#field_tooltip_item}
  */
  readonly fieldTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_tooltip_item: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct!.columnTooltipItem),
    field_tooltip_item: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct!.fieldTooltipItem),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined) {
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
  private _columnTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference(this, "column_tooltip_item");
  public get columnTooltipItem() {
    return this._columnTooltipItem;
  }
  public putColumnTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem) {
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
  private _fieldTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference(this, "field_tooltip_item");
  public get fieldTooltipItem() {
    return this._fieldTooltipItem;
  }
  public putFieldTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem) {
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

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltip {
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
  readonly tooltipFields?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_visibility: cdktf.stringToTerraform(struct!.aggregationVisibility),
    tooltip_title_type: cdktf.stringToTerraform(struct!.tooltipTitleType),
    tooltip_fields: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform, true)(struct!.tooltipFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltip | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltip | undefined) {
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
  private _tooltipFields = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList(this, "tooltip_fields", false);
  public get tooltipFields() {
    return this._tooltipFields;
  }
  public putTooltipFields(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltip {
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
  readonly fieldBaseTooltip?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltip;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_tooltip_type: cdktf.stringToTerraform(struct!.selectedTooltipType),
    tooltip_visibility: cdktf.stringToTerraform(struct!.tooltipVisibility),
    field_base_tooltip: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct!.fieldBaseTooltip),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltip | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltip | undefined) {
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
  private _fieldBaseTooltip = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltipOutputReference(this, "field_base_tooltip");
  public get fieldBaseTooltip() {
    return this._fieldBaseTooltip;
  }
  public putFieldBaseTooltip(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipFieldBaseTooltip) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_value QuicksightTemplate#field_value}
  */
  readonly fieldValue: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElementOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElement | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElement | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap {
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
  readonly element: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElement;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    element: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct!.element),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable | undefined) {
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
  private _element = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapElement) {
    this._element.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPalette {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_color QuicksightTemplate#chart_color}
  */
  readonly chartColor?: string;
  /**
  * color_map block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_map QuicksightTemplate#color_map}
  */
  readonly colorMap?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_color: cdktf.stringToTerraform(struct!.chartColor),
    color_map: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapToTerraform, true)(struct!.colorMap),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPalette | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPalette | undefined) {
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
  private _colorMap = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMapList(this, "color_map", false);
  public get colorMap() {
    return this._colorMap;
  }
  public putColorMap(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#missing_date_visibility QuicksightTemplate#missing_date_visibility}
  */
  readonly missingDateVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing_date_visibility: cdktf.stringToTerraform(struct!.missingDateVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missingDateVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDateVisibility = this._missingDateVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven {
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum QuicksightTemplate#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum QuicksightTemplate#minimum}
  */
  readonly minimum?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange {
  /**
  * data_driven block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_driven QuicksightTemplate#data_driven}
  */
  readonly dataDriven?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven;
  /**
  * min_max block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#min_max QuicksightTemplate#min_max}
  */
  readonly minMax?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_driven: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct!.dataDriven),
    min_max: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct!.minMax),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined) {
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
  private _dataDriven = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference(this, "data_driven");
  public get dataDriven() {
    return this._dataDriven;
  }
  public putDataDriven(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven) {
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
  private _minMax = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference(this, "min_max");
  public get minMax() {
    return this._minMax;
  }
  public putMinMax(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_count QuicksightTemplate#step_count}
  */
  readonly stepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_count: cdktf.numberToTerraform(struct!.stepCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#base QuicksightTemplate#base}
  */
  readonly base?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale {
  /**
  * linear block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#linear QuicksightTemplate#linear}
  */
  readonly linear?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear;
  /**
  * logarithmic block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#logarithmic QuicksightTemplate#logarithmic}
  */
  readonly logarithmic?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linear: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct!.linear),
    logarithmic: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct!.logarithmic),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined) {
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
  private _linear = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference(this, "linear");
  public get linear() {
    return this._linear;
  }
  public putLinear(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear) {
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
  private _logarithmic = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference(this, "logarithmic");
  public get logarithmic() {
    return this._logarithmic;
  }
  public putLogarithmic(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions {
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range QuicksightTemplate#range}
  */
  readonly range?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange;
  /**
  * scale block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scale QuicksightTemplate#scale}
  */
  readonly scale?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct!.range),
    scale: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct!.scale),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined) {
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
  private _range = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange) {
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
  private _scale = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptions {
  /**
  * date_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_axis_options QuicksightTemplate#date_axis_options}
  */
  readonly dateAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions;
  /**
  * numeric_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_axis_options QuicksightTemplate#numeric_axis_options}
  */
  readonly numericAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_axis_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct!.dateAxisOptions),
    numeric_axis_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct!.numericAxisOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptions | undefined) {
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
  private _dateAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference(this, "date_axis_options");
  public get dateAxisOptions() {
    return this._dateAxisOptions;
  }
  public putDateAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions) {
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
  private _numericAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference(this, "numeric_axis_options");
  public get numericAxisOptions() {
    return this._numericAxisOptions;
  }
  public putNumericAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#from QuicksightTemplate#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#to QuicksightTemplate#to}
  */
  readonly to?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange {
  /**
  * percent_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percent_range QuicksightTemplate#percent_range}
  */
  readonly percentRange?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_range: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct!.percentRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentRange = this._percentRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined) {
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
  private _percentRange = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference(this, "percent_range");
  public get percentRange() {
    return this._percentRange;
  }
  public putPercentRange(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * visible_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visible_range QuicksightTemplate#visible_range}
  */
  readonly visibleRange?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    visible_range: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct!.visibleRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions | undefined) {
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
  private _visibleRange = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference(this, "visible_range");
  public get visibleRange() {
    return this._visibleRange;
  }
  public putVisibleRange(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rotation_angle QuicksightTemplate#rotation_angle}
  */
  readonly rotationAngle?: number;
  /**
  * label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_options QuicksightTemplate#label_options}
  */
  readonly labelOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rotation_angle: cdktf.numberToTerraform(struct!.rotationAngle),
    label_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct!.labelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions | undefined) {
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
  private _labelOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference(this, "label_options");
  public get labelOptions() {
    return this._labelOptions;
  }
  public putLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptions {
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
  readonly dataOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptions;
  /**
  * scrollbar_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scrollbar_options QuicksightTemplate#scrollbar_options}
  */
  readonly scrollbarOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions;
  /**
  * tick_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tick_label_options QuicksightTemplate#tick_label_options}
  */
  readonly tickLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_line_visibility: cdktf.stringToTerraform(struct!.axisLineVisibility),
    axis_offset: cdktf.stringToTerraform(struct!.axisOffset),
    grid_line_visibility: cdktf.stringToTerraform(struct!.gridLineVisibility),
    data_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsToTerraform(struct!.dataOptions),
    scrollbar_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsToTerraform(struct!.scrollbarOptions),
    tick_label_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsToTerraform(struct!.tickLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptions | undefined) {
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
  private _dataOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptionsOutputReference(this, "data_options");
  public get dataOptions() {
    return this._dataOptions;
  }
  public putDataOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsDataOptions) {
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
  private _scrollbarOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsOutputReference(this, "scrollbar_options");
  public get scrollbarOptions() {
    return this._scrollbarOptions;
  }
  public putScrollbarOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions) {
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
  private _tickLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsOutputReference(this, "tick_label_options");
  public get tickLabelOptions() {
    return this._tickLabelOptions;
  }
  public putTickLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#missing_date_visibility QuicksightTemplate#missing_date_visibility}
  */
  readonly missingDateVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing_date_visibility: cdktf.stringToTerraform(struct!.missingDateVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missingDateVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDateVisibility = this._missingDateVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven {
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum QuicksightTemplate#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum QuicksightTemplate#minimum}
  */
  readonly minimum?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange {
  /**
  * data_driven block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_driven QuicksightTemplate#data_driven}
  */
  readonly dataDriven?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven;
  /**
  * min_max block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#min_max QuicksightTemplate#min_max}
  */
  readonly minMax?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_driven: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct!.dataDriven),
    min_max: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct!.minMax),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined) {
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
  private _dataDriven = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference(this, "data_driven");
  public get dataDriven() {
    return this._dataDriven;
  }
  public putDataDriven(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven) {
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
  private _minMax = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference(this, "min_max");
  public get minMax() {
    return this._minMax;
  }
  public putMinMax(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_count QuicksightTemplate#step_count}
  */
  readonly stepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_count: cdktf.numberToTerraform(struct!.stepCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#base QuicksightTemplate#base}
  */
  readonly base?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale {
  /**
  * linear block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#linear QuicksightTemplate#linear}
  */
  readonly linear?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear;
  /**
  * logarithmic block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#logarithmic QuicksightTemplate#logarithmic}
  */
  readonly logarithmic?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linear: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct!.linear),
    logarithmic: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct!.logarithmic),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined) {
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
  private _linear = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference(this, "linear");
  public get linear() {
    return this._linear;
  }
  public putLinear(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear) {
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
  private _logarithmic = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference(this, "logarithmic");
  public get logarithmic() {
    return this._logarithmic;
  }
  public putLogarithmic(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptions {
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range QuicksightTemplate#range}
  */
  readonly range?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange;
  /**
  * scale block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scale QuicksightTemplate#scale}
  */
  readonly scale?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct!.range),
    scale: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct!.scale),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined) {
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
  private _range = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange) {
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
  private _scale = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptions {
  /**
  * date_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_axis_options QuicksightTemplate#date_axis_options}
  */
  readonly dateAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptions;
  /**
  * numeric_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_axis_options QuicksightTemplate#numeric_axis_options}
  */
  readonly numericAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_axis_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct!.dateAxisOptions),
    numeric_axis_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct!.numericAxisOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptions | undefined) {
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
  private _dateAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference(this, "date_axis_options");
  public get dateAxisOptions() {
    return this._dateAxisOptions;
  }
  public putDateAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsDateAxisOptions) {
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
  private _numericAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference(this, "numeric_axis_options");
  public get numericAxisOptions() {
    return this._numericAxisOptions;
  }
  public putNumericAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsNumericAxisOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#from QuicksightTemplate#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#to QuicksightTemplate#to}
  */
  readonly to?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRange {
  /**
  * percent_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percent_range QuicksightTemplate#percent_range}
  */
  readonly percentRange?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_range: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct!.percentRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentRange = this._percentRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined) {
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
  private _percentRange = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference(this, "percent_range");
  public get percentRange() {
    return this._percentRange;
  }
  public putPercentRange(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * visible_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visible_range QuicksightTemplate#visible_range}
  */
  readonly visibleRange?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRange;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    visible_range: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct!.visibleRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptions | undefined) {
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
  private _visibleRange = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference(this, "visible_range");
  public get visibleRange() {
    return this._visibleRange;
  }
  public putVisibleRange(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsVisibleRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rotation_angle QuicksightTemplate#rotation_angle}
  */
  readonly rotationAngle?: number;
  /**
  * label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_options QuicksightTemplate#label_options}
  */
  readonly labelOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rotation_angle: cdktf.numberToTerraform(struct!.rotationAngle),
    label_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct!.labelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptions | undefined) {
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
  private _labelOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference(this, "label_options");
  public get labelOptions() {
    return this._labelOptions;
  }
  public putLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptions {
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
  readonly dataOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptions;
  /**
  * scrollbar_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scrollbar_options QuicksightTemplate#scrollbar_options}
  */
  readonly scrollbarOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptions;
  /**
  * tick_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tick_label_options QuicksightTemplate#tick_label_options}
  */
  readonly tickLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_line_visibility: cdktf.stringToTerraform(struct!.axisLineVisibility),
    axis_offset: cdktf.stringToTerraform(struct!.axisOffset),
    grid_line_visibility: cdktf.stringToTerraform(struct!.gridLineVisibility),
    data_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsToTerraform(struct!.dataOptions),
    scrollbar_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsToTerraform(struct!.scrollbarOptions),
    tick_label_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsToTerraform(struct!.tickLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptions | undefined) {
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
  private _dataOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptionsOutputReference(this, "data_options");
  public get dataOptions() {
    return this._dataOptions;
  }
  public putDataOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsDataOptions) {
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
  private _scrollbarOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptionsOutputReference(this, "scrollbar_options");
  public get scrollbarOptions() {
    return this._scrollbarOptions;
  }
  public putScrollbarOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsScrollbarOptions) {
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
  private _tickLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptionsOutputReference(this, "tick_label_options");
  public get tickLabelOptions() {
    return this._tickLabelOptions;
  }
  public putTickLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsTickLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfiguration {
  /**
  * bin_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bin_options QuicksightTemplate#bin_options}
  */
  readonly binOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptions;
  /**
  * data_labels block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_labels QuicksightTemplate#data_labels}
  */
  readonly dataLabels?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabels;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWells;
  /**
  * tooltip block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tooltip QuicksightTemplate#tooltip}
  */
  readonly tooltip?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltip;
  /**
  * visual_palette block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_palette QuicksightTemplate#visual_palette}
  */
  readonly visualPalette?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPalette;
  /**
  * x_axis_display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_display_options QuicksightTemplate#x_axis_display_options}
  */
  readonly xAxisDisplayOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptions;
  /**
  * x_axis_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_label_options QuicksightTemplate#x_axis_label_options}
  */
  readonly xAxisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptions;
  /**
  * y_axis_display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#y_axis_display_options QuicksightTemplate#y_axis_display_options}
  */
  readonly yAxisDisplayOptions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bin_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptionsToTerraform(struct!.binOptions),
    data_labels: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabelsToTerraform(struct!.dataLabels),
    field_wells: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    tooltip: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipToTerraform(struct!.tooltip),
    visual_palette: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteToTerraform(struct!.visualPalette),
    x_axis_display_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsToTerraform(struct!.xAxisDisplayOptions),
    x_axis_label_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsToTerraform(struct!.xAxisLabelOptions),
    y_axis_display_options: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsToTerraform(struct!.yAxisDisplayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binOptions = this._binOptions?.internalValue;
    }
    if (this._dataLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabels = this._dataLabels?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._visualPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualPalette = this._visualPalette?.internalValue;
    }
    if (this._xAxisDisplayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxisDisplayOptions = this._xAxisDisplayOptions?.internalValue;
    }
    if (this._xAxisLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxisLabelOptions = this._xAxisLabelOptions?.internalValue;
    }
    if (this._yAxisDisplayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisDisplayOptions = this._yAxisDisplayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binOptions.internalValue = undefined;
      this._dataLabels.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._visualPalette.internalValue = undefined;
      this._xAxisDisplayOptions.internalValue = undefined;
      this._xAxisLabelOptions.internalValue = undefined;
      this._yAxisDisplayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binOptions.internalValue = value.binOptions;
      this._dataLabels.internalValue = value.dataLabels;
      this._fieldWells.internalValue = value.fieldWells;
      this._tooltip.internalValue = value.tooltip;
      this._visualPalette.internalValue = value.visualPalette;
      this._xAxisDisplayOptions.internalValue = value.xAxisDisplayOptions;
      this._xAxisLabelOptions.internalValue = value.xAxisLabelOptions;
      this._yAxisDisplayOptions.internalValue = value.yAxisDisplayOptions;
    }
  }

  // bin_options - computed: false, optional: true, required: false
  private _binOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptionsOutputReference(this, "bin_options");
  public get binOptions() {
    return this._binOptions;
  }
  public putBinOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationBinOptions) {
    this._binOptions.internalValue = value;
  }
  public resetBinOptions() {
    this._binOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binOptionsInput() {
    return this._binOptions.internalValue;
  }

  // data_labels - computed: false, optional: true, required: false
  private _dataLabels = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabelsOutputReference(this, "data_labels");
  public get dataLabels() {
    return this._dataLabels;
  }
  public putDataLabels(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationDataLabels) {
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
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationFieldWells) {
    this._fieldWells.internalValue = value;
  }
  public resetFieldWells() {
    this._fieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldWellsInput() {
    return this._fieldWells.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // visual_palette - computed: false, optional: true, required: false
  private _visualPalette = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPaletteOutputReference(this, "visual_palette");
  public get visualPalette() {
    return this._visualPalette;
  }
  public putVisualPalette(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationVisualPalette) {
    this._visualPalette.internalValue = value;
  }
  public resetVisualPalette() {
    this._visualPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualPaletteInput() {
    return this._visualPalette.internalValue;
  }

  // x_axis_display_options - computed: false, optional: true, required: false
  private _xAxisDisplayOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptionsOutputReference(this, "x_axis_display_options");
  public get xAxisDisplayOptions() {
    return this._xAxisDisplayOptions;
  }
  public putXAxisDisplayOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisDisplayOptions) {
    this._xAxisDisplayOptions.internalValue = value;
  }
  public resetXAxisDisplayOptions() {
    this._xAxisDisplayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisDisplayOptionsInput() {
    return this._xAxisDisplayOptions.internalValue;
  }

  // x_axis_label_options - computed: false, optional: true, required: false
  private _xAxisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptionsOutputReference(this, "x_axis_label_options");
  public get xAxisLabelOptions() {
    return this._xAxisLabelOptions;
  }
  public putXAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationXAxisLabelOptions) {
    this._xAxisLabelOptions.internalValue = value;
  }
  public resetXAxisLabelOptions() {
    this._xAxisLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisLabelOptionsInput() {
    return this._xAxisLabelOptions.internalValue;
  }

  // y_axis_display_options - computed: false, optional: true, required: false
  private _yAxisDisplayOptions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptionsOutputReference(this, "y_axis_display_options");
  public get yAxisDisplayOptions() {
    return this._yAxisDisplayOptions;
  }
  public putYAxisDisplayOptions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationYAxisDisplayOptions) {
    this._yAxisDisplayOptions.internalValue = value;
  }
  public resetYAxisDisplayOptions() {
    this._yAxisDisplayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisDisplayOptionsInput() {
    return this._yAxisDisplayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsHistogramVisual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_id QuicksightTemplate#visual_id}
  */
  readonly visualId: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
  */
  readonly actions?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualActions[] | cdktf.IResolvable;
  /**
  * chart_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_configuration QuicksightTemplate#chart_configuration}
  */
  readonly chartConfiguration?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfiguration;
  /**
  * subtitle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#subtitle QuicksightTemplate#subtitle}
  */
  readonly subtitle?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitle;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsHistogramVisualToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualOutputReference | QuicksightTemplateDefinitionSheetsVisualsHistogramVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visual_id: cdktf.stringToTerraform(struct!.visualId),
    actions: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsHistogramVisualActionsToTerraform, true)(struct!.actions),
    chart_configuration: quicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationToTerraform(struct!.chartConfiguration),
    subtitle: quicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleToTerraform(struct!.subtitle),
    title: quicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsHistogramVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsHistogramVisual | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisual | undefined) {
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
  private _actions = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualActions[] | cdktf.IResolvable) {
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
  private _chartConfiguration = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfigurationOutputReference(this, "chart_configuration");
  public get chartConfiguration() {
    return this._chartConfiguration;
  }
  public putChartConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualChartConfiguration) {
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
  private _subtitle = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualSubtitle) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsHistogramVisualTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_field_option QuicksightTemplate#selected_field_option}
  */
  readonly selectedFieldOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields QuicksightTemplate#selected_fields}
  */
  readonly selectedFields?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_field_option: cdktf.stringToTerraform(struct!.selectedFieldOption),
    selected_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visual_option QuicksightTemplate#target_visual_option}
  */
  readonly targetVisualOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals QuicksightTemplate#target_visuals}
  */
  readonly targetVisuals?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_visual_option: cdktf.stringToTerraform(struct!.targetVisualOption),
    target_visuals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVisuals),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration {
  /**
  * same_sheet_target_visual_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#same_sheet_target_visual_configuration QuicksightTemplate#same_sheet_target_visual_configuration}
  */
  readonly sameSheetTargetVisualConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    same_sheet_target_visual_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct!.sameSheetTargetVisualConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sameSheetTargetVisualConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSheetTargetVisualConfiguration = this._sameSheetTargetVisualConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined) {
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
  private _sameSheetTargetVisualConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference(this, "same_sheet_target_visual_configuration");
  public get sameSheetTargetVisualConfiguration() {
    return this._sameSheetTargetVisualConfiguration;
  }
  public putSameSheetTargetVisualConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperation {
  /**
  * selected_fields_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields_configuration QuicksightTemplate#selected_fields_configuration}
  */
  readonly selectedFieldsConfiguration: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration;
  /**
  * target_visuals_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals_configuration QuicksightTemplate#target_visuals_configuration}
  */
  readonly targetVisualsConfiguration: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_fields_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct!.selectedFieldsConfiguration),
    target_visuals_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct!.targetVisualsConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperation | undefined) {
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
  private _selectedFieldsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference(this, "selected_fields_configuration");
  public get selectedFieldsConfiguration() {
    return this._selectedFieldsConfiguration;
  }
  public putSelectedFieldsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration) {
    this._selectedFieldsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsConfigurationInput() {
    return this._selectedFieldsConfiguration.internalValue;
  }

  // target_visuals_configuration - computed: false, optional: false, required: true
  private _targetVisualsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference(this, "target_visuals_configuration");
  public get targetVisualsConfiguration() {
    return this._targetVisualsConfiguration;
  }
  public putTargetVisualsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration) {
    this._targetVisualsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualsConfigurationInput() {
    return this._targetVisualsConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_sheet_id QuicksightTemplate#target_sheet_id}
  */
  readonly targetSheetId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_sheet_id: cdktf.stringToTerraform(struct!.targetSheetId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetSheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSheetId = this._targetSheetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperation {
  /**
  * local_navigation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#local_navigation_configuration QuicksightTemplate#local_navigation_configuration}
  */
  readonly localNavigationConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_navigation_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct!.localNavigationConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localNavigationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNavigationConfiguration = this._localNavigationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperation | undefined) {
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
  private _localNavigationConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference(this, "local_navigation_configuration");
  public get localNavigationConfiguration() {
    return this._localNavigationConfiguration;
  }
  public putLocalNavigationConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues {
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

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_null_value QuicksightTemplate#include_null_value}
  */
  readonly includeNullValue?: boolean | cdktf.IResolvable;
  /**
  * custom_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_values QuicksightTemplate#custom_values}
  */
  readonly customValues: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_null_value: cdktf.booleanToTerraform(struct!.includeNullValue),
    custom_values: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct!.customValues),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined) {
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
  private _customValues = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference(this, "custom_values");
  public get customValues() {
    return this._customValues;
  }
  public putCustomValues(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues) {
    this._customValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue {
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
  readonly customValuesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_value_options: cdktf.stringToTerraform(struct!.selectAllValueOptions),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    custom_values_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct!.customValuesConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined) {
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
  private _customValuesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference(this, "custom_values_configuration");
  public get customValuesConfiguration() {
    return this._customValuesConfiguration;
  }
  public putCustomValuesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination_parameter_name QuicksightTemplate#destination_parameter_name}
  */
  readonly destinationParameterName: string;
  /**
  * value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_parameter_name: cdktf.stringToTerraform(struct!.destinationParameterName),
    value: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct!.value),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined) {
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
  private _value = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperation {
  /**
  * parameter_value_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_configurations QuicksightTemplate#parameter_value_configurations}
  */
  readonly parameterValueConfigurations: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value_configurations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform, true)(struct!.parameterValueConfigurations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueConfigurations = this._parameterValueConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperation | undefined) {
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
  private _parameterValueConfigurations = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList(this, "parameter_value_configurations", false);
  public get parameterValueConfigurations() {
    return this._parameterValueConfigurations;
  }
  public putParameterValueConfigurations(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable) {
    this._parameterValueConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueConfigurationsInput() {
    return this._parameterValueConfigurations.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_target QuicksightTemplate#url_target}
  */
  readonly urlTarget: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_template QuicksightTemplate#url_template}
  */
  readonly urlTemplate: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_target: cdktf.stringToTerraform(struct!.urlTarget),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations {
  /**
  * filter_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_operation QuicksightTemplate#filter_operation}
  */
  readonly filterOperation?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperation;
  /**
  * navigation_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#navigation_operation QuicksightTemplate#navigation_operation}
  */
  readonly navigationOperation?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperation;
  /**
  * set_parameters_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#set_parameters_operation QuicksightTemplate#set_parameters_operation}
  */
  readonly setParametersOperation?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperation;
  /**
  * url_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_operation QuicksightTemplate#url_operation}
  */
  readonly urlOperation?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperation;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_operation: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationToTerraform(struct!.filterOperation),
    navigation_operation: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationToTerraform(struct!.navigationOperation),
    set_parameters_operation: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationToTerraform(struct!.setParametersOperation),
    url_operation: quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperationToTerraform(struct!.urlOperation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations | cdktf.IResolvable | undefined) {
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
  private _filterOperation = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsFilterOperation) {
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
  private _navigationOperation = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperationOutputReference(this, "navigation_operation");
  public get navigationOperation() {
    return this._navigationOperation;
  }
  public putNavigationOperation(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsNavigationOperation) {
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
  private _setParametersOperation = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperationOutputReference(this, "set_parameters_operation");
  public get setParametersOperation() {
    return this._setParametersOperation;
  }
  public putSetParametersOperation(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsSetParametersOperation) {
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
  private _urlOperation = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperationOutputReference(this, "url_operation");
  public get urlOperation() {
    return this._urlOperation;
  }
  public putUrlOperation(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsUrlOperation) {
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

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualActions {
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
  readonly actionOperations: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_id: cdktf.stringToTerraform(struct!.customActionId),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    action_operations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsToTerraform, true)(struct!.actionOperations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActions | cdktf.IResolvable | undefined) {
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
  private _actionOperations = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperationsList(this, "action_operations", false);
  public get actionOperations() {
    return this._actionOperations;
  }
  public putActionOperations(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsActionOperations[] | cdktf.IResolvable) {
    this._actionOperations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOperationsInput() {
    return this._actionOperations.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsInsightVisualActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsInsightVisualActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfiguration {
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNullValueFormatConfiguration) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionField {
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
  readonly column: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    column: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionField | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionField | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeCategoricalDimensionFieldFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsInsightVisualInsightConfigurationComputationForecastTimeDateDimensionFieldFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
