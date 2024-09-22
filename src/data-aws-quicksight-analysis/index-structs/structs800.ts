/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsList,
DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsDateTimePickerList,
DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsDropdownList,
DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsListStructList,
DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsRelativeDateTimeList,
DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsSliderList } from './structs400'
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // placeholder_options - computed: true, optional: false, required: false
  private _placeholderOptions = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsList(this, "placeholder_options", false);
  public get placeholderOptions() {
    return this._placeholderOptions;
  }

  // title_options - computed: true, optional: false, required: false
  private _titleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsList(this, "title_options", false);
  public get titleOptions() {
    return this._titleOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextArea {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextArea | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // display_options - computed: true, optional: false, required: false
  private _displayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaDisplayOptionsList(this, "display_options", false);
  public get displayOptions() {
    return this._displayOptions;
  }

  // filter_control_id - computed: true, optional: false, required: false
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }

  // source_filter_id - computed: true, optional: false, required: false
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // placeholder_options - computed: true, optional: false, required: false
  private _placeholderOptions = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsList(this, "placeholder_options", false);
  public get placeholderOptions() {
    return this._placeholderOptions;
  }

  // title_options - computed: true, optional: false, required: false
  private _titleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsList(this, "title_options", false);
  public get titleOptions() {
    return this._titleOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextField {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_options - computed: true, optional: false, required: false
  private _displayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldDisplayOptionsList(this, "display_options", false);
  public get displayOptions() {
    return this._displayOptions;
  }

  // filter_control_id - computed: true, optional: false, required: false
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }

  // source_filter_id - computed: true, optional: false, required: false
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsFilterControls {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsFilterControlsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsFilterControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsFilterControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsFilterControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_time_picker - computed: true, optional: false, required: false
  private _dateTimePicker = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsDateTimePickerList(this, "date_time_picker", false);
  public get dateTimePicker() {
    return this._dateTimePicker;
  }

  // dropdown - computed: true, optional: false, required: false
  private _dropdown = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsDropdownList(this, "dropdown", false);
  public get dropdown() {
    return this._dropdown;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // relative_date_time - computed: true, optional: false, required: false
  private _relativeDateTime = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsRelativeDateTimeList(this, "relative_date_time", false);
  public get relativeDateTime() {
    return this._relativeDateTime;
  }

  // slider - computed: true, optional: false, required: false
  private _slider = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsSliderList(this, "slider", false);
  public get slider() {
    return this._slider;
  }

  // text_area - computed: true, optional: false, required: false
  private _textArea = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextAreaList(this, "text_area", false);
  public get textArea() {
    return this._textArea;
  }

  // text_field - computed: true, optional: false, required: false
  private _textField = new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsTextFieldList(this, "text_field", false);
  public get textField() {
    return this._textField;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsFilterControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optimized_view_port_width - computed: true, optional: false, required: false
  public get optimizedViewPortWidth() {
    return this.getStringAttribute('optimized_view_port_width');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // screen_canvas_size_options - computed: true, optional: false, required: false
  private _screenCanvasSizeOptions = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsList(this, "screen_canvas_size_options", false);
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_overrides - computed: true, optional: false, required: false
  private _configurationOverrides = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesList(this, "configuration_overrides", false);
  public get configurationOverrides() {
    return this._configurationOverrides;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_style - computed: true, optional: false, required: false
  private _backgroundStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleList(this, "background_style", false);
  public get backgroundStyle() {
    return this._backgroundStyle;
  }

  // border_style - computed: true, optional: false, required: false
  private _borderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleList(this, "border_style", false);
  public get borderStyle() {
    return this._borderStyle;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // element_type - computed: true, optional: false, required: false
  public get elementType() {
    return this.getStringAttribute('element_type');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // loading_animation - computed: true, optional: false, required: false
  private _loadingAnimation = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationList(this, "loading_animation", false);
  public get loadingAnimation() {
    return this._loadingAnimation;
  }

  // rendering_rules - computed: true, optional: false, required: false
  private _renderingRules = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }

  // selected_border_style - computed: true, optional: false, required: false
  private _selectedBorderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleList(this, "selected_border_style", false);
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // x_axis_location - computed: true, optional: false, required: false
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }

  // y_axis_location - computed: true, optional: false, required: false
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canvas_size_options - computed: true, optional: false, required: false
  private _canvasSizeOptions = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsList(this, "canvas_size_options", false);
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optimized_view_port_width - computed: true, optional: false, required: false
  public get optimizedViewPortWidth() {
    return this.getStringAttribute('optimized_view_port_width');
  }

  // resize_option - computed: true, optional: false, required: false
  public get resizeOption() {
    return this.getStringAttribute('resize_option');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // screen_canvas_size_options - computed: true, optional: false, required: false
  private _screenCanvasSizeOptions = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsList(this, "screen_canvas_size_options", false);
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElements {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_index - computed: true, optional: false, required: false
  public get columnIndex() {
    return this.getStringAttribute('column_index');
  }

  // column_span - computed: true, optional: false, required: false
  public get columnSpan() {
    return this.getNumberAttribute('column_span');
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // element_type - computed: true, optional: false, required: false
  public get elementType() {
    return this.getStringAttribute('element_type');
  }

  // row_index - computed: true, optional: false, required: false
  public get rowIndex() {
    return this.getStringAttribute('row_index');
  }

  // row_span - computed: true, optional: false, required: false
  public get rowSpan() {
    return this.getNumberAttribute('row_span');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canvas_size_options - computed: true, optional: false, required: false
  private _canvasSizeOptions = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsList(this, "canvas_size_options", false);
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_overrides - computed: true, optional: false, required: false
  private _configurationOverrides = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesList(this, "configuration_overrides", false);
  public get configurationOverrides() {
    return this._configurationOverrides;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_style - computed: true, optional: false, required: false
  private _backgroundStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleList(this, "background_style", false);
  public get backgroundStyle() {
    return this._backgroundStyle;
  }

  // border_style - computed: true, optional: false, required: false
  private _borderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleList(this, "border_style", false);
  public get borderStyle() {
    return this._borderStyle;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // element_type - computed: true, optional: false, required: false
  public get elementType() {
    return this.getStringAttribute('element_type');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // loading_animation - computed: true, optional: false, required: false
  private _loadingAnimation = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationList(this, "loading_animation", false);
  public get loadingAnimation() {
    return this._loadingAnimation;
  }

  // rendering_rules - computed: true, optional: false, required: false
  private _renderingRules = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }

  // selected_border_style - computed: true, optional: false, required: false
  private _selectedBorderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleList(this, "selected_border_style", false);
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // x_axis_location - computed: true, optional: false, required: false
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }

  // y_axis_location - computed: true, optional: false, required: false
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free_form_layout - computed: true, optional: false, required: false
  private _freeFormLayout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutList(this, "free_form_layout", false);
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // layout - computed: true, optional: false, required: false
  private _layout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutList(this, "layout", false);
  public get layout() {
    return this._layout;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after - computed: true, optional: false, required: false
  private _after = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterList(this, "after", false);
  public get after() {
    return this._after;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  public get bottom() {
    return this.getStringAttribute('bottom');
  }

  // left - computed: true, optional: false, required: false
  public get left() {
    return this.getStringAttribute('left');
  }

  // right - computed: true, optional: false, required: false
  public get right() {
    return this.getStringAttribute('right');
  }

  // top - computed: true, optional: false, required: false
  public get top() {
    return this.getStringAttribute('top');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle | undefined) {
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

  // padding - computed: true, optional: false, required: false
  private _padding = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingList(this, "padding", false);
  public get padding() {
    return this._padding;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // page_break_configuration - computed: true, optional: false, required: false
  private _pageBreakConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationList(this, "page_break_configuration", false);
  public get pageBreakConfiguration() {
    return this._pageBreakConfiguration;
  }

  // section_id - computed: true, optional: false, required: false
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }

  // style - computed: true, optional: false, required: false
  private _style = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleList(this, "style", false);
  public get style() {
    return this._style;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  public get bottom() {
    return this.getStringAttribute('bottom');
  }

  // left - computed: true, optional: false, required: false
  public get left() {
    return this.getStringAttribute('left');
  }

  // right - computed: true, optional: false, required: false
  public get right() {
    return this.getStringAttribute('right');
  }

  // top - computed: true, optional: false, required: false
  public get top() {
    return this.getStringAttribute('top');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // paper_margin - computed: true, optional: false, required: false
  private _paperMargin = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginList(this, "paper_margin", false);
  public get paperMargin() {
    return this._paperMargin;
  }

  // paper_orientation - computed: true, optional: false, required: false
  public get paperOrientation() {
    return this.getStringAttribute('paper_orientation');
  }

  // paper_size - computed: true, optional: false, required: false
  public get paperSize() {
    return this.getStringAttribute('paper_size');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // paper_canvas_size_options - computed: true, optional: false, required: false
  private _paperCanvasSizeOptions = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsList(this, "paper_canvas_size_options", false);
  public get paperCanvasSizeOptions() {
    return this._paperCanvasSizeOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_overrides - computed: true, optional: false, required: false
  private _configurationOverrides = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesList(this, "configuration_overrides", false);
  public get configurationOverrides() {
    return this._configurationOverrides;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_style - computed: true, optional: false, required: false
  private _backgroundStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleList(this, "background_style", false);
  public get backgroundStyle() {
    return this._backgroundStyle;
  }

  // border_style - computed: true, optional: false, required: false
  private _borderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleList(this, "border_style", false);
  public get borderStyle() {
    return this._borderStyle;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // element_type - computed: true, optional: false, required: false
  public get elementType() {
    return this.getStringAttribute('element_type');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // loading_animation - computed: true, optional: false, required: false
  private _loadingAnimation = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationList(this, "loading_animation", false);
  public get loadingAnimation() {
    return this._loadingAnimation;
  }

  // rendering_rules - computed: true, optional: false, required: false
  private _renderingRules = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }

  // selected_border_style - computed: true, optional: false, required: false
  private _selectedBorderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleList(this, "selected_border_style", false);
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // x_axis_location - computed: true, optional: false, required: false
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }

  // y_axis_location - computed: true, optional: false, required: false
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free_form_layout - computed: true, optional: false, required: false
  private _freeFormLayout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutList(this, "free_form_layout", false);
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  public get bottom() {
    return this.getStringAttribute('bottom');
  }

  // left - computed: true, optional: false, required: false
  public get left() {
    return this.getStringAttribute('left');
  }

  // right - computed: true, optional: false, required: false
  public get right() {
    return this.getStringAttribute('right');
  }

  // top - computed: true, optional: false, required: false
  public get top() {
    return this.getStringAttribute('top');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle | undefined) {
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

  // padding - computed: true, optional: false, required: false
  private _padding = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingList(this, "padding", false);
  public get padding() {
    return this._padding;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // layout - computed: true, optional: false, required: false
  private _layout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutList(this, "layout", false);
  public get layout() {
    return this._layout;
  }

  // section_id - computed: true, optional: false, required: false
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }

  // style - computed: true, optional: false, required: false
  private _style = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleList(this, "style", false);
  public get style() {
    return this._style;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_overrides - computed: true, optional: false, required: false
  private _configurationOverrides = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesList(this, "configuration_overrides", false);
  public get configurationOverrides() {
    return this._configurationOverrides;
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined) {
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_style - computed: true, optional: false, required: false
  private _backgroundStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleList(this, "background_style", false);
  public get backgroundStyle() {
    return this._backgroundStyle;
  }

  // border_style - computed: true, optional: false, required: false
  private _borderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleList(this, "border_style", false);
  public get borderStyle() {
    return this._borderStyle;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // element_type - computed: true, optional: false, required: false
  public get elementType() {
    return this.getStringAttribute('element_type');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // loading_animation - computed: true, optional: false, required: false
  private _loadingAnimation = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationList(this, "loading_animation", false);
  public get loadingAnimation() {
    return this._loadingAnimation;
  }

  // rendering_rules - computed: true, optional: false, required: false
  private _renderingRules = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }

  // selected_border_style - computed: true, optional: false, required: false
  private _selectedBorderStyle = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleList(this, "selected_border_style", false);
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // x_axis_location - computed: true, optional: false, required: false
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }

  // y_axis_location - computed: true, optional: false, required: false
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free_form_layout - computed: true, optional: false, required: false
  private _freeFormLayout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutList(this, "free_form_layout", false);
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bottom - computed: true, optional: false, required: false
  public get bottom() {
    return this.getStringAttribute('bottom');
  }

  // left - computed: true, optional: false, required: false
  public get left() {
    return this.getStringAttribute('left');
  }

  // right - computed: true, optional: false, required: false
  public get right() {
    return this.getStringAttribute('right');
  }

  // top - computed: true, optional: false, required: false
  public get top() {
    return this.getStringAttribute('top');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle | undefined) {
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

  // padding - computed: true, optional: false, required: false
  private _padding = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingList(this, "padding", false);
  public get padding() {
    return this._padding;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // layout - computed: true, optional: false, required: false
  private _layout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutList(this, "layout", false);
  public get layout() {
    return this._layout;
  }

  // section_id - computed: true, optional: false, required: false
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }

  // style - computed: true, optional: false, required: false
  private _style = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleList(this, "style", false);
  public get style() {
    return this._style;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayout {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_sections - computed: true, optional: false, required: false
  private _bodySections = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsList(this, "body_sections", false);
  public get bodySections() {
    return this._bodySections;
  }

  // canvas_size_options - computed: true, optional: false, required: false
  private _canvasSizeOptions = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsList(this, "canvas_size_options", false);
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }

  // footer_sections - computed: true, optional: false, required: false
  private _footerSections = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsList(this, "footer_sections", false);
  public get footerSections() {
    return this._footerSections;
  }

  // header_sections - computed: true, optional: false, required: false
  private _headerSections = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsList(this, "header_sections", false);
  public get headerSections() {
    return this._headerSections;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free_form_layout - computed: true, optional: false, required: false
  private _freeFormLayout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationFreeFormLayoutList(this, "free_form_layout", false);
  public get freeFormLayout() {
    return this._freeFormLayout;
  }

  // grid_layout - computed: true, optional: false, required: false
  private _gridLayout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationGridLayoutList(this, "grid_layout", false);
  public get gridLayout() {
    return this._gridLayout;
  }

  // section_based_layout - computed: true, optional: false, required: false
  private _sectionBasedLayout = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationSectionBasedLayoutList(this, "section_based_layout", false);
  public get sectionBasedLayout() {
    return this._sectionBasedLayout;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsLayouts {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsLayoutsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsLayouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsLayouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsLayouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsLayoutsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsLayoutsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsLayoutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptions | undefined) {
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

  // title_options - computed: true, optional: false, required: false
  private _titleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsList(this, "title_options", false);
  public get titleOptions() {
    return this._titleOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePicker {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePicker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePicker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePicker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePicker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_options - computed: true, optional: false, required: false
  private _displayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsList(this, "display_options", false);
  public get displayOptions() {
    return this._displayOptions;
  }

  // parameter_control_id - computed: true, optional: false, required: false
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }

  // source_parameter_name - computed: true, optional: false, required: false
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDateTimePickerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_to_match - computed: true, optional: false, required: false
  private _columnToMatch = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchList(this, "column_to_match", false);
  public get columnToMatch() {
    return this._columnToMatch;
  }

  // source_sheet_control_id - computed: true, optional: false, required: false
  public get sourceSheetControlId() {
    return this.getStringAttribute('source_sheet_control_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_controls - computed: true, optional: false, required: false
  private _sourceControls = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsList(this, "source_controls", false);
  public get sourceControls() {
    return this._sourceControls;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // select_all_options - computed: true, optional: false, required: false
  private _selectAllOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsList(this, "select_all_options", false);
  public get selectAllOptions() {
    return this._selectAllOptions;
  }

  // title_options - computed: true, optional: false, required: false
  private _titleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsList(this, "title_options", false);
  public get titleOptions() {
    return this._titleOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValues {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_to_data_set_column - computed: true, optional: false, required: false
  private _linkToDataSetColumn = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnList(this, "link_to_data_set_column", false);
  public get linkToDataSetColumn() {
    return this._linkToDataSetColumn;
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdown {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cascading_control_configuration - computed: true, optional: false, required: false
  private _cascadingControlConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationList(this, "cascading_control_configuration", false);
  public get cascadingControlConfiguration() {
    return this._cascadingControlConfiguration;
  }

  // display_options - computed: true, optional: false, required: false
  private _displayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownDisplayOptionsList(this, "display_options", false);
  public get displayOptions() {
    return this._displayOptions;
  }

  // parameter_control_id - computed: true, optional: false, required: false
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }

  // selectable_values - computed: true, optional: false, required: false
  private _selectableValues = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownSelectableValuesList(this, "selectable_values", false);
  public get selectableValues() {
    return this._selectableValues;
  }

  // source_parameter_name - computed: true, optional: false, required: false
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsDropdownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_to_match - computed: true, optional: false, required: false
  private _columnToMatch = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchList(this, "column_to_match", false);
  public get columnToMatch() {
    return this._columnToMatch;
  }

  // source_sheet_control_id - computed: true, optional: false, required: false
  public get sourceSheetControlId() {
    return this.getStringAttribute('source_sheet_control_id');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_controls - computed: true, optional: false, required: false
  private _sourceControls = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsList(this, "source_controls", false);
  public get sourceControls() {
    return this._sourceControls;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions | undefined) {
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
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeList(this, "font_size", false);
  public get fontSize() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: false, required: false
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }

  // font_weight - computed: true, optional: false, required: false
  private _fontWeight = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightList(this, "font_weight", false);
  public get fontWeight() {
    return this._fontWeight;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationList(this, "font_configuration", false);
  public get fontConfiguration() {
    return this._fontConfiguration;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptions {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // search_options - computed: true, optional: false, required: false
  private _searchOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsList(this, "search_options", false);
  public get searchOptions() {
    return this._searchOptions;
  }

  // select_all_options - computed: true, optional: false, required: false
  private _selectAllOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsList(this, "select_all_options", false);
  public get selectAllOptions() {
    return this._selectAllOptions;
  }

  // title_options - computed: true, optional: false, required: false
  private _titleOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsList(this, "title_options", false);
  public get titleOptions() {
    return this._titleOptions;
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn | undefined) {
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

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValues {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_to_data_set_column - computed: true, optional: false, required: false
  private _linkToDataSetColumn = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnList(this, "link_to_data_set_column", false);
  public get linkToDataSetColumn() {
    return this._linkToDataSetColumn;
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStruct {
}

export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStructToTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStructToHclTerraform(struct?: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cascading_control_configuration - computed: true, optional: false, required: false
  private _cascadingControlConfiguration = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListCascadingControlConfigurationList(this, "cascading_control_configuration", false);
  public get cascadingControlConfiguration() {
    return this._cascadingControlConfiguration;
  }

  // display_options - computed: true, optional: false, required: false
  private _displayOptions = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListDisplayOptionsList(this, "display_options", false);
  public get displayOptions() {
    return this._displayOptions;
  }

  // parameter_control_id - computed: true, optional: false, required: false
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }

  // selectable_values - computed: true, optional: false, required: false
  private _selectableValues = new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListSelectableValuesList(this, "selectable_values", false);
  public get selectableValues() {
    return this._selectableValues;
  }

  // source_parameter_name - computed: true, optional: false, required: false
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStructOutputReference {
    return new DataAwsQuicksightAnalysisDefinitionSheetsParameterControlsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
