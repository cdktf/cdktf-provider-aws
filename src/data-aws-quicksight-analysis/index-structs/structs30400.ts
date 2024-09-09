import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationDateTimeFormatConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumnList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWellsList } from './structs30000'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptionsList } from './structs29600'
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // numeric_format_configuration - computed: true, optional: false, required: false
  private _numericFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationNumericFormatConfigurationList(this, "numeric_format_configuration", false);
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_time_format_configuration - computed: true, optional: false, required: false
  private _dateTimeFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationDateTimeFormatConfigurationList(this, "date_time_format_configuration", false);
  public get dateTimeFormatConfiguration() {
    return this._dateTimeFormatConfiguration;
  }

  // number_format_configuration - computed: true, optional: false, required: false
  private _numberFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationNumberFormatConfigurationList(this, "number_format_configuration", false);
  public get numberFormatConfiguration() {
    return this._numberFormatConfiguration;
  }

  // string_format_configuration - computed: true, optional: false, required: false
  private _stringFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationStringFormatConfigurationList(this, "string_format_configuration", false);
  public get stringFormatConfiguration() {
    return this._stringFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWells | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_aggregated_field_wells - computed: true, optional: false, required: false
  private _tableAggregatedFieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableAggregatedFieldWellsList(this, "table_aggregated_field_wells", false);
  public get tableAggregatedFieldWells() {
    return this._tableAggregatedFieldWells;
  }

  // table_unaggregated_field_wells - computed: true, optional: false, required: false
  private _tableUnaggregatedFieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsTableUnaggregatedFieldWellsList(this, "table_unaggregated_field_wells", false);
  public get tableUnaggregatedFieldWells() {
    return this._tableUnaggregatedFieldWells;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // overflow_column_header_visibility - computed: true, optional: false, required: false
  public get overflowColumnHeaderVisibility() {
    return this.getStringAttribute('overflow_column_header_visibility');
  }

  // vertical_overflow_visibility - computed: true, optional: false, required: false
  public get verticalOverflowVisibility() {
    return this.getStringAttribute('vertical_overflow_visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // page_number - computed: true, optional: false, required: false
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionNumericalAggregationFunctionList(this, "numerical_aggregation_function", false);
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortBy | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  private _aggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortAggregationFunctionList(this, "aggregation_function", false);
  public get aggregationFunction() {
    return this._aggregationFunction;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // sort_by - computed: true, optional: false, required: false
  private _sortBy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortSortByList(this, "sort_by", false);
  public get sortBy() {
    return this._sortBy;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSort | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_sort - computed: true, optional: false, required: false
  private _columnSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortColumnSortList(this, "column_sort", false);
  public get columnSort() {
    return this._columnSort;
  }

  // field_sort - computed: true, optional: false, required: false
  private _fieldSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortFieldSortList(this, "field_sort", false);
  public get fieldSort() {
    return this._fieldSort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pagination_configuration - computed: true, optional: false, required: false
  private _paginationConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationPaginationConfigurationList(this, "pagination_configuration", false);
  public get paginationConfiguration() {
    return this._paginationConfiguration;
  }

  // row_sort - computed: true, optional: false, required: false
  private _rowSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationRowSortList(this, "row_sort", false);
  public get rowSort() {
    return this._rowSort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBars | undefined) {
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

  // negative_color - computed: true, optional: false, required: false
  public get negativeColor() {
    return this.getStringAttribute('negative_color');
  }

  // positive_color - computed: true, optional: false, required: false
  public get positiveColor() {
    return this.getStringAttribute('positive_color');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_bars - computed: true, optional: false, required: false
  private _dataBars = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsDataBarsList(this, "data_bars", false);
  public get dataBars() {
    return this._dataBars;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottom | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeft | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRight | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTop | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorder | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // border - computed: true, optional: false, required: false
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // horizontal_text_alignment - computed: true, optional: false, required: false
  public get horizontalTextAlignment() {
    return this.getStringAttribute('horizontal_text_alignment');
  }

  // text_wrap - computed: true, optional: false, required: false
  public get textWrap() {
    return this.getStringAttribute('text_wrap');
  }

  // vertical_text_alignment - computed: true, optional: false, required: false
  public get verticalTextAlignment() {
    return this.getStringAttribute('vertical_text_alignment');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottom | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeft | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRight | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTop | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorder | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // border - computed: true, optional: false, required: false
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // horizontal_text_alignment - computed: true, optional: false, required: false
  public get horizontalTextAlignment() {
    return this.getStringAttribute('horizontal_text_alignment');
  }

  // text_wrap - computed: true, optional: false, required: false
  public get textWrap() {
    return this.getStringAttribute('text_wrap');
  }

  // vertical_text_alignment - computed: true, optional: false, required: false
  public get verticalTextAlignment() {
    return this.getStringAttribute('vertical_text_alignment');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_alternate_colors - computed: true, optional: false, required: false
  public get rowAlternateColors() {
    return this.getListAttribute('row_alternate_colors');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cell_style - computed: true, optional: false, required: false
  private _cellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsCellStyleList(this, "cell_style", false);
  public get cellStyle() {
    return this._cellStyle;
  }

  // header_style - computed: true, optional: false, required: false
  private _headerStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsHeaderStyleList(this, "header_style", false);
  public get headerStyle() {
    return this._headerStyle;
  }

  // orientation - computed: true, optional: false, required: false
  public get orientation() {
    return this.getStringAttribute('orientation');
  }

  // row_alternate_color_options - computed: true, optional: false, required: false
  private _rowAlternateColorOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsRowAlternateColorOptionsList(this, "row_alternate_color_options", false);
  public get rowAlternateColorOptions() {
    return this._rowAlternateColorOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // thickness - computed: true, optional: false, required: false
  public get thickness() {
    return this.getNumberAttribute('thickness');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // border - computed: true, optional: false, required: false
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // horizontal_text_alignment - computed: true, optional: false, required: false
  public get horizontalTextAlignment() {
    return this.getStringAttribute('horizontal_text_alignment');
  }

  // text_wrap - computed: true, optional: false, required: false
  public get textWrap() {
    return this.getStringAttribute('text_wrap');
  }

  // vertical_text_alignment - computed: true, optional: false, required: false
  public get verticalTextAlignment() {
    return this.getStringAttribute('vertical_text_alignment');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptions | undefined) {
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

  // placement - computed: true, optional: false, required: false
  public get placement() {
    return this.getStringAttribute('placement');
  }

  // scroll_status - computed: true, optional: false, required: false
  public get scrollStatus() {
    return this.getStringAttribute('scroll_status');
  }

  // total_cell_style - computed: true, optional: false, required: false
  private _totalCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsTotalCellStyleList(this, "total_cell_style", false);
  public get totalCellStyle() {
    return this._totalCellStyle;
  }

  // totals_visibility - computed: true, optional: false, required: false
  public get totalsVisibility() {
    return this.getStringAttribute('totals_visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_options - computed: true, optional: false, required: false
  private _fieldOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldOptionsList(this, "field_options", false);
  public get fieldOptions() {
    return this._fieldOptions;
  }

  // field_wells - computed: true, optional: false, required: false
  private _fieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationFieldWellsList(this, "field_wells", false);
  public get fieldWells() {
    return this._fieldWells;
  }

  // paginated_report_options - computed: true, optional: false, required: false
  private _paginatedReportOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationPaginatedReportOptionsList(this, "paginated_report_options", false);
  public get paginatedReportOptions() {
    return this._paginatedReportOptions;
  }

  // sort_configuration - computed: true, optional: false, required: false
  private _sortConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationSortConfigurationList(this, "sort_configuration", false);
  public get sortConfiguration() {
    return this._sortConfiguration;
  }

  // table_inline_visualizations - computed: true, optional: false, required: false
  private _tableInlineVisualizations = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableInlineVisualizationsList(this, "table_inline_visualizations", false);
  public get tableInlineVisualizations() {
    return this._tableInlineVisualizations;
  }

  // table_options - computed: true, optional: false, required: false
  private _tableOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTableOptionsList(this, "table_options", false);
  public get tableOptions() {
    return this._tableOptions;
  }

  // total_options - computed: true, optional: false, required: false
  private _totalOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationTotalOptionsList(this, "total_options", false);
  public get totalOptions() {
    return this._totalOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualChartConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | undefined) {
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

  // data_value - computed: true, optional: false, required: false
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }

  // gradient_offset - computed: true, optional: false, required: false
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stops - computed: true, optional: false, required: false
  private _stops = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
