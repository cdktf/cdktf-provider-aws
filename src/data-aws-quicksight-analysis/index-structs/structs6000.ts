/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationFieldWellsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationLegendList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationLineDataLabelsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationPrimaryYAxisDisplayOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationPrimaryYAxisLabelOptionsList } from './structs5600'
import { DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationBarDataLabelsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationCategoryAxisList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationCategoryLabelOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationColorLabelOptionsList } from './structs4400'
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfiguration | undefined) {
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

  // dynamic_configuration - computed: true, optional: false, required: false
  private _dynamicConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationDynamicConfigurationList(this, "dynamic_configuration", false);
  public get dynamicConfiguration() {
    return this._dynamicConfiguration;
  }

  // static_configuration - computed: true, optional: false, required: false
  private _staticConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationStaticConfigurationList(this, "static_configuration", false);
  public get staticConfiguration() {
    return this._staticConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfiguration | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
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
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorList(this, "thousands_separator", false);
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decimal_places_configuration - computed: true, optional: false, required: false
  private _decimalPlacesConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationList(this, "decimal_places_configuration", false);
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }

  // negative_value_configuration - computed: true, optional: false, required: false
  private _negativeValueConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationList(this, "negative_value_configuration", false);
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }

  // null_value_format_configuration - computed: true, optional: false, required: false
  private _nullValueFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationList(this, "null_value_format_configuration", false);
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // separator_configuration - computed: true, optional: false, required: false
  private _separatorConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationList(this, "separator_configuration", false);
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_display_format_configuration - computed: true, optional: false, required: false
  private _currencyDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationCurrencyDisplayFormatConfigurationList(this, "currency_display_format_configuration", false);
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }

  // number_display_format_configuration - computed: true, optional: false, required: false
  private _numberDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationNumberDisplayFormatConfigurationList(this, "number_display_format_configuration", false);
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }

  // percentage_display_format_configuration - computed: true, optional: false, required: false
  private _percentageDisplayFormatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationPercentageDisplayFormatConfigurationList(this, "percentage_display_format_configuration", false);
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format_configuration - computed: true, optional: false, required: false
  private _formatConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationFormatConfigurationList(this, "format_configuration", false);
  public get formatConfiguration() {
    return this._formatConfiguration;
  }

  // relative_position - computed: true, optional: false, required: false
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_label_configuration - computed: true, optional: false, required: false
  private _customLabelConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationCustomLabelConfigurationList(this, "custom_label_configuration", false);
  public get customLabelConfiguration() {
    return this._customLabelConfiguration;
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // horizontal_position - computed: true, optional: false, required: false
  public get horizontalPosition() {
    return this.getStringAttribute('horizontal_position');
  }

  // value_label_configuration - computed: true, optional: false, required: false
  private _valueLabelConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationValueLabelConfigurationList(this, "value_label_configuration", false);
  public get valueLabelConfiguration() {
    return this._valueLabelConfiguration;
  }

  // vertical_position - computed: true, optional: false, required: false
  public get verticalPosition() {
    return this.getStringAttribute('vertical_position');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfiguration | undefined) {
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

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLines {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_configuration - computed: true, optional: false, required: false
  private _dataConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesDataConfigurationList(this, "data_configuration", false);
  public get dataConfiguration() {
    return this._dataConfiguration;
  }

  // label_configuration - computed: true, optional: false, required: false
  private _labelConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesLabelConfigurationList(this, "label_configuration", false);
  public get labelConfiguration() {
    return this._labelConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // style_configuration - computed: true, optional: false, required: false
  private _styleConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesStyleConfigurationList(this, "style_configuration", false);
  public get styleConfiguration() {
    return this._styleConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missing_date_visibility - computed: true, optional: false, required: false
  public get missingDateVisibility() {
    return this.getStringAttribute('missing_date_visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_driven - computed: true, optional: false, required: false
  private _dataDriven = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenList(this, "data_driven", false);
  public get dataDriven() {
    return this._dataDriven;
  }

  // min_max - computed: true, optional: false, required: false
  private _minMax = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxList(this, "min_max", false);
  public get minMax() {
    return this._minMax;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // step_count - computed: true, optional: false, required: false
  public get stepCount() {
    return this.getNumberAttribute('step_count');
  }

  // step_size - computed: true, optional: false, required: false
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linear - computed: true, optional: false, required: false
  private _linear = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearList(this, "linear", false);
  public get linear() {
    return this._linear;
  }

  // logarithmic - computed: true, optional: false, required: false
  private _logarithmic = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicList(this, "logarithmic", false);
  public get logarithmic() {
    return this._logarithmic;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // scale - computed: true, optional: false, required: false
  private _scale = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleList(this, "scale", false);
  public get scale() {
    return this._scale;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_axis_options - computed: true, optional: false, required: false
  private _dateAxisOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsDateAxisOptionsList(this, "date_axis_options", false);
  public get dateAxisOptions() {
    return this._dateAxisOptions;
  }

  // numeric_axis_options - computed: true, optional: false, required: false
  private _numericAxisOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsNumericAxisOptionsList(this, "numeric_axis_options", false);
  public get numericAxisOptions() {
    return this._numericAxisOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRange {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percent_range - computed: true, optional: false, required: false
  private _percentRange = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeList(this, "percent_range", false);
  public get percentRange() {
    return this._percentRange;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // visible_range - computed: true, optional: false, required: false
  private _visibleRange = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsVisibleRangeList(this, "visible_range", false);
  public get visibleRange() {
    return this._visibleRange;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined) {
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
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_options - computed: true, optional: false, required: false
  private _labelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsLabelOptionsList(this, "label_options", false);
  public get labelOptions() {
    return this._labelOptions;
  }

  // rotation_angle - computed: true, optional: false, required: false
  public get rotationAngle() {
    return this.getNumberAttribute('rotation_angle');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // axis_line_visibility - computed: true, optional: false, required: false
  public get axisLineVisibility() {
    return this.getStringAttribute('axis_line_visibility');
  }

  // axis_offset - computed: true, optional: false, required: false
  public get axisOffset() {
    return this.getStringAttribute('axis_offset');
  }

  // data_options - computed: true, optional: false, required: false
  private _dataOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsDataOptionsList(this, "data_options", false);
  public get dataOptions() {
    return this._dataOptions;
  }

  // grid_line_visibility - computed: true, optional: false, required: false
  public get gridLineVisibility() {
    return this.getStringAttribute('grid_line_visibility');
  }

  // scrollbar_options - computed: true, optional: false, required: false
  private _scrollbarOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsScrollbarOptionsList(this, "scrollbar_options", false);
  public get scrollbarOptions() {
    return this._scrollbarOptions;
  }

  // tick_label_options - computed: true, optional: false, required: false
  private _tickLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsTickLabelOptionsList(this, "tick_label_options", false);
  public get tickLabelOptions() {
    return this._tickLabelOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_to - computed: true, optional: false, required: false
  private _applyTo = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToList(this, "apply_to", false);
  public get applyTo() {
    return this._applyTo;
  }

  // custom_label - computed: true, optional: false, required: false
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }

  // font_configuration - computed: true, optional: false, required: false
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // axis_label_options - computed: true, optional: false, required: false
  private _axisLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsList(this, "axis_label_options", false);
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }

  // sort_icon_visibility - computed: true, optional: false, required: false
  public get sortIconVisibility() {
    return this.getStringAttribute('sort_icon_visibility');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimit {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimit | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionList(this, "numerical_aggregation_function", false);
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  private _aggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionList(this, "aggregation_function", false);
  public get aggregationFunction() {
    return this._aggregationFunction;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // sort_by - computed: true, optional: false, required: false
  private _sortBy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByList(this, "sort_by", false);
  public get sortBy() {
    return this._sortBy;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_sort - computed: true, optional: false, required: false
  private _columnSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortColumnSortList(this, "column_sort", false);
  public get columnSort() {
    return this._columnSort;
  }

  // field_sort - computed: true, optional: false, required: false
  private _fieldSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortFieldSortList(this, "field_sort", false);
  public get fieldSort() {
    return this._fieldSort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimit {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimit | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionNumericalAggregationFunctionList(this, "numerical_aggregation_function", false);
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortBy | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_function - computed: true, optional: false, required: false
  private _aggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortAggregationFunctionList(this, "aggregation_function", false);
  public get aggregationFunction() {
    return this._aggregationFunction;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // sort_by - computed: true, optional: false, required: false
  private _sortBy = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortSortByList(this, "sort_by", false);
  public get sortBy() {
    return this._sortBy;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSort | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSort {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_sort - computed: true, optional: false, required: false
  private _columnSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortColumnSortList(this, "column_sort", false);
  public get columnSort() {
    return this._columnSort;
  }

  // field_sort - computed: true, optional: false, required: false
  private _fieldSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortFieldSortList(this, "field_sort", false);
  public get fieldSort() {
    return this._fieldSort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_items_limit - computed: true, optional: false, required: false
  private _categoryItemsLimit = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategoryItemsLimitList(this, "category_items_limit", false);
  public get categoryItemsLimit() {
    return this._categoryItemsLimit;
  }

  // category_sort - computed: true, optional: false, required: false
  private _categorySort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationCategorySortList(this, "category_sort", false);
  public get categorySort() {
    return this._categorySort;
  }

  // color_items_limit - computed: true, optional: false, required: false
  private _colorItemsLimit = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorItemsLimitList(this, "color_items_limit", false);
  public get colorItemsLimit() {
    return this._colorItemsLimit;
  }

  // color_sort - computed: true, optional: false, required: false
  private _colorSort = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationColorSortList(this, "color_sort", false);
  public get colorSort() {
    return this._colorSort;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentile_aggregation - computed: true, optional: false, required: false
  private _percentileAggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationList(this, "percentile_aggregation", false);
  public get percentileAggregation() {
    return this._percentileAggregation;
  }

  // simple_numerical_aggregation - computed: true, optional: false, required: false
  public get simpleNumericalAggregation() {
    return this.getStringAttribute('simple_numerical_aggregation');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined) {
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
  private _numericalAggregationFunction = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionList(this, "numerical_aggregation_function", false);
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationList(this, "aggregation", false);
  public get aggregation() {
    return this._aggregation;
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnList(this, "column", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_tooltip_item - computed: true, optional: false, required: false
  private _columnTooltipItem = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemList(this, "column_tooltip_item", false);
  public get columnTooltipItem() {
    return this._columnTooltipItem;
  }

  // field_tooltip_item - computed: true, optional: false, required: false
  private _fieldTooltipItem = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemList(this, "field_tooltip_item", false);
  public get fieldTooltipItem() {
    return this._fieldTooltipItem;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltip {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined) {
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
  private _tooltipFields = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList(this, "tooltip_fields", false);
  public get tooltipFields() {
    return this._tooltipFields;
  }

  // tooltip_title_type - computed: true, optional: false, required: false
  public get tooltipTitleType() {
    return this.getStringAttribute('tooltip_title_type');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltip {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_base_tooltip - computed: true, optional: false, required: false
  private _fieldBaseTooltip = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipFieldBaseTooltipList(this, "field_base_tooltip", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElement {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElement | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMap {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMap | undefined) {
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
  private _element = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapElementList(this, "element", false);
  public get element() {
    return this._element;
  }

  // time_granularity - computed: true, optional: false, required: false
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPalette {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPalette | undefined) {
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
  private _colorMap = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteColorMapList(this, "color_map", false);
  public get colorMap() {
    return this._colorMap;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bar_data_labels - computed: true, optional: false, required: false
  private _barDataLabels = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationBarDataLabelsList(this, "bar_data_labels", false);
  public get barDataLabels() {
    return this._barDataLabels;
  }

  // bars_arrangement - computed: true, optional: false, required: false
  public get barsArrangement() {
    return this.getStringAttribute('bars_arrangement');
  }

  // category_axis - computed: true, optional: false, required: false
  private _categoryAxis = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationCategoryAxisList(this, "category_axis", false);
  public get categoryAxis() {
    return this._categoryAxis;
  }

  // category_label_options - computed: true, optional: false, required: false
  private _categoryLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationCategoryLabelOptionsList(this, "category_label_options", false);
  public get categoryLabelOptions() {
    return this._categoryLabelOptions;
  }

  // color_label_options - computed: true, optional: false, required: false
  private _colorLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationColorLabelOptionsList(this, "color_label_options", false);
  public get colorLabelOptions() {
    return this._colorLabelOptions;
  }

  // field_wells - computed: true, optional: false, required: false
  private _fieldWells = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationFieldWellsList(this, "field_wells", false);
  public get fieldWells() {
    return this._fieldWells;
  }

  // legend - computed: true, optional: false, required: false
  private _legend = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationLegendList(this, "legend", false);
  public get legend() {
    return this._legend;
  }

  // line_data_labels - computed: true, optional: false, required: false
  private _lineDataLabels = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationLineDataLabelsList(this, "line_data_labels", false);
  public get lineDataLabels() {
    return this._lineDataLabels;
  }

  // primary_y_axis_display_options - computed: true, optional: false, required: false
  private _primaryYAxisDisplayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationPrimaryYAxisDisplayOptionsList(this, "primary_y_axis_display_options", false);
  public get primaryYAxisDisplayOptions() {
    return this._primaryYAxisDisplayOptions;
  }

  // primary_y_axis_label_options - computed: true, optional: false, required: false
  private _primaryYAxisLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationPrimaryYAxisLabelOptionsList(this, "primary_y_axis_label_options", false);
  public get primaryYAxisLabelOptions() {
    return this._primaryYAxisLabelOptions;
  }

  // reference_lines - computed: true, optional: false, required: false
  private _referenceLines = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationReferenceLinesList(this, "reference_lines", false);
  public get referenceLines() {
    return this._referenceLines;
  }

  // secondary_y_axis_display_options - computed: true, optional: false, required: false
  private _secondaryYAxisDisplayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisDisplayOptionsList(this, "secondary_y_axis_display_options", false);
  public get secondaryYAxisDisplayOptions() {
    return this._secondaryYAxisDisplayOptions;
  }

  // secondary_y_axis_label_options - computed: true, optional: false, required: false
  private _secondaryYAxisLabelOptions = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSecondaryYAxisLabelOptionsList(this, "secondary_y_axis_label_options", false);
  public get secondaryYAxisLabelOptions() {
    return this._secondaryYAxisLabelOptions;
  }

  // sort_configuration - computed: true, optional: false, required: false
  private _sortConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationSortConfigurationList(this, "sort_configuration", false);
  public get sortConfiguration() {
    return this._sortConfiguration;
  }

  // tooltip - computed: true, optional: false, required: false
  private _tooltip = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationTooltipList(this, "tooltip", false);
  public get tooltip() {
    return this._tooltip;
  }

  // visual_palette - computed: true, optional: false, required: false
  private _visualPalette = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationVisualPaletteList(this, "visual_palette", false);
  public get visualPalette() {
    return this._visualPalette;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualChartConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined) {
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
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchy {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drill_down_filters - computed: true, optional: false, required: false
  private _drillDownFilters = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }

  // hierarchy_id - computed: true, optional: false, required: false
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesDateTimeHierarchyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumns {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumnsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumns | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumnsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined) {
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
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnList(this, "column", false);
  public get column() {
    return this._column;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  private _column = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnList(this, "column", false);
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

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // numeric_equality_filter - computed: true, optional: false, required: false
  private _numericEqualityFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterList(this, "numeric_equality_filter", false);
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }

  // time_range_filter - computed: true, optional: false, required: false
  private _timeRangeFilter = new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterList(this, "time_range_filter", false);
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsVisualsComboChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
