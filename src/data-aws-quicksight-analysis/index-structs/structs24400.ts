/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsList } from './structs24000'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualActionsList } from './structs22800'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationList } from './structs23600'
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle | undefined) {
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
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationList(this, "font_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle | undefined) {
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
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationList(this, "font_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle | undefined) {
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
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationList(this, "font_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions | undefined) {
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

  // field_level - computed: true, optional: false, required: false
  public get fieldLevel() {
    return this.getStringAttribute('field_level');
  }

  // field_level_options - computed: true, optional: false, required: false
  private _fieldLevelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsList(this, "field_level_options", false);
  public get fieldLevelOptions() {
    return this._fieldLevelOptions;
  }

  // metric_header_cell_style - computed: true, optional: false, required: false
  private _metricHeaderCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleList(this, "metric_header_cell_style", false);
  public get metricHeaderCellStyle() {
    return this._metricHeaderCellStyle;
  }

  // total_cell_style - computed: true, optional: false, required: false
  private _totalCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleList(this, "total_cell_style", false);
  public get totalCellStyle() {
    return this._totalCellStyle;
  }

  // totals_visibility - computed: true, optional: false, required: false
  public get totalsVisibility() {
    return this.getStringAttribute('totals_visibility');
  }

  // value_cell_style - computed: true, optional: false, required: false
  private _valueCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleList(this, "value_cell_style", false);
  public get valueCellStyle() {
    return this._valueCellStyle;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle | undefined) {
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
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationList(this, "font_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle | undefined) {
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
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationList(this, "font_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  private _bottom = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomList(this, "bottom", false);
  public get bottom() {
    return this._bottom;
  }

  // inner_horizontal - computed: true, optional: false, required: false
  private _innerHorizontal = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalList(this, "inner_horizontal", false);
  public get innerHorizontal() {
    return this._innerHorizontal;
  }

  // inner_vertical - computed: true, optional: false, required: false
  private _innerVertical = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalList(this, "inner_vertical", false);
  public get innerVertical() {
    return this._innerVertical;
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightList(this, "right", false);
  public get right() {
    return this._right;
  }

  // top - computed: true, optional: false, required: false
  private _top = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopList(this, "top", false);
  public get top() {
    return this._top;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // side_specific_border - computed: true, optional: false, required: false
  private _sideSpecificBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderList(this, "side_specific_border", false);
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }

  // uniform_border - computed: true, optional: false, required: false
  private _uniformBorder = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderList(this, "uniform_border", false);
  public get uniformBorder() {
    return this._uniformBorder;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle | undefined) {
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
  private _border = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderList(this, "border", false);
  public get border() {
    return this._border;
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationList(this, "font_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions | undefined) {
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

  // metric_header_cell_style - computed: true, optional: false, required: false
  private _metricHeaderCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleList(this, "metric_header_cell_style", false);
  public get metricHeaderCellStyle() {
    return this._metricHeaderCellStyle;
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
  private _totalCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleList(this, "total_cell_style", false);
  public get totalCellStyle() {
    return this._totalCellStyle;
  }

  // totals_visibility - computed: true, optional: false, required: false
  public get totalsVisibility() {
    return this.getStringAttribute('totals_visibility');
  }

  // value_cell_style - computed: true, optional: false, required: false
  private _valueCellStyle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleList(this, "value_cell_style", false);
  public get valueCellStyle() {
    return this._valueCellStyle;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_subtotal_options - computed: true, optional: false, required: false
  private _columnSubtotalOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsList(this, "column_subtotal_options", false);
  public get columnSubtotalOptions() {
    return this._columnSubtotalOptions;
  }

  // column_total_options - computed: true, optional: false, required: false
  private _columnTotalOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsList(this, "column_total_options", false);
  public get columnTotalOptions() {
    return this._columnTotalOptions;
  }

  // row_subtotal_options - computed: true, optional: false, required: false
  private _rowSubtotalOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsList(this, "row_subtotal_options", false);
  public get rowSubtotalOptions() {
    return this._rowSubtotalOptions;
  }

  // row_total_options - computed: true, optional: false, required: false
  private _rowTotalOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsList(this, "row_total_options", false);
  public get rowTotalOptions() {
    return this._rowTotalOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_options - computed: true, optional: false, required: false
  private _fieldOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptionsList(this, "field_options", false);
  public get fieldOptions() {
    return this._fieldOptions;
  }

  // field_wells - computed: true, optional: false, required: false
  private _fieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsList(this, "field_wells", false);
  public get fieldWells() {
    return this._fieldWells;
  }

  // paginated_report_options - computed: true, optional: false, required: false
  private _paginatedReportOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsList(this, "paginated_report_options", false);
  public get paginatedReportOptions() {
    return this._paginatedReportOptions;
  }

  // sort_configuration - computed: true, optional: false, required: false
  private _sortConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationList(this, "sort_configuration", false);
  public get sortConfiguration() {
    return this._sortConfiguration;
  }

  // table_options - computed: true, optional: false, required: false
  private _tableOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsList(this, "table_options", false);
  public get tableOptions() {
    return this._tableOptions;
  }

  // total_options - computed: true, optional: false, required: false
  private _totalOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsList(this, "total_options", false);
  public get totalOptions() {
    return this._totalOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stops - computed: true, optional: false, required: false
  private _stops = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  private _color = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorList(this, "color", false);
  public get color() {
    return this._color;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid | undefined) {
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

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gradient - computed: true, optional: false, required: false
  private _gradient = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientList(this, "gradient", false);
  public get gradient() {
    return this._gradient;
  }

  // solid - computed: true, optional: false, required: false
  private _solid = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidList(this, "solid", false);
  public get solid() {
    return this._solid;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icon_display_option - computed: true, optional: false, required: false
  public get iconDisplayOption() {
    return this.getStringAttribute('icon_display_option');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // unicode_icon - computed: true, optional: false, required: false
  public get unicodeIcon() {
    return this.getStringAttribute('unicode_icon');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition | undefined) {
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

  // display_configuration - computed: true, optional: false, required: false
  private _displayConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationList(this, "display_configuration", false);
  public get displayConfiguration() {
    return this._displayConfiguration;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // icon_options - computed: true, optional: false, required: false
  private _iconOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsList(this, "icon_options", false);
  public get iconOptions() {
    return this._iconOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // icon_set_type - computed: true, optional: false, required: false
  public get iconSetType() {
    return this.getStringAttribute('icon_set_type');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_condition - computed: true, optional: false, required: false
  private _customCondition = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionList(this, "custom_condition", false);
  public get customCondition() {
    return this._customCondition;
  }

  // icon_set - computed: true, optional: false, required: false
  private _iconSet = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetList(this, "icon_set", false);
  public get iconSet() {
    return this._iconSet;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stops - computed: true, optional: false, required: false
  private _stops = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  private _color = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorList(this, "color", false);
  public get color() {
    return this._color;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid | undefined) {
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

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gradient - computed: true, optional: false, required: false
  private _gradient = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientList(this, "gradient", false);
  public get gradient() {
    return this._gradient;
  }

  // solid - computed: true, optional: false, required: false
  private _solid = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidList(this, "solid", false);
  public get solid() {
    return this._solid;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  private _backgroundColor = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorList(this, "background_color", false);
  public get backgroundColor() {
    return this._backgroundColor;
  }

  // icon - computed: true, optional: false, required: false
  private _icon = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconList(this, "icon", false);
  public get icon() {
    return this._icon;
  }

  // text_color - computed: true, optional: false, required: false
  private _textColor = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorList(this, "text_color", false);
  public get textColor() {
    return this._textColor;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell | undefined) {
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

  // scope - computed: true, optional: false, required: false
  private _scope = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }

  // text_format - computed: true, optional: false, required: false
  private _textFormat = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatList(this, "text_format", false);
  public get textFormat() {
    return this._textFormat;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cell - computed: true, optional: false, required: false
  private _cell = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellList(this, "cell", false);
  public get cell() {
    return this._cell;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormatting {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormatting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormatting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormatting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormatting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_formatting_options - computed: true, optional: false, required: false
  private _conditionalFormattingOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsList(this, "conditional_formatting_options", false);
  public get conditionalFormattingOptions() {
    return this._conditionalFormattingOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format_text - computed: true, optional: false, required: false
  private _formatText = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextList(this, "format_text", false);
  public get formatText() {
    return this._formatText;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatText {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatText | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format_text - computed: true, optional: false, required: false
  private _formatText = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleFormatTextList(this, "format_text", false);
  public get formatText() {
    return this._formatText;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisual {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // chart_configuration - computed: true, optional: false, required: false
  private _chartConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualChartConfigurationList(this, "chart_configuration", false);
  public get chartConfiguration() {
    return this._chartConfiguration;
  }

  // conditional_formatting - computed: true, optional: false, required: false
  private _conditionalFormatting = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualConditionalFormattingList(this, "conditional_formatting", false);
  public get conditionalFormatting() {
    return this._conditionalFormatting;
  }

  // subtitle - computed: true, optional: false, required: false
  private _subtitle = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualSubtitleList(this, "subtitle", false);
  public get subtitle() {
    return this._subtitle;
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualTitleList(this, "title", false);
  public get title() {
    return this._title;
  }

  // visual_id - computed: true, optional: false, required: false
  public get visualId() {
    return this.getStringAttribute('visual_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsPivotTableVisualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_field_option - computed: true, optional: false, required: false
  public get selectedFieldOption() {
    return this.getStringAttribute('selected_field_option');
  }

  // selected_fields - computed: true, optional: false, required: false
  public get selectedFields() {
    return this.getListAttribute('selected_fields');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_visual_option - computed: true, optional: false, required: false
  public get targetVisualOption() {
    return this.getStringAttribute('target_visual_option');
  }

  // target_visuals - computed: true, optional: false, required: false
  public get targetVisuals() {
    return cdktf.Fn.tolist(this.getListAttribute('target_visuals'));
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsRadarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
